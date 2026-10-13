import { useState } from 'react'
import './App.css'
import AircraftViewer from './components/AircraftViewer/AircraftViewer'

function App() {
  const [showFullHistory, setShowFullHistory] = useState(false)
  const [isExplorerOpen, setIsExplorerOpen] = useState(false)
  const [showSystemsImage, setShowSystemsImage] = useState(false)

  const scrollToOverview = () => {
    const section = document.getElementById('overview')

    if (section) {
      section.scrollIntoView({ behavior: 'smooth' })
    }
  }

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
      <p className="eyebrow">AIRBUS A320 FAMILY</p>

      <h1>
        The aircraft
        <br />
        that changed
        <br />
        aviation.
      </h1>

      <p className="description">
        Explore the Airbus A320 through its design, history,
        systems and components. AeroMind helps you understand
        what happens behind the aircraft.
      </p>

      <button className="start-button" onClick={scrollToOverview}>
        Ask AEROMIND
      </button>
    </div>

    <div className="aircraft-viewer">
      <AircraftViewer />

      <div className="viewer-label">
        <span>INTERACTIVE 3D MODEL</span>
        <span>DRAG TO ROTATE - SCROLL TO ZOOM</span>
      </div>
      <button
  className="technical-explorer-button"
onClick={() => setIsExplorerOpen(true)}
>
  Explore Aircraft Systems <span>↗</span>
</button>
    </div>
  </section>

  <section className="section overview" id="overview">
    <div className="section-heading">
      <p className="eyebrow">THE A320</p>

      <h2>
        One aircraft.
        <br />
        Decades of innovation.
      </h2>
    </div>

    <div className="overview-content">
      <p className="large-text">
        The Airbus A320 is one of the most recognizable
        commercial aircraft in the world.
      </p>

      <p className="body-text">
        Introduced in the late 1980s, the A320 became the
        foundation of one of the most successful aircraft
        families in aviation. It was designed for short
        and medium haul routes and introduced advanced
        digital flight control technology to commercial
        aviation.
      </p>
    </div>
  </section>

  <section className="section specifications">
    <div className="section-heading">
      <p className="eyebrow">AT A GLANCE</p>
      <h2>A320 specifications</h2>
    </div>

    <div className="spec-grid">
      <div className="spec">
        <span>FIRST FLIGHT</span>
        <strong>1987</strong>
      </div>

      <div className="spec">
        <span>PASSENGERS</span>
        <strong>180</strong>
      </div>

      <div className="spec">
        <span>RANGE</span>
        <strong>6,200 km</strong>
      </div>

      <div className="spec">
        <span>CRUISE SPEED</span>
        <strong>Mach 0.78</strong>
      </div>

      <div className="spec">
        <span>LENGTH</span>
        <strong>37.57 m</strong>
      </div>

      <div className="spec">
        <span>WINGSPAN</span>
        <strong>35.80 m</strong>
      </div>
    </div>
  </section>

  <section className="section history">
    <div className="section-heading">
      <p className="eyebrow">THE STORY</p>

      <h2>
        From 1987
        <br />
        to today.
      </h2>
    </div>
<div className="timeline">
  {/* Always visible: first two milestones */}
  <div className="timeline-item">
    <span>1984</span>
    <div>
      <h3>Development begins</h3>
      <p>
        Airbus begins developing a new generation
        of narrow-body aircraft focused on efficiency,
        technology and passenger comfort.
      </p>
    </div>
  </div>

  <div className="timeline-item">
    <span>1987</span>
    <div>
      <h3>First flight</h3>
      <p>
        The first Airbus A320 takes to the sky,
        marking the beginning of a new generation
        of commercial aircraft.
      </p>
    </div>
  </div>

  {/* Hidden until the visitor clicks the button */}
  {showFullHistory && (
    <>
      <div className="timeline-item">
        <span>1988</span>
        <div>
          <h3>Commercial service</h3>
          <p>
            The A320 enters airline service and begins
            operating commercial passenger flights.
          </p>
        </div>
      </div>

      <div className="timeline-item">
        <span>TODAY</span>
        <div>
          <h3>A global aircraft family</h3>
          <p>
            The A320 family has become one of the most
            widely operated commercial aircraft families
            in the world.
          </p>
        </div>
      </div>
    </>
  )}
</div>

<button
  className="see-more-button"
  onClick={() => setShowFullHistory(!showFullHistory)}
>
  {showFullHistory ? 'See less ↑' : 'See full history ↓'}
</button>
  </section>

  

  <section className="section components">
    <div className="section-heading">
      <p className="eyebrow">EXPLORE</p>

      <h2>Look closer.</h2>

      <p className="section-description">
        Explore important components of the A320 and
        understand how they contribute to the aircraft.
      </p>
    </div>

    <div className="component-grid">
      <div className="component-card">
        <div className="component-number">01</div>

        <div className="component-content">
          <p className="component-type">FLIGHT DECK</p>

          <h3>Cockpit</h3>

          <p>
            Explore the environment where pilots monitor,
            control and interact with the aircraft.
          </p>
        </div>

        <span className="component-arrow">VIEW</span>
      </div>

      <div className="component-card">
        <div className="component-number">02</div>

        <div className="component-content">
          <p className="component-type">PROPULSION</p>

          <h3>CFM56-5B</h3>

          <p>
            Explore one of the turbofan engines used
            across the A320 family.
          </p>
        </div>

        <span className="component-arrow">VIEW</span>
      </div>
    </div>
  </section>

  
  <footer className="footer">
    <div className="logo">AEROMIND</div>

    <p>AI-assisted aircraft exploration.</p>
  </footer>

  {isExplorerOpen && (
    <div className="explorer-overlay">
      <div className="explorer-panel">
        <div className="explorer-header">
          <div>
            <p className="eyebrow">AEROMIND / TECHNICAL LIBRARY</p>
            <h2>A320 Technical Explorer</h2>
          </div>

          <button
            className="explorer-close"
            onClick={() => setIsExplorerOpen(false)}
            aria-label="Close Technical Explorer"
          >
            ×
          </button>
        </div>

        
<div className="explorer-content">
  <div className="explorer-intro">
    <p className="eyebrow">AIRCRAFT SYSTEMS / A320 FAMILY</p>
    <h3>Explore the aircraft.</h3>
    <p>
      Discover the major systems that make the Airbus A320
      operate, from propulsion to flight control.
    </p>
  </div>

  <div className="explorer-system-grid">
    <button className="explorer-system-card">
      <span className="system-number">01 / PROPULSION</span>
      <span className="system-icon">◈</span>
      <h3>Engine</h3>
      <p>CFM56-5B turbofan engine</p>
    </button>

    <div className="explorer-system-card">
      <span className="system-number">02 / FLIGHT DECK</span>
      <span className="system-icon">⌘</span>
      <h3>Cockpit</h3>
      <p>Flight displays and pilot controls</p>
    </div>

    <div className="explorer-system-card">
      <span className="system-number">03 / FLIGHT CONTROL</span>
      <span className="system-icon">↗</span>
      <h3>Flight controls</h3>
      <p>Surfaces that control aircraft movement</p>
    </div>

    <div className="explorer-system-card">
      <span className="system-number">04 / STRUCTURE</span>
      <span className="system-icon">◇</span>
      <h3>Airframe & wings</h3>
      <p>Structure, lift and aerodynamic design</p>
    </div>

    <div className="explorer-system-card">
      <span className="system-number">05 / LANDING</span>
      <span className="system-icon">⇩</span>
      <h3>Landing gear</h3>
      <p>Ground support and landing mechanisms</p>
    </div>

    <div className="explorer-system-card">
      <span className="system-number">06 / AIRCRAFT SYSTEMS</span>
      <span className="system-icon">◎</span>
      <h3>Hydraulics</h3>
      <p>Power transmission for aircraft systems</p>
    
    </div>
  </div>

  

  {/* NEW: Single button to show or hide the image */}
  
<div className="systems-image-section">
  <button
    className="systems-image-button"
    onClick={() => setShowSystemsImage(true)}
  >
    View Aircraft Systems <span>↗</span>
  </button>
</div>
</div>

      </div>
    </div>

  )}
  
  {showSystemsImage && (
    <div
      className="systems-image-overlay"
      onClick={() => setShowSystemsImage(false)}
    >
      <button
        className="systems-image-close"
        onClick={() => setShowSystemsImage(false)}
        aria-label="Close image"
      >
        ×
      </button>

      <img
        src="/images/a320-infographic.png"
        alt="Airbus A320 aircraft systems infographic"
        className="systems-fullscreen-image"
        onClick={(event) => event.stopPropagation()}
      />
    </div>
  )}

</main>

)
}
export default App