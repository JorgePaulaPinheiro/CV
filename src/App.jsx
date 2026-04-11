import { useEffect, useState } from 'react'
import './portfolio.css'

const translations = {
  en: {
    nav: {
      about: 'About',
      education: 'Education',
      experience: 'Experience',
      skills: 'Skills',
      hobbies: 'Hobbies',
      contact: 'Contact'
    },
    hero: {
      greeting: "Hello, I'm",
      title: 'Economics Student · IT Professional · Data-Driven Opportunities',
      location: '📍 Lausanne, Switzerland · 🎓 Bachelor in Economics · 🇨🇳 Learning Mandarin',
      ctaPrimary: 'Get in Touch',
      ctaSecondary: 'Learn More'
    },
    about: {
      tag: 'About Me',
      title: 'Bridging Technology & Economics',
      p1: "Economics student with solid professional experience in information technology, currently completing my bachelor's degree while engaged in an intensive language program abroad alongside my studies.",
      p2: 'I aim to pivot my career toward economic and financial analysis, leveraging both my technical skills and academic training. My background combines 8 years of IT infrastructure experience with rigorous quantitative training in econometrics, macroeconomics, and financial modeling.',
      p3: 'Currently based in China as a CSC Scholarship recipient, I have developed practical cross-cultural skills through daily immersion in an international academic environment. Trilingual in French and Portuguese, fluent in English, and learning Mandarin — I am comfortable working across different cultural and professional contexts.',
      stats: {
        years: 'Years IT Experience',
        gpa: 'GPA / 6',
        languages: 'Languages',
        ects: 'ECTS Earned'
      }
    },
    education: {
      tag: 'Education',
      title: 'Academic Background',
      bachelor: {
        title: 'Bachelor in Economics and Management',
        date: '2023 – Present',
        subtitle: 'UniDistance Switzerland · 152/180 ECTS · GPA 5.66/6',
        courses: 'Macroeconomics, Money and Finance, Econometrics, Business Management, Accounting',
        thesisTitle: 'Bachelor Thesis',
        thesis: 'Global Determinants of Real Estate Prices: A Multi-Country Panel Analysis',
        thesisSubject: 'Impact of financial cycles on real estate markets — transmission of international financial shocks',
        methodology: 'Methodology:',
        methodologyValue: 'Multivariate linear regressions (OLS) + Linear projections on panel data',
        dataSources: 'Data Sources:',
        dataSourcesValue: 'IMF, BIS — international macroeconomic datasets',
        tools: 'Tools:',
        toolsValue: 'R (tidyverse: dplyr, tidyr)',
        focus: 'Focus:',
        focusValue: 'Stabilizing effect of macroprudential measures and capital controls against international financial shocks'
      },
      china: {
        title: 'Chinese Language Program — CSC Scholar',
        date: '2025 – Present',
        subtitle: 'Sichuan University · Chengdu, China · Full Mandarin Immersion',
        csc: 'CSC Scholarship recipient — competitive Chinese government grant (CSC/ bilateral program)',
        gpa: 'GPA 4.0/4.0',
        gpaDesc: 'on all semester assessments',
        immersion: 'Complete immersion: coursework, daily life, and interactions 100% in Mandarin',
        adaptability: 'Developed strong cross-cultural adaptability through direct integration into Chinese academic and social environments'
      },
      cfc: {
        title: 'CFC in Computer Science',
        date: '2015 – 2017',
        subtitle: 'CPNV · 5.3/6'
      },
      epfl: {
        title: 'EPFL — Swiss Federal Institute of Technology',
        date: '2012 – 2015',
        subtitle: 'Microtechnology · Propédeutique 4.41/6 · Bachelor not completed'
      }
    },
    experience: {
      tag: 'Experience',
      title: 'Professional Journey',
      chuv: {
        title: 'IT Technician',
        company: 'CHUV — Centre Hospitalier Universitaire Vaudois, Lausanne',
        date: '2017 – 2025',
        items: [
          'Installation, maintenance and troubleshooting of IT equipment (10,000+ workstations)',
          'Interventions on non-standard and specialized systems requiring analysis and adaptation',
          'Technical support to users: diagnosis, resolution and incident documentation',
          'Writing and standardization of technical procedures for the team',
          'Methodical work under pressure respecting priorities and deadlines',
          'Technical leadership: stimulating collaboration and reconciling interests within the team'
        ]
      },
      studentJobsTitle: 'Student Jobs',
      galexis: {
        title: 'Warehouse Worker',
        company: 'Galexis SA · Écublens, Vaud',
        date: '2014 – 2017',
        desc: 'Student job alongside my studies. Logistics support and participation in pharmaceutical distribution operations.'
      },
      uber: {
        title: 'Uber Pop Driver',
        company: 'Uber · Freelance',
        date: '2016 – 2017',
        desc: 'Student job alongside my studies.'
      },
      gfk: {
        title: 'Call Center Operator',
        company: 'GFK · Lausanne',
        date: '2011 – 2012',
        desc: 'Student job.'
      }
    },
    skills: {
      tag: 'Skills',
      title: 'Competencies',
      data: {
        title: '📊 Data & Analytics',
        tags: ['R', 'SQL', 'Excel', 'Python', 'Linear Regressions', 'Panel Data Analysis', 'OLS', 'Statistical Modeling']
      },
      econometrics: {
        title: '📈 Econometrics',
        tags: ['Multivariate Analysis', 'Time Series', 'Fixed Effects Models', 'Robustness Analysis']
      },
      it: {
        title: '🖥️ IT Infrastructure',
        tags: ['Asset Management', 'Large-Scale Deployment (10K+)', 'Technical Documentation', 'Incident Management', 'Helpdesk L1/L2', 'Hardware Troubleshooting', 'System Administration', 'Security Basics', 'Process Standardization', 'Team Leadership']
      },
      finance: {
        title: '💰 Finance',
        tags: ['Financial Analysis', 'DCF Models', 'Comparables']
      },
      economics: {
        title: '📉 Economics',
        tags: ['Macroeconomics', 'Econometrics', 'Int. Finance']
      },
      accounting: {
        title: '📋 Accounting',
        tags: ['Financial Accounting', 'Management Control']
      },
      programming: {
        title: '💻 Programming',
        tags: ['PowerShell', 'C#', 'PHP', 'JavaScript']
      },
      soft: {
        title: '🤝 Soft Skills',
        tags: ['Rigorous', 'Synthesis', 'Cross-cultural Adaptability', 'International Mobility', 'Documentation', 'Collaboration']
      },
      languages: {
        title: '🌍 Languages',
        french: { name: 'French', level: 'Native' },
        portuguese: { name: 'Portuguese', level: 'Native' },
        english: { name: 'English', level: 'Fluent (IELTS 8/9)' },
        chinese: { name: 'Chinese', level: 'Intermediate' }
      }
    },
    hobbies: {
      tag: 'Beyond Work',
      title: 'Hobbies & Interests',
      music: {
        title: 'Music Production',
        desc: 'Cyber Metal / Industrial Metal artist',
        link: 'Listen on Spotify →'
      },
      gaming: {
        title: 'Video Games',
        desc: 'Passionate gamer exploring virtual worlds and interactive storytelling'
      },
      travel: {
        title: 'Traveling',
        desc: 'Exploring new cultures and destinations. Recent focus on Asia-Pacific region'
      },
      cycling: {
        title: 'Cycling',
        desc: 'Enjoying the outdoors on two wheels'
      },
      language: {
        title: 'Language Learning',
        desc: 'Currently immersed in Mandarin Chinese'
      }
    },
    contact: {
      tag: 'Get in Touch',
      title: "Let's Connect",
      intro: "I'm currently looking for opportunities at the intersection of economics and technology — data-driven roles where I can leverage both my IT experience and economic training. Open to internships and entry-level positions starting August 2026.",
      footer: '© 2026 Jorge Paula Pinheiro · Built with React'
    }
  },
  fr: {
    nav: {
      about: 'À propos',
      education: 'Formation',
      experience: 'Expérience',
      skills: 'Compétences',
      hobbies: 'Loisirs',
      contact: 'Contact'
    },
    hero: {
      greeting: "Bonjour, je suis",
      title: 'Étudiant en Économie · 8 ans Exp. IT · Recherche Stage/Alternance Data',
      location: '📍 Lausanne, Suisse · 🎓 Bachelor en Économie · 🇨🇳 Apprentissage du Mandarin',
      ctaPrimary: 'Me contacter',
      ctaSecondary: 'En savoir plus'
    },
    about: {
      tag: 'À propos',
      title: 'Allier Technologie & Économie',
      p1: "Étudiant en économie avec une solide expérience professionnelle en informatique, actuellement en fin de bachelor tout en suivant un programme intensif de langue à l'étranger en parallèle de mes études.",
      p2: "Je vise à réorienter ma carrière vers l'analyse économique et financière, en m'appuyant à la fois sur mes compétences techniques et ma formation académique. Mon parcours combine 8 ans d'expérience en infrastructure IT avec une formation quantitative rigoureuse en économétrie, macroéconomie et modélisation financière.",
      p3: "Actuellement basé en Chine en tant que boursier CSC, j'ai développé des compétences interculturelles concrètes à travers l'immersion quotidienne dans un environnement académique international. Trilingue en français et portugais, courant en anglais et en apprentissage du mandarin — je suis à l'aise pour travailler dans des contextes culturels et professionnels variés.",
      stats: {
        years: "Années d'exp. IT",
        gpa: 'GPA / 6',
        languages: 'Langues',
        ects: 'ECTS Acquis'
      }
    },
    education: {
      tag: 'Formation',
      title: 'Parcours Académique',
      bachelor: {
        title: 'Bachelor en Économie et Gestion',
        date: '2023 – Présent',
        subtitle: 'UniDistance Suisse · 152/180 ECTS · GPA 5.66/6',
        courses: 'Macroéconomie, Monnaie et Finance, Économétrie, Gestion d\'entreprise, Comptabilité',
        thesisTitle: 'Mémoire de Bachelor',
        thesis: 'Déterminants globaux des prix immobiliers : Une analyse de panel multi-pays',
        thesisSubject: "Impact des cycles financiers sur les marchés immobiliers — transmission des chocs financiers internationaux",
        methodology: 'Méthodologie :',
        methodologyValue: 'Régressions linéaires multivariées (MCO) + Projections linéaires sur données de panel',
        dataSources: 'Sources de données :',
        dataSourcesValue: 'FMI, BRI — jeux de données macroéconomiques internationaux',
        tools: 'Outils :',
        toolsValue: 'R (tidyverse : dplyr, tidyr)',
        focus: 'Objet d\'étude :',
        focusValue: "Effet stabilisateur des mesures macroprudentielles et des contrôles de capitaux contre les chocs financiers internationaux"
      },
      china: {
        title: 'Programme de Chinois — Boursier CSC',
        date: '2025 – Présent',
        subtitle: 'Université du Sichuan · Chengdu, Chine · Immersion complète en mandarin',
        csc: 'Boursier CSC — bourse gouvernementale chinoise compétitive (programme CSC/bilatéral)',
        gpa: 'GPA 4.0/4.0',
        gpaDesc: 'à tous les semestres',
        immersion: 'Immersion totale : cours, vie quotidienne et interactions 100% en mandarin',
        adaptability: "Développement d'une forte capacité d'adaptation interculturelle par intégration directe dans les environnements académiques et sociaux chinois"
      },
      cfc: {
        title: 'CFC en Informatique',
        date: '2015 – 2017',
        subtitle: 'CPNV · 5.3/6'
      },
      epfl: {
        title: 'EPFL — École polytechnique fédérale de Lausanne',
        date: '2012 – 2015',
        subtitle: 'Microtechnique · Propédeutique 4.41/6 · Bachelor non terminé'
      }
    },
    experience: {
      tag: 'Expérience',
      title: 'Parcours Professionnel',
      chuv: {
        title: 'Informaticien',
        company: 'CHUV — Centre Hospitalier Universitaire Vaudois, Lausanne',
        date: '2017 – 2025',
        items: [
          "Installation, maintenance et dépannage du matériel informatique (10 000+ postes de travail)",
          "Interventions sur des systèmes non standards et spécialisés nécessitant analyse et adaptation",
          "Support technique aux utilisateurs : diagnostic, résolution et documentation des incidents",
          "Rédaction et standardisation des procédures techniques pour l'équipe",
          "Travail méthodique sous pression en respectant priorités et délais",
          "Leadership technique : stimulation de la collaboration et conciliation des intérêts au sein de l'équipe"
        ]
      },
      studentJobsTitle: 'Jobs Étudiants',
      galexis: {
        title: 'Manutentionnaire',
        company: 'Galexis SA · Écublens, Vaud',
        date: '2014 – 2017',
        desc: "Job étudiant en parallèle des études. Support logistique et participation aux opérations de distribution pharmaceutique."
      },
      uber: {
        title: 'Chauffeur Uber Pop',
        company: 'Uber · Freelance',
        date: '2016 – 2017',
        desc: 'Job étudiant en parallèle des études.'
      },
      gfk: {
        title: 'Opérateur Call Center',
        company: 'GFK · Lausanne',
        date: '2011 – 2012',
        desc: 'Job étudiant.'
      }
    },
    skills: {
      tag: 'Compétences',
      title: 'Compétences',
      data: {
        title: '📊 Data & Analytics',
        tags: ['R', 'SQL', 'Excel', 'Python', 'Régressions Linéaires', "Analyse de Données de Panel", 'MCO', 'Modélisation Statistique']
      },
      econometrics: {
        title: '📈 Économétrie',
        tags: ['Analyse Multivariée', 'Séries Temporelles', 'Modèles à Effets Fixes', 'Analyse de Robustesse']
      },
      it: {
        title: '🖥️ Infrastructure IT',
        tags: ['Gestion de Parc', 'Déploiement Large Échelle (10K+)', 'Documentation Technique', 'Gestion des Incidents', 'Support Niveau 1/2', 'Dépannage Hardware', 'Administration Système', 'Bases de Sécurité', 'Standardisation des Processus', 'Leadership Technique']
      },
      finance: {
        title: '💰 Finance',
        tags: ['Analyse Financière', 'Modèles DCF', 'Comparables']
      },
      economics: {
        title: '📉 Économie',
        tags: ['Macroéconomie', 'Économétrie', 'Finance Internationale']
      },
      accounting: {
        title: '📋 Comptabilité',
        tags: ['Comptabilité Financière', 'Contrôle de Gestion']
      },
      programming: {
        title: '💻 Programmation',
        tags: ['PowerShell', 'C#', 'PHP', 'JavaScript']
      },
      soft: {
        title: '🤝 Soft Skills',
        tags: ['Rigueur', 'Synthèse', 'Adaptabilité Interculturelle', 'Mobilité Internationale', 'Documentation', 'Collaboration']
      },
      languages: {
        title: '🌍 Langues',
        french: { name: 'Français', level: 'Langue maternelle' },
        portuguese: { name: 'Portugais', level: 'Langue maternelle' },
        english: { name: 'Anglais', level: 'Courant (IELTS 8/9)' },
        chinese: { name: 'Chinois', level: 'Intermédiaire' }
      }
    },
    hobbies: {
      tag: 'Au-delà du Travail',
      title: 'Loisirs & Intérêts',
      music: {
        title: 'Production Musicale',
        desc: 'Artiste Cyber Metal / Metal Industriel',
        link: 'Écouter sur Spotify →'
      },
      gaming: {
        title: 'Jeux Vidéo',
        desc: "Gamer passionné explorant les mondes virtuels et le storytelling interactif"
      },
      travel: {
        title: 'Voyages',
        desc: "Explorer de nouvelles cultures et destinations. Focus récent sur la région Asie-Pacifique"
      },
      cycling: {
        title: 'Vélo',
        desc: "Profiter de l'extérieur sur deux roues"
      },
      language: {
        title: "Apprentissage des Langues",
        desc: 'Actuellement immergé dans le Mandarin'
      }
    },
    contact: {
      tag: 'Me Contacter',
      title: 'Restons en Contact',
      intro: "Je recherche activement des opportunités à l'intersection de l'économie et de la technologie — des rôles orientés data où je peux valoriser mon expérience IT et ma formation économique. Ouvert aux stages et postes junior à partir d'août 2026.",
      footer: '© 2026 Jorge Paula Pinheiro · Construit avec React'
    }
  }
}

function App() {
  const [scrolled, setScrolled] = useState(false)
  const [lang, setLang] = useState('en')
  const t = translations[lang]

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

  const toggleLang = () => {
    setLang(lang === 'en' ? 'fr' : 'en')
  }

  return (
    <div className="portfolio">
      {/* Navigation */}
      <nav className={`nav ${scrolled ? 'nav-scrolled' : ''}`}>
        <div className="nav-container">
          <div className="nav-logo">J. PAULA PINHEIRO</div>
          <ul className="nav-links">
            <li onClick={() => scrollTo('about')}>{t.nav.about}</li>
            <li onClick={() => scrollTo('education')}>{t.nav.education}</li>
            <li onClick={() => scrollTo('experience')}>{t.nav.experience}</li>
            <li onClick={() => scrollTo('skills')}>{t.nav.skills}</li>
            <li onClick={() => scrollTo('hobbies')}>{t.nav.hobbies}</li>
            <li onClick={() => scrollTo('contact')}>{t.nav.contact}</li>
            <li className="lang-toggle" onClick={toggleLang}>
              {lang === 'en' ? '🇫🇷 FR' : '🇬🇧 EN'}
            </li>
          </ul>
        </div>
      </nav>

      {/* Hero */}
      <section className="hero">
        <div className="hero-content">
          <p className="hero-greeting">{t.hero.greeting}</p>
          <h1 className="hero-name">JORGE<br/>PAULA PINHEIRO</h1>
          <p className="hero-title">
            <span className="typing">{t.hero.title}</span>
          </p>
          <p className="hero-location">{t.hero.location}</p>
          <div className="hero-buttons">
            <button onClick={() => scrollTo('contact')} className="btn-primary">{t.hero.ctaPrimary}</button>
            <button onClick={() => scrollTo('about')} className="btn-secondary">{t.hero.ctaSecondary}</button>
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
            <span className="section-tag">{t.about.tag}</span>
            <h2 className="section-title">{t.about.title}</h2>
          </div>
          <div className="about-grid">
            <div className="about-text">
              <p>{t.about.p1}</p>
              <p>{t.about.p2}</p>
              <p dangerouslySetInnerHTML={{ __html: t.about.p3 }} />
            </div>
            <div className="about-highlights">
              <div className="highlight-card">
                <span className="highlight-number">8+</span>
                <span className="highlight-label">{t.about.stats.years}</span>
              </div>
              <div className="highlight-card">
                <span className="highlight-number">5.66</span>
                <span className="highlight-label">{t.about.stats.gpa}</span>
              </div>
              <div className="highlight-card">
                <span className="highlight-number">4</span>
                <span className="highlight-label">{t.about.stats.languages}</span>
              </div>
              <div className="highlight-card">
                <span className="highlight-number">152</span>
                <span className="highlight-label">{t.about.stats.ects}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Education */}
      <section id="education" className="section section-gray">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">{t.education.tag}</span>
            <h2 className="section-title">{t.education.title}</h2>
          </div>
          <div className="timeline">
            <div className="timeline-item">
              <div className="timeline-marker"></div>
              <div className="timeline-content">
                <div className="timeline-header">
                  <h3>{t.education.bachelor.title}</h3>
                  <span className="timeline-date">{t.education.bachelor.date}</span>
                </div>
                <p className="timeline-subtitle">{t.education.bachelor.subtitle}</p>
                <ul className="timeline-list">
                  <li>{t.education.bachelor.courses}</li>
                </ul>
                <div className="thesis-box">
                  <strong>{t.education.bachelor.thesisTitle}</strong>
                  <p className="thesis-title">{t.education.bachelor.thesis}</p>
                  <p className="thesis-subject">
                    <em>{t.education.bachelor.thesisSubject}</em>
                  </p>
                  <div className="thesis-details">
                    <div className="thesis-item">
                      <span className="thesis-label">{t.education.bachelor.methodology}</span>
                      <span>{t.education.bachelor.methodologyValue}</span>
                    </div>
                    <div className="thesis-item">
                      <span className="thesis-label">{t.education.bachelor.dataSources}</span>
                      <span>{t.education.bachelor.dataSourcesValue}</span>
                    </div>
                    <div className="thesis-item">
                      <span className="thesis-label">{t.education.bachelor.tools}</span>
                      <span>{t.education.bachelor.toolsValue}</span>
                    </div>
                    <div className="thesis-item">
                      <span className="thesis-label">{t.education.bachelor.focus}</span>
                      <span>{t.education.bachelor.focusValue}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-marker"></div>
              <div className="timeline-content">
                <div className="timeline-header">
                  <h3>{t.education.china.title}</h3>
                  <span className="timeline-date">{t.education.china.date}</span>
                </div>
                <p className="timeline-subtitle">{t.education.china.subtitle}</p>
                <ul className="timeline-list">
                  <li><strong>{t.education.china.csc.split(' — ')[0]}</strong> — {t.education.china.csc.split(' — ')[1]}</li>
                  <li>Intensive language program (25+ hours/week) — <strong>{t.education.china.gpa}</strong> {t.education.china.gpaDesc}</li>
                  <li>{t.education.china.immersion}</li>
                  <li>{t.education.china.adaptability}</li>
                </ul>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-marker"></div>
              <div className="timeline-content">
                <div className="timeline-header">
                  <h3>{t.education.cfc.title}</h3>
                  <span className="timeline-date">{t.education.cfc.date}</span>
                </div>
                <p className="timeline-subtitle">{t.education.cfc.subtitle}</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-marker"></div>
              <div className="timeline-content">
                <div className="timeline-header">
                  <h3>{t.education.epfl.title}</h3>
                  <span className="timeline-date">{t.education.epfl.date}</span>
                </div>
                <p className="timeline-subtitle">{t.education.epfl.subtitle}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience */}
      <section id="experience" className="section section-white">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">{t.experience.tag}</span>
            <h2 className="section-title">{t.experience.title}</h2>
          </div>
          <div className="experience-card">
            <div className="exp-header">
              <div>
                <h3>{t.experience.chuv.title}</h3>
                <p className="exp-company">{t.experience.chuv.company}</p>
              </div>
              <span className="exp-date">{t.experience.chuv.date}</span>
            </div>
            <ul className="exp-list">
              {t.experience.chuv.items.map((item, idx) => (
                <li key={idx} dangerouslySetInnerHTML={{ __html: item }} />
              ))}
            </ul>
          </div>
          
          <div className="exp-divider">{t.experience.studentJobsTitle}</div>
          
          <div className="student-jobs">
            <div className="student-job">
              <div className="student-job-header">
                <div>
                  <h4>{t.experience.galexis.title}</h4>
                  <p>{t.experience.galexis.company}</p>
                </div>
                <span className="student-job-date">{t.experience.galexis.date}</span>
              </div>
              <p>{t.experience.galexis.desc}</p>
            </div>
            
            <div className="student-job">
              <div className="student-job-header">
                <div>
                  <h4>{t.experience.uber.title}</h4>
                  <p>{t.experience.uber.company}</p>
                </div>
                <span className="student-job-date">{t.experience.uber.date}</span>
              </div>
              <p>{t.experience.uber.desc}</p>
            </div>
            
            <div className="student-job">
              <div className="student-job-header">
                <div>
                  <h4>{t.experience.gfk.title}</h4>
                  <p>{t.experience.gfk.company}</p>
                </div>
                <span className="student-job-date">{t.experience.gfk.date}</span>
              </div>
              <p>{t.experience.gfk.desc}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="section section-gray">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">{t.skills.tag}</span>
            <h2 className="section-title">{t.skills.title}</h2>
          </div>
          <div className="skills-grid">
            <div className="skill-category">
              <h4>{t.skills.data.title}</h4>
              <div className="skill-tags">
                {t.skills.data.tags.map((tag, idx) => (
                  <span key={idx} className="skill-tag">{tag}</span>
                ))}
              </div>
            </div>
            <div className="skill-category">
              <h4>{t.skills.econometrics.title}</h4>
              <div className="skill-tags">
                {t.skills.econometrics.tags.map((tag, idx) => (
                  <span key={idx} className="skill-tag">{tag}</span>
                ))}
              </div>
            </div>
            <div className="skill-category">
              <h4>{t.skills.it.title}</h4>
              <div className="skill-tags">
                {t.skills.it.tags.map((tag, idx) => (
                  <span key={idx} className="skill-tag">{tag}</span>
                ))}
              </div>
            </div>
            <div className="skill-category">
              <h4>{t.skills.finance.title}</h4>
              <div className="skill-tags">
                {t.skills.finance.tags.map((tag, idx) => (
                  <span key={idx} className="skill-tag">{tag}</span>
                ))}
              </div>
            </div>
            <div className="skill-category">
              <h4>{t.skills.economics.title}</h4>
              <div className="skill-tags">
                {t.skills.economics.tags.map((tag, idx) => (
                  <span key={idx} className="skill-tag">{tag}</span>
                ))}
              </div>
            </div>
            <div className="skill-category">
              <h4>{t.skills.accounting.title}</h4>
              <div className="skill-tags">
                {t.skills.accounting.tags.map((tag, idx) => (
                  <span key={idx} className="skill-tag">{tag}</span>
                ))}
              </div>
            </div>
            <div className="skill-category">
              <h4>{t.skills.programming.title}</h4>
              <div className="skill-tags">
                {t.skills.programming.tags.map((tag, idx) => (
                  <span key={idx} className="skill-tag">{tag}</span>
                ))}
              </div>
            </div>
            <div className="skill-category">
              <h4>{t.skills.soft.title}</h4>
              <div className="skill-tags">
                {t.skills.soft.tags.map((tag, idx) => (
                  <span key={idx} className="skill-tag">{tag}</span>
                ))}
              </div>
            </div>
          </div>

          {/* Languages */}
          <div className="languages-section">
            <h3>{t.skills.languages.title}</h3>
            <div className="languages-grid">
              <div className="language-item">
                <span className="lang-flag">🇫🇷</span>
                <span className="lang-name">{t.skills.languages.french.name}</span>
                <span className="lang-level">{t.skills.languages.french.level}</span>
              </div>
              <div className="language-item">
                <span className="lang-flag">🇵🇹</span>
                <span className="lang-name">{t.skills.languages.portuguese.name}</span>
                <span className="lang-level">{t.skills.languages.portuguese.level}</span>
              </div>
              <div className="language-item">
                <span className="lang-flag">🇬🇧</span>
                <span className="lang-name">{t.skills.languages.english.name}</span>
                <span className="lang-level">{t.skills.languages.english.level}</span>
              </div>
              <div className="language-item">
                <span className="lang-flag">🇨🇳</span>
                <span className="lang-name">{t.skills.languages.chinese.name}</span>
                <span className="lang-level">{t.skills.languages.chinese.level}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Hobbies */}
      <section id="hobbies" className="section section-white">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">{t.hobbies.tag}</span>
            <h2 className="section-title">{t.hobbies.title}</h2>
          </div>
          <div className="hobbies-grid">
            <div className="hobby-card">
              <div className="hobby-icon">🎸</div>
              <h4>{t.hobbies.music.title}</h4>
              <p>{t.hobbies.music.desc}</p>
              <a href="https://open.spotify.com/intl-fr/artist/0CKa7wVI7tiJaFdIBNHw8T" target="_blank" rel="noopener noreferrer" className="hobby-link">{t.hobbies.music.link}</a>
            </div>
            <div className="hobby-card">
              <div className="hobby-icon">🎮</div>
              <h4>{t.hobbies.gaming.title}</h4>
              <p>{t.hobbies.gaming.desc}</p>
            </div>
            <div className="hobby-card">
              <div className="hobby-icon">✈️</div>
              <h4>{t.hobbies.travel.title}</h4>
              <p>{t.hobbies.travel.desc}</p>
            </div>
            <div className="hobby-card">
              <div className="hobby-icon">🚴</div>
              <h4>{t.hobbies.cycling.title}</h4>
              <p>{t.hobbies.cycling.desc}</p>
            </div>
            <div className="hobby-card">
              <div className="hobby-icon">🌏</div>
              <h4>{t.hobbies.language.title}</h4>
              <p>{t.hobbies.language.desc}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="section section-dark">
        <div className="container">
          <div className="section-header">
            <span className="section-tag section-tag-light">{t.contact.tag}</span>
            <h2 className="section-title section-title-light">{t.contact.title}</h2>
          </div>
          <div className="contact-grid">
            <div className="contact-info">
              <p className="contact-intro">{t.contact.intro}</p>
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
            <p>{t.contact.footer}</p>
          </footer>
        </div>
      </section>
    </div>
  )
}

export default App
