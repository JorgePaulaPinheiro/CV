import { GraduationCap, Calendar, Award } from 'lucide-react'

const Education = () => {
  const education = [
    {
      degree: 'Bachelor in Economics and Management',
      school: 'UniDistance Suisse',
      period: '2023 – 2026',
      details: [
        'Expected graduation: July 2026',
        'Current average: 5.66/6 (completed 152/180 ECTS)',
        'Key coursework: Econometrics, Financial Analysis, Macroeconomics, Business Management',
        'Bachelor thesis: Panel data analysis of global financial cycles and housing markets (R)'
      ],
      icon: Award
    },
    {
      degree: 'Chinese Language Program',
      school: 'Sichuan University',
      period: '2025 – 2026',
      details: [
        'Intensive Mandarin immersion program',
        'HSK3 certified (294/300) – Intermediate level',
        'Enhancing international profile for cross-border opportunities'
      ],
      icon: GraduationCap
    },
    {
      degree: 'VET Diploma in General IT Specialist',
      school: 'CPNV',
      period: '2015 – 2017',
      details: [
        'Average grade: 5.3/6',
        'Foundation for 8-year IT career at CHUV'
      ],
      icon: GraduationCap
    }
  ]

  return (
    <section id="education" className="section bg-black/20">
      <h2 className="section-title">Education</h2>
      <p className="section-subtitle">Continuous learning journey combining technical and analytical expertise</p>
      
      <div className="max-w-3xl mx-auto">
        {education.map((edu, index) => (
          <div key={index} className="timeline-item">
            <div className="glass-card p-6">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-xl font-bold text-white">{edu.degree}</h3>
                  <p className="text-highlight font-medium">{edu.school}</p>
                </div>
                <div className="flex items-center gap-2 text-gray-400 text-sm">
                  <Calendar size={16} />
                  <span>{edu.period}</span>
                </div>
              </div>
              
              <ul className="space-y-2">
                {edu.details.map((detail, i) => (
                  <li key={i} className="text-gray-300 flex items-start gap-2">
                    <span className="text-highlight mt-1.5">•</span>
                    <span>{detail}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Education
