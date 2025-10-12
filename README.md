<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Piyush Saini | Portfolio</title>
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <style>
    /* ==================== GLOBAL VARIABLES ==================== */
    :root {
      --primary: #ff6b6b;
      --secondary: #4ecdc4;
      --dark: #0a0a0a;
      --light: #f8f9fa;
      --accent: #ffe66d;
      --gradient: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      --shadow: 0 20px 60px rgba(0,0,0,0.3);
    }
    
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }
    
    body {
      font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
      background: var(--dark);
      color: var(--light);
      overflow-x: hidden;
    }
    
    /* ==================== NAVIGATION ==================== */
    nav {
      position: fixed;
      top: 0;
      width: 100%;
      background: rgba(10, 10, 10, 0.95);
      backdrop-filter: blur(10px);
      padding: 1rem 5%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      z-index: 1000;
      box-shadow: 0 2px 20px rgba(0,0,0,0.5);
    }
    
    .logo {
      font-size: 1.8rem;
      font-weight: bold;
      background: var(--gradient);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
    }
    
    .nav-links {
      display: flex;
      gap: 2rem;
      list-style: none;
    }
    
    .nav-links a {
      color: var(--light);
      text-decoration: none;
      font-weight: 500;
      transition: all 0.3s;
      position: relative;
    }
    
    .nav-links a::after {
      content: '';
      position: absolute;
      bottom: -5px;
      left: 0;
      width: 0;
      height: 2px;
      background: var(--primary);
      transition: width 0.3s;
    }
    
    .nav-links a:hover::after {
      width: 100%;
    }
    
    .hamburger {
      display: none;
      flex-direction: column;
      cursor: pointer;
    }
    
    .hamburger span {
      width: 25px;
      height: 3px;
      background: var(--light);
      margin: 3px 0;
      transition: 0.3s;
    }
    
    /* ==================== HOME PAGE ==================== */
    .page {
      display: none;
      min-height: 100vh;
      padding-top: 80px;
    }
    
    .page.active {
      display: block;
      animation: fadeIn 0.5s ease-in;
    }
    
    @keyframes fadeIn {
      from { opacity: 0; transform: translateY(20px); }
      to { opacity: 1; transform: translateY(0); }
    }
    
    .hero {
      height: 100vh;
      display: flex;
      align-items: center;
      justify-content: center;
      background: linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%);
      position: relative;
      overflow: hidden;
    }
    
    .hero::before {
      content: '';
      position: absolute;
      width: 200%;
      height: 200%;
      background: radial-gradient(circle, rgba(255,255,255,0.1) 1px, transparent 1px);
      background-size: 50px 50px;
      animation: moveGrid 20s linear infinite;
    }
    
    @keyframes moveGrid {
      0% { transform: translate(0, 0); }
      100% { transform: translate(50px, 50px); }
    }
    
    .hero-content {
      text-align: center;
      z-index: 10;
      max-width: 800px;
      padding: 2rem;
    }
    
    .hero h1 {
      font-size: 4rem;
      margin-bottom: 1rem;
      text-shadow: 2px 2px 10px rgba(0,0,0,0.3);
      animation: slideDown 1s ease-out;
    }
    
    @keyframes slideDown {
      from { opacity: 0; transform: translateY(-50px); }
      to { opacity: 1; transform: translateY(0); }
    }
    
    .hero p {
      font-size: 1.5rem;
      margin-bottom: 2rem;
      animation: slideUp 1s ease-out 0.3s backwards;
    }
    
    @keyframes slideUp {
      from { opacity: 0; transform: translateY(50px); }
      to { opacity: 1; transform: translateY(0); }
    }
    
    .cta-buttons {
      display: flex;
      gap: 1rem;
      justify-content: center;
      animation: slideUp 1s ease-out 0.6s backwards;
    }
    
    .btn {
      padding: 1rem 2rem;
      border: none;
      border-radius: 50px;
      font-size: 1rem;
      font-weight: bold;
      cursor: pointer;
      transition: all 0.3s;
      text-decoration: none;
      display: inline-block;
    }
    
    .btn-primary {
      background: var(--primary);
      color: white;
      box-shadow: 0 5px 15px rgba(255,107,107,0.4);
    }
    
    .btn-primary:hover {
      transform: translateY(-3px);
      box-shadow: 0 8px 20px rgba(255,107,107,0.6);
    }
    
    .btn-secondary {
      background: transparent;
      color: white;
      border: 2px solid white;
    }
    
    .btn-secondary:hover {
      background: white;
      color: var(--dark);
    }
    
    /* ==================== ABOUT SECTION ==================== */
    .about-container {
      max-width: 1200px;
      margin: 0 auto;
      padding: 4rem 2rem;
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 4rem;
      align-items: center;
    }
    
    .profile-card {
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      padding: 3rem;
      border-radius: 20px;
      box-shadow: var(--shadow);
      text-align: center;
      transform: perspective(1000px) rotateY(0);
      transition: transform 0.5s;
    }
    
    .profile-card:hover {
      transform: perspective(1000px) rotateY(5deg);
    }
    
    .profile-img {
      width: 200px;
      height: 200px;
      border-radius: 50%;
      border: 5px solid white;
      object-fit: cover;
      margin-bottom: 1.5rem;
      box-shadow: 0 10px 30px rgba(0,0,0,0.3);
    }
    
    .about-text h2 {
      font-size: 2.5rem;
      margin-bottom: 1rem;
      background: var(--gradient);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
    }
    
    .about-text p {
      line-height: 1.8;
      color: #ddd;
      margin-bottom: 1rem;
    }
    
    .stats {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 2rem;
      margin-top: 3rem;
    }
    
    .stat-card {
      background: rgba(255,255,255,0.1);
      padding: 2rem;
      border-radius: 15px;
      text-align: center;
      backdrop-filter: blur(10px);
      transition: transform 0.3s;
    }
    
    .stat-card:hover {
      transform: translateY(-10px);
    }
    
    .stat-card h3 {
      font-size: 2.5rem;
      color: var(--accent);
      margin-bottom: 0.5rem;
    }
    
    /* ==================== EDUCATION SECTION ==================== */
    .education-container {
      max-width: 1000px;
      margin: 0 auto;
      padding: 4rem 2rem;
    }
    
    .timeline {
      position: relative;
      padding-left: 50px;
    }
    
    .timeline::before {
      content: '';
      position: absolute;
      left: 20px;
      top: 0;
      height: 100%;
      width: 3px;
      background: var(--gradient);
    }
    
    .timeline-item {
      position: relative;
      margin-bottom: 3rem;
      padding: 2rem;
      background: rgba(255,255,255,0.05);
      border-radius: 15px;
      border-left: 4px solid var(--primary);
      transition: all 0.3s;
    }
    
    .timeline-item:hover {
      background: rgba(255,255,255,0.1);
      transform: translateX(10px);
    }
    
    .timeline-item::before {
      content: '';
      position: absolute;
      left: -29px;
      top: 2rem;
      width: 15px;
      height: 15px;
      border-radius: 50%;
      background: var(--primary);
      border: 3px solid var(--dark);
    }
    
    .timeline-item h3 {
      color: var(--accent);
      margin-bottom: 0.5rem;
    }
    
    /* ==================== SKILLS SECTION ==================== */
    .skills-container {
      max-width: 1200px;
      margin: 0 auto;
      padding: 4rem 2rem;
    }
    
    .skills-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
      gap: 2rem;
      margin-top: 3rem;
    }
    
    .skill-card {
      background: linear-gradient(135deg, rgba(102,126,234,0.1) 0%, rgba(118,75,162,0.1) 100%);
      padding: 2rem;
      border-radius: 15px;
      text-align: center;
      border: 1px solid rgba(255,255,255,0.1);
      transition: all 0.3s;
      cursor: pointer;
    }
    
    .skill-card:hover {
      transform: translateY(-10px) scale(1.05);
      box-shadow: 0 10px 30px rgba(102,126,234,0.3);
    }
    
    .skill-icon {
      font-size: 3rem;
      margin-bottom: 1rem;
    }
    
    .skill-progress {
      width: 100%;
      height: 8px;
      background: rgba(255,255,255,0.1);
      border-radius: 10px;
      overflow: hidden;
      margin-top: 1rem;
    }
    
    .skill-progress-bar {
      height: 100%;
      background: var(--gradient);
      border-radius: 10px;
      transition: width 1s ease-out;
    }
    
    /* ==================== PROJECTS PAGE ==================== */
    .projects-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
      gap: 2rem;
      max-width: 1400px;
      margin: 0 auto;
      padding: 4rem 2rem;
    }
    
    .project-card {
      background: rgba(255,255,255,0.05);
      border-radius: 20px;
      overflow: hidden;
      transition: all 0.3s;
      cursor: pointer;
      border: 1px solid rgba(255,255,255,0.1);
    }
    
    .project-card:hover {
      transform: translateY(-10px);
      box-shadow: 0 20px 40px rgba(0,0,0,0.5);
    }
    
    .project-image {
      width: 100%;
      height: 250px;
      background: var(--gradient);
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 3rem;
      color: white;
    }
    
    .project-content {
      padding: 2rem;
    }
    
    .project-content h3 {
      color: var(--accent);
      margin-bottom: 1rem;
    }
    
    .project-tags {
      display: flex;
      gap: 0.5rem;
      flex-wrap: wrap;
      margin-top: 1rem;
    }
    
    .tag {
      padding: 0.3rem 0.8rem;
      background: rgba(255,107,107,0.2);
      border-radius: 20px;
      font-size: 0.85rem;
      color: var(--primary);
    }
    
    /* ==================== CERTIFICATES PAGE ==================== */
    .certificates-gallery {
      max-width: 1400px;
      margin: 0 auto;
      padding: 4rem 2rem;
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
      gap: 3rem;
    }
    
    .certificate-card {
      background: rgba(255,255,255,0.05);
      border-radius: 20px;
      padding: 2rem;
      border: 2px solid rgba(255,255,255,0.1);
      transition: all 0.3s;
    }
    
    .certificate-card:hover {
      transform: scale(1.05);
      border-color: var(--primary);
    }
    
    .certificate-img {
      width: 100%;
      border-radius: 10px;
      margin-bottom: 1rem;
      cursor: pointer;
      transition: transform 0.3s;
    }
    
    .certificate-img:hover {
      transform: scale(1.05);
    }
    
    /* ==================== CONTACT PAGE ==================== */
    .contact-container {
      max-width: 1200px;
      margin: 0 auto;
      padding: 4rem 2rem;
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 4rem;
    }
    
    .contact-info {
      display: flex;
      flex-direction: column;
      gap: 2rem;
    }
    
    .contact-item {
      display: flex;
      align-items: center;
      gap: 1.5rem;
      padding: 1.5rem;
      background: rgba(255,255,255,0.05);
      border-radius: 15px;
      transition: all 0.3s;
    }
    
    .contact-item:hover {
      background: rgba(255,255,255,0.1);
      transform: translateX(10px);
    }
    
    .contact-icon {
      font-size: 2rem;
      color: var(--primary);
    }
    
    .contact-form {
      background: rgba(255,255,255,0.05);
      padding: 2rem;
      border-radius: 20px;
      border: 1px solid rgba(255,255,255,0.1);
    }
    
    .form-group {
      margin-bottom: 1.5rem;
    }
    
    .form-group input,
    .form-group textarea {
      width: 100%;
      padding: 1rem;
      background: rgba(255,255,255,0.1);
      border: 1px solid rgba(255,255,255,0.2);
      border-radius: 10px;
      color: white;
      font-size: 1rem;
    }
    
    .form-group input:focus,
    .form-group textarea:focus {
      outline: none;
      border-color: var(--primary);
    }
    
    /* ==================== MODAL ==================== */
    .modal {
      display: none;
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: rgba(0,0,0,0.9);
      z-index: 2000;
      align-items: center;
      justify-content: center;
    }
    
    .modal.active {
      display: flex;
    }
    
    .modal-content {
      max-width: 90%;
      max-height: 90%;
      position: relative;
    }
    
    .modal-content img {
      width: 100%;
      height: auto;
      border-radius: 10px;
    }
    
    .close-modal {
      position: absolute;
      top: -40px;
      right: 0;
      font-size: 2rem;
      color: white;
      cursor: pointer;
    }
    
    /* ==================== SECTION HEADER ==================== */
    .section-header {
      text-align: center;
      margin-bottom: 3rem;
      padding-top: 2rem;
    }
    
    .section-header h2 {
      font-size: 3rem;
      background: var(--gradient);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
      margin-bottom: 0.5rem;
    }
    
    .section-header p {
      color: #aaa;
      font-size: 1.1rem;
    }
    
    /* ==================== RESPONSIVE ==================== */
    @media (max-width: 768px) {
      .hamburger {
        display: flex;
      }
      
      .nav-links {
        position: fixed;
        top: 70px;
        left: -100%;
        flex-direction: column;
        background: rgba(10,10,10,0.98);
        width: 100%;
        padding: 2rem;
        transition: left 0.3s;
      }
      
      .nav-links.active {
        left: 0;
      }
      
      .hero h1 {
        font-size: 2.5rem;
      }
      
      .about-container,
      .contact-container {
        grid-template-columns: 1fr;
      }
      
      .stats {
        grid-template-columns: 1fr;
      }
      
      .cta-buttons {
        flex-direction: column;
      }
    }
  </style>
