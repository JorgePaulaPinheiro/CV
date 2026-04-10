import { Music, Gamepad2, Plane, Bike } from 'lucide-react'

const Hobbies = () => {
  const hobbies = [
    {
      icon: Music,
      title: 'Music Production',
      description: 'Cyber Metal / Industrial Metal artist',
      link: 'https://open.spotify.com/intl-fr/artist/0CKa7wVI7tiJaFdIBNHw8T',
      linkText: 'Listen on Spotify'
    },
    {
      icon: Gamepad2,
      title: 'Video Games',
      description: 'Passionate gamer exploring virtual worlds and interactive storytelling'
    },
    {
      icon: Plane,
      title: 'Traveling',
      description: 'Exploring new cultures and destinations around the world. Recent focus on Asia-Pacific region.'
    },
    {
      icon: Bike,
      title: 'Cycling',
      description: 'Enjoying the outdoors on two wheels'
    }
  ]

  return (
    <section id="hobbies" className="section bg-black/20">
      <h2 className="section-title">Hobbies & Interests</h2>
      <p className="section-subtitle">What I enjoy outside of work and studies</p>
      
      <div className="grid md:grid-cols-2 gap-6">
        {hobbies.map((hobby, index) => (
          <div key={index} className="glass-card p-6 flex items-start gap-4">
            <div className="w-12 h-12 rounded-full bg-highlight/20 flex items-center justify-center flex-shrink-0">
              <hobby.icon size={24} className="text-highlight" />
            </div>
            
            <div>
              <h3 className="text-lg font-bold text-white mb-1">{hobby.title}</h3>
              <p className="text-gray-400 mb-2">{hobby.description}</p>
              
              {hobby.link && (
                <a 
                  href={hobby.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-highlight hover:text-white transition-colors text-sm font-medium"
                >
                  {hobby.linkText} →
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Hobbies
