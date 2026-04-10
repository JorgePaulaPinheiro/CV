import { Mail, Phone, Globe, Code2 } from 'lucide-react'

const Contact = () => {
  const contacts = [
    {
      icon: Mail,
      title: 'Email',
      value: 'jorge.paulapinheiro@gmail.com',
      href: 'mailto:jorge.paulapinheiro@gmail.com'
    },
    {
      icon: Phone,
      title: 'Phone (CH)',
      value: '+41 78 615 92 90',
      href: 'tel:+41786159290'
    },
    {
      icon: Globe,
      title: 'LinkedIn',
      value: 'Connect with me',
      href: '#'
    },
    {
      icon: Code2,
      title: 'GitHub',
      value: 'jorgepaulapinheiro',
      href: 'https://github.com/jorgepaulapinheiro'
    }
  ]

  return (
    <section id="contact" className="section">
      <h2 className="section-title">Get In Touch</h2>
      <p className="section-subtitle">Interested in connecting? Feel free to reach out</p>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {contacts.map((contact, index) => (
          <a
            key={index}
            href={contact.href}
            className="glass-card p-6 text-center hover:bg-white/10 transition-all group"
          >
            <div className="w-14 h-14 rounded-full bg-highlight/20 flex items-center justify-center mx-auto mb-4 group-hover:bg-highlight/30 transition-colors"
            >
              <contact.icon size={28} className="text-highlight" />
            </div>
            
            <h3 className="text-lg font-bold text-white mb-1">{contact.title}</h3>
            <p className="text-gray-400 text-sm">{contact.value}</p>
          </a>
        ))}
      </div>
      
      <div className="mt-16 glass-card p-8 text-center">
        <h3 className="text-2xl font-bold text-white mb-4">Looking for Opportunities</h3>
        <p className="text-gray-300 max-w-2xl mx-auto mb-6">
          I'm currently seeking roles in <span className="text-highlight">Data Analytics, 
          Economic Research, Financial Analysis, and Technology Consulting</span>. 
          Open to opportunities in <strong>Switzerland and internationally</strong>.
        </p>
        
        <a 
          href="mailto:jorge.paulapinheiro@gmail.com"
          className="btn-primary"
        >
          Let's Connect
        </a>
      </div>
    </section>
  )
}

export default Contact
