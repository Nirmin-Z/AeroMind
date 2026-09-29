import './App.css'
import AircraftViewer from './components/AircraftViewer/AircraftViewer'

function App() {
  return (
    <main className="app">
      <nav className="navbar">
        <div className="logo">AEROMIND</div>

        <div className="nav-links">
          <span>Aircraft</span>
          <span>AI Assistant</span>
          <span>What-If</span>
        </div>
      </nav>

      <section className="hero">
        <div className="hero-text">
          <p className="eyebrow">AI-ASSISTED AIRCRAFT LEARNING</p>

          <h1>
            Explore the
            <br />
            aircraft.
          </h1>

          <p className="description">
            Interact with aircraft systems, explore their components,
            and understand what happens when conditions change.
          </p>

          <button className="start-button">
            Explore A320 →
          </button>
        </div>

        <div className="aircraft-placeholder">
          <AircraftViewer/>
        </div>
      </section>
    </main>
  )
}

export default App