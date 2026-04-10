import { MapPin, Mail, ChevronDown } from 'lucide-react'

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative px-4">
      <div className="text-center max-w-4xl mx-auto animate-fade-in">
        <div className="mb-6">
          <span className="text-highlight font-semibold tracking-wider uppercase text-sm">
            Portfolio
          </span>
        </div>
        
        <h1 className="text-5xl md:text-7xl font-bold mb-4">
          <span className="text-white">PAULA PINHEIRO</span>
          <br />
          <span className="text-highlight">JORGE</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-gray-300 mb-6">
          IT Professional | Economics & Data Analytics | Finance Transition
        </p>
        
        <div className="flex items-center justify-center gap-2 text-gray-400 mb-8">
          <MapPin size={18} />
          <span>Swiss & Portuguese National • Open to International Opportunities</span>
        </div>
        
        <a 
          href="#about" 
          className="btn-primary inline-flex items-center gap-2"
        >
          View My Profile
          <ChevronDown size={20} />
        </a>
        
        <div className="mt-16 flex justify-center gap-8">
          <div className="text-center">
            <div className="text-3xl font-bold text-highlight">8+</div>
            <div className="text-sm text-gray-400">Years IT Experience</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-highlight">3</div>
            <div className="text-sm text-gray-400">Languages</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-highlight">10K+</div>
            <div className="text-sm text-gray-400">Devices Managed</div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <ChevronDown size={24} className="text-gray-500" />
      </div>
    </section>
  )
}

export default Hero
