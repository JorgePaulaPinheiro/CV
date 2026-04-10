import { Code, Database, BarChart3, Server } from 'lucide-react'

const Skills = () => {
  const skillCategories = [
    {
      title: 'Programming & Data Analysis',
      icon: Code,
      skills: ['R', 'Python', 'SQL', 'PowerShell', 'C#']
    },
    {
      title: 'Economic & Financial Analysis',
      icon: BarChart3,
      skills: ['Econometrics', 'Macroeconomic Analysis', 'Financial Analysis', 'Statistical Methods', 'Panel Data Models']
    },
    {
      title: 'IT Infrastructure',
      icon: Server,
      skills: ['SCCM', 'Workspace ONE', 'Agile Provisioning', 'System Administration', 'Technical Documentation']
    },
    {
      title: 'Productivity',
      icon: Database,
      skills: ['Office 365', 'Excel (Advanced)', 'Data Visualization', 'Git', 'Project Management']
    }
  ]

  const softSkills = [
    'Problem-solving',
    'Cultural Adaptability',
    'Team Collaboration',
    'Analytical Thinking',
    'Continuous Learning'
  ]

  return (
    <section id="skills" className="section bg-black/20">
      <h2 className="section-title">Skills</h2>
      <p className="section-subtitle">A unique blend of technical expertise and analytical capabilities</p>
      
      <div className="grid md:grid-cols-2 gap-8 mb-12">
        {skillCategories.map((category, index) => (
          <div key={index} className="glass-card p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-highlight/20 flex items-center justify-center">
                <category.icon size={20} className="text-highlight" />
              </div>
              <h3 className="text-lg font-bold text-white">{category.title}</h3>
            </div>
            
            <div className="flex flex-wrap gap-2">
              {category.skills.map((skill, i) => (
                <span key={i} className="skill-tag">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
      
      <div className="glass-card p-8">
        <h3 className="text-xl font-bold text-white mb-6 text-center">Soft Skills</h3>
        <div className="flex flex-wrap justify-center gap-4">
          {softSkills.map((skill, index) => (
            <div 
              key={index} 
              className="px-6 py-3 rounded-full bg-white/5 border border-white/10 text-gray-300"
            >
              {skill}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
