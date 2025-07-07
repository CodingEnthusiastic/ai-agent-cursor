import { type NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
  try {
    const { prompt } = await request.json()

    if (!prompt) {
      return NextResponse.json({ error: "Prompt is required" }, { status: 400 })
    }

    // Generate website based on prompt
    const websiteData = generateWebsiteFromPrompt(prompt)

    return NextResponse.json(websiteData)
  } catch (error) {
    console.error("Error generating website:", error)
    return NextResponse.json({ error: "Failed to generate website" }, { status: 500 })
  }
}

function generateWebsiteFromPrompt(prompt: string) {
  const lowerPrompt = prompt.toLowerCase()

  // Portfolio website
  if (lowerPrompt.includes("portfolio")) {
    return {
      html: `<header class="hero">
        <nav class="navbar">
          <div class="nav-brand">John Doe</div>
          <ul class="nav-menu">
            <li><a href="#about">About</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
        <div class="hero-content">
          <h1>Full Stack Developer</h1>
          <p>Creating amazing web experiences with modern technologies</p>
          <button class="cta-button" onclick="scrollToSection('projects')">View My Work</button>
        </div>
      </header>

      <section id="about" class="section">
        <div class="container">
          <h2>About Me</h2>
          <div class="about-content">
            <div class="about-text">
              <p>I'm a passionate full-stack developer with 5+ years of experience building web applications. I specialize in React, Node.js, and modern web technologies.</p>
              <div class="skills">
                <span class="skill-tag">React</span>
                <span class="skill-tag">Node.js</span>
                <span class="skill-tag">TypeScript</span>
                <span class="skill-tag">Python</span>
              </div>
            </div>
            <div class="about-image">
              <div class="profile-placeholder">👨‍💻</div>
            </div>
          </div>
        </div>
      </section>

      <section id="projects" class="section">
        <div class="container">
          <h2>Featured Projects</h2>
          <div class="projects-grid">
            <div class="project-card" onclick="openProject('ecommerce')">
              <div class="project-image">🛒</div>
              <h3>E-Commerce Platform</h3>
              <p>Full-stack e-commerce solution with React and Node.js</p>
              <div class="project-tech">
                <span>React</span>
                <span>Node.js</span>
                <span>MongoDB</span>
              </div>
            </div>
            <div class="project-card" onclick="openProject('dashboard')">
              <div class="project-image">📊</div>
              <h3>Analytics Dashboard</h3>
              <p>Real-time data visualization dashboard</p>
              <div class="project-tech">
                <span>Vue.js</span>
                <span>D3.js</span>
                <span>Express</span>
              </div>
            </div>
            <div class="project-card" onclick="openProject('mobile')">
              <div class="project-image">📱</div>
              <h3>Mobile App</h3>
              <p>Cross-platform mobile application</p>
              <div class="project-tech">
                <span>React Native</span>
                <span>Firebase</span>
                <span>Redux</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" class="section">
        <div class="container">
          <h2>Get In Touch</h2>
          <div class="contact-content">
            <div class="contact-info">
              <div class="contact-item">
                <span class="contact-icon">📧</span>
                <span>john.doe@email.com</span>
              </div>
              <div class="contact-item">
                <span class="contact-icon">📱</span>
                <span>+1 (555) 123-4567</span>
              </div>
              <div class="contact-item">
                <span class="contact-icon">🌐</span>
                <span>linkedin.com/in/johndoe</span>
              </div>
            </div>
            <form class="contact-form" onsubmit="submitForm(event)">
              <input type="text" placeholder="Your Name" required>
              <input type="email" placeholder="Your Email" required>
              <textarea placeholder="Your Message" rows="5" required></textarea>
              <button type="submit">Send Message</button>
            </form>
          </div>
        </div>
      </section>`,

      css: `* {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
      }

      body {
        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        line-height: 1.6;
        color: #333;
      }

      .container {
        max-width: 1200px;
        margin: 0 auto;
        padding: 0 20px;
      }

      .hero {
        background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
        color: white;
        min-height: 100vh;
        display: flex;
        flex-direction: column;
      }

      .navbar {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 1rem 2rem;
      }

      .nav-brand {
        font-size: 1.5rem;
        font-weight: bold;
      }

      .nav-menu {
        display: flex;
        list-style: none;
        gap: 2rem;
      }

      .nav-menu a {
        color: white;
        text-decoration: none;
        transition: opacity 0.3s;
      }

      .nav-menu a:hover {
        opacity: 0.8;
      }

      .hero-content {
        flex: 1;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        text-align: center;
        padding: 2rem;
      }

      .hero-content h1 {
        font-size: 3.5rem;
        margin-bottom: 1rem;
        animation: fadeInUp 1s ease;
      }

      .hero-content p {
        font-size: 1.2rem;
        margin-bottom: 2rem;
        opacity: 0.9;
        animation: fadeInUp 1s ease 0.2s both;
      }

      .cta-button {
        background: rgba(255, 255, 255, 0.2);
        color: white;
        border: 2px solid white;
        padding: 1rem 2rem;
        font-size: 1.1rem;
        border-radius: 50px;
        cursor: pointer;
        transition: all 0.3s;
        animation: fadeInUp 1s ease 0.4s both;
      }

      .cta-button:hover {
        background: white;
        color: #667eea;
        transform: translateY(-2px);
      }

      .section {
        padding: 5rem 0;
      }

      .section:nth-child(even) {
        background: #f8f9fa;
      }

      .section h2 {
        text-align: center;
        font-size: 2.5rem;
        margin-bottom: 3rem;
        color: #333;
      }

      .about-content {
        display: grid;
        grid-template-columns: 2fr 1fr;
        gap: 3rem;
        align-items: center;
      }

      .about-text p {
        font-size: 1.1rem;
        margin-bottom: 2rem;
        color: #666;
      }

      .skills {
        display: flex;
        flex-wrap: wrap;
        gap: 1rem;
      }

      .skill-tag {
        background: #667eea;
        color: white;
        padding: 0.5rem 1rem;
        border-radius: 25px;
        font-size: 0.9rem;
      }

      .profile-placeholder {
        font-size: 8rem;
        text-align: center;
        background: #f0f0f0;
        border-radius: 50%;
        width: 200px;
        height: 200px;
        display: flex;
        align-items: center;
        justify-content: center;
        margin: 0 auto;
      }

      .projects-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
        gap: 2rem;
      }

      .project-card {
        background: white;
        padding: 2rem;
        border-radius: 10px;
        box-shadow: 0 5px 15px rgba(0,0,0,0.1);
        transition: transform 0.3s, box-shadow 0.3s;
        cursor: pointer;
      }

      .project-card:hover {
        transform: translateY(-5px);
        box-shadow: 0 10px 25px rgba(0,0,0,0.15);
      }

      .project-image {
        font-size: 3rem;
        text-align: center;
        margin-bottom: 1rem;
      }

      .project-card h3 {
        font-size: 1.3rem;
        margin-bottom: 1rem;
        color: #333;
      }

      .project-card p {
        color: #666;
        margin-bottom: 1rem;
      }

      .project-tech {
        display: flex;
        flex-wrap: wrap;
        gap: 0.5rem;
      }

      .project-tech span {
        background: #e9ecef;
        color: #495057;
        padding: 0.3rem 0.8rem;
        border-radius: 15px;
        font-size: 0.8rem;
      }

      .contact-content {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 3rem;
      }

      .contact-info {
        display: flex;
        flex-direction: column;
        gap: 1.5rem;
      }

      .contact-item {
        display: flex;
        align-items: center;
        gap: 1rem;
        font-size: 1.1rem;
      }

      .contact-icon {
        font-size: 1.5rem;
      }

      .contact-form {
        display: flex;
        flex-direction: column;
        gap: 1rem;
      }

      .contact-form input,
      .contact-form textarea {
        padding: 1rem;
        border: 2px solid #e9ecef;
        border-radius: 5px;
        font-size: 1rem;
        transition: border-color 0.3s;
      }

      .contact-form input:focus,
      .contact-form textarea:focus {
        outline: none;
        border-color: #667eea;
      }

      .contact-form button {
        background: #667eea;
        color: white;
        border: none;
        padding: 1rem;
        border-radius: 5px;
        font-size: 1rem;
        cursor: pointer;
        transition: background 0.3s;
      }

      .contact-form button:hover {
        background: #5a6fd8;
      }

      @keyframes fadeInUp {
        from {
          opacity: 0;
          transform: translateY(30px);
        }
        to {
          opacity: 1;
          transform: translateY(0);
        }
      }

      @media (max-width: 768px) {
        .hero-content h1 {
          font-size: 2.5rem;
        }
        
        .nav-menu {
          display: none;
        }
        
        .about-content,
        .contact-content {
          grid-template-columns: 1fr;
        }
        
        .projects-grid {
          grid-template-columns: 1fr;
        }
      }`,

      js: `function scrollToSection(sectionId) {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ 
            behavior: 'smooth',
            block: 'start'
          });
        }
      }

      function openProject(projectName) {
        const projects = {
          ecommerce: 'https://github.com/johndoe/ecommerce-platform',
          dashboard: 'https://github.com/johndoe/analytics-dashboard',
          mobile: 'https://github.com/johndoe/mobile-app'
        };
        
        if (projects[projectName]) {
          alert('Opening project: ' + projectName + '\\nIn a real implementation, this would open: ' + projects[projectName]);
        }
      }

      function submitForm(event) {
        event.preventDefault();
        const form = event.target;
        const formData = new FormData(form);
        
        // Simulate form submission
        alert('Thank you for your message! I will get back to you soon.');
        form.reset();
      }

      // Smooth scrolling for navigation links
      document.addEventListener('DOMContentLoaded', function() {
        const navLinks = document.querySelectorAll('.nav-menu a');
        
        navLinks.forEach(link => {
          link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            scrollToSection(targetId);
          });
        });

        // Add scroll effect to navbar
        window.addEventListener('scroll', function() {
          const navbar = document.querySelector('.navbar');
          if (window.scrollY > 100) {
            navbar.style.background = 'rgba(102, 126, 234, 0.95)';
            navbar.style.backdropFilter = 'blur(10px)';
          } else {
            navbar.style.background = 'transparent';
            navbar.style.backdropFilter = 'none';
          }
        });

        // Animate elements on scroll
        const observerOptions = {
          threshold: 0.1,
          rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver(function(entries) {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              entry.target.style.opacity = '1';
              entry.target.style.transform = 'translateY(0)';
            }
          });
        }, observerOptions);

        // Observe all sections
        document.querySelectorAll('.section').forEach(section => {
          section.style.opacity = '0';
          section.style.transform = 'translateY(30px)';
          section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
          observer.observe(section);
        });
      });`,
    }
  }

  // Landing page
  if (lowerPrompt.includes("landing")) {
    return {
      html: `<header class="hero">
        <nav class="navbar">
          <div class="nav-brand">
            <span class="logo">🚀</span>
            LaunchPad
          </div>
          <div class="nav-links">
            <a href="#features">Features</a>
            <a href="#pricing">Pricing</a>
            <a href="#contact">Contact</a>
            <button class="nav-cta" onclick="scrollToSection('signup')">Get Started</button>
          </div>
        </nav>
        
        <div class="hero-content">
          <h1>Launch Your Ideas Faster</h1>
          <p>The ultimate platform to turn your concepts into reality with powerful tools and seamless workflow.</p>
          <div class="hero-buttons">
            <button class="btn-primary" onclick="scrollToSection('signup')">Start Free Trial</button>
            <button class="btn-secondary" onclick="playDemo()">Watch Demo</button>
          </div>
          <div class="hero-stats">
            <div class="stat">
              <span class="stat-number">10K+</span>
              <span class="stat-label">Happy Users</span>
            </div>
            <div class="stat">
              <span class="stat-number">99.9%</span>
              <span class="stat-label">Uptime</span>
            </div>
            <div class="stat">
              <span class="stat-number">24/7</span>
              <span class="stat-label">Support</span>
            </div>
          </div>
        </div>
      </header>

      <section id="features" class="section">
        <div class="container">
          <h2>Powerful Features</h2>
          <div class="features-grid">
            <div class="feature-card" onclick="showFeature('speed')">
              <div class="feature-icon">⚡</div>
              <h3>Lightning Fast</h3>
              <p>Deploy your applications in seconds with our optimized infrastructure.</p>
            </div>
            <div class="feature-card" onclick="showFeature('secure')">
              <div class="feature-icon">🔒</div>
              <h3>Secure by Default</h3>
              <p>Enterprise-grade security with automatic SSL and DDoS protection.</p>
            </div>
            <div class="feature-card" onclick="showFeature('scale')">
              <div class="feature-icon">📈</div>
              <h3>Auto Scaling</h3>
              <p>Automatically scale your applications based on demand.</p>
            </div>
            <div class="feature-card" onclick="showFeature('analytics')">
              <div class="feature-icon">📊</div>
              <h3>Real-time Analytics</h3>
              <p>Monitor your application performance with detailed insights.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="pricing" class="section">
        <div class="container">
          <h2>Simple Pricing</h2>
          <div class="pricing-grid">
            <div class="pricing-card">
              <h3>Starter</h3>
              <div class="price">
                <span class="currency">$</span>
                <span class="amount">9</span>
                <span class="period">/month</span>
              </div>
              <ul class="features-list">
                <li>✅ 5 Projects</li>
                <li>✅ 10GB Storage</li>
                <li>✅ Basic Support</li>
                <li>❌ Custom Domain</li>
              </ul>
              <button class="pricing-btn" onclick="selectPlan('starter')">Choose Plan</button>
            </div>
            
            <div class="pricing-card featured">
              <div class="popular-badge">Most Popular</div>
              <h3>Pro</h3>
              <div class="price">
                <span class="currency">$</span>
                <span class="amount">29</span>
                <span class="period">/month</span>
              </div>
              <ul class="features-list">
                <li>✅ Unlimited Projects</li>
                <li>✅ 100GB Storage</li>
                <li>✅ Priority Support</li>
                <li>✅ Custom Domain</li>
              </ul>
              <button class="pricing-btn" onclick="selectPlan('pro')">Choose Plan</button>
            </div>
            
            <div class="pricing-card">
              <h3>Enterprise</h3>
              <div class="price">
                <span class="currency">$</span>
                <span class="amount">99</span>
                <span class="period">/month</span>
              </div>
              <ul class="features-list">
                <li>✅ Everything in Pro</li>
                <li>✅ Unlimited Storage</li>
                <li>✅ 24/7 Phone Support</li>
                <li>✅ SLA Guarantee</li>
              </ul>
              <button class="pricing-btn" onclick="selectPlan('enterprise')">Choose Plan</button>
            </div>
          </div>
        </div>
      </section>

      <section id="signup" class="section cta-section">
        <div class="container">
          <h2>Ready to Get Started?</h2>
          <p>Join thousands of developers who trust LaunchPad for their projects.</p>
          <form class="signup-form" onsubmit="handleSignup(event)">
            <input type="email" placeholder="Enter your email" required>
            <button type="submit">Start Free Trial</button>
          </form>
          <p class="signup-note">No credit card required • 14-day free trial</p>
        </div>
      </section>`,

      css: `* {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
      }

      body {
        font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
        line-height: 1.6;
        color: #333;
      }

      .container {
        max-width: 1200px;
        margin: 0 auto;
        padding: 0 20px;
      }

      .hero {
        background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
        color: white;
        min-height: 100vh;
        display: flex;
        flex-direction: column;
      }

      .navbar {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 1rem 2rem;
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        z-index: 1000;
        transition: all 0.3s ease;
      }

      .nav-brand {
        display: flex;
        align-items: center;
        gap: 0.5rem;
        font-size: 1.5rem;
        font-weight: bold;
      }

      .logo {
        font-size: 2rem;
      }

      .nav-links {
        display: flex;
        align-items: center;
        gap: 2rem;
      }

      .nav-links a {
        color: white;
        text-decoration: none;
        transition: opacity 0.3s;
      }

      .nav-links a:hover {
        opacity: 0.8;
      }

      .nav-cta {
        background: rgba(255, 255, 255, 0.2);
        color: white;
        border: 1px solid rgba(255, 255, 255, 0.3);
        padding: 0.5rem 1rem;
        border-radius: 25px;
        cursor: pointer;
        transition: all 0.3s;
      }

      .nav-cta:hover {
        background: white;
        color: #667eea;
      }

      .hero-content {
        flex: 1;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        text-align: center;
        padding: 8rem 2rem 4rem;
      }

      .hero-content h1 {
        font-size: 4rem;
        font-weight: 700;
        margin-bottom: 1.5rem;
        animation: fadeInUp 1s ease;
      }

      .hero-content p {
        font-size: 1.3rem;
        margin-bottom: 3rem;
        opacity: 0.9;
        max-width: 600px;
        animation: fadeInUp 1s ease 0.2s both;
      }

      .hero-buttons {
        display: flex;
        gap: 1rem;
        margin-bottom: 4rem;
        animation: fadeInUp 1s ease 0.4s both;
      }

      .btn-primary, .btn-secondary {
        padding: 1rem 2rem;
        font-size: 1.1rem;
        border-radius: 50px;
        cursor: pointer;
        transition: all 0.3s;
        border: 2px solid transparent;
      }

      .btn-primary {
        background: white;
        color: #667eea;
        border-color: white;
      }

      .btn-primary:hover {
        background: transparent;
        color: white;
        border-color: white;
      }

      .btn-secondary {
        background: transparent;
        color: white;
        border-color: rgba(255, 255, 255, 0.5);
      }

      .btn-secondary:hover {
        background: rgba(255, 255, 255, 0.1);
      }

      .hero-stats {
        display: flex;
        gap: 3rem;
        animation: fadeInUp 1s ease 0.6s both;
      }

      .stat {
        text-align: center;
      }

      .stat-number {
        display: block;
        font-size: 2rem;
        font-weight: bold;
        margin-bottom: 0.5rem;
      }

      .stat-label {
        font-size: 0.9rem;
        opacity: 0.8;
      }

      .section {
        padding: 5rem 0;
      }

      .section:nth-child(even) {
        background: #f8f9fa;
      }

      .section h2 {
        text-align: center;
        font-size: 3rem;
        font-weight: 700;
        margin-bottom: 3rem;
        color: #333;
      }

      .features-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
        gap: 2rem;
      }

      .feature-card {
        background: white;
        padding: 2.5rem;
        border-radius: 15px;
        box-shadow: 0 10px 30px rgba(0,0,0,0.1);
        transition: all 0.3s;
        cursor: pointer;
        text-align: center;
      }

      .feature-card:hover {
        transform: translateY(-10px);
        box-shadow: 0 20px 40px rgba(0,0,0,0.15);
      }

      .feature-icon {
        font-size: 3rem;
        margin-bottom: 1.5rem;
      }

      .feature-card h3 {
        font-size: 1.5rem;
        margin-bottom: 1rem;
        color: #333;
      }

      .feature-card p {
        color: #666;
        line-height: 1.6;
      }

      .pricing-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
        gap: 2rem;
        max-width: 1000px;
        margin: 0 auto;
      }

      .pricing-card {
        background: white;
        padding: 3rem 2rem;
        border-radius: 15px;
        box-shadow: 0 10px 30px rgba(0,0,0,0.1);
        text-align: center;
        position: relative;
        transition: all 0.3s;
      }

      .pricing-card:hover {
        transform: translateY(-5px);
        box-shadow: 0 20px 40px rgba(0,0,0,0.15);
      }

      .pricing-card.featured {
        border: 3px solid #667eea;
        transform: scale(1.05);
      }

      .popular-badge {
        position: absolute;
        top: -15px;
        left: 50%;
        transform: translateX(-50%);
        background: #667eea;
        color: white;
        padding: 0.5rem 1.5rem;
        border-radius: 25px;
        font-size: 0.9rem;
        font-weight: 600;
      }

      .pricing-card h3 {
        font-size: 1.5rem;
        margin-bottom: 1rem;
        color: #333;
      }

      .price {
        margin-bottom: 2rem;
      }

      .currency {
        font-size: 1.5rem;
        vertical-align: top;
      }

      .amount {
        font-size: 3rem;
        font-weight: bold;
        color: #667eea;
      }

      .period {
        font-size: 1rem;
        color: #666;
      }

      .features-list {
        list-style: none;
        margin-bottom: 2rem;
        text-align: left;
      }

      .features-list li {
        padding: 0.5rem 0;
        color: #666;
      }

      .pricing-btn {
        width: 100%;
        background: #667eea;
        color: white;
        border: none;
        padding: 1rem;
        border-radius: 10px;
        font-size: 1.1rem;
        cursor: pointer;
        transition: all 0.3s;
      }

      .pricing-btn:hover {
        background: #5a6fd8;
        transform: translateY(-2px);
      }

      .cta-section {
        background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
        color: white;
        text-align: center;
      }

      .cta-section h2 {
        color: white;
        margin-bottom: 1rem;
      }

      .cta-section p {
        font-size: 1.2rem;
        margin-bottom: 3rem;
        opacity: 0.9;
      }

      .signup-form {
        display: flex;
        max-width: 400px;
        margin: 0 auto 1rem;
        gap: 1rem;
      }

      .signup-form input {
        flex: 1;
        padding: 1rem;
        border: none;
        border-radius: 10px;
        font-size: 1rem;
      }

      .signup-form button {
        background: white;
        color: #667eea;
        border: none;
        padding: 1rem 2rem;
        border-radius: 10px;
        font-size: 1rem;
        font-weight: 600;
        cursor: pointer;
        transition: all 0.3s;
      }

      .signup-form button:hover {
        background: #f8f9fa;
        transform: translateY(-2px);
      }

      .signup-note {
        font-size: 0.9rem;
        opacity: 0.8;
      }

      @keyframes fadeInUp {
        from {
          opacity: 0;
          transform: translateY(30px);
        }
        to {
          opacity: 1;
          transform: translateY(0);
        }
      }

      @media (max-width: 768px) {
        .hero-content h1 {
          font-size: 2.5rem;
        }
        
        .nav-links {
          display: none;
        }
        
        .hero-buttons {
          flex-direction: column;
          align-items: center;
        }
        
        .hero-stats {
          flex-direction: column;
          gap: 1rem;
        }
        
        .signup-form {
          flex-direction: column;
        }
      }`,

      js: `function scrollToSection(sectionId) {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ 
            behavior: 'smooth',
            block: 'start'
          });
        }
      }

      function playDemo() {
        alert('Demo video would play here!\\n\\nIn a real implementation, this would open a video modal or redirect to a demo page.');
      }

      function showFeature(featureName) {
        const features = {
          speed: 'Lightning Fast: Our global CDN ensures your applications load in under 100ms worldwide.',
          secure: 'Secure by Default: We use enterprise-grade encryption and security protocols to protect your data.',
          scale: 'Auto Scaling: Our infrastructure automatically adjusts to handle traffic spikes without any configuration.',
          analytics: 'Real-time Analytics: Get detailed insights into your application performance and user behavior.'
        };
        
        alert(features[featureName] || 'Feature information not available.');
      }

      function selectPlan(planName) {
        const plans = {
          starter: { name: 'Starter', price: '$9/month' },
          pro: { name: 'Pro', price: '$29/month' },
          enterprise: { name: 'Enterprise', price: '$99/month' }
        };
        
        const plan = plans[planName];
        if (plan) {
          alert('You selected the ' + plan.name + ' plan (' + plan.price + ')\\n\\nIn a real implementation, this would redirect to the checkout page.');
        }
      }

      function handleSignup(event) {
        event.preventDefault();
        const email = event.target.querySelector('input[type="email"]').value;
        
        if (email) {
          alert('Thank you for signing up with email: ' + email + '\\n\\nIn a real implementation, this would create an account and send a confirmation email.');
          event.target.reset();
        }
      }

      // Initialize page functionality
      document.addEventListener('DOMContentLoaded', function() {
        // Navbar scroll effect
        window.addEventListener('scroll', function() {
          const navbar = document.querySelector('.navbar');
          if (window.scrollY > 50) {
            navbar.style.background = 'rgba(102, 126, 234, 0.95)';
            navbar.style.backdropFilter = 'blur(10px)';
          } else {
            navbar.style.background = 'transparent';
            navbar.style.backdropFilter = 'none';
          }
        });

        // Animate elements on scroll
        const observerOptions = {
          threshold: 0.1,
          rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver(function(entries) {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              entry.target.style.opacity = '1';
              entry.target.style.transform = 'translateY(0)';
            }
          });
        }, observerOptions);

        // Observe sections for animation
        document.querySelectorAll('.section').forEach(section => {
          section.style.opacity = '0';
          section.style.transform = 'translateY(30px)';
          section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
          observer.observe(section);
        });

        // Add click handlers for navigation
        document.querySelectorAll('a[href^="#"]').forEach(link => {
          link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            scrollToSection(targetId);
          });
        });
      });`,
    }
  }

  // Blog template
  if (lowerPrompt.includes("blog")) {
    return {
      html: `<header class="header">
        <nav class="navbar">
          <div class="nav-brand">
            <span class="logo">📝</span>
            <span>TechBlog</span>
          </div>
          <ul class="nav-menu">
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#categories">Categories</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
          <button class="search-btn" onclick="toggleSearch()">🔍</button>
        </nav>
        <div class="search-bar" id="searchBar">
          <input type="text" placeholder="Search articles..." onkeyup="searchArticles(event)">
        </div>
      </header>

      <main class="main-content">
        <section class="hero-section">
          <div class="hero-content">
            <h1>Welcome to TechBlog</h1>
            <p>Discover the latest in technology, programming, and digital innovation</p>
          </div>
        </section>

        <section class="featured-post">
          <div class="container">
            <h2>Featured Article</h2>
            <article class="featured-article" onclick="openArticle('featured')">
              <div class="article-image">
                <div class="image-placeholder">🚀</div>
              </div>
              <div class="article-content">
                <div class="article-meta">
                  <span class="category">Technology</span>
                  <span class="date">December 15, 2024</span>
                </div>
                <h3>The Future of Web Development: What's Coming in 2025</h3>
                <p>Explore the emerging trends and technologies that will shape web development in the coming year, from AI integration to new frameworks.</p>
                <div class="article-footer">
                  <span class="author">By John Smith</span>
                  <span class="read-time">5 min read</span>
                </div>
              </div>
            </article>
          </div>
        </section>

        <section class="blog-posts">
          <div class="container">
            <div class="posts-header">
              <h2>Latest Articles</h2>
              <div class="category-filter">
                <button class="filter-btn active" onclick="filterPosts('all')">All</button>
                <button class="filter-btn" onclick="filterPosts('technology')">Technology</button>
                <button class="filter-btn" onclick="filterPosts('programming')">Programming</button>
                <button class="filter-btn" onclick="filterPosts('design')">Design</button>
              </div>
            </div>
            
            <div class="posts-grid">
              <article class="post-card" data-category="programming" onclick="openArticle('react-hooks')">
                <div class="post-image">
                  <div class="image-placeholder">⚛️</div>
                </div>
                <div class="post-content">
                  <div class="post-meta">
                    <span class="category">Programming</span>
                    <span class="date">Dec 12, 2024</span>
                  </div>
                  <h3>Mastering React Hooks: A Complete Guide</h3>
                  <p>Learn how to use React Hooks effectively to build modern, functional components with state management.</p>
                  <div class="post-footer">
                    <span class="author">Sarah Johnson</span>
                    <span class="read-time">8 min read</span>
                  </div>
                </div>
              </article>

              <article class="post-card" data-category="design" onclick="openArticle('ui-trends')">
                <div class="post-image">
                  <div class="image-placeholder">🎨</div>
                </div>
                <div class="post-content">
                  <div class="post-meta">
                    <span class="category">Design</span>
                    <span class="date">Dec 10, 2024</span>
                  </div>
                  <h3>UI Design Trends That Will Dominate 2025</h3>
                  <p>Discover the latest UI design trends including glassmorphism, neumorphism, and minimalist interfaces.</p>
                  <div class="post-footer">
                    <span class="author">Mike Chen</span>
                    <span class="read-time">6 min read</span>
                  </div>
                </div>
              </article>

              <article class="post-card" data-category="technology" onclick="openArticle('ai-development')">
                <div class="post-image">
                  <div class="image-placeholder">🤖</div>
                </div>
                <div class="post-content">
                  <div class="post-meta">
                    <span class="category">Technology</span>
                    <span class="date">Dec 8, 2024</span>
                  </div>
                  <h3>AI in Software Development: Tools and Techniques</h3>
                  <p>How artificial intelligence is revolutionizing the way we write, test, and deploy software applications.</p>
                  <div class="post-footer">
                    <span class="author">Alex Rivera</span>
                    <span class="read-time">10 min read</span>
                  </div>
                </div>
              </article>

              <article class="post-card" data-category="programming" onclick="openArticle('typescript-guide')">
                <div class="post-image">
                  <div class="image-placeholder">📘</div>
                </div>
                <div class="post-content">
                  <div class="post-meta">
                    <span class="category">Programming</span>
                    <span class="date">Dec 5, 2024</span>
                  </div>
                  <h3>TypeScript Best Practices for Large Applications</h3>
                  <p>Essential TypeScript patterns and practices for building scalable, maintainable enterprise applications.</p>
                  <div class="post-footer">
                    <span class="author">Emma Wilson</span>
                    <span class="read-time">12 min read</span>
                  </div>
                </div>
              </article>

              <article class="post-card" data-category="technology" onclick="openArticle('cloud-computing')">
                <div class="post-image">
                  <div class="image-placeholder">☁️</div>
                </div>
                <div class="post-content">
                  <div class="post-meta">
                    <span class="category">Technology</span>
                    <span class="date">Dec 3, 2024</span>
                  </div>
                  <h3>Cloud Computing: Choosing the Right Platform</h3>
                  <p>Compare AWS, Azure, and Google Cloud to find the best cloud platform for your next project.</p>
                  <div class="post-footer">
                    <span class="author">David Park</span>
                    <span class="read-time">7 min read</span>
                  </div>
                </div>
              </article>

              <article class="post-card" data-category="design" onclick="openArticle('responsive-design')">
                <div class="post-image">
                  <div class="image-placeholder">📱</div>
                </div>
                <div class="post-content">
                  <div class="post-meta">
                    <span class="category">Design</span>
                    <span class="date">Dec 1, 2024</span>
                  </div>
                  <h3>Responsive Design: Mobile-First Approach</h3>
                  <p>Learn how to create responsive websites that work perfectly on all devices using modern CSS techniques.</p>
                  <div class="post-footer">
                    <span class="author">Lisa Zhang</span>
                    <span class="read-time">9 min read</span>
                  </div>
                </div>
              </article>
            </div>
          </div>
        </section>

        <section class="newsletter">
          <div class="container">
            <div class="newsletter-content">
              <h2>Stay Updated</h2>
              <p>Subscribe to our newsletter and never miss the latest tech insights</p>
              <form class="newsletter-form" onsubmit="subscribeNewsletter(event)">
                <input type="email" placeholder="Enter your email" required>
                <button type="submit">Subscribe</button>
              </form>
            </div>
          </div>
        </section>
      </main>

      <footer class="footer">
        <div class="container">
          <div class="footer-content">
            <div class="footer-section">
              <h3>TechBlog</h3>
              <p>Your source for the latest in technology and programming.</p>
            </div>
            <div class="footer-section">
              <h4>Categories</h4>
              <ul>
                <li><a href="#" onclick="filterPosts('technology')">Technology</a></li>
                <li><a href="#" onclick="filterPosts('programming')">Programming</a></li>
                <li><a href="#" onclick="filterPosts('design')">Design</a></li>
              </ul>
            </div>
            <div class="footer-section">
              <h4>Connect</h4>
              <div class="social-links">
                <a href="#" onclick="openSocial('twitter')">Twitter</a>
                <a href="#" onclick="openSocial('linkedin')">LinkedIn</a>
                <a href="#" onclick="openSocial('github')">GitHub</a>
              </div>
            </div>
          </div>
          <div class="footer-bottom">
            <p>&copy; 2024 TechBlog. All rights reserved.</p>
          </div>
        </div>
      </footer>`,

      css: `* {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
      }

      body {
        font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
        line-height: 1.6;
        color: #333;
        background: #fafafa;
      }

      .container {
        max-width: 1200px;
        margin: 0 auto;
        padding: 0 20px;
      }

      .header {
        background: white;
        box-shadow: 0 2px 10px rgba(0,0,0,0.1);
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        z-index: 1000;
      }

      .navbar {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 1rem 2rem;
      }

      .nav-brand {
        display: flex;
        align-items: center;
        gap: 0.5rem;
        font-size: 1.5rem;
        font-weight: bold;
        color: #2563eb;
      }

      .logo {
        font-size: 2rem;
      }

      .nav-menu {
        display: flex;
        list-style: none;
        gap: 2rem;
      }

      .nav-menu a {
        color: #333;
        text-decoration: none;
        font-weight: 500;
        transition: color 0.3s;
      }

      .nav-menu a:hover {
        color: #2563eb;
      }

      .search-btn {
        background: none;
        border: none;
        font-size: 1.2rem;
        cursor: pointer;
        padding: 0.5rem;
        border-radius: 50%;
        transition: background 0.3s;
      }

      .search-btn:hover {
        background: #f3f4f6;
      }

      .search-bar {
        background: #f8f9fa;
        padding: 1rem 2rem;
        border-top: 1px solid #e5e7eb;
        display: none;
      }

      .search-bar.active {
        display: block;
      }

      .search-bar input {
        width: 100%;
        padding: 0.75rem;
        border: 1px solid #d1d5db;
        border-radius: 8px;
        font-size: 1rem;
      }

      .main-content {
        margin-top: 80px;
      }

      .hero-section {
        background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
        color: white;
        padding: 4rem 0;
        text-align: center;
      }

      .hero-content h1 {
        font-size: 3rem;
        font-weight: 700;
        margin-bottom: 1rem;
      }

      .hero-content p {
        font-size: 1.2rem;
        opacity: 0.9;
      }

      .featured-post {
        padding: 4rem 0;
        background: white;
      }

      .featured-post h2 {
        text-align: center;
        font-size: 2.5rem;
        margin-bottom: 3rem;
        color: #333;
      }

      .featured-article {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 3rem;
        background: white;
        border-radius: 15px;
        box-shadow: 0 10px 30px rgba(0,0,0,0.1);
        overflow: hidden;
        cursor: pointer;
        transition: transform 0.3s;
      }

      .featured-article:hover {
        transform: translateY(-5px);
      }

      .article-image {
        background: #f3f4f6;
        display: flex;
        align-items: center;
        justify-content: center;
      }

      .image-placeholder {
        font-size: 4rem;
      }

      .article-content {
        padding: 2rem;
        display: flex;
        flex-direction: column;
        justify-content: center;
      }

      .article-meta {
        display: flex;
        gap: 1rem;
        margin-bottom: 1rem;
      }

      .category {
        background: #2563eb;
        color: white;
        padding: 0.25rem 0.75rem;
        border-radius: 15px;
        font-size: 0.8rem;
        font-weight: 600;
      }

      .date {
        color: #6b7280;
        font-size: 0.9rem;
      }

      .article-content h3 {
        font-size: 1.8rem;
        margin-bottom: 1rem;
        color: #333;
      }

      .article-content p {
        color: #6b7280;
        margin-bottom: 1.5rem;
        line-height: 1.6;
      }

      .article-footer {
        display: flex;
        justify-content: space-between;
        align-items: center;
        font-size: 0.9rem;
        color: #6b7280;
      }

      .blog-posts {
        padding: 4rem 0;
      }

      .posts-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 3rem;
      }

      .posts-header h2 {
        font-size: 2.5rem;
        color: #333;
      }

      .category-filter {
        display: flex;
        gap: 1rem;
      }

      .filter-btn {
        background: #f3f4f6;
        color: #6b7280;
        border: none;
        padding: 0.5rem 1rem;
        border-radius: 25px;
        cursor: pointer;
        transition: all 0.3s;
      }

      .filter-btn.active,
      .filter-btn:hover {
        background: #2563eb;
        color: white;
      }

      .posts-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
        gap: 2rem;
      }

      .post-card {
        background: white;
        border-radius: 15px;
        box-shadow: 0 5px 15px rgba(0,0,0,0.1);
        overflow: hidden;
        cursor: pointer;
        transition: all 0.3s;
      }

      .post-card:hover {
        transform: translateY(-5px);
        box-shadow: 0 10px 25px rgba(0,0,0,0.15);
      }

      .post-image {
        height: 200px;
        background: #f3f4f6;
        display: flex;
        align-items: center;
        justify-content: center;
      }

      .post-content {
        padding: 1.5rem;
      }

      .post-meta {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 1rem;
      }

      .post-content h3 {
        font-size: 1.3rem;
        margin-bottom: 1rem;
        color: #333;
      }

      .post-content p {
        color: #6b7280;
        margin-bottom: 1rem;
        line-height: 1.6;
      }

      .post-footer {
        display: flex;
        justify-content: space-between;
        align-items: center;
        font-size: 0.9rem;
        color: #6b7280;
      }

      .newsletter {
        background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
        color: white;
        padding: 4rem 0;
        text-align: center;
      }

      .newsletter-content h2 {
        font-size: 2.5rem;
        margin-bottom: 1rem;
      }

      .newsletter-content p {
        font-size: 1.2rem;
        margin-bottom: 2rem;
        opacity: 0.9;
      }

      .newsletter-form {
        display: flex;
        max-width: 400px;
        margin: 0 auto;
        gap: 1rem;
      }

      .newsletter-form input {
        flex: 1;
        padding: 1rem;
        border: none;
        border-radius: 8px;
        font-size: 1rem;
      }

      .newsletter-form button {
        background: white;
        color: #2563eb;
        border: none;
        padding: 1rem 2rem;
        border-radius: 8px;
        font-size: 1rem;
        font-weight: 600;
        cursor: pointer;
        transition: all 0.3s;
      }

      .newsletter-form button:hover {
        background: #f3f4f6;
      }

      .footer {
        background: #1f2937;
        color: white;
        padding: 3rem 0 1rem;
      }

      .footer-content {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
        gap: 2rem;
        margin-bottom: 2rem;
      }

      .footer-section h3,
      .footer-section h4 {
        margin-bottom: 1rem;
        color: white;
      }

      .footer-section p {
        color: #9ca3af;
        line-height: 1.6;
      }

      .footer-section ul {
        list-style: none;
      }

      .footer-section ul li {
        margin-bottom: 0.5rem;
      }

      .footer-section a {
        color: #9ca3af;
        text-decoration: none;
        transition: color 0.3s;
      }

      .footer-section a:hover {
        color: white;
      }

      .social-links {
        display: flex;
        gap: 1rem;
      }

      .footer-bottom {
        border-top: 1px solid #374151;
        padding-top: 1rem;
        text-align: center;
        color: #9ca3af;
      }

      @media (max-width: 768px) {
        .nav-menu {
          display: none;
        }
        
        .hero-content h1 {
          font-size: 2rem;
        }
        
        .featured-article {
          grid-template-columns: 1fr;
        }
        
        .posts-header {
          flex-direction: column;
          gap: 1rem;
        }
        
        .newsletter-form {
          flex-direction: column;
        }
      }`,

      js: `let currentFilter = 'all';

      function toggleSearch() {
        const searchBar = document.getElementById('searchBar');
        searchBar.classList.toggle('active');
        if (searchBar.classList.contains('active')) {
          searchBar.querySelector('input').focus();
        }
      }

      function searchArticles(event) {
        const searchTerm = event.target.value.toLowerCase();
        const posts = document.querySelectorAll('.post-card');
        
        posts.forEach(post => {
          const title = post.querySelector('h3').textContent.toLowerCase();
          const content = post.querySelector('p').textContent.toLowerCase();
          
          if (title.includes(searchTerm) || content.includes(searchTerm)) {
            post.style.display = 'block';
          } else {
            post.style.display = 'none';
          }
        });
      }

      function filterPosts(category) {
        currentFilter = category;
        const posts = document.querySelectorAll('.post-card');
        const filterBtns = document.querySelectorAll('.filter-btn');
        
        // Update active button
        filterBtns.forEach(btn => btn.classList.remove('active'));
        event.target.classList.add('active');
        
        // Filter posts
        posts.forEach(post => {
          if (category === 'all' || post.dataset.category === category) {
            post.style.display = 'block';
            post.style.animation = 'fadeIn 0.5s ease';
          } else {
            post.style.display = 'none';
          }
        });
      }

      function openArticle(articleId) {
        const articles = {
          'featured': {
            title: 'The Future of Web Development: What\'s Coming in 2025',
            content: 'This article explores emerging trends in web development...'
          },
          'react-hooks': {
            title: 'Mastering React Hooks: A Complete Guide',
            content: 'Learn how to use React Hooks effectively...'
          },
          'ui-trends': {
            title: 'UI Design Trends That Will Dominate 2025',
            content: 'Discover the latest UI design trends...'
          },
          'ai-development': {
            title: 'AI in Software Development: Tools and Techniques',
            content: 'How artificial intelligence is revolutionizing...'
          },
          'typescript-guide': {
            title: 'TypeScript Best Practices for Large Applications',
            content: 'Essential TypeScript patterns and practices...'
          },
          'cloud-computing': {
            title: 'Cloud Computing: Choosing the Right Platform',
            content: 'Compare AWS, Azure, and Google Cloud...'
          },
          'responsive-design': {
            title: 'Responsive Design: Mobile-First Approach',
            content: 'Learn how to create responsive websites...'
          }
        };
        
        const article = articles[articleId];
        if (article) {
          alert('Opening article: "' + article.title + '"\\n\\nIn a real blog, this would open the full article page with the complete content.');
        }
      }

      function subscribeNewsletter(event) {
        event.preventDefault();
        const email = event.target.querySelector('input[type="email"]').value;
        
        if (email) {
          alert('Thank you for subscribing with email: ' + email + '\\n\\nYou will receive our latest tech insights and updates!');
          event.target.reset();
        }
      }

      function openSocial(platform) {
        const socialLinks = {
          twitter: 'https://twitter.com/techblog',
          linkedin: 'https://linkedin.com/company/techblog',
          github: 'https://github.com/techblog'
        };
        
        alert('Opening ' + platform + ' page\\n\\nIn a real implementation, this would open: ' + socialLinks[platform]);
      }

      // Initialize page functionality
      document.addEventListener('DOMContentLoaded', function() {
        // Animate elements on scroll
        const observerOptions = {
          threshold: 0.1,
          rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver(function(entries) {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              entry.target.style.opacity = '1';
              entry.target.style.transform = 'translateY(0)';
            }
          });
        }, observerOptions);

        // Observe post cards for animation
        document.querySelectorAll('.post-card').forEach(card => {
          card.style.opacity = '0';
          card.style.transform = 'translateY(30px)';
          card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
          observer.observe(card);
        });

        // Close search bar when clicking outside
        document.addEventListener('click', function(event) {
          const searchBar = document.getElementById('searchBar');
          const searchBtn = document.querySelector('.search-btn');
          
          if (!searchBar.contains(event.target) && !searchBtn.contains(event.target)) {
            searchBar.classList.remove('active');
          }
        });

        // Add CSS animation for fade in effect
        const style = document.createElement('style');
        style.textContent = \`
          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
          }
        \`;
        document.head.appendChild(style);
      });`,
    }
  }

  // Dashboard
  if (lowerPrompt.includes("dashboard")) {
    return {
      html: `<div class="dashboard">
        <aside class="sidebar">
          <div class="sidebar-header">
            <div class="logo">
              <span class="logo-icon">📊</span>
              <span class="logo-text">Dashboard</span>
            </div>
          </div>
          <nav class="sidebar-nav">
            <ul class="nav-list">
              <li class="nav-item active">
                <a href="#" onclick="switchTab('overview')" class="nav-link">
                  <span class="nav-icon">🏠</span>
                  <span class="nav-text">Overview</span>
                </a>
              </li>
              <li class="nav-item">
                <a href="#" onclick="switchTab('analytics')" class="nav-link">
                  <span class="nav-icon">📈</span>
                  <span class="nav-text">Analytics</span>
                </a>
              </li>
              <li class="nav-item">
                <a href="#" onclick="switchTab('users')" class="nav-link">
                  <span class="nav-icon">👥</span>
                  <span class="nav-text">Users</span>
                </a>
              </li>
              <li class="nav-item">
                <a href="#" onclick="switchTab('settings')" class="nav-link">
                  <span class="nav-icon">⚙️</span>
                  <span class="nav-text">Settings</span>
                </a>
              </li>
            </ul>
          </nav>
        </aside>

        <main class="main-content">
          <header class="header">
            <div class="header-left">
              <h1 class="page-title">Dashboard Overview</h1>
              <p class="page-subtitle">Welcome back! Here's what's happening with your business today.</p>
            </div>
            <div class="header-right">
              <button class="notification-btn" onclick="showNotifications()">
                <span class="notification-icon">🔔</span>
                <span class="notification-badge">3</span>
              </button>
              <div class="user-profile" onclick="showProfile()">
                <div class="user-avatar">👤</div>
                <span class="user-name">John Doe</span>
              </div>
            </div>
          </header>

          <div class="content" id="content">
            <!-- Overview Tab Content -->
            <div class="tab-content active" id="overview">
              <div class="stats-grid">
                <div class="stat-card" onclick="showDetails('revenue')">
                  <div class="stat-header">
                    <h3>Total Revenue</h3>
                    <span class="stat-icon">💰</span>
                  </div>
                  <div class="stat-value">$45,231</div>
                  <div class="stat-change positive">+20.1% from last month</div>
                </div>
                
                <div class="stat-card" onclick="showDetails('users')">
                  <div class="stat-header">
                    <h3>Active Users</h3>
                    <span class="stat-icon">👥</span>
                  </div>
                  <div class="stat-value">2,350</div>
                  <div class="stat-change positive">+180 from last week</div>
                </div>
                
                <div class="stat-card" onclick="showDetails('orders')">
                  <div class="stat-header">
                    <h3>Orders</h3>
                    <span class="stat-icon">📦</span>
                  </div>
                  <div class="stat-value">1,234</div>
                  <div class="stat-change negative">-5% from last month</div>
                </div>
                
                <div class="stat-card" onclick="showDetails('conversion')">
                  <div class="stat-header">
                    <h3>Conversion Rate</h3>
                    <span class="stat-icon">📊</span>
                  </div>
                  <div class="stat-value">3.24%</div>
                  <div class="stat-change positive">+0.5% from last month</div>
                </div>
              </div>

              <div class="charts-grid">
                <div class="chart-card">
                  <div class="chart-header">
                    <h3>Revenue Overview</h3>
                    <select class="chart-filter" onchange="updateChart('revenue', this.value)">
                      <option value="7d">Last 7 days</option>
                      <option value="30d" selected>Last 30 days</option>
                      <option value="90d">Last 90 days</option>
                    </select>
                  </div>
                  <div class="chart-container">
                    <canvas id="revenueChart" width="400" height="200"></canvas>
                  </div>
                </div>
                
                <div class="chart-card">
                  <div class="chart-header">
                    <h3>User Activity</h3>
                    <button class="chart-action" onclick="exportData('activity')">Export</button>
                  </div>
                  <div class="chart-container">
                    <canvas id="activityChart" width="400" height="200"></canvas>
                  </div>
                </div>
              </div>

              <div class="recent-activity">
                <div class="activity-header">
                  <h3>Recent Activity</h3>
                  <button class="view-all-btn" onclick="viewAllActivity()">View All</button>
                </div>
                <div class="activity-list">
                  <div class="activity-item" onclick="viewActivity('1')">
                    <div class="activity-icon">💰</div>
                    <div class="activity-content">
                      <div class="activity-title">New order received</div>
                      <div class="activity-description">Order #1234 for $299.99</div>
                    </div>
                    <div class="activity-time">2 minutes ago</div>
                  </div>
                  
                  <div class="activity-item" onclick="viewActivity('2')">
                    <div class="activity-icon">👤</div>
                    <div class="activity-content">
                      <div class="activity-title">New user registered</div>
                      <div class="activity-description">sarah.johnson@email.com</div>
                    </div>
                    <div class="activity-time">15 minutes ago</div>
                  </div>
                  
                  <div class="activity-item" onclick="viewActivity('3')">
                    <div class="activity-icon">📊</div>
                    <div class="activity-content">
                      <div class="activity-title">Report generated</div>
                      <div class="activity-description">Monthly sales report</div>
                    </div>
                    <div class="activity-time">1 hour ago</div>
                  </div>
                </div>
              </div>
            </div>

            <!-- Analytics Tab Content -->
            <div class="tab-content" id="analytics">
              <div class="analytics-header">
                <h2>Analytics Dashboard</h2>
                <div class="date-range-picker">
                  <select onchange="updateAnalytics(this.value)">
                    <option value="today">Today</option>
                    <option value="week" selected>This Week</option>
                    <option value="month">This Month</option>
                    <option value="year">This Year</option>
                  </select>
                </div>
              </div>
              
              <div class="analytics-grid">
                <div class="analytics-card">
                  <h3>Page Views</h3>
                  <div class="analytics-value">125,430</div>
                  <div class="analytics-chart">📈</div>
                </div>
                
                <div class="analytics-card">
                  <h3>Bounce Rate</h3>
                  <div class="analytics-value">32.5%</div>
                  <div class="analytics-chart">📉</div>
                </div>
                
                <div class="analytics-card">
                  <h3>Session Duration</h3>
                  <div class="analytics-value">4m 32s</div>
                  <div class="analytics-chart">⏱️</div>
                </div>
              </div>
            </div>

            <!-- Users Tab Content -->
            <div class="tab-content" id="users">
              <div class="users-header">
                <h2>User Management</h2>
                <button class="add-user-btn" onclick="addUser()">Add New User</button>
              </div>
              
              <div class="users-table">
                <table>
                  <thead>
                    <tr>
                      <th>Name</th>
                      <th>Email</th>
                      <th>Role</th>
                      <th>Status</th>
                      <th>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr onclick="viewUser('1')">
                      <td>John Smith</td>
                      <td>john.smith@email.com</td>
                      <td>Admin</td>
                      <td><span class="status active">Active</span></td>
                      <td>
                        <button onclick="editUser('1')" class="action-btn">Edit</button>
                        <button onclick="deleteUser('1')" class="action-btn danger">Delete</button>
                      </td>
                    </tr>
                    <tr onclick="viewUser('2')">
                      <td>Sarah Johnson</td>
                      <td>sarah.johnson@email.com</td>
                      <td>User</td>
                      <td><span class="status active">Active</span></td>
                      <td>
                        <button onclick="editUser('2')" class="action-btn">Edit</button>
                        <button onclick="deleteUser('2')" class="action-btn danger">Delete</button>
                      </td>
                    </tr>
                    <tr onclick="viewUser('3')">
                      <td>Mike Wilson</td>
                      <td>mike.wilson@email.com</td>
                      <td>User</td>
                      <td><span class="status inactive">Inactive</span></td>
                      <td>
                        <button onclick="editUser('3')" class="action-btn">Edit</button>
                        <button onclick="deleteUser('3')" class="action-btn danger">Delete</button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <!-- Settings Tab Content -->
            <div class="tab-content" id="settings">
              <div class="settings-header">
                <h2>Settings</h2>
              </div>
              
              <div class="settings-sections">
                <div class="settings-section">
                  <h3>General Settings</h3>
                  <form onsubmit="saveSettings(event)">
                    <div class="form-group">
                      <label>Company Name</label>
                      <input type="text" value="My Company" />
                    </div>
                    <div class="form-group">
                      <label>Email</label>
                      <input type="email" value="admin@company.com" />
                    </div>
                    <div class="form-group">
                      <label>Timezone</label>
                      <select>
                        <option>UTC-8 (Pacific Time)</option>
                        <option>UTC-5 (Eastern Time)</option>
                        <option>UTC+0 (GMT)</option>
                      </select>
                    </div>
                    <button type="submit" class="save-btn">Save Changes</button>
                  </form>
                </div>
                
                <div class="settings-section">
                  <h3>Notifications</h3>
                  <div class="notification-settings">
                    <label class="checkbox-label">
                      <input type="checkbox" checked onchange="toggleNotification('email')">
                      <span>Email Notifications</span>
                    </label>
                    <label class="checkbox-label">
                      <input type="checkbox" checked onchange="toggleNotification('push')">
                      <span>Push Notifications</span>
                    </label>
                    <label class="checkbox-label">
                      <input type="checkbox" onchange="toggleNotification('sms')">
                      <span>SMS Notifications</span>
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>`,

      css: `* {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
      }

      body {
        font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
        background: #f8fafc;
        color: #334155;
      }

      .dashboard {
        display: flex;
        min-height: 100vh;
      }

      .sidebar {
        width: 250px;
        background: white;
        border-right: 1px solid #e2e8f0;
        position: fixed;
        height: 100vh;
        overflow-y: auto;
      }

      .sidebar-header {
        padding: 1.5rem;
        border-bottom: 1px solid #e2e8f0;
      }

      .logo {
        display: flex;
        align-items: center;
        gap: 0.75rem;
      }

      .logo-icon {
        font-size: 1.5rem;
      }

      .logo-text {
        font-size: 1.25rem;
        font-weight: 700;
        color: #1e293b;
      }

      .sidebar-nav {
        padding: 1rem 0;
      }

      .nav-list {
        list-style: none;
      }

      .nav-item {
        margin-bottom: 0.25rem;
      }

      .nav-link {
        display: flex;
        align-items: center;
        gap: 0.75rem;
        padding: 0.75rem 1.5rem;
        color: #64748b;
        text-decoration: none;
        transition: all 0.2s;
      }

      .nav-link:hover {
        background: #f1f5f9;
        color: #1e293b;
      }

      .nav-item.active .nav-link {
        background: #3b82f6;
        color: white;
      }

      .nav-icon {
        font-size: 1.1rem;
      }

      .main-content {
        flex: 1;
        margin-left: 250px;
        display: flex;
        flex-direction: column;
      }

      .header {
        background: white;
        padding: 1.5rem 2rem;
        border-bottom: 1px solid #e2e8f0;
        display: flex;
        justify-content: space-between;
        align-items: center;
      }

      .page-title {
        font-size: 1.875rem;
        font-weight: 700;
        color: #1e293b;
        margin-bottom: 0.25rem;
      }

      .page-subtitle {
        color: #64748b;
        font-size: 0.875rem;
      }

      .header-right {
        display: flex;
        align-items: center;
        gap: 1rem;
      }

      .notification-btn {
        position: relative;
        background: none;
        border: none;
        padding: 0.5rem;
        border-radius: 0.5rem;
        cursor: pointer;
        transition: background 0.2s;
      }

      .notification-btn:hover {
        background: #f1f5f9;
      }

      .notification-icon {
        font-size: 1.25rem;
      }

      .notification-badge {
        position: absolute;
        top: 0;
        right: 0;
        background: #ef4444;
        color: white;
        font-size: 0.75rem;
        padding: 0.125rem 0.375rem;
        border-radius: 9999px;
        min-width: 1.25rem;
        text-align: center;
      }

      .user-profile {
        display: flex;
        align-items: center;
        gap: 0.75rem;
        padding: 0.5rem;
        border-radius: 0.5rem;
        cursor: pointer;
        transition: background 0.2s;
      }

      .user-profile:hover {
        background: #f1f5f9;
      }

      .user-avatar {
        width: 2rem;
        height: 2rem;
        background: #3b82f6;
        color: white;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 0.875rem;
      }

      .user-name {
        font-weight: 500;
        color: #1e293b;
      }

      .content {
        flex: 1;
        padding: 2rem;
      }

      .tab-content {
        display: none;
      }

      .tab-content.active {
        display: block;
      }

      .stats-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
        gap: 1.5rem;
        margin-bottom: 2rem;
      }

      .stat-card {
        background: white;
        padding: 1.5rem;
        border-radius: 0.75rem;
        border: 1px solid #e2e8f0;
        cursor: pointer;
        transition: all 0.2s;
      }

      .stat-card:hover {
        transform: translateY(-2px);
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
      }

      .stat-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 1rem;
      }

      .stat-header h3 {
        font-size: 0.875rem;
        font-weight: 500;
        color: #64748b;
      }

      .stat-icon {
        font-size: 1.25rem;
      }

      .stat-value {
        font-size: 2rem;
        font-weight: 700;
        color: #1e293b;
        margin-bottom: 0.5rem;
      }

      .stat-change {
        font-size: 0.875rem;
        font-weight: 500;
      }

      .stat-change.positive {
        color: #059669;
      }

      .stat-change.negative {
        color: #dc2626;
      }

      .charts-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
        gap: 1.5rem;
        margin-bottom: 2rem;
      }

      .chart-card {
        background: white;
        padding: 1.5rem;
        border-radius: 0.75rem;
        border: 1px solid #e2e8f0;
      }

      .chart-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 1rem;
      }

      .chart-header h3 {
        font-size: 1.125rem;
        font-weight: 600;
        color: #1e293b;
      }

      .chart-filter,
      .chart-action {
        padding: 0.5rem 1rem;
        border: 1px solid #e2e8f0;
        border-radius: 0.375rem;
        background: white;
        cursor: pointer;
        font-size: 0.875rem;
      }

      .chart-container {
        height: 200px;
        display: flex;
        align-items: center;
        justify-content: center;
        background: #f8fafc;
        border-radius: 0.5rem;
        color: #64748b;
        font-size: 0.875rem;
      }

      .recent-activity {
        background: white;
        padding: 1.5rem;
        border-radius: 0.75rem;
        border: 1px solid #e2e8f0;
      }

      .activity-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 1rem;
      }

      .activity-header h3 {
        font-size: 1.125rem;
        font-weight: 600;
        color: #1e293b;
      }

      .view-all-btn {
        color: #3b82f6;
        background: none;
        border: none;
        cursor: pointer;
        font-size: 0.875rem;
        font-weight: 500;
      }

      .activity-list {
        display: flex;
        flex-direction: column;
        gap: 1rem;
      }

      .activity-item {
        display: flex;
        align-items: center;
        gap: 1rem;
        padding: 1rem;
        border-radius: 0.5rem;
        cursor: pointer;
        transition: background 0.2s;
      }

      .activity-item:hover {
        background: #f8fafc;
      }

      .activity-icon {
        width: 2.5rem;
        height: 2.5rem;
        background: #f1f5f9;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 1.125rem;
      }

      .activity-content {
        flex: 1;
      }

      .activity-title {
        font-weight: 500;
        color: #1e293b;
        margin-bottom: 0.25rem;
      }

      .activity-description {
        font-size: 0.875rem;
        color: #64748b;
      }

      .activity-time {
        font-size: 0.875rem;
        color: #64748b;
      }

      .analytics-header,
      .users-header,
      .settings-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 2rem;
      }

      .analytics-header h2,
      .users-header h2,
      .settings-header h2 {
        font-size: 1.5rem;
        font-weight: 700;
        color: #1e293b;
      }

      .date-range-picker select {
        padding: 0.5rem 1rem;
        border: 1px solid #e2e8f0;
        border-radius: 0.375rem;
        background: white;
      }

      .analytics-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
        gap: 1.5rem;
      }

      .analytics-card {
        background: white;
        padding: 1.5rem;
        border-radius: 0.75rem;
        border: 1px solid #e2e8f0;
        text-align: center;
      }

      .analytics-card h3 {
        font-size: 0.875rem;
        color: #64748b;
        margin-bottom: 1rem;
      }

      .analytics-value {
        font-size: 2rem;
        font-weight: 700;
        color: #1e293b;
        margin-bottom: 1rem;
      }

      .analytics-chart {
        font-size: 2rem;
      }

      .add-user-btn {
        background: #3b82f6;
        color: white;
        border: none;
        padding: 0.75rem 1.5rem;
        border-radius: 0.5rem;
        cursor: pointer;
        font-weight: 500;
      }

      .users-table {
        background: white;
        border-radius: 0.75rem;
        border: 1px solid #e2e8f0;
        overflow: hidden;
      }

      .users-table table {
        width: 100%;
        border-collapse: collapse;
      }

      .users-table th,
      .users-table td {
        padding: 1rem;
        text-align: left;
        border-bottom: 1px solid #e2e8f0;
      }

      .users-table th {
        background: #f8fafc;
        font-weight: 600;
        color: #374151;
      }

      .users-table tr {
        cursor: pointer;
        transition: background 0.2s;
      }

      .users-table tr:hover {
        background: #f8fafc;
      }

      .status {
        padding: 0.25rem 0.75rem;
        border-radius: 9999px;
        font-size: 0.75rem;
        font-weight: 500;
      }

      .status.active {
        background: #dcfce7;
        color: #166534;
      }

      .status.inactive {
        background: #fee2e2;
        color: #991b1b;
      }

      .action-btn {
        padding: 0.25rem 0.75rem;
        border: 1px solid #e2e8f0;
        border-radius: 0.25rem;
        background: white;
        cursor: pointer;
        font-size: 0.75rem;
        margin-right: 0.5rem;
      }

      .action-btn.danger {
        color: #dc2626;
        border-color: #dc2626;
      }

      .settings-sections {
        display: grid;
        gap: 2rem;
      }

      .settings-section {
        background: white;
        padding: 1.5rem;
        border-radius: 0.75rem;
        border: 1px solid #e2e8f0;
      }

      .settings-section h3 {
        font-size: 1.125rem;
        font-weight: 600;
        color: #1e293b;
        margin-bottom: 1rem;
      }

      .form-group {
        margin-bottom: 1rem;
      }

      .form-group label {
        display: block;
        font-weight: 500;
        color: #374151;
        margin-bottom: 0.5rem;
      }

      .form-group input,
      .form-group select {
        width: 100%;
        padding: 0.75rem;
        border: 1px solid #e2e8f0;
        border-radius: 0.5rem;
        font-size: 0.875rem;
      }

      .save-btn {
        background: #3b82f6;
        color: white;
        border: none;
        padding: 0.75rem 1.5rem;
        border-radius: 0.5rem;
        cursor: pointer;
        font-weight: 500;
      }

      .notification-settings {
        display: flex;
        flex-direction: column;
        gap: 1rem;
      }

      .checkbox-label {
        display: flex;
        align-items: center;
        gap: 0.75rem;
        cursor: pointer;
      }

      .checkbox-label input[type="checkbox"] {
        width: auto;
      }

      @media (max-width: 768px) {
        .sidebar {
          transform: translateX(-100%);
        }
        
        .main-content {
          margin-left: 0;
        }
        
        .stats-grid {
          grid-template-columns: 1fr;
        }
        
        .charts-grid {
          grid-template-columns: 1fr;
        }
      }`,

      js: `let currentTab = 'overview';

      function switchTab(tabName) {
        // Update active nav item
        document.querySelectorAll('.nav-item').forEach(item => {
          item.classList.remove('active');
        });
        event.target.closest('.nav-item').classList.add('active');
        
        // Update tab content
        document.querySelectorAll('.tab-content').forEach(content => {
          content.classList.remove('active');
        });
        document.getElementById(tabName).classList.add('active');
        
        // Update page title
        const titles = {
          overview: 'Dashboard Overview',
          analytics: 'Analytics Dashboard',
          users: 'User Management',
          settings: 'Settings'
        };
        document.querySelector('.page-title').textContent = titles[tabName];
        
        currentTab = tabName;
        
        // Initialize charts if switching to overview
        if (tabName === 'overview') {
          setTimeout(initializeCharts, 100);
        }
      }

      function showNotifications() {
        alert('Notifications:\\n\\n• New order received (#1234)\\n• User registration pending approval\\n• Monthly report is ready\\n\\nIn a real dashboard, this would show a dropdown with all notifications.');
      }

      function showProfile() {
        alert('User Profile:\\n\\nName: John Doe\\nEmail: john.doe@company.com\\nRole: Administrator\\n\\nIn a real dashboard, this would show a profile dropdown menu.');
      }

      function showDetails(type) {
        const details = {
          revenue: 'Revenue Details:\\n\\nTotal: $45,231\\nThis Month: $12,450\\nLast Month: $10,380\\nGrowth: +20.1%',
          users: 'User Details:\\n\\nActive Users: 2,350\\nNew This Week: 180\\nTotal Registered: 15,420\\nRetention Rate: 85%',
          orders: 'Order Details:\\n\\nTotal Orders: 1,234\\nPending: 45\\nCompleted: 1,189\\nCancelled: 23',
          conversion: 'Conversion Details:\\n\\nCurrent Rate: 3.24%\\nLast Month: 2.74%\\nImprovement: +0.5%\\nTarget: 4.0%'
        };
        
        alert(details[type] || 'Details not available');
      }

      function updateChart(chartType, period) {
        alert('Updating ' + chartType + ' chart for period: ' + period + '\\n\\nIn a real dashboard, this would update the chart with new data.');
      }

      function exportData(dataType) {
        alert('Exporting ' + dataType + ' data...\\n\\nIn a real dashboard, this would download a CSV or PDF file.');
      }

      function viewAllActivity() {
        alert('Viewing all activity...\\n\\nIn a real dashboard, this would show a detailed activity log page.');
      }

      function viewActivity(activityId) {
        const activities = {
          '1': 'Order Details:\\n\\nOrder #1234\\nCustomer: Jane Smith\\nAmount: $299.99\\nStatus: Processing',
          '2': 'User Registration:\\n\\nEmail: sarah.johnson@email.com\\nRegistered: 15 minutes ago\\nStatus: Active',
          '3': 'Report Generated:\\n\\nType: Monthly Sales Report\\nGenerated: 1 hour ago\\nSize: 2.3 MB'
        };
        
        alert(activities[activityId] || 'Activity details not found');
      }

      function updateAnalytics(period) {
        alert('Updating analytics for period: ' + period + '\\n\\nIn a real dashboard, this would refresh all analytics data.');
      }

      function addUser() {
        alert('Add New User\\n\\nIn a real dashboard, this would open a form to add a new user.');
      }

      function viewUser(userId) {
        const users = {
          '1': 'User: John Smith\\nEmail: john.smith@email.com\\nRole: Admin\\nLast Login: 2 hours ago',
          '2': 'User: Sarah Johnson\\nEmail: sarah.johnson@email.com\\nRole: User\\nLast Login: 1 day ago',
          '3': 'User: Mike Wilson\\nEmail: mike.wilson@email.com\\nRole: User\\nLast Login: 1 week ago'
        };
        
        alert(users[userId] || 'User not found');
      }

      function editUser(userId) {
        alert('Edit User ' + userId + '\\n\\nIn a real dashboard, this would open an edit form.');
      }

      function deleteUser(userId) {
        if (confirm('Are you sure you want to delete this user?')) {
          alert('User ' + userId + ' deleted successfully!');
        }
      }

      function saveSettings(event) {
        event.preventDefault();
        alert('Settings saved successfully!\\n\\nIn a real dashboard, this would save the settings to the server.');
      }

      function toggleNotification(type) {
        alert('Notification setting for ' + type + ' has been updated.');
      }

      function initializeCharts() {
        // Simulate chart initialization
        const revenueChart = document.getElementById('revenueChart');
        const activityChart = document.getElementById('activityChart');
        
        if (revenueChart) {
          const ctx = revenueChart.getContext('2d');
          ctx.fillStyle = '#3b82f6';
          ctx.fillText('Revenue Chart (Demo)', 150, 100);
        }
        
        if (activityChart) {
          const ctx = activityChart.getContext('2d');
          ctx.fillStyle = '#10b981';
          ctx.fillText('Activity Chart (Demo)', 150, 100);
        }
      }

      // Initialize dashboard
      document.addEventListener('DOMContentLoaded', function() {
        // Initialize charts
        setTimeout(initializeCharts, 500);
        
        // Add click handlers to prevent event bubbling on action buttons
        document.querySelectorAll('.action-btn').forEach(btn => {
          btn.addEventListener('click', function(e) {
            e.stopPropagation();
          });
        });
        
        // Simulate real-time updates
        setInterval(function() {
          // Update notification badge randomly
          const badge = document.querySelector('.notification-badge');
          if (badge && Math.random() > 0.8) {
            const currentCount = parseInt(badge.textContent);
            badge.textContent = currentCount + 1;
          }
        }, 30000); // Update every 30 seconds
      });`,
    }
  }

  // Default fallback for other prompts
  return {
    html: `<div class="container">
      <header class="header">
        <h1>Welcome to Your New Website</h1>
        <p>This website was generated based on your request: "${prompt}"</p>
      </header>
      
      <main class="main-content">
        <section class="hero">
          <h2>Getting Started</h2>
          <p>Your website is ready! You can customize it further by modifying the HTML, CSS, and JavaScript files.</p>
          <button class="cta-button" onclick="showInfo()">Learn More</button>
        </section>
        
        <section class="features">
          <div class="feature">
            <h3>Responsive Design</h3>
            <p>Works perfectly on all devices</p>
          </div>
          <div class="feature">
            <h3>Modern Styling</h3>
            <p>Clean and professional appearance</p>
          </div>
          <div class="feature">
            <h3>Interactive Elements</h3>
            <p>Engaging user experience</p>
          </div>
        </section>
      </main>
      
      <footer class="footer">
        <p>&copy; 2024 Your Website. All rights reserved.</p>
      </footer>
    </div>`,

    css: `* {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }

    body {
      font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
      line-height: 1.6;
      color: #333;
      background: #f4f4f4;
    }

    .container {
      max-width: 1200px;
      margin: 0 auto;
      padding: 0 20px;
    }

    .header {
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      color: white;
      text-align: center;
      padding: 4rem 0;
    }

    .header h1 {
      font-size: 3rem;
      margin-bottom: 1rem;
    }

    .header p {
      font-size: 1.2rem;
      opacity: 0.9;
    }

    .main-content {
      padding: 4rem 0;
    }

    .hero {
      text-align: center;
      margin-bottom: 4rem;
    }

    .hero h2 {
      font-size: 2.5rem;
      margin-bottom: 1rem;
      color: #333;
    }

    .hero p {
      font-size: 1.1rem;
      margin-bottom: 2rem;
      color: #666;
    }

    .cta-button {
      background: #667eea;
      color: white;
      border: none;
      padding: 1rem 2rem;
      font-size: 1.1rem;
      border-radius: 50px;
      cursor: pointer;
      transition: all 0.3s;
    }

    .cta-button:hover {
      background: #5a6fd8;
      transform: translateY(-2px);
    }

    .features {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      gap: 2rem;
    }

    .feature {
      background: white;
      padding: 2rem;
      border-radius: 10px;
      box-shadow: 0 5px 15px rgba(0,0,0,0.1);
      text-align: center;
      transition: transform 0.3s;
    }

    .feature:hover {
      transform: translateY(-5px);
    }

    .feature h3 {
      font-size: 1.5rem;
      margin-bottom: 1rem;
      color: #333;
    }

    .feature p {
      color: #666;
    }

    .footer {
      background: #333;
      color: white;
      text-align: center;
      padding: 2rem 0;
    }

    @media (max-width: 768px) {
      .header h1 {
        font-size: 2rem;
      }
      
      .hero h2 {
        font-size: 2rem;
      }
      
      .features {
        grid-template-columns: 1fr;
      }
    }`,

    js: `function showInfo() {
      alert('This is a demo website generated by AI!\\n\\nFeatures:\\n• Responsive design\\n• Modern styling\\n• Interactive elements\\n• Clean code structure\\n\\nYou can customize this website by editing the HTML, CSS, and JavaScript files.');
    }

    // Add smooth scrolling
    document.addEventListener('DOMContentLoaded', function() {
      // Add fade-in animation to features
      const features = document.querySelectorAll('.feature');
      
      const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
          }
        });
      });

      features.forEach(feature => {
        feature.style.opacity = '0';
        feature.style.transform = 'translateY(30px)';
        feature.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(feature);
      });
    });`,
  }
}
