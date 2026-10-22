import About from './sections/About'
import Contact from './sections/Contact'
import Domains from './sections/Domains'
import Experience from './sections/Experience'
import Footer from './sections/Footer'
import Header from './sections/Header'
import Hero from './sections/Hero'
import Principles from './sections/Principles'
import Skills from './sections/Skills'
import Snapshot from './sections/Snapshot'
import Workflow from './sections/Workflow'

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Snapshot />
        <About />
        <Skills />
        <Experience />
        <Domains />
        <Workflow />
        <Principles />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

export default App