</head>
<body>
  <!-- NAVIGATION -->
  <nav>
    <div class="logo">PS</div>
    <ul class="nav-links" id="navLinks">
      <li><a href="#" onclick="showPage('home')">Home</a></li>
      <li><a href="#" onclick="showPage('about')">About</a></li>
      <li><a href="#" onclick="showPage('education')">Education</a></li>
      <li><a href="#" onclick="showPage('skills')">Skills</a></li>
      <li><a href="#" onclick="showPage('projects')">Projects</a></li>
      <li><a href="#" onclick="showPage('certificates')">Certificates</a></li>
      <li><a href="#" onclick="showPage('contact')">Contact</a></li>
    </ul>
    <div class="hamburger" onclick="toggleMenu()">
      <span></span>
      <span></span>
      <span></span>
    </div>
  </nav>

  <!-- HOME PAGE -->
  <div class="page active" id="home">
    <div class="hero">
      <div class="hero-content">
        <h1>Hi, I'm Piyush Saini</h1>
        <p>Web Developer | Creative Designer | Problem Solver</p>
        <div class="cta-buttons">
          <button class="btn btn-primary" onclick="showPage('projects')">View My Work</button>
          <button class="btn btn-secondary" onclick="showPage('contact')">Get In Touch</button>
        </div>
      </div>
    </div>
  </div>

  <!-- ABOUT PAGE -->
  <div class="page" id="about">
    <div class="section-header">
      <h2>About Me</h2>
      <p>Get to know me better</p>
    </div>
    <div class="about-container">
      <div class="profile-card">
        <img src="Piyush.jpg" alt="Piyush Saini" class="profile-img">
        <h3>Piyush Saini</h3>
        <p>Full Stack Developer</p>
      </div>
      <div class="about-text">
        <h2>Hello There!</h2>
        <p>I'm Piyush Saini, a passionate web developer and creative designer dedicated to crafting exceptional digital experiences. With a strong foundation in modern web technologies, I bring ideas to life through clean code and innovative design.</p>
        <p>Currently pursuing my Bachelor's in Computer Applications at Galgotias University, I'm constantly exploring new technologies and pushing the boundaries of what's possible on the web.</p>
        <p>My approach combines technical expertise with creative problem-solving to deliver solutions that not only work flawlessly but also provide delightful user experiences.</p>
      </div>
    </div>
    <div class="stats">
      <div class="stat-card">
        <h3>5+</h3>
        <p>Projects Completed</p>
      </div>
      <div class="stat-card">
        <h3>3+</h3>
        <p>Technologies Mastered</p>
      </div>
      <div class="stat-card">
        <h3>2026</h3>
        <p>Graduation Year</p>
      </div>
    </div>
  </div>

  <!-- EDUCATION PAGE -->
  <div class="page" id="education">
    <div class="section-header">
      <h2>Education</h2>
      <p>My academic journey</p>
    </div>
    <div class="education-container">
      <div class="timeline">
        <div class="timeline-item">
          <h3>Bachelor of Computer Application</h3>
          <h4>Galgotias University</h4>
          <p>2023 - 2026</p>
          <p>Pursuing comprehensive education in computer science, software development, and modern programming paradigms. Focus on web technologies, data structures, and software engineering principles.</p>
        </div>
        <div class="timeline-item">
          <h3>Senior Secondary Education</h3>
          <h4>Completed</h4>
          <p>2021 - 2023</p>
          <p>Strong foundation in mathematics, science, and computer fundamentals. Achieved excellent grades and developed initial programming skills.</p>
        </div>
      </div>
    </div>
  </div>

  <!-- SKILLS PAGE -->
  <div class="page" id="skills">
    <div class="section-header">
      <h2>My Skills</h2>
      <p>Technologies I work with</p>
    </div>
    <div class="skills-container">
      <div class="skills-grid">
        <div class="skill-card">
          <div class="skill-icon">🌐</div>
          <h3>HTML5</h3>
          <div class="skill-progress">
            <div class="skill-progress-bar" style="width: 90%"></div>
          </div>
        </div>
        <div class="skill-card">
          <div class="skill-icon">🎨</div>
          <h3>CSS3</h3>
          <div class="skill-progress">
            <div class="skill-progress-bar" style="width: 85%"></div>
          </div>
        </div>
        <div class="skill-card">
          <div class="skill-icon">🐍</div>
          <h3>Python</h3>
          <div class="skill-progress">
            <div class="skill-progress-bar" style="width: 80%"></div>
          </div>
        </div>
        <div class="skill-card">
          <div class="skill-icon">⚙️</div>
          <h3>C Programming</h3>
          <div class="skill-progress">
            <div class="skill-progress-bar" style="width: 75%"></div>
          </div>
        </div>
        <div class="skill-card">
          <div class="skill-icon">🔧</div>
          <h3>GitHub</h3>
          <div class="skill-progress">
            <div class="skill-progress-bar" style="width: 70%"></div>
          </div>
        </div>
        <div class="skill-card">
          <div class="skill-icon">💡</div>
          <h3>Problem Solving</h3>
          <div class="skill-progress">
            <div class="skill-progress-bar" style="width: 88%"></div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- PROJECTS PAGE -->
  <div class="page" id="projects">
    <div class="section-header">
      <h2>My Projects</h2>
      <p>Explore my latest work</p>
    </div>
    <div class="projects-grid">
      <div class="project-card" onclick="openProjectModal('project1')">
        <div class="project-image">🚀</div>
        <div class="project-content">
          <h3>Responsive Web App</h3>
          <p>A modern, fully responsive web application with interactive features and seamless user experience across all devices.</p>
          <div class="project-tags">
            <span class="tag">HTML</span>
            <span class="tag">CSS</span>
            <span class="tag">JavaScript</span>
          </div>
        </div>
      </div>
      <div class="project-card" onclick="openProjectModal('project2')">
        <div class="project-image">🎯</div>
        <div class="project-content">
          <h3>API Integration Project</h3>
          <p>Dynamic web solution integrating real-time APIs to deliver live data and interactive functionality.</p>
          <div class="project-tags">
            <span class="tag">Python</span>
            <span class="tag">REST API</span>
            <span class="tag">JSON</span>
          </div>
        </div>
      </div>
      <div class="project-card" onclick="openProjectModal('project3')">
        <div class="project-image">✨</div>
        <div class="project-content">
          <h3>UI/UX Portfolio</h3>
          <p>Creative exploration combining modern design principles with robust development for seamless digital experiences.</p>
          <div class="project-tags">
            <span class="tag">Design</span>
            <span class="tag">Frontend</span>
            <span class="tag">UX</span>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- CERTIFICATES PAGE -->
  <div class="page" id="certificates">
    <div class="section-header">
      <h2>Certificates</h2>
      <p>My achievements and credentials</p>
    </div>
    <div class="certificates-gallery">
      <div class="certificate-card">
        <img src="card.jpg" alt="Certificate 1" class="certificate-img" onclick="openModal(this.src)">
        <h3>Score Card Certificate</h3>
        <p>Academic achievement certificate showcasing exceptional performance</p>
      </div>
      <div class="certificate-card">
        <img src="https://via.placeholder.com/500x350/667eea/ffffff?text=Certificate+2" alt="Certificate 2" class="certificate-img" onclick="openModal(this.src)">
        <h3>Web Development Course</h3>
        <p>Completed comprehensive web development training</p>
      </div>
      <div class="certificate-card">
        <img src="https://via.placeholder.com/500x350/764ba2/ffffff?text=Certificate+3" alt="Certificate 3" class="certificate-img" onclick="openModal(this.src)">
        <h3>Programming Fundamentals</h3>
        <p>Mastered core programming concepts and best practices</p>
      </div>
    </div>
  </div>

  <!-- CONTACT PAGE -->
  <div class="page" id="contact">
    <div class="section-header">
      <h2>Get In Touch</h2>
      <p>Let's work together</p>
    </div>
    <div class="contact-container">
      <div class="contact-info">
        <div class="contact-item">
          <div class="contact-icon">📧</div>
          <div>
            <h4>Email</h4>
            <p>piyushsaini445@gmail.com</p>
          </div>
        </div>
        <div class="contact-item">
          <div class="contact-icon">💼</div>
          <div>
            <h4>LinkedIn</h4>
            <p><a href="https://www.linkedin.com/in/piyush-saini-387516330" target="_blank" style="color: var(--primary);">Connect with me</a></p>
          </div>
        </div>
        <div class="contact-item">
          <div class="contact-icon">📱</div>
          <div>
            <h4>Location</h4>
            <p>India</p>
          </div>
        </div>
      </div>
      <div class="contact-form">
        <h3>Send Message</h3>
        <form>
          <div class="form-group">
            <input type="text" placeholder="Your Name" required>
          </div>
          <div class="form-group">
            <input type="email" placeholder="Your Email" required>
