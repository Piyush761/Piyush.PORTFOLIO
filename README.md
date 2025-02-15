<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>My Attractive 3D Portfolio</title>
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <style>
    /* Global Styles & Variables */
    :root {
      --primary-color: #f39c12;
      --secondary-color: #333;
      --bg-color: #111;
      --text-color: #fff;
      --accent-color: #3498db;
    }
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }
    body, html {
      font-family: 'Poppins', sans-serif;
      background-color: var(--bg-color);
      color: var(--text-color);
      scroll-behavior: smooth;
    }
    a { text-decoration: none; color: inherit; }
    
    /* Navigation */
    nav {
      position: fixed;
      width: 100%;
      background: rgba(0, 0, 0, 0.85);
      display: flex;
      justify-content: center;
      padding: 1rem;
      z-index: 1000;
    }
    nav a {
      margin: 0 1rem;
      font-size: 1.1rem;
      transition: color 0.3s;
    }
    nav a:hover {
      color: var(--primary-color);
    }
    
    /* Header with Parallax Background & 3D Text Animation */
    header {
      height: 100vh;
      background: linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)),
                  url('https://via.placeholder.com/1500x800') center/cover no-repeat;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      text-align: center;
      position: relative;
    }
    header h1 {
      font-size: 4rem;
      text-transform: uppercase;
      letter-spacing: 2px;
      animation: fadeInDown 1.5s ease-out;
      text-shadow: 2px 2px 4px rgba(0,0,0,0.6);
    }
    header p {
      font-size: 1.5rem;
      animation: fadeInUp 1.5s ease-out;
      margin-top: 1rem;
    }
    @keyframes fadeInDown {
      from { opacity: 0; transform: translateY(-20px); }
      to { opacity: 1; transform: translateY(0); }
    }
    @keyframes fadeInUp {
      from { opacity: 0; transform: translateY(20px); }
      to { opacity: 1; transform: translateY(0); }
    }
    
    /* Main Container */
    .container {
      max-width: 1200px;
      margin: 0 auto;
      padding: 4rem 2rem;
    }
    section {
      padding: 4rem 0;
      border-bottom: 1px solid rgba(255,255,255,0.1);
    }
    section:last-child { border-bottom: none; }
    section h2 {
      text-align: center;
      margin-bottom: 2rem;
      font-size: 2.5rem;
      color: var(--primary-color);
    }
    section p, section ul {
      line-height: 1.6;
      font-size: 1.1rem;
      text-align: center;
    }
    section ul { list-style: none; padding: 0; }
    section ul li {
      display: inline-block;
      margin: 0 10px;
      background: var(--primary-color);
      color: var(--bg-color);
      padding: 5px 10px;
      border-radius: 5px;
    }
    
    /* Profile Section */
    .profile {
      display: flex;
      flex-direction: column;
      align-items: center;
      text-align: center;
    }
    .profile img {
      width: 150px;
      height: 150px;
      border-radius: 50%;
      border: 5px solid var(--primary-color);
      object-fit: cover;
      margin-bottom: 1rem;
    }
    
    /* Certificate Section */
    .certificate img {
      width: 200%;
      max-width: 800px;
      display: block;
      margin: 0 auto;
      border: 4px solid var(--primary-color);
      border-radius: 10px;
    }
    
    /* 3D Card Grid for Projects */
    .card-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
      gap: 2rem;
      margin-top: 2rem;
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
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 1rem;
    }
    .card-front {
      background: var(--primary-color);
      color: var(--bg-color);
      font-size: 1.8rem;
    }
    .card-back {
      background: var(--text-color);
      color: var(--bg-color);
      transform: rotateY(180deg);
      text-align: left;
      overflow-y: auto;
    }
    
    /* Footer */
    footer {
      text-align: center;
      padding: 2rem;
      background: var(--secondary-color);
    }
    footer p { margin: 0; }
    
    /* Responsive Adjustments */
    @media (max-width: 768px) {
      header h1 { font-size: 2.5rem; }
      nav { flex-direction: column; }
      nav a { margin: 10px 0; }
    }
  </style>
  <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600&display=swap" rel="stylesheet">
</head>
<body>
  <nav>
    <a href="#about">About</a>
    <a href="#education">Education</a>
    <a href="#skills">Skills</a>
    <a href="#projects">Projects</a>
    <a href="#certificate">Certificate</a>
    <a href="#contact">Contact</a>
  </nav>
  <header>
    <h1>My Portfolio</h1>
    <p>Innovative | Creative | Passionate</p>
  </header>
  <div class="container">
    <section id="about">
      <h2>About Me</h2>
      <div class="profile">
        <img src="https://github.com/Piyush761/Piyush.PORTFOLIO/blob/b7b219b13fcc9522bcedf23d10eea39b7643bac0/Piyush.jpg" alt="Profile Image">
        <p>Hello, I'm Piyush Saini, a dynamic web developer and creative designer with a passion for building innovative digital experiences. I blend modern design with functional development to bring ideas to life.</p>
      </div>
    </section>
    <section id="education">
      <h2>Education</h2>
      <p><strong>Bachelors of Computer Application</strong><br>
         Galgotias University, [2025]
      </p>
    </section>
    <section id="skills">
      <h2>Skills</h2>
      <ul>
        <li>HTML</li>
        <li>CSS</li>
        <li>Python</li>
	<li>C</li>
	<li>Basic Github</li>
      </ul>
    </section>
    <section id="projects">
      <h2>Projects</h2>
      <div class="card-grid">
        <div class="card">
          <div class="card-inner">
            <div class="card-front">Project 1</div>
            <div class="card-back">
              <h3>Project One</h3>
              <p>A responsive web application with interactive features and modern design aesthetics. Leveraging cutting-edge technologies to deliver an engaging user experience.</p>
            </div>
          </div>
        </div>
        <div class="card">
          <div class="card-inner">
            <div class="card-front">Project 2</div>
            <div class="card-back">
              <h3>Project Two</h3>
              <p>An innovative project that integrates APIs and real-time data to create dynamic and interactive web solutions.</p>
            </div>
          </div>
        </div>
        <div class="card">
          <div class="card-inner">
            <div class="card-front">Project 3</div>
            <div class="card-back">
              <h3>Project Three</h3>
              <p>A creative exploration of UI/UX design combined with robust backend development to build a seamless digital experience.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section id="certificate">
      <h2>Certificate</h2>
      <p>My Score Card Certificate</p>
      <div class="certificate">
        <a href="https://via.placeholder.com/600x400" target="_blank">
          <img src="https://github.com/Piyush761/Piyush.PORTFOLIO/blob/e340be9e87cefe0430a397b1f2aece3fa2bb2686/card.jpg" alt="Score Card Certificate">
        </a>
      </div>
    </section>
    <section id="contact">
      <h2>Contact</h2>
      <p>Get in touch via email at <a href="mailto:piyushsaini445@gmail.com" style="color: var(--primary-color);">your.email@example.com</a> or connect on <a href="https://www.linkedin.com/in/piyush-saini-387516330?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" style="color: var(--primary-color);">LinkedIn</a>.</p>
    </section>
  </div>
  <footer>
    <p>&copy; 2023 Piyush saini. All rights reserved.</p>
  </footer>
</body>
</html>
