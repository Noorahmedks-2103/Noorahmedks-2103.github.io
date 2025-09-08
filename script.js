<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>K S Noor Ahamad | Portfolio</title>
  <link rel="stylesheet" href="style.css">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
</head>
<body>
  <!-- Dark Mode Toggle -->
  <button id="darkModeToggle" title="Toggle Dark Mode">🌙</button>

  <!-- Hero Section -->
  <header class="hero">
    <img src="profile.jpg" alt="Noor Ahmed" class="profile-pic">
    <h1>Hi, I'm K S Noor Ahamad</h1>
    <p id="typing-text"></p>
    <a href="#projects" class="btn">View My Work</a>
  </header>

  <!-- About Section -->
  <section id="about">
    <h2>About Me</h2>
    <p>
      Passionate and results-driven Data Scientist / Machine Learning Engineer 
      with hands-on experience in Python, AI, and data analytics. Skilled in 
      preprocessing, predictive modeling, and creating impactful insights 
      through visualization and storytelling.
    </p>
  </section>

  <!-- Skills Section -->
  <section id="skills">
    <h2>Skills</h2>
    <ul>
      <li>Python (Pandas, NumPy, Scikit-learn, Matplotlib)</li>
      <li>Machine Learning & Neural Networks</li>
      <li>SQL & MongoDB</li>
      <li>Tableau & Power BI</li>
      <li>MS Excel</li>
      <li>Data Cleaning & Statistical Analysis</li>
      <li>Web / Full Stack Development</li> <!-- Added -->
    </ul>
  </section>

  <!-- Certifications Section (Timeline) -->
  <section id="certifications">
    <h2>Certifications</h2>
    <div class="timeline">
      <div class="timeline-item">
        <div class="timeline-content">
          <h3>AI Engineer Certificate - United Latino Association</h3>
          <p>Comprehensive AI training covering Python, ML, and data visualization.</p>
        </div>
      </div>
      <div class="timeline-item">
        <div class="timeline-content">
          <h3>Deploying & Evaluating Gen AI Apps - MongoDB</h3>
          <p>Hands-on project-based learning in Gen AI applications and evaluation.</p>
        </div>
      </div>
      <div class="timeline-item">
        <div class="timeline-content">
          <h3>Data Science Internship - Agrathas Academy</h3>
          <p>Worked on data pipelines, preprocessing, and predictive modeling.</p>
        </div>
      </div>
    </div>
  </section>

  <!-- Projects Section -->
  <section id="projects">
    <h2>Projects & Internships</h2>
    <div class="filters">
      <button data-filter="all">All</button>
      <button data-filter="ds">Data Science</button>
      <button data-filter="ml">Machine Learning</button>
      <button data-filter="analytics">Analytics</button>
      <button data-filter="web">Web Development</button>
    </div>

    <div class="project" data-category="ds">
      <h3>Data Science Internship - Agrathas Academy</h3>
      <p>Worked on data science pipelines, preprocessing, and model building.</p>
    </div>
    <div class="project" data-category="ml">
      <h3>Data Structures & Advanced Algorithms Internship - Six Phrase @ SVCE</h3>
      <p>Strengthened problem-solving & algorithmic thinking through projects.</p>
    </div>
    <div class="project" data-category="analytics">
      <h3>Data Analytics with Tableau - APSCHE</h3>
      <p>Designed dashboards and performed analytics on datasets.</p>
    </div>
    <div class="project" data-category="analytics">
      <h3>Webinar on Data Analytics with Gen AI - WsCube Tech</h3>
      <p>Explored AI-powered analytics and data visualization techniques.</p>
    </div>
    <div class="project" data-category="web">
      <h3>Online Mart - E-commerce Platform</h3>
      <p>Developed a full-stack online shopping platform with product listing, cart management, payment integration, and user authentication.</p>
      <a href="https://your-demo-link.com" target="_blank">View Demo</a>
      <a href="https://github.com/your-github-repo" target="_blank">GitHub Repo</a>
    </div>
  </section>

  <!-- Accomplishments Section (Timeline) -->
  <section id="accomplishments">
    <h2>Accomplishments</h2>
    <div class="timeline">
      <div class="timeline-item">
        <div class="timeline-content">
          <h3>Problem-Solving & Algorithms</h3>
          <p>Strengthened problem-solving & algorithmic thinking through coding tests.</p>
        </div>
      </div>
      <div class="timeline-item">
        <div class="timeline-content">
          <h3>Innovation Clubs</h3>
          <p>Active contributor in Coding, Robotics, and Innovation Clubs.</p>
        </div>
      </div>
      <div class="timeline-item">
        <div class="timeline-content">
          <h3>Leadership</h3>
          <p>Team Leader in Business & Entrepreneurship Program.</p>
        </div>
      </div>
    </div>
  </section>

  <!-- Contact Section -->
  <section id="contact">
    <h2>Contact</h2>
    <p>If you'd like to connect, feel free to reach out:</p>
    <div class="contact-links">
      <a href="mailto:noorahamad2103@gmail.com" class="contact-item">
        <i class="fas fa-envelope"></i> noorahamad2103@gmail.com
      </a>
      <a href="https://www.linkedin.com/in/your-linkedin" target="_blank" class="contact-item">
        <i class="fab fa-linkedin"></i> linkedin.com/in/your-linkedin
      </a>
      <a href="https://github.com/your-github" target="_blank" class="contact-item">
        <i class="fab fa-github"></i> github.com/your-github
      </a>
    </div>
  </section>

  <footer>
    <p>&copy; 2025 K S Noor Ahamad. All rights reserved.</p>
  </footer>

  <!-- Floating Buttons -->
  <div class="floating-buttons">
    <a href="mailto:noorahamad2103@gmail.com" class="floating-email" title="Email Me">
      <i class="fas fa-envelope"></i>
      <span class="tooltip">Email Me</span>
    </a>
    <a href="https://wa.me/917816080954" target="_blank" class="floating-whatsapp" title="Chat on WhatsApp">
      <i class="fab fa-whatsapp"></i>
      <span class="tooltip">Chat on WhatsApp</span>
    </a>
    <button id="backToTop" title="Go to top">
      <i class="fas fa-arrow-up"></i>
      <span class="tooltip">Go to Top</span>
    </button>
  </div>

  <script src="script.js"></script>
</body>
</html>
