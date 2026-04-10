import { Languages } from 'lucide-react'

const LanguagesSection = () => {
  const languages = [
    {
      name: 'French',
      level: 'Native',
      flag: '🇫🇷',
      description: 'Mother tongue'
    },
    {
      name: 'Portuguese',
      level: 'Native',
      flag: '🇵🇹',
      description: 'Mother tongue'
    },
    {
      name: 'English',
      level: 'Fluent',
      flag: '🇬🇧',
      description: 'IELTS 8.0'
    },
    {
      name: 'Chinese',
      level: 'Intermediate',
      flag: '🇨🇳',
      description: 'HSK3 (294/300)'
    }
  ]

  return (
    <section id="languages" className="section">
      <h2 className="section-title">Languages</h2>
      <p className="section-subtitle">Trilingual professional with strong multilingual capabilities</p>
      
      <div className="grid md:grid-cols-4 gap-6">
        {languages.map((lang, index) => (
          <div key={index} className="glass-card p-6 text-center">
            <div className="text-4xl mb-3">{lang.flag}</div>
            <h3 className="text-xl font-bold text-white mb-1">{lang.name}</h3>
            <p className="text-highlight font-semibold mb-2">{lang.level}</p>
            <p className="text-sm text-gray-400">{lang.description}</p>
            
            <div className="mt-4 w-full bg-gray-700 rounded-full h-2">
              <div 
                className="bg-highlight h-2 rounded-full transition-all duration-1000"
                style={{ 
                  width: lang.level === 'Native' ? '100%' : 
                         lang.level === 'Fluent' ? '85%' : '50%'
                }}
              ></div>
            </div>
          </div>
        ))}
      </div>
      
      <div className="mt-12 glass-card p-6 text-center">
        <p className="text-gray-300">
          <span className="text-highlight">International Profile:</span> My multilingual background 
          enables effective communication in diverse business environments across 
          <strong>Switzerland, Europe, and Asia-Pacific</strong> markets.
        </p>
      </div>
    </section>
  )
}

export default LanguagesSection
