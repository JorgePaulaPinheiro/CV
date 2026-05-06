import { Globe, TrendingUp, Cpu } from 'lucide-react'

const About = () => {
  const highlights = [
    {
      icon: Globe,
      title: 'Trilingual',
      desc: 'French, Portuguese & English'
    },
    {
      icon: TrendingUp,
      title: 'Career Transition',
      desc: 'IT to Economics & Data'
    },
    {
      icon: Cpu,
      title: 'Tech Background',
      desc: '8+ Years Experience'
    }
  ]

  return (
    <section id="about" className="section">
      <h2 className="section-title">About Me</h2>
      <p className="section-subtitle">Bridging technical expertise with economic insight</p>
      
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div className="glass-card p-8">
          <p className="text-gray-300 mb-4 leading-relaxed">
            Final-year Bachelor student in <span className="text-highlight font-semibold">Economics and Management</span> at 
            UniDistance Suisse, specializing in <span className="text-highlight font-semibold">econometric analysis and data-driven decision making</span>.
          </p>
          <p className="text-gray-300 mb-4 leading-relaxed">
            With <strong>8 years of experience in IT infrastructure</strong> at Lausanne University Hospital (CHUV), 
            I bring a structured, methodical approach to complex problem-solving. My unique blend of technical expertise 
            and economic knowledge positions me ideally for roles at the intersection of <span className="text-highlight">technology, 
            data analytics, and finance</span>.
          </p>
          <p className="text-gray-300 leading-relaxed">
            <strong>Currently based in Chengdu, China</strong>, completing an intensive <strong>Mandarin program</strong> to strengthen my international profile 
            and cultural adaptability for cross-border opportunities — particularly in Swiss-European-Asian markets. 
            My permanent base remains <strong>Lausanne, Switzerland</strong>.
          </p>
        </div>
        
        <div className="grid gap-6">
          {highlights.map((item, index) => (
            <div key={index} className="glass-card p-6 flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-highlight/20 flex items-center justify-center">
                <item.icon size={24} className="text-highlight" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white">{item.title}</h3>
                <p className="text-gray-400">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default About
