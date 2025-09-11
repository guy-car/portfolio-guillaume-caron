'use client'

import { useEffect } from 'react'

export default function ResumePage() {
  useEffect(() => {
    // Set the page max-width for resume
    document.body.style.setProperty('--page-max-width', '800px')
    
    // Cleanup: reset the variable when component unmounts
    return () => {
      document.body.style.removeProperty('--page-max-width')
    }
  }, [])

  return (
    <>
      <style jsx global>{`
        /* Resume page wrapper */
        .resume-page-wrapper {
          min-height: calc(100vh - 200px);
          width: 100%;
        }

        .resume-container {
          font-family: 'Inter', 'Arial', sans-serif;
          line-height: 1.4;
          color: #000;
          font-size: 14px;
          width: 100%;
        }

        .resume {
          width: 100%;
          max-width: 100%;
          margin: 0 auto;
          background: #F6F6E9;
          padding: 30px;
          padding-top: 20px;
          border-radius: 10px;
          box-shadow: -8px 16px 32px rgba(0,0,0,0.10), -2px 4px 8px rgba(0,0,0,0.06);
          border: 1.5px solid #bfcad6;
          position: relative;
        }

        .header {
          text-align: left;
          margin-bottom: 10px;
          border-bottom: 2px solid #222;
          padding-bottom: 15px;
        }

        .header h1 {
          font-size: 2.5em;
          font-weight: 800;
          margin-bottom: 1px;
          color: #000;
          letter-spacing: -1px;
        }

        .contact-info {
          font-size: 1em;
          color: #000;
          margin-top: 10px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 0.5em;
        }

        .contact-info span {
          display: flex;
          align-items: center;
          gap: 0.4em;
        }

        .contact-info a {
          color: #111;
          font-weight: 700;
          text-decoration: none;
          transition: color 0.2s;
        }

        .contact-info a:hover {
          color: #aaa;
        }

        .contact-info svg {
          width: 1.2em;
          height: 1.2em;
          vertical-align: middle;
          fill: #111;
          flex-shrink: 0;
        }

        .section {
          margin-bottom: 5px;
        }

        .section h2 {
          font-size: 1.6em;
          font-weight: 900;
          margin-top: 15px;
          margin-bottom: 8px;
          color: #000;
          text-decoration: underline;
          text-underline-offset: 4px;
          letter-spacing: -0.5px;
        }

        .experience-item {
          margin-bottom: 10px;
        }

        .job-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-end;
          margin-bottom: 8px;
        }

        .job-title-company {
          font-weight: 700;
          font-size: 1.1em;
        }

        .work-highlight {
          font-weight: bold;
          color: #111;
          border-bottom: 1px solid rgb(98, 121, 153);
          font-size: 1em;
          }

        .date-location {
          font-size: 0.95em;
          color: #666;
          font-weight: 600;
          text-align: right;
          min-width: 180px;
          font-family: 'JetBrains Mono', 'Courier New', monospace;
          text-align: right;
        }

        .job-description {
          margin-left: 0;
        }

        .job-description p {
          margin-bottom: 6px;
          font-size: 0.95em;
          text-align: left;
        }

        .tech-stack-section {
          margin-bottom: 5px;
        }

        .tech-categories {
          display: grid;
          grid-template-columns: 1fr;
          gap: 8px;
        }

        .tech-category {
          display: flex;
          align-items: flex-start;
        }

        .tech-label {
          font-weight: bold;
          min-width: 115px;
          margin-right: 10px;
        }

        .tech-items {
          flex: 1;
        }

        .education-item {
          margin-bottom: 5px;
        }

        .education-title {
          font-weight: 600;
          margin-bottom: 2px;
        }

        .date-details {
          font-size: 0.9em;
          color: #666;
          font-weight: 400;
          width: 80px;
          font-family: 'JetBrains Mono', 'Courier New', monospace;
          text-align: right;
        }

        .resume-actions {
          position: absolute;
          top: 10px;
          right: 10px;
          display: flex;
          gap: 1rem;
          z-index: 1000;
        }
        
        .resume-action {
          background: #111;
          border: none;
          border-radius: 12px;
          padding: 1rem 1.2rem;
          cursor: pointer;
          opacity: 0.3;
          transition: opacity 0.2s, background 0.2s;
          outline: none;
        }
        
        .resume-action:hover {
          opacity: 1;
          background: #111;
        }
        
        .resume-action i {
          color: #d4cda9;
          font-size: 2rem;
        }

        .custom-link {
          color:rgb(98, 121, 153);
          font-weight: 700;
          text-decoration: none;
          transition: color 0.2s;
        }

        .custom-link:hover {
          color:rgb(128, 153, 183);
        }

        @media (max-width: 768px) {
          .contact-info {
            flex-direction: column;
            gap: 0.3em;
          }
          
          .job-header {
            flex-direction: column;
            align-items: flex-start;
            gap: 0.5em;
          }
        }

        /* Print styles for clean PDF export */
        @media print {
          /* Hide site chrome and action buttons */
          nav, footer, .resume-actions { display: none !important; }

          html, body { margin: 0 !important; padding: 0 !important; background: #fff !important; }
          body { --page-max-width: 100% !important; }
          main { padding: 0 !important; margin: 0 !important; }

          /* Expand resume to full printable area and simplify */
          .resume-page-wrapper,
          .resume-container,
          .resume {
            width: 100% !important;
            max-width: none !important;
            margin: 0 !important;
            box-shadow: none !important;
            border: 0 !important;
            background: #fff !important;
            /* Slightly narrower gutters for better width use */
            padding: 0.18in !important;
            -webkit-print-color-adjust: exact;
            print-color-adjust: exact;
          }

          /* Improve text readability on print */
          .resume-container { color: #000 !important; font-size: 10.9pt !important; line-height: 1.30 !important; }
          .header h1 { font-size: 19pt !important; }
          .section h2 { font-size: 12.5pt !important; text-decoration: none !important; border: 0 !important; }

          /* Condense header separator */
          .header { padding-bottom: 8px !important; margin-bottom: 6px !important; border-bottom-width: 1px !important; }

          /* Tighten vertical spacing to fit one page */
          .section { margin-bottom: 2px !important; }
          .experience-item { margin-bottom: 5px !important; break-inside: avoid; page-break-inside: avoid; }
          .education-item { margin-bottom: 4px !important; break-inside: avoid; page-break-inside: avoid; }
          .job-description p { margin-bottom: 3px !important; }

          /* Allow date column to flex smaller on print */
          .date-location { min-width: auto !important; font-size: 10pt !important; }
        }

        /* Set page size and margins */
        @page {
          size: Letter;
          /* Remove outer margins; we control gutters via .resume padding */
          margin: 0;
        }
      `}</style>

      <div className="resume-page-wrapper">
        <div className="resume-container">
          <div className="resume">
            <div className="resume-actions">
              <a className="resume-action" href="/Guillaume_Caron_software_engineer_resume.pdf" title="Download PDF" target="_blank" rel="noopener noreferrer" download>
                <i className="fa-solid fa-download"></i>
              </a>
            </div>
            
            <header className="header">
              <h1>Guillaume Caron</h1>
              <div className="contact-info" style={{justifyContent: 'space-between'}}>
                <span><i className="fa-solid fa-envelope"></i><a href="mailto:guil.crn@gmail.com">guil.crn@gmail.com</a></span>
                <span><i className="fa-solid fa-phone"></i>+1 718 581 3551</span>
                <span><i className="fa-solid fa-globe"></i><a href="https://www.guillaumecaronweb.com" target="_blank" rel="noopener noreferrer">guillaumecaronweb.com</a></span>
                <span><i className="fa-solid fa-location-dot"></i>New York, NY</span>
              </div>
            </header>

            <section className="section">
              <h2>Executive Summary</h2>
              <p>Full-stack Software Engineer with startup experience, focused on AI-first applications and AI-assisted coding. Grounded by a decade in film and mindfulness, thrives in fast pace, dynamic settings.</p>
            </section>

            <section className="section tech-stack-section">
              <h2>Technical Skills</h2>
              <div className="tech-items">
                TypeScript, SQL, React, Next.js, React Native, Tailwind CSS, Node.js, PostgreSQL, Express, Drizzle ORM, Vercel AI SDK, Structured Output, Tool Calling, Context Management, Git, Vercel, Render
              </div>
            </section>

            <section className="section">
              <h2>Experience</h2>
              
              <div className="experience-item">
                <div className="job-header">
                  <div className="job-title-company">Full Stack Engineer | Fractal Tech AI Accelerator, NYC</div>
                  <div className="date-location">May 2025 - Present</div>
                </div>
                <div className="job-description">
                  <p>800hrs+ of full-stack development, 15+ projects, 10x AI-assisted Coding, shipping 5+ PRs/day. Developed custom AI tools with API integrations, MCPs and state of the art prompt engineering</p>
                  <ul><b>Selected projects:</b></ul>
                  <li><span className='work-highlight'><a href="https://www.buildwithlayer.com/" target="_blank" rel="noopener noreferrer" className="custom-link">Layer (NYC Startup)</a></span> - Prototyped during product market fit phase a multi-platform task detection system integrating Discord, Slack, Gmail, Linear, and real-time audio transcription with LLM-powered extraction. Set up MCP servers for context enrichment and task execution</li>
                  <li><span className='work-highlight'><a href="https://www.feather.rsvp/" target="_blank" rel="noopener noreferrer" className="custom-link">Feather.rsvp (NYC Startup)</a></span> - Unblocked public launch by implementing an intuitive and sleek Rich Text Editor (TipTap) with near complete autonomy in an unfamiliar codebase</li>
                  <li><span className='work-highlight'><a href="https://week2-chatbot.vercel.app/" target="_blank" rel="noopener noreferrer" className="custom-link">Watch Genie</a></span> - Built a chatbot with Next.js, tRPC, Supabase, and Vercel AI SDK to provide personalized movie recommendations based on user preferences. Integrated TMDB and OMDB APIs</li>

                </div>
              </div>

              <div className="experience-item">
                <div className="job-header">
                  <div className="job-title-company">Self-Taught Developer | Independent Study, NYC</div>
                  <div className="date-location">Jan 2025 - May 2025</div>
                </div>
                <div className="job-description">
                  <p>Dedicated 500+ hours to intensive full-stack development through structured programs including Scrimba's React course and Full Stack Open. Built multiple applications: password generator, language translator, Chrome extension, unit converter.</p>
                </div>
              </div>

              <div className="experience-item">
                <div className="job-header">
                  <div className="job-title-company">Operations & Systems Specialist | NY Insight Meditation Center, NYC</div>
                  <div className="date-location">Mar 2024 - Nov 2024</div>
                </div>
                <div className="job-description">
                  <p>Reduced operational overhead by 25% for NYC's largest meditation center through software audits and vendor realignment. Automated processes leading to reduced admin hours by ~2h/day and improved reliability of booking system for courses/events by 20%.</p>
                </div>
              </div>

              <div className="experience-item">
                <div className="job-header">
                  <div className="job-title-company">Mindfulness Teacher | Freelance, NYC</div>
                  <div className="date-location">Mar 2021 - Nov 2023</div>
                </div>
                <div className="job-description">
                  <p>Created safe learning spaces for people from all walks of life to develop the emotional intelligence, active listening and groundedness I bring to situations.</p>
                </div>
              </div>

              <div className="experience-item">
                <div className="job-header">
                  <div className="job-title-company">Award Winning Cinematographer | Film Industry, NYC</div>
                  <div className="date-location">2013 - 2021</div>
                </div>
                <div className="job-description">
                  <p>Led cross-functional teams across 100+ film and video projects from pitch to delivery with budgets up to $2M. Worked on projects released on Netflix, shot documentary series with 130K+ YouTube views, and worked for brands like Nike, Goldman Sachs and Zara.</p>
                </div>
              </div>

            </section>

            <section className="section">
              <h2>Education</h2>
              
              <div className="education-item">
                <div className="education-title"><span className='date-details'>2022-2023 | </span>Certified Mindfulness Teacher | Mindfulness Training Institute, Berkeley, CA</div>
              </div>
              
              <div className="education-item">
                <div className="education-title"><span className='date-details'>2011-2013 | </span>Master's in International Purchasing & Management | KEDGE Business School, France</div>
              </div>
              
              <div className="education-item">
                <div className="education-title"><span className='date-details'>2008-2011 | </span>Bachelor's in Commerce & Supply Chain Management | Rouen Business School, France</div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </>
  )
}
