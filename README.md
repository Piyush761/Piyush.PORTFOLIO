<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>My Unique 3D Portfolio</title>
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <style>
    /* Reset & Base Styles */
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }
    body {
      font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
      line-height: 1.6;
      background: #111;
      color: #fff;
      overflow-x: hidden;
    }
    a { text-decoration: none; color: inherit; }

    /* Navigation */
    nav {
      position: fixed;
      top: 0;
      width: 100%;
      background: rgba(0, 0, 0, 0.8);
      padding: 15px 0;
      z-index: 100;
      display: flex;
      justify-content: center;
    }
    nav a {
      margin: 0 20px;
      font-size: 1.1rem;
      transition: color 0.3s;
    }
    nav a:hover {
      color: #f39c12;
    }

    /* Header with Parallax & 3D Effect */
    header {
      position: relative;
      height: 100vh;
      background: url('https://via.placeholder.com/1500x600') center center/cover;
      display: flex;
      align-items: center;
      justify-content: center;
      perspective: 1000px;
    }
    header h1 {
      font-size: 4rem;
      text-transform: uppercase;
      letter-spacing: 2px;
      transform: translateZ(50px);
      animation: float 6s ease-in-out infinite;
      text-shadow: 2px 2px 4px rgba(0,0,0,0.6);
    }
    @keyframes float {
      0%, 100% { transform: translateZ(50px) translateY(0); }
      50% { transform: translateZ(50px) translateY(-20px); }
    }

    /* Main Container */
    .container {
      width: 90%;
      max-width: 1200px;
      margin: 140px auto 40px; /* leave room for fixed nav */
      padding: 20px;
    }
    section {
      background: #222;
      padding: 40px;
      margin-bottom: 60px;
      border-radius: 10px;
      box-shadow: 0 8px 16px rgba(0,0,0,0.6);
    }
    section h2 {
      text-align: center;
      margin-bottom: 30px;
      font-size: 2.5rem;
    }
    section p, section ul {
      line-height: 1.6;
      font-size: 1.1rem;
      text-align: center;
    }
    section ul {
      list-style: none;
      padding: 0;
    }
    section ul li {
      display: inline-block;
      margin: 0 10px;
      background: #f39c12;
      color: #111;
      padding: 5px 10px;
      border-radius: 5px;
    }
    /* Profile image styling */
    .profile-img {
      display: block;
      width: 150px;
      height: 150px;
      margin: 0 auto 20px;
      border-radius: 50%;
      border: 4px solid #f39c12;
      object-fit: cover;
    }

    /* 3D Card Grid for Projects */
    .card-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      grid-gap: 40px;
    }
    .card {
      perspective: 1000px;
    }
    .card-inner {
      position: relative;
      width: 100%;
      height: 400px;
      transition: transform 0.8s;
      transform-style: preserve-3d;
    }
    .card:hover .card-inner {
      transform: rotateY(180deg);
    }
    .card-front, .card-back {
      position: absolute;
      width: 100%;
      height: 100%;
      backface-visibility: hidden;
      border-radius: 10px;
    }
    .card-front {
      background: #f39c12;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 1.8rem;
      color: #111;
    }
    .card-back {
      background: #fff;
      color: #111;
      transform: rotateY(180deg);
      padding: 20px;
      overflow-y: auto;
    }

    /* Footer */
    footer {
      background: #111;
      text-align: center;
      padding: 20px;
      border-top: 1px solid #333;
    }

    /* Responsive Design */
    @media (max-width: 768px) {
      header h1 { font-size: 2.5rem; }
      nav { flex-direction: column; }
      nav a { margin: 10px 0; }
    }
  </style>
</head>
<body>
  <nav>
    <a href="#about">About</a>
    <a href="#education">Education</a>
    <a href="#skills">Skills</a>
    <a href="#projects">Projects</a>
    <a href="#contact">Contact</a>
  </nav>
  <header>
    <h1>My Unique Portfolio</h1>
  </header>
  <div class="container">
    <section id="about">
      <h2>About Me</h2>
      <img src="https://github.com/Piyush761/Piyush.PORTFOLIO/blob/f4efe63c77d7889520c6befd8219155bfc69c2fd/Piyush.jpg" alt="Profile Image" class="profile-img">
      <p>Hello! I'm Piyush Saini, a creative web developer and designer who loves pushing boundaries and exploring new technologies. My passion lies in crafting interactive, immersive web experiences that captivate audiences. Welcome to my portfolio!</p>
    </section>
    <section id="education">
      <h2>Education</h2>
      <p>Bachelors of Computer Application<br>
         Galgotias University<br>
         [2025]
      </p>
    </section>
    <section id="skills">
      <h2>Skills</h2>
      <ul>
        <li>HTML</li>
        <li>CSS</li>
        <li>Python</li>
	<li>C</li>
      </ul>
    </section>
    <section id="projects">
      <h2>Projects</h2>
      <div class="card-grid">
        <div class="card">
          <div class="card-inner">
            <div class="card-front">
              Project 1
            </div>
            <div class="card-back">
              <h3>Project One</h3>
              <p>This project showcases my ability to build a responsive and interactive web application with stunning 3D effects and animations. It’s a blend of creativity and technical prowess.</p>
            </div>
          </div>
        </div>
        <div class="card">
          <div class="card-inner">
            <div class="card-front">
              Project 2
            </div>
            <div class="card-back">
              <h3>Project Two</h3>
              <p>An innovative platform that integrates cutting-edge design with robust functionality. The project features dynamic content, API integrations, and modern web technologies.</p>
            </div>
          </div>
        </div>
        <div class="card">
          <div class="card-inner">
            <div class="card-front">
              Project 3
            </div>
            <div class="card-back">
              <h3>Project Three</h3>
              <p>A creative exploration of 3D transformations and interactive UI. This project reflects my commitment to pushing the boundaries of conventional web design and delivering unique digital experiences.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section id="contact">
      <h2>Contact</h2>
      <p>I'd love to connect! Reach out via email at <a href="mailto:your.email@example.com" style="color: #f39c12;">piyushsaini445@email.com</a> or connect with me on <a href="https://www.linkedin.com/in/piyush-saini-387516330?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" style="color: #f39c12;">LinkedIn</a>.</p>
    </section>
  </div>
  <footer>
    <p>&copy; 2023 Piyush Saini. All rights reserved.</p>
  </footer>
</body>
</html>
