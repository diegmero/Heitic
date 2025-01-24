<template>
  <div class="why-choose-us">
    <h2 class="section-title">¿Por qué elegirnos?</h2>
    <div class="reasons-grid">
      <div v-for="(reason, index) in reasons" :key="index" class="reason-card">
        <div class="reason-icon">
          <i :class="reason.icon"></i>
        </div>
        <div class="reason-content">
          <h3>{{ reason.title }}</h3>
          <p>{{ reason.description }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const reasons = [
  {
    icon: 'fas fa-chart-line',
    title: 'Experiencia Comprobada',
    description: 'Más de una década transformando negocios a través de la tecnología.'
  },
  {
    icon: 'fas fa-users',
    title: 'Equipo Especializado',
    description: 'Profesionales certificados en las principales tecnologías y plataformas.'
  },
  {
    icon: 'fas fa-cogs',
    title: 'Metodología Ágil',
    description: 'Desarrollo iterativo con entregas continuas y feedback constante.'
  },
  {
    icon: 'fas fa-headset',
    title: 'Soporte 24/7',
    description: 'Monitorización proactiva y respuesta inmediata ante incidencias.'
  },
  {
    icon: 'fas fa-shield-alt',
    title: 'Seguridad Garantizada',
    description: 'Implementamos las últimas tecnologías en ciberseguridad para proteger tus datos y sistemas.'
  },
  {
    icon: 'fas fa-rocket',
    title: 'Innovación Constante',
    description: 'Nos mantenemos a la vanguardia, incorporando las últimas tendencias tecnológicas a nuestras soluciones.'
  }
]
</script>

<style scoped>
.why-choose-us {
  margin-top: 2rem;
  border-radius: 20px;
  padding: 2rem 0;
  background-color: var(--vp-c-bg-soft);
}

.vp-doc h2 {
  border-top: 0;
  margin-top: 0;
}

.section-title {
  text-align: center;
  color: var(--vp-c-text-1);
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 4rem;
}

.reasons-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 0 1rem;
  padding: 0 1rem;
}

.reason-card {
  display: flex;
  align-items: flex-start;
  background-color: var(--vp-c-bg);
  border-radius: 8px;
  padding: 1.5rem;
  transition: all 0.3s ease;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
}

.reason-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 4px 20px 0 rgba(0, 0, 0, 0.15);
}

.reason-icon {
  flex-shrink: 0;
  width: 48px;
  margin-top: 1.5rem;
  height: 48px;
  margin-right: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--vp-c-brand);
}

.reason-icon i {
  font-size: 2rem;
}

.reason-content {
  flex-grow: 1;
}

.reason-card h3 {
  color: var(--vp-c-text-1);
  font-size: 1.2rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
}

.reason-card p {
  color: var(--vp-c-text-2);
  font-size: 0.9rem;
  line-height: 1.5;
}

@media (max-width: 640px) {
  .reasons-grid {
    grid-template-columns: 1fr;
  }
}
</style>