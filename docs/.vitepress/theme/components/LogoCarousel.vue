<script setup lang="ts">
import { ref } from 'vue'

const logos = ref([
  { id: 1, name: 'Cliente 1', image: 'https://granappletours.com/wp-content/uploads/2020/08/Logo-Gran-Apple-Tours-4-1-1024x378.png' },
  { id: 2, name: 'Cliente 2', image: 'https://www.transvalvanera.com/wp-content/uploads/2024/06/Logotipo-home-2.png' },
  { id: 3, name: 'Cliente 3', image: 'http://cafamar.com.ar/wp-content/uploads/2023/12/Nuevo-logo-png-1030x296.png' },
  { id: 4, name: 'Cliente 4', image: 'https://www.glassdrive.es/sites/d10-glassdrive.es/files/styles/text_image_1200w/public/images/logo%20largo%20%281%29.png?itok=I_gEEtfJ' },
  { id: 5, name: 'Cliente 5', image: 'https://o4ti.com/wp-content/uploads/2024/07/Logo-a-color-.png' },
  { id: 6, name: 'Cliente 6', image: 'https://villavicencio.gov.co/wp-content/uploads/2024/02/Logo-Alcaldia-Texto-Azul.png' },
  { id: 7, name: 'Cliente 7', image: 'https://espacacias.com/wp-content/uploads/2023/10/Logo-Color-Separado-horizontal.png' },
  { id: 8, name: 'Cliente 8', image: '/api/placeholder/120/60' },
])
</script>

<template>
  <div class="logo-carousel">
    <div class="container">
      <h2 class="carousel-title">Empresas que confían en nosotros</h2>
      <div class="logo-container">
        <div class="logo-scroll">
          <div v-for="logo in [...logos, ...logos]" :key="logo.id" class="logo-item">
            <img 
              :src="logo.image" 
              :alt="logo.name"
              class="logo-image"
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.logo-carousel {
  padding: 2rem 0;
  background-color: var(--vp-c-bg-soft);
  overflow: hidden;
}

.container {
  max-width: 1152px;
  margin: 0 auto;
  padding: 0 24px;
}

.carousel-title {
  font-size: 2.5rem;
  font-weight: 600;
  margin-bottom: 3.5rem;
  text-align: center;
  color: var(--vp-c-text-1);
}

.logo-container {
  position: relative;
  overflow: hidden;
}

.logo-scroll {
  display: flex;
  animation: scroll 25s linear infinite;
  width: 200%;
}

.logo-item {
  flex: 0 0 auto;
  margin: 0 2rem;
}

.logo-image {
  height: 3rem;
  width: auto;
  filter: grayscale(100%);
  opacity: 0.7;
  transition: all 0.3s ease;
}

.logo-image:hover {
  filter: grayscale(0%);
  opacity: 1;
}

@keyframes scroll {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-50%);
  }
}

@media (max-width: 640px) {
  .container {
    padding: 0 16px;
  }

  .carousel-title {
    font-size: 1.25rem;
  }

  .logo-image {
    height: 2.5rem;
  }
}
</style>