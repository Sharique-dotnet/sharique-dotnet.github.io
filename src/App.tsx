import Footer from './sections/Footer'
import Header from './sections/Header'

const STUBS = ['home', 'about', 'skills', 'experience', 'domains', 'workflow', 'principles', 'contact']

function App() {
  return (
    <>
      <Header />
      <main>
        {STUBS.map(id => (
          <section key={id} id={id} data-nav className="section" style={{ minHeight: '100vh' }}>
            <div className="container h2">{id}</div>
          </section>
        ))}
      </main>
      <Footer />
    </>
  )
}

export default App
