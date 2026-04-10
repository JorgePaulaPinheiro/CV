import './cv-clean.css'

function App() {
  return (
    <div className="cv-container">
      {/* Header */}
      <header className="cv-header">
        <h1 className="cv-name">JORGE PAULA PINHEIRO</h1>
        <div className="cv-contact">
          Chemin de Mourat 24, 1095 Lutry | +41 78 615 92 90 | jorge.paulapinheiro@gmail.com
        </div>
      </header>

      {/* Objectif */}
      <section className="cv-section">
        <h2 className="cv-section-title">Objectif</h2>
        <p className="cv-objectif">
          Economics student with solid professional experience in information technology, 
          currently completing my bachelor's degree while engaged in an intensive language 
          program abroad alongside my studies. I aim to pivot my career toward economic and 
          financial analysis, leveraging both my technical skills and academic training.
        </p>
      </section>

      {/* Formation */}
      <section className="cv-section">
        <h2 className="cv-section-title">Formation</h2>
        
        <div className="cv-item">
          <div className="cv-item-header">
            <span className="cv-item-title">Bachelor in Economics and Management</span>
            <span className="cv-item-date">2023 – Present</span>
          </div>
          <div className="cv-item-subtitle">UniDistance Switzerland | 152/180 ECTS, GPA 5.66/6</div>
          <ul className="cv-item-details">
            <li>Macroeconomics, money and finance, econometrics, business management, accounting</li>
          </ul>
          <div className="cv-memoire">
            <div className="cv-memoire-title">Bachelor Thesis</div>
            <div className="cv-memoire-desc">
              Stabilizing effect of macroprudential measures and capital controls against 
              international financial shocks — Panel data (IMF, BIS), regressions in R, 
              analysis of shock transmissions (VIX, GFC) on real estate markets.
            </div>
          </div>
        </div>

        <div className="cv-item">
          <div className="cv-item-header">
            <span className="cv-item-title">Chinese Language Program — CSC Scholar</span>
            <span className="cv-item-date">2025 – Present</span>
          </div>
          <div className="cv-item-subtitle">Sichuan University | Intensive program, Mandarin immersion</div>
        </div>

        <div className="cv-item">
          <div className="cv-item-header">
            <span className="cv-item-title">CFC in Computer Science</span>
            <span className="cv-item-date">2015 – 2017</span>
          </div>
          <div className="cv-item-subtitle">CPNV</div>
        </div>
      </section>

      {/* Compétences */}
      <section className="cv-section">
        <h2 className="cv-section-title">Compétences</h2>
        <div className="cv-skills-grid">
          <div>
            <span className="cv-skill-category">Data:</span>
            <span className="cv-skill-list"> R, SQL, Excel, Python</span>
          </div>
          <div>
            <span className="cv-skill-category">Finance:</span>
            <span className="cv-skill-list"> Financial analysis, DCF models, comparables</span>
          </div>
          <div>
            <span className="cv-skill-category">Econ:</span>
            <span className="cv-skill-list"> Macroeconomics, econometrics, international finance</span>
          </div>
          <div>
            <span className="cv-skill-category">Accounting:</span>
            <span className="cv-skill-list"> Financial accounting, management control</span>
          </div>
          <div>
            <span className="cv-skill-category">Code:</span>
            <span className="cv-skill-list"> PowerShell, C#, PHP, JavaScript</span>
          </div>
          <div>
            <span className="cv-skill-category">Soft:</span>
            <span className="cv-skill-list"> Rigorous, synthesis, documentation, collaboration</span>
          </div>
        </div>
      </section>

      {/* Expérience */}
      <section className="cv-section">
        <h2 className="cv-section-title">Expérience Professionnelle</h2>
        
        <div className="cv-item">
          <div className="cv-item-header">
            <span className="cv-item-title">IT Technician</span>
            <span className="cv-item-date">2017 – 2025</span>
          </div>
          <div className="cv-item-subtitle">CHUV — Centre Hospitalier Universitaire Vaudois, Lausanne</div>
          <ul className="cv-item-details">
            <li>Installation, maintenance and troubleshooting of IT equipment (10,000+ workstations)</li>
            <li>Interventions on non-standard and specialized systems requiring analysis and adaptation</li>
            <li>Technical support to users: diagnosis, resolution and incident documentation</li>
            <li>Writing and standardization of technical procedures for the team</li>
            <li>Methodical work under pressure respecting priorities and deadlines</li>
            <li>Technical leadership: stimulating collaboration and reconciling interests within the team</li>
          </ul>
        </div>
      </section>

      {/* Langues */}
      <section className="cv-section">
        <h2 className="cv-section-title">Langues</h2>
        <div className="cv-languages">
          <div className="cv-lang-row">
            <span className="cv-lang-name">French</span>
            <span className="cv-lang-level">Native</span>
          </div>
          <div className="cv-lang-row">
            <span className="cv-lang-name">Portuguese</span>
            <span className="cv-lang-level">Native</span>
          </div>
          <div className="cv-lang-row">
            <span className="cv-lang-name">English</span>
            <span className="cv-lang-level">Fluent (IELTS 8/9)</span>
          </div>
          <div className="cv-lang-row">
            <span className="cv-lang-name">Chinese</span>
            <span className="cv-lang-level">Intermediate (HSK3 294/300)</span>
          </div>
        </div>
      </section>

      {/* Hobbies - Gardé comme demandé */}
      <section className="cv-section">
        <h2 className="cv-section-title">Hobbies</h2>
        <div className="cv-hobbies">
          <div className="cv-hobbies-list">
            <span className="cv-hobby-item">🏔️ Alpine Hiking</span>
            <span className="cv-hobby-item">📚 Economics Literature</span>
            <span className="cv-hobby-item">🎸 Guitar</span>
            <span className="cv-hobby-item">♟️ Chess</span>
            <span className="cv-hobby-item">🌏 Language Learning</span>
          </div>
        </div>
      </section>
    </div>
  )
}

export default App
