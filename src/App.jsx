import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [darkMode, setDarkMode] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    document.body.className = darkMode ? 'dark-mode' : ''
  }, [darkMode])

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    alert('Thank you for your message! I will get back to you soon.')
    setFormData({ name: '', email: '', message: '' })
  }

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  return (
    <div className="portfolio">
      {/* Navigation */}
      <nav className="navbar">
        <div className="nav-container">
          <div className="nav-logo">KC</div>
          <div className={`nav-menu ${menuOpen ? 'active' : ''}`}>
            <a href="#home" onClick={() => setMenuOpen(false)}>Home</a>
            <a href="#about" onClick={() => setMenuOpen(false)}>About</a>
            <a href="#skills" onClick={() => setMenuOpen(false)}>Skills</a>
            <a href="#projects" onClick={() => setMenuOpen(false)}>Projects</a>
            <a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a>
          </div>
          <div className="nav-controls">
            <button className="theme-toggle" onClick={() => setDarkMode(!darkMode)}>
            </button>
            <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="hero">
        <div className="hero-content">
          <h1>Krupesh Chavda</h1>
          <h2>Frontend Developer | Aspiring MERN Stack Developer</h2>
          <p>Passionate about creating beautiful, responsive web applications with modern technologies. Currently expanding my skills in the MERN stack to become a full-stack developer.</p>
          <div className="hero-buttons">
            <a href="#projects" className="btn btn-primary">View Projects</a>
            <a href="#contact" className="btn btn-secondary">Contact Me</a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="about">
        <div className="container">
          <h2>About Me</h2>
          <div className="about-content">
            <div className="about-text">
              <p>I'm a BCA graduate with a strong passion for frontend development. My journey in web development started with curiosity about how websites work, and it has evolved into a dedicated pursuit of creating exceptional user experiences.</p>
              <p>As a frontend developer, I specialize in building responsive, interactive web applications using modern technologies. I'm currently expanding my expertise into the MERN stack, working on projects that challenge me to grow as a full-stack developer.</p>
              <p>I believe in writing clean, maintainable code and staying updated with the latest industry trends and best practices.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="skills">
        <div className="container">
          <h2>Skills</h2>
          <div className="skills-grid">
            <div className="skill-category">
              <h3>Frontend</h3>
              <div className="skill-items">
                <span className="skill-item">HTML5</span>
                <span className="skill-item">CSS3</span>
                <span className="skill-item">JavaScript (ES6+)</span>
                <span className="skill-item">React.js</span>
              </div>
            </div>
            <div className="skill-category">
              <h3>Tools & Version Control</h3>
              <div className="skill-items">
                <span className="skill-item">Git</span>
                <span className="skill-item">GitHub</span>
              </div>
            </div>
            <div className="skill-category">
              <h3>Learning (MERN Stack)</h3>
              <div className="skill-items">
                <span className="skill-item learning">Node.js</span>
                <span className="skill-item learning">Express.js</span>
                <span className="skill-item learning">MongoDB</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="projects">
        <div className="container">
          <h2>Featured Projects</h2>
          <div className="projects-grid">
            <div className="project-card">
              <h3>Currency Converter App</h3>
              <p>Real-time currency conversion application with clean, intuitive UI. Built with modern JavaScript and API integration for live exchange rates.</p>
              <div className="project-tech">
                <span>JavaScript</span>
                <span>CSS3</span>
                <span>API Integration</span>
              </div>
              <div className="project-links">
                <a href="https://currencies-converter-task-2.vercel.app/" target="_blank" rel="noopener noreferrer" className="btn btn-primary">Live Demo</a>
              </div>
            </div>
            <div className="project-card">
              <h3>Blog Post App</h3>
              <p>Full-featured blog application with CRUD functionality. Users can create, read, update, and delete blog posts with a responsive design.</p>
              <div className="project-tech">
                <span>React.js</span>
                <span>CSS3</span>
                <span>CRUD Operations</span>
              </div>
              <div className="project-links">
                <a href="https://blog-app-task-1.vercel.app/" target="_blank" rel="noopener noreferrer" className="btn btn-primary">Live Demo</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact">
        <div className="container">
          <h2>Get In Touch</h2>
          <div className="contact-content">
            <div className="contact-info">
              <p>I'm always interested in new opportunities and collaborations. Feel free to reach out if you'd like to work together!</p>
            </div>
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <textarea
                  name="message"
                  placeholder="Your Message"
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>
              <button type="submit" className="btn btn-primary">Send Message</button>
            </form>
          </div>
          <div className="social-links">
            <a href="https://github.com/krupeshchavda" target="_blank" rel="noopener noreferrer">GitHub</a>
            <a href="https://linkedin.com/in/krupeshchavda" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <p>&copy; 2024 Krupesh Chavda. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

export default App