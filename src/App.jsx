import Hero from './components/Hero'
import About from './components/About'
import Education from './components/Education'
import Experience from './components/Experience'
import Skills from './components/Skills'
import Languages from './components/Languages'
import Hobbies from './components/Hobbies'
import Contact from './components/Contact'
import './index.css'

function App() {
  return (
    <div className="bg-gradient">
      <Hero />
      <About />
      <Education />
      <Experience />
      <Skills />
      <Languages />
      <Hobbies />
      <Contact />
      <footer className="py-8 text-center text-gray-500 text-sm">
        <p>© 2026 Paula Pinheiro Jorge. All rights reserved.</p>
        <p className="mt-2">Built with React & Tailwind CSS</p>
      </footer>
    </div>
  )
}

export default App
