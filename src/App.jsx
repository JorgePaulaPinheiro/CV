import { useEffect, useState } from 'react'
import './portfolio.css'

function App() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollTo = (id) => {
    document.getElementById(id).scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className="portfolio">
      {/* Navigation */}
      <nav className={`nav ${scrolled ? 'nav-scrolled' : ''}`}>
        <div className="nav-container">
          <div className="nav-logo">J. PAULA PINHEIRO</div>
          <ul className="nav-links">
            <li onClick={() => scrollTo('about')}>About</li>
            <li onClick={() => scrollTo('education')}>Education</li>
            <li onClick={() => scrollTo('experience')}>Experience</li>
            <li onClick={() => scrollTo('skills')}>Skills</li>
            <li onClick={() => scrollTo('hobbies')}>Hobbies</li>
            <li onClick={() => scrollTo('contact')}>Contact</li>
          </ul>
        </div>
      </nav>

      {/* Hero */}
      <section className="hero">
        <div className="hero-content">
          <p className="hero-greeting">Hello, I&apos;m</p>
          <h1 className="hero-name">JORGE<br/>PAULA PINHEIRO</h1>
          <p className="hero-title">
            <span className="typing">Economics Student · IT Professional · Data-Driven Opportunities</span>
          </p>
          <p className="hero-location">📍 Lausanne, Switzerland · 🎓 Bachelor in Economics · 🇨🇳 Learning Mandarin</p>
          <div className="hero-buttons">
            <button onClick={() => scrollTo('contact')} className="btn-primary">Get in Touch</button>
            <button onClick={() => scrollTo('about')} className="btn-secondary">Learn More</button>
          </div>
        </div>
        <div className="hero-scroll" onClick={() => scrollTo('about')}>
          <span>↓</span>
        </div>
      </section>

      {/* About / Objectif */}
      <section id="about" className="section section-white">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">About Me</span>
            <h2 className="section-title">Bridging Technology & Economics</h2>
          </div>
          <div className="about-grid">
            <div className="about-text">
              <p>
                Economics student with solid professional experience in information technology, 
                currently completing my bachelor&apos;s degree while engaged in an intensive language 
                program abroad alongside my studies.
              </p>
              <p>
                I aim to pivot my career toward economic and financial analysis, leveraging both 
                my technical skills and academic training. My background combines 8 years of IT 
                infrastructure experience with rigorous quantitative training in econometrics, 
                macroeconomics, and financial modeling.
              </p>
              <p>
                Currently based in China as a <strong>CSC Scholarship recipient</strong>, I have developed 
                strong cross-cultural adaptability through full immersion in an international academic 
                environment. Trilingual with native fluency in French and Portuguese, fluent in English, 
                and rapidly advancing in Mandarin — I bring a genuinely global perspective to analytical work.
              </p>
            </div>
            <div className="about-highlights">
              <div className="highlight-card">
                <span className="highlight-number">8+</span>
                <span className="highlight-label">Years IT Experience</span>
              </div>
              <div className="highlight-card">
                <span className="highlight-number">5.66</span>
                <span className="highlight-label">GPA / 6</span>
              </div>
              <div className="highlight-card">
                <span className="highlight-number">4</span>
                <span className="highlight-label">Languages</span>
              </div>
              <div className="highlight-card">
                <span className="highlight-number">152</span>
                <span className="highlight-label">ECTS Earned</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Education */}
      <section id="education" className="section section-gray">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">Education</span>
            <h2 className="section-title">Academic Background</h2>
          </div>
          <div className="timeline">
            <div className="timeline-item">
              <div className="timeline-marker"></div>
              <div className="timeline-content">
                <div className="timeline-header">
                  <h3>Bachelor in Economics and Management</h3>
                  <span className="timeline-date">2023 – Present</span>
                </div>
                <p className="timeline-subtitle">UniDistance Switzerland · 152/180 ECTS · GPA 5.66/6</p>
                <ul className="timeline-list">
                  <li>Macroeconomics, Money and Finance, Econometrics, Business Management, Accounting</li>
                </ul>
                <div className="thesis-box">
                  <strong>Bachelor Thesis</strong>
                  <p className="thesis-title">Global Determinants of Real Estate Prices: A Multi-Country Panel Analysis</p>
                  <p className="thesis-subject">
                    <em>Impact of financial cycles on real estate markets — transmission of international financial shocks</em>
                  </p>
                  <div className="thesis-details">
                    <div className="thesis-item">
                      <span className="thesis-label">Methodology:</span>
                      <span>Multivariate linear regressions (OLS) + Linear projections on panel data</span>
                    </div>
                    <div className="thesis-item">
                      <span className="thesis-label">Data Sources:</span>
                      <span>IMF, BIS — international macroeconomic datasets</span>
                    </div>
                    <div className="thesis-item">
                      <span className="thesis-label">Tools:</span>
                      <span>R (tidyverse: dplyr, tidyr)</span>
                    </div>
                    <div className="thesis-item">
                      <span className="thesis-label">Focus:</span>
                      <span>Stabilizing effect of macroprudential measures and capital controls against international financial shocks</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-marker"></div>
              <div className="timeline-content">
                <div className="timeline-header">
                  <h3>Chinese Language Program — CSC Scholar</h3>
                  <span className="timeline-date">2025 – Present</span>
                </div>
                <p className="timeline-subtitle">Sichuan University · Chengdu, China · Full Mandarin Immersion</p>
                <ul className="timeline-list">
                  <li><strong>CSC Scholarship recipient</strong> — competitive Chinese government grant (CSC/ bilateral program)</li>
                  <li>Intensive language program (25+ hours/week) — <strong>GPA 4.0/4.0</strong> on all semester assessments</li>
                  <li>Complete immersion: coursework, daily life, and interactions 100% in Mandarin</li>
                  <li>Developed strong cross-cultural adaptability through direct integration into Chinese academic and social environments</li>
                </ul>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-marker"></div>
              <div className="timeline-content">
                <div className="timeline-header">
                  <h3>CFC in Computer Science</h3>
                  <span className="timeline-date">2015 – 2017</span>
                </div>
                <p className="timeline-subtitle">CPNV · 5.3/6</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-marker"></div>
              <div className="timeline-content">
                <div className="timeline-header">
                  <h3>EPFL — Swiss Federal Institute of Technology</h3>
                  <span className="timeline-date">2012 – 2015</span>
                </div>
                <p className="timeline-subtitle">Microtechnology · Propédeutique 4.41/6 · Bachelor not completed</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience */}
      <section id="experience" className="section section-white">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">Experience</span>
            <h2 className="section-title">Professional Journey</h2>
          </div>
          <div className="experience-card">
            <div className="exp-header">
              <div>
                <h3>IT Technician</h3>
                <p className="exp-company">CHUV — Centre Hospitalier Universitaire Vaudois, Lausanne</p>
              </div>
              <span className="exp-date">2017 – 2025</span>
            </div>
            <ul className="exp-list">
              <li>Installation, maintenance and troubleshooting of IT equipment (<strong>10,000+ workstations</strong>)</li>
              <li>Interventions on non-standard and specialized systems requiring analysis and adaptation</li>
              <li>Technical support to users: diagnosis, resolution and incident documentation</li>
              <li>Writing and standardization of technical procedures for the team</li>
              <li>Methodical work under pressure respecting priorities and deadlines</li>
              <li>Technical leadership: stimulating collaboration and reconciling interests within the team</li>
            </ul>
          </div>
          
          <div className="exp-divider">Student Jobs</div>
          
          <div className="student-jobs">
            <div className="student-job">
              <div className="student-job-header">
                <div>
                  <h4>Warehouse Worker</h4>
                  <p>Galexis SA · Écublens, Vaud</p>
                </div>
                <span className="student-job-date">2014 – 2017</span>
              </div>
              <p>Student job alongside my studies. Logistics support and participation in pharmaceutical distribution operations.</p>
            </div>
            
            <div className="student-job">
              <div className="student-job-header">
                <div>
                  <h4>Uber Pop Driver</h4>
                  <p>Uber · Freelance</p>
                </div>
                <span className="student-job-date">2016 – 2017</span>
              </div>
              <p>Student job alongside my studies.</p>
            </div>
            
            <div className="student-job">
              <div className="student-job-header">
                <div>
                  <h4>Call Center Operator</h4>
                  <p>GFK · Lausanne</p>
                </div>
                <span className="student-job-date">2011 – 2012</span>
              </div>
              <p>Student job.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="section section-gray">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">Skills</span>
            <h2 className="section-title">Competencies</h2>
          </div>
          <div className="skills-grid">
            <div className="skill-category">
              <h4>📊 Data & Analytics</h4>
              <div className="skill-tags">
                <span className="skill-tag">R</span>
                <span className="skill-tag">SQL</span>
                <span className="skill-tag">Excel</span>
                <span className="skill-tag">Python</span>
              </div>
            </div>
            <div className="skill-category">
              <h4>💰 Finance</h4>
              <div className="skill-tags">
                <span className="skill-tag">Financial Analysis</span>
                <span className="skill-tag">DCF Models</span>
                <span className="skill-tag">Comparables</span>
              </div>
            </div>
            <div className="skill-category">
              <h4>📈 Economics</h4>
              <div className="skill-tags">
                <span className="skill-tag">Macroeconomics</span>
                <span className="skill-tag">Econometrics</span>
                <span className="skill-tag">Int. Finance</span>
              </div>
            </div>
            <div className="skill-category">
              <h4>📋 Accounting</h4>
              <div className="skill-tags">
                <span className="skill-tag">Financial Accounting</span>
                <span className="skill-tag">Management Control</span>
              </div>
            </div>
            <div className="skill-category">
              <h4>💻 Programming</h4>
              <div className="skill-tags">
                <span className="skill-tag">PowerShell</span>
                <span className="skill-tag">C#</span>
                <span className="skill-tag">PHP</span>
                <span className="skill-tag">JavaScript</span>
              </div>
            </div>
            <div className="skill-category">
              <h4>🤝 Soft Skills</h4>
              <div className="skill-tags">
                <span className="skill-tag">Rigorous</span>
                <span className="skill-tag">Synthesis</span>
                <span className="skill-tag">Cross-cultural Adaptability</span>
                <span className="skill-tag">International Mobility</span>
                <span className="skill-tag">Documentation</span>
                <span className="skill-tag">Collaboration</span>
              </div>
            </div>
          </div>

          {/* Languages */}
          <div className="languages-section">
            <h3>🌍 Languages</h3>
            <div className="languages-grid">
              <div className="language-item">
                <span className="lang-flag">🇫🇷</span>
                <span className="lang-name">French</span>
                <span className="lang-level">Native</span>
              </div>
              <div className="language-item">
                <span className="lang-flag">🇵🇹</span>
                <span className="lang-name">Portuguese</span>
                <span className="lang-level">Native</span>
              </div>
              <div className="language-item">
                <span className="lang-flag">🇬🇧</span>
                <span className="lang-name">English</span>
                <span className="lang-level">Fluent (IELTS 8/9)</span>
              </div>
              <div className="language-item">
                <span className="lang-flag">🇨🇳</span>
                <span className="lang-name">Chinese</span>
                <span className="lang-level">Intermediate</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Hobbies */}
      <section id="hobbies" className="section section-white">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">Beyond Work</span>
            <h2 className="section-title">Hobbies & Interests</h2>
          </div>
          <div className="hobbies-grid">
            <div className="hobby-card">
              <div className="hobby-icon">🎸</div>
              <h4>Music Production</h4>
              <p>Cyber Metal / Industrial Metal artist</p>
              <a href="https://open.spotify.com/intl-fr/artist/0CKa7wVI7tiJaFdIBNHw8T" target="_blank" rel="noopener noreferrer" className="hobby-link">Listen on Spotify →</a>
            </div>
            <div className="hobby-card">
              <div className="hobby-icon">🎮</div>
              <h4>Video Games</h4>
              <p>Passionate gamer exploring virtual worlds and interactive storytelling</p>
            </div>
            <div className="hobby-card">
              <div className="hobby-icon">✈️</div>
              <h4>Traveling</h4>
              <p>Exploring new cultures and destinations. Recent focus on Asia-Pacific region</p>
            </div>
            <div className="hobby-card">
              <div className="hobby-icon">🚴</div>
              <h4>Cycling</h4>
              <p>Enjoying the outdoors on two wheels</p>
            </div>
            <div className="hobby-card">
              <div className="hobby-icon">🌏</div>
              <h4>Language Learning</h4>
              <p>Currently immersed in Mandarin Chinese</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="section section-dark">
        <div className="container">
          <div className="section-header">
            <span className="section-tag section-tag-light">Get in Touch</span>
            <h2 className="section-title section-title-light">Let&apos;s Connect</h2>
          </div>
          <div className="contact-grid">
            <div className="contact-info">
              <p className="contact-intro">I&apos;m currently looking for opportunities at the intersection of economics and technology — data-driven roles where I can leverage both my IT experience and economic training. Open to internships and entry-level positions starting August 2026.</p>
              <div className="contact-items">
                <div className="contact-item">
                  <span className="contact-icon">📍</span>
                  <span>Lausanne, Switzerland</span>
                </div>
                
                <div className="contact-item">
                  <span className="contact-icon">✉️</span>
                  <a href="mailto:jorge.paulapinheiro@gmail.com">jorge.paulapinheiro@gmail.com</a>
                </div>
              </div>
            </div>
          </div>
          <footer className="footer">
            <p>© 2026 Jorge Paula Pinheiro · Built with React</p>
          </footer>
        </div>
      </section>
    </div>
  )
}

export default App
