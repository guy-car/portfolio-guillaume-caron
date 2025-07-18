'use client'

import { useEffect } from 'react'

export default function ResumePage() {
  useEffect(() => {
    // Add the download function to window object
    ;(window as any).downloadResume = function() {
      const element = document.createElement('a');
      const html = document.documentElement.outerHTML;
      const file = new Blob([html], {type: 'text/html'});
      element.href = URL.createObjectURL(file);
      element.download = 'Guillaume_Caron_Resume.html';
      document.body.appendChild(element);
      element.click();
      document.body.removeChild(element);
    }
  }, [])

  return (
    <>
      <style jsx global>{`
        /* Override layout constraints for resume page */
        .resume-page-wrapper {
          margin: -20px;
          padding: 20px;
          min-height: calc(100vh - 200px);
          width: 100vw;
          position: relative;
          left: 50%;
          right: 50%;
          margin-left: -50vw;
          margin-right: -50vw;
        }

        .resume-container {
          font-family: 'Inter', 'Arial', sans-serif;
          line-height: 1.4;
          color: #000;
          font-size: 14px;
          max-width: none;
          margin: 0;
          padding: 0;
          width: 100%;
        }

        .resume {
          max-width: 800px;
          margin: 0 auto;
          background: #F6F6E9;
          padding: 40px;
          border-radius: 10px;
          box-shadow: -8px 16px 32px rgba(0,0,0,0.10), -2px 4px 8px rgba(0,0,0,0.06);
          border: 1.5px solid #bfcad6;
        }

        .header {
          text-align: left;
          margin-bottom: 30px;
          border-bottom: 2px solid #222;
          padding-bottom: 15px;
        }

        .header h1 {
          font-size: 3em;
          font-weight: 800;
          margin-bottom: 5px;
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
          margin-bottom: 25px;
        }

        .section h2 {
          font-size: 1.3em;
          font-weight: 800;
          margin-bottom: 15px;
          color: #000;
          text-decoration: underline;
          text-underline-offset: 4px;
        }

        .experience-item {
          margin-bottom: 20px;
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

        .date-location {
          font-size: 1em;
          color: #222;
          font-weight: 600;
          text-align: right;
          min-width: 180px;
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
          margin-bottom: 25px;
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
          min-width: 100px;
          margin-right: 10px;
        }

        .tech-items {
          flex: 1;
        }

        .education-item {
          margin-bottom: 15px;
        }

        .education-title {
          font-weight: bold;
          margin-bottom: 2px;
        }

        .education-details {
          font-size: 0.9em;
          color: #666;
        }

        .resume-actions {
          position: fixed;
          top: 2.5rem;
          right: 2.5rem;
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

        @media print {
          .resume-page-wrapper {
            margin: 0;
            padding: 10px;
            background: white;
          }
          
          .resume-container {
            font-size: 13px;
          }
          
          @page {
            margin: 0.5in;
            size: A4;
          }
          
          .experience-item {
            page-break-inside: avoid;
            break-inside: avoid;
          }
          
          .job-header {
            page-break-after: avoid;
            break-after: avoid;
          }
          
          .resume-actions {
            display: none !important;
          }
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
          
          .date-location {
            text-align: left;
            min-width: auto;
          }
        }
      `}</style>

      <div className="resume-page-wrapper">
        <div className="resume-actions">
          <button className="resume-action" onClick={() => window.print()} title="Print">
            <i className="fa-solid fa-print"></i>
          </button>
          <button className="resume-action" onClick={() => (window as any).downloadResume()} title="Download">
            <i className="fa-solid fa-download"></i>
          </button>
        </div>
        
        <div className="resume-container">
          <div className="resume">
            <header className="header">
              <h1>Guillaume Caron</h1>
              <div className="contact-info" style={{justifyContent: 'space-evenly', textAlign: 'center'}}>
                <span><i className="fa-solid fa-envelope"></i><a href="mailto:guil.crn@gmail.com">guil.crn@gmail.com</a></span>
                <span><i className="fa-solid fa-phone"></i>+1 718 581 3551</span>
                <span><i className="fa-brands fa-github"></i><a href="https://github.com/guy-car?tab=repositories" target="_blank" rel="noopener noreferrer">github.com/guy-car</a></span>
                <span><i className="fa-solid fa-location-dot"></i>New York, NY</span>
              </div>
            </header>

            <section className="section">
              <h2>Experience</h2>
              
              <div className="experience-item">
                <div className="job-header">
                  <div className="job-title-company">Full Stack Engineer | Fractal Tech</div>
                  <div className="date-location">May 2024 - Present</div>
                </div>
                <div className="job-description">
                  <p>Built and deployed 15+ full-stack applications using TypeScript, React, Next.js, and PostgreSQL in intensive AI engineering accelerator.</p>
                  <p>Developed custom AI tools with API integrations and function calling, applying prompt engineering techniques with 5+ PRs/day contribution rate.</p>
                  <p>Gained production experience with modern toolchains, MCPs (Model Context Protocol), and AI-assisted development through Cursor and real-world startup projects.</p>
                </div>
              </div>

              <div className="experience-item">
                <div className="job-header">
                  <div className="job-title-company">Self-Taught Developer | Independent Study</div>
                  <div className="date-location">Jan 2024 - May 2024</div>
                </div>
                <div className="job-description">
                  <p>Dedicated 500+ hours to intensive full-stack development through structured programs including Scrimba's React course and Full Stack Open.</p>
                  <p>Built multiple applications: password generator, language translator, Chrome extension, unit converter.</p>
                  <p>Developed proficiency in asynchronous JavaScript, responsive design, and API integration with modern tooling.</p>
                </div>
              </div>

              <div className="experience-item">
                <div className="job-header">
                  <div className="job-title-company">Operations & Systems Specialist | New York Insight Meditation Center</div>
                  <div className="date-location">Mar 2024 - Nov 2024</div>
                </div>
                <div className="job-description">
                  <p>Reduced operational overhead by 25% through software audits and vendor realignment during transitional phase.</p>
                  <p>Optimized Salesforce CRM processes and implemented AV systems for hybrid event delivery.</p>
                  <p>Created internal documentation and knowledge transfer systems for sustainable operations.</p>
                </div>
              </div>

              <div className="experience-item">
                <div className="job-header">
                  <div className="job-title-company">Cinematographer & Producer | Film Industry (NYC)</div>
                  <div className="date-location">2013 - 2021</div>
                </div>
                <div className="job-description">
                  <p>Led 100+ film and video projects from pitch to delivery with budgets up to $2M.</p>
                  <p>Translated creative goals into technical execution plans while managing cross-functional teams under tight deadlines.</p>
                  <p>Developed problem-solving skills balancing creativity with real-world constraints and evolving requirements.</p>
                </div>
              </div>

              <div className="experience-item">
                <div className="job-header">
                  <div className="job-title-company">Strategic Procurement | Havas & PSA Peugeot Citroën</div>
                  <div className="date-location">2011 - 2013</div>
                </div>
                <div className="job-description">
                  <p>Contributed to $100K+ annual cost savings through vendor consolidation and process optimization.</p>
                  <p>Built KPI dashboards and presentations for C-level executive review.</p>
                </div>
              </div>
            </section>

            <section className="section tech-stack-section">
              <h2>Tech Stack</h2>
              <div className="tech-categories">
                <div className="tech-category">
                  <div className="tech-label">Frontend:</div>
                  <div className="tech-items">React — Next.js — TypeScript — Tailwind CSS — JavaScript ES6+</div>
                </div>
                <div className="tech-category">
                  <div className="tech-label">Backend:</div>
                  <div className="tech-items">Node.js — PostgreSQL — Express — Elysia — REST APIs — SQL/NoSQL</div>
                </div>
                <div className="tech-category">
                  <div className="tech-label">AI & Tools:</div>
                  <div className="tech-items">Vercel AI SDK — Vector Search — AWS S3/SST — GitHub Actions — Git</div>
                </div>
                <div className="tech-category">
                  <div className="tech-label">Auth:</div>
                  <div className="tech-items">Better-Auth — 0Auth — Supabase — NextAuth</div>
                </div>
                <div className="tech-category">
                  <div className="tech-label">Deployment:</div>
                  <div className="tech-items">Docker — Vercel — Render — Netlify</div>
                </div>
              </div>
            </section>

            <section className="section">
              <h2>Education</h2>
              
              <div className="education-item">
                <div className="education-title">Next.js App Router Fundamentals | Professional Certification</div>
                <div className="education-details">2025</div>
              </div>
              
              <div className="education-item">
                <div className="education-title">Certified Mindfulness Teacher | Mindfulness Training Institute, Berkeley, CA</div>
                <div className="education-details">2023</div>
              </div>
              
              <div className="education-item">
                <div className="education-title">Master's in International Purchasing & Management | KEDGE Business School, France</div>
                <div className="education-details">2011 - 2013</div>
              </div>
              
              <div className="education-item">
                <div className="education-title">Bachelor's in Commerce & Supply Chain Management | Rouen Business School, France</div>
                <div className="education-details">2008 - 2011</div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </>
  )
}
