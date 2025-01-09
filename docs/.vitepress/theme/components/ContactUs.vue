<template>
  <section class="contact-container">
    <div class="contact-header">
      <h2 class="title">Conecta con nosotros</h2>
      <p class="subtitle">¿Listo para comenzar? Elige tu método de contacto preferido</p>
    </div>
    
    <div class="contact-grid">
      <div v-for="method in contactMethods" 
           :key="method.name" 
           class="contact-card"
           :class="{ 'whatsapp': method.name === 'WhatsApp',
                    'email': method.name === 'Email',
                    'phone': method.name === 'Teléfono' }">
        <div class="card-content">
          <div class="icon-wrapper">
            <i :class="method.icon"></i>
          </div>
          <h3>{{ method.name }}</h3>
          <p>{{ method.description }}</p>
          <a :href="method.link" class="contact-button">
            {{ method.linkText }}
            <i class="fas fa-chevron-right"></i>
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const contactMethods = [
  {
    name: 'WhatsApp',
    icon: 'fab fa-whatsapp',
    description: 'Respuesta inmediata para tus consultas',
    link: 'https://wa.me/1234567890',
    linkText: 'Chatear ahora'
  },
  {
    name: 'Email',
    icon: 'fas fa-envelope',
    description: 'Para consultas más detalladas',
    link: 'mailto:info@heitic.com',
    linkText: 'Enviar email'
  },
  {
    name: 'Teléfono',
    icon: 'fas fa-phone',
    description: 'Atención personalizada directa',
    link: 'tel:+1234567890',
    linkText: 'Llamar'
  }
]
</script>

<style scoped>
.contact-container {
  padding: 4rem 1rem;
  max-width: 1200px;
  margin: 0 auto;
}

.contact-header {
  text-align: center;
  margin-bottom: 3rem;
}

.title{
  font-size: 2.5rem;
  font-weight: 700;
}

.subtitle {
  font-size: 1.1rem;
  color: var(--vp-c-text-2);
  max-width: 600px;
  margin: 0 auto;
}

.contact-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
  padding: 1rem;
}

.contact-card {
  border-radius: 20px;
  overflow: hidden;
  background: var(--vp-c-bg-soft);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  position: relative;
  border: 1px solid var(--vp-c-divider);
}

.contact-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);
}

.card-content {
  padding: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  height: 100%;
}

.icon-wrapper {
  width: 70px;
  height: 70px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1.5rem;
  background: var(--vp-c-bg);
  border: 2px solid var(--vp-c-brand);
  transition: transform 0.3s ease;
}

.contact-card:hover .icon-wrapper {
  transform: scale(1.1);
}

.icon-wrapper i {
  font-size: 1.8rem;
  color: var(--vp-c-brand);
}

.card-content h3 {
  font-size: 1.4rem;
  font-weight: 600;
  color: var(--vp-c-text-1);
  margin-bottom: 0.8rem;
}

.card-content p {
  color: var(--vp-c-text-1);
  margin-bottom: 1.5rem;
  line-height: 1.6;
  flex-grow: 1;
}

.contact-button {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.8rem 1.5rem;
  border-radius: 25px;
  font-weight: 500;
  transition: all 0.3s ease;
  text-decoration: none;
  background: var(--vp-c-brand);
  color: var(--vp-c-bg);
}

.contact-button:hover {
  background: var(--vp-c-brand-dark);
  transform: translateX(5px);
}

.contact-button i {
  font-size: 0.8rem;
  transition: transform 0.3s ease;
}

.contact-button:hover i {
  transform: translateX(3px);
}

/* Responsive adjustments */
@media (max-width: 768px) {
  .contact-container {
    padding: 2rem 1rem;
  }

  .title {
    font-size: 2rem;
  }

  .subtitle {
    font-size: 1rem;
  }

  .contact-grid {
    gap: 1.5rem;
  }

  .card-content {
    padding: 1.5rem;
  }
}

/* Dark mode enhancements */
:root.dark .contact-card {
  background: var(--vp-c-bg-soft);
}

:root.dark .icon-wrapper {
  background: var(--vp-c-bg-mute);
}

:root.dark .contact-button {
  background: var(--vp-c-brand);
}

:root.dark .contact-button:hover {
  background: var(--vp-c-brand-dark);
}
</style>