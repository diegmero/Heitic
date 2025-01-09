<template>
    <div class="contact-us">
      <div class="contact-content">
        <h2 class="section-title">Conecta con nosotros</h2>
        <p class="contact-description">Estamos a un clic de distancia. Elige tu método preferido y comencemos a crear algo extraordinario juntos.</p>
        <div class="contact-methods">
          <div v-for="method in contactMethods" :key="method.name" class="contact-method">

            <div class="method-info">
              <h3>{{ method.name }}</h3>
              <p>{{ method.description }}</p>
              <a :href="method.link" class="contact-link">{{ method.linkText }} <i class="fas fa-arrow-right"></i></a>
            </div>
            <div class="method-icon" :style="{ backgroundColor: method.color }">
              <i :class="method.icon"></i>
            </div>
          </div>
        </div>
      </div>
      <div class="contact-image"></div>
    </div>
  </template>
  
  <script setup lang="ts">
  const contactMethods = [
    {
      name: 'WhatsApp',
      icon: 'fab fa-whatsapp',
      color: '#25D366',
      description: 'Chatea con nosotros en tiempo real',
      link: 'https://wa.me/1234567890',
      linkText: 'Iniciar chat'
    },
    {
      name: 'Email',
      icon: 'fas fa-envelope',
      color: '#EA4335',
      description: 'Escríbenos para consultas detalladas',
      link: 'mailto:info@heitic.com',
      linkText: 'Enviar correo'
    },
    {
      name: 'Teléfono',
      icon: 'fas fa-phone',
      color: '#4285F4',
      description: 'Llámanos para atención personalizada',
      link: 'tel:+1234567890',
      linkText: 'Llamar ahora'
    }
  ]
  </script>
  
  <style scoped>
  .contact-us {
    margin-top: 2rem;
    display: flex;
    background-color: var(--vp-c-bg-soft);
    overflow: hidden;
    border-radius: 1rem;
  }
  
  .contact-content {
    flex: 1;
    padding: 2rem;
  }
  
  .section-title {
    font-size: 2.5rem;
    font-weight: 700;
    margin-bottom: 1rem;
    color: var(--vp-c-text-1);
  }
  
  .contact-description {
    font-size: 1.1rem;
    max-width: 600px;
    margin-bottom: 3rem;
    color: var(--vp-c-text-2);
  }
  
  .contact-methods {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1.5rem;
}

.contact-method {
  display: flex;
  align-items: end;
  background-color: var(--vp-c-bg);
  border-radius: 12px;
  padding:15px;
  transition: all 0.3s ease;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
}

.contact-method:hover {
  transform: translateY(-5px);
  box-shadow: 0 6px 30px rgba(0, 0, 0, 0.15);
}

.method-icon {
  flex-shrink: 0;
  width: 48px;
  height: 48px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 1rem;
}

.method-icon i {
  font-size: 1.5rem;
  color: white;
}

.method-info {
  flex: 1;
}

.method-info h3 {
  font-size: 1.2rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
  color: var(--vp-c-text-1);
}

.method-info p {
  font-size: 0.9rem;
  color: var(--vp-c-text-2);
  margin-bottom: 1rem;
}

.contact-link {
  display: inline-flex;
  align-items: center;
  color: var(--vp-c-brand);
  font-weight: 500;
  text-decoration: none;
  transition: all 0.3s ease;
}

.contact-link:hover {
  color: var(--vp-c-brand-dark);
}

.contact-link i {
  margin-left: 0.5rem;
  transition: transform 0.3s ease;
}

.contact-image {
    flex: 1;
    background-image: url('https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?q=80&w=2672&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3Dlisto a');
    background-size: cover;
    background-position: center;
  }

.contact-link:hover i {
  transform: translateX(5px);
}

@media (max-width: 768px) {
  .contact-methods {
    grid-template-columns: 1fr;
  }

  .contact-method {
    padding: 1.25rem;
  }

  .method-icon {
    width: 40px;
    height: 40px;
  }

  .method-icon i {
    font-size: 1.25rem;
  }

  .method-info h3 {
    font-size: 1.1rem;
  }

  .method-info p {
    font-size: 0.85rem;
  }
}

@media (max-width: 480px) {
  .contact-method {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }

  .method-icon {
    margin-right: 0;
    margin-bottom: 1rem;
  }
}
</style>