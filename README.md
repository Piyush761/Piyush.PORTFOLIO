<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>My Portfolio - Piyush Saini</title>
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css">
  <style>
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

    nav {
      position: fixed;
      width: 100%;
      background: rgba(0, 0, 0, 0.85);
      display: flex;
      justify-content: center;
      flex-wrap: wrap;
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

    .profile img {
      width: 150px;
      height: 150px;
      border-radius: 50%;
      border: 5px solid var(--primary-color);
      object-fit: cover;
      margin-bottom: 1rem;
    }

    .certificate img {
      width: 100%;
      max-width: 600px;
      display: block;
      margin: 0 auto;
      border: 4px solid var(--primary-color);
      border-radius: 10px;
    }

    .card-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
      gap: 2rem;
      margin-top: 2rem;
    }
    .card {
      background: var(--secondary-color);
      padding: 2rem;
      border-radius: 10px;
      transition: transform 0.3s ease;
    }
    .card:hover {
      transform: translateY(-10px);
      box-shadow: 0 4px 20px rgba(0,0,0,0.4);
    }

    form {
      max-width: 600px;
      margin: 0 auto;
      display: flex;
      flex-direction: column;
      gap: 1rem;
    }
    input, textarea {
      padding: 0.75rem;
      border-radius: 5px;
      border: none;
      font-size: 1rem;
    }
    button {
      background: var(--primary-color);
      color: var(--bg-color);
      padding: 0.75rem;
      border: none;
      border-radius: 5px;
      cursor: pointer;
      font-weight: bold;
    }
    button:hover {
      background: var(--accent-color);
    }

    footer {
      text-align: center;
      padding: 2rem;
      background: var(--secondary-color);
    }
    footer a {
      color: var(--primary-color);
      margin: 0 10px;
      font-size: 1.2rem;
    }

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
    <a href="#certificate">Certificate</a>
    <a href="#contact">Contact</a>
  </nav>
  <header>
    <h1>Piyush Saini</h1>
    <p>Innovative | Creative | Passionate</p>
  </header>
  <div class="container">
    <section id="about">
      <h2>About Me</h2>
      <div class="profile">
        <img src="Piyush.jpg" alt="Piyush">
        <p>Hello, I'm Piyush Saini, a dynamic web developer and creative designer with a passion for building innovative digital experiences. I blend modern design with functional development to bring ideas to life.</p>
      </div>
    </section>
    <section id="education">
      <h2>Education</h2>
      <p><strong>Bachelors of Computer Application</strong><br>
         Galgotias University, 2025</p>
    </section>
    <section id="skills">
      <h2>Skills</h2>
      <ul>
        <li>HTML</li>
        <li>CSS</li>
        <li>Python</li>
        <li>C</li>
        <li>GitHub Basics</li>
      </ul>
    </section>
    <section id="projects">
      <h2>Projects</h2>
      <div class="card-grid">
        <div class="card">
          <h3>Project One</h3>
          <p>A responsive web app with interactive features and modern design aesthetics.</p>
        </div>
        <div class="card">
          <h3>Project Two</h3>
          <p>API-integrated project delivering dynamic and interactive web solutions.</p>
        </div>
        <div class="card">
          <h3>Project Three</h3>
          <p>UI/UX design exploration combined with robust backend development.</p>
        </div>
      </div>
    </section>
    <section id="certificate">
      <h2>Certificate</h2>
      <p>My Score Card Certificate</p>
      <div class="certificate">
        <img src="Piyush.jpg" alt="Certificate">
      </div>
    </section>
    <section id="contact">
      <h2>Contact</h2>
      <form action="https://formspree.io/f/your-form-id" method="POST">
        <input type="text" name="name" placeholder="Your Name" required>
        <input type="email" name="email" placeholder="Your Email" required>
        <textarea name="message" rows="5" placeholder="Your Message" required></textarea>
        <button type="submit">Send Message</button>
      </form>
    </section>
  </div>
  <footer>
    <p>&copy; 2025 Piyush Saini. All rights reserved.</p>
    <div>
      <a href="https://github.com/piyush761" target="_blank"><i class="fab fa-github"></i></a>
      <a href="https://linkedin.com/in/piyush-saini-387516330" target="_blank"><i class="fab fa-linkedin"></i></a>
    </div>
  </footer>
</body>
</html>
