import { Briefcase, Calendar } from 'lucide-react'

const Experience = () => {
  const responsibilities = [
    'Resolved daily IT incidents to maintain operational continuity',
    'Installed and configured business software and user workstations',
    'Managed over 10,000 PCs via SCCM; configured iPhones (Workspace ONE) and Cisco phones (Agile Provisioning)',
    'Documented installation procedures for standardized team practices',
    'Contributed to key IT infrastructure projects enhancing hospital-wide reliability'
  ]

  return (
    <section id="experience" className="section">
      <h2 className="section-title">Professional Experience</h2>
      <p className="section-subtitle">8 years of hands-on IT experience in a demanding healthcare environment</p>
      
      <div className="max-w-4xl mx-auto">
        <div className="glass-card p-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between mb-6">
            <div>
              <h3 className="text-2xl font-bold text-white">IT Technician</h3>
              <p className="text-highlight font-semibold">CHUV (Lausanne University Hospital)</p>
            </div>
            <div className="flex items-center gap-2 text-gray-400 mt-2 md:mt-0">
              <Calendar size={18} />
              <span>2017 – 2025</span>
            </div>
          </div>
          
          <h4 className="text-lg font-semibold text-white mb-4">Key Responsibilities</h4>
          
          <ul className="space-y-3 mb-8">
            {responsibilities.map((resp, index) => (
              <li key={index} className="text-gray-300 flex items-start gap-3">
                <span className="w-2 h-2 rounded-full bg-highlight mt-2"></span>
                <span>{resp}</span>
              </li>
            ))}
          </ul>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-6 border-t border-gray-700">
            <div className="text-center">
              <div className="text-3xl font-bold text-highlight">8</div>
              <div className="text-sm text-gray-400">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-highlight">10K+</div>
              <div className="text-sm text-gray-400">PCs Managed</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-highlight">24/7</div>
              <div className="text-sm text-gray-400">Critical Support</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-highlight">100%</div>
              <div className="text-sm text-gray-400">Swiss Quality</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience
