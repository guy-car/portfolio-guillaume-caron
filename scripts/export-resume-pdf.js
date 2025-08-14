/*
  Generate a single-page PDF of the resume using Puppeteer.
  - Assumes the app is running at http://localhost:3000
  - Writes to public/resume.pdf
*/

const fs = require('fs')
const path = require('path')
const puppeteer = require('puppeteer')

const BASE_URL = process.env.BASE_URL || 'http://localhost:3000'
const TARGET_URL = `${BASE_URL}/resume?pdf=1`
const OUTPUT_FILENAME = 'Guillaume_Caron_software_engineer_resume.pdf'
const OUTPUT_PATH = path.join(__dirname, '..', 'public', OUTPUT_FILENAME)

async function waitForServer(url, timeoutMs = 30000) {
  const start = Date.now()
  while (Date.now() - start < timeoutMs) {
    try {
      const res = await fetch(url, { method: 'GET' })
      if (res.ok) return
    } catch (_) {
      // ignore and retry
    }
    await new Promise(r => setTimeout(r, 500))
  }
  throw new Error(`Server not reachable at ${url} within ${timeoutMs}ms`)
}

async function exportPDF() {
  await waitForServer(BASE_URL)

  const browser = await puppeteer.launch({
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  })
  try {
    const page = await browser.newPage()

    // Ensure consistent viewport for layout
    await page.setViewport({ width: 1280, height: 1600, deviceScaleFactor: 2 })
    // Ensure print CSS is honored
    await page.emulateMediaType('print')

    await page.goto(TARGET_URL, { waitUntil: 'networkidle0' })

    // Generate PDF with CSS-controlled page size; avoid extra scaling
    const pdfBuffer = await page.pdf({
      path: OUTPUT_PATH,
      format: 'Letter',
      printBackground: true,
      preferCSSPageSize: true,
      scale: 0.99,
      margin: { top: '0in', right: '0in', bottom: '0in', left: '0in' }
    })

    // Ensure directory exists and write
    fs.mkdirSync(path.dirname(OUTPUT_PATH), { recursive: true })
    fs.writeFileSync(OUTPUT_PATH, pdfBuffer)
    console.log(`✅ Exported ${OUTPUT_PATH}`)
  } finally {
    await browser.close()
  }
}

exportPDF().catch((err) => {
  console.error(err)
  process.exit(1)
})

