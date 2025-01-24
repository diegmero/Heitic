<template>
    <footer class="site-footer">
      <div class="footer-content">
        <div class="footer-section">
          <h3>Heitic</h3>
          <p>Excelencia en TI para<br> un crecimiento sostenible</p>
          <div class="social-icons">
            <a href="#" aria-label="Facebook"><i class="fab fa-facebook-f"></i></a>
            <a href="#" aria-label="Twitter"><i class="fab fa-twitter"></i></a>
            <a href="#" aria-label="LinkedIn"><i class="fab fa-linkedin-in"></i></a>
            <a href="#" aria-label="Instagram"><i class="fab fa-instagram"></i></a>
          </div>
        </div>
        <div class="footer-section">
          <h3>Enlaces rápidos</h3>
          <ul>
            <li><a href="/services">Servicios</a></li>
            <li><a href="/portfolio">Portafolio</a></li>
            <li><a href="/about">Sobre nosotros</a></li>
            <li><a href="/contact">Contacto</a></li>
          </ul>
        </div>
        <div class="footer-section">
          <h3>Contacto</h3>
          <p><i class="fas fa-map-marker-alt"></i>Colombia</p>
          <p><i class="fas fa-phone"></i> +57 3503764821</p>
          <p><i class="fas fa-envelope"></i> admin@heitic.com</p>
        </div>
        <div class="footer-section">
          <h3>Newsletter</h3>
          <form @submit.prevent="subscribeNewsletter" class="newsletter-form">
            <input type="email" placeholder="Tu correo electrónico" required>
            <button type="submit">Suscribirse</button>
          </form>
        </div>
      </div>
    </footer>
    <div class="copy">
        <p class="copy-text">Copyright 2025 Heitic - Desarrollado por Diego Romero</p>
      </div>
  </template>
  
  <script setup lang="ts">
  const subscribeNewsletter = () => {
    // Implementar lógica de suscripción aquí
    console.log('Suscripción al newsletter');
  }
  </script>
  
  <style scoped>
  .site-footer {
    background-color: var(--vp-c-bg-soft);
    color: var(--vp-c-text-1);
    padding: 2rem 0;
    font-size: 0.9rem;
    width: 100%;
    border-radius: 20px;
  }
  
  .footer-content {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    max-width: var(--vp-layout-max-width);
    margin: 0 auto;
    padding: 0 32px;
  }
  
  .footer-section {
    flex: 1;
    min-width: 200px;
  }
  
  .footer-section h3 {
    font-weight: 600;
    font-size: 1.2rem;
    margin-bottom: 1rem;
    color: var(--vp-c-text-1);
  }
  
  .footer-section ul {
    list-style: none;
    padding: 0;
  }
  
  .footer-section ul li {
    margin-bottom: 0.5rem;
  }
  
  .footer-section a {
    color: var(--vp-c-text-2);
    text-decoration: none;
    transition: color 0.3s ease;
  }

  .footer-section p {
    color: var(--vp-c-text-2);
    text-decoration: none;
    transition: color 0.3s ease;
    line-height: 2rem;
  }
  
  .footer-section a:hover {
    color: var(--vp-c-brand);
  }
  
  .social-icons {
    display: flex;
    gap: 1rem;
    margin-top: 1rem;
  }
  
  .social-icons a {
    color: var(--vp-c-text-2);
    font-size: 1.2rem;
    transition: color 0.3s ease;
  }
  
  .social-icons a:hover {
    color: var(--vp-c-brand);
  }
  
  .newsletter-form {
    display: flex;
    flex-direction: column;
    width: 100%;
    margin-top: 1rem;
  }
  
  .newsletter-form input {
    padding: 0.5rem;
    border: 1px solid var(--vp-c-divider);
    border-radius: 4px;
    background-color: var(--vp-c-bg);
    color: var(--vp-c-text-1);
    margin-bottom: 0.5rem;
  }
  
  .newsletter-form button {
    padding: 0.5rem 1rem;
    background-color: var(--vp-c-brand);
    color: var(--vp-c-bg);
    border: none;
    border-radius: 4px;
    cursor: pointer;
    transition: background-color 0.3s ease;
  }
  
  .newsletter-form button:hover {
    background-color: var(--vp-c-brand-1);
  }
  
  @media (max-width: 768px) {
    .footer-content {
      flex-direction: column;
    }
  
    .footer-section {
      margin-bottom: 2rem;
    }
  }

  .copy {
    display: flex;
    color: var(--vp-c-text-2);
    text-align: center;
    justify-content: center;
    align-items: end;
    margin-top: 1rem;
  }
  </style>