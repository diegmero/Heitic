<template>
  <div class="tech-stack-container">
    <h2 class="tech-stack-title">Nuestro Stack Tecnológico</h2>
    <p class="tech-stack-subtitle">Impulsando la innovación con tecnologías de vanguardia</p>
    <div class="tech-grid">
      <div v-for="(stack, category) in techStacks" :key="category" class="tech-category">
        <h3>{{ category }}</h3>
        <div class="tech-items">
          <div v-for="tech in stack" :key="tech.name" class="tech-item">
            <div class="tech-icon" :style="{ backgroundColor: tech.color }">
              <i :class="tech.icon"></i>
            </div>
            <span class="tech-name">{{ tech.name }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const techStacks = {
  'Cloud & DevOps': [
    { name: 'Google', icon: 'fab fa-google', color: '#4285F4' },
    { name: 'AWS', icon: 'fab fa-aws', color: '#FF9900' },
    { name: 'Azure', icon: 'fab fa-microsoft', color: '#0089D6' },
    { name: 'Docker', icon: 'fab fa-docker', color: '#2496ED' },
    { name: 'Kubernetes', icon: 'fas fa-dharmachakra', color: '#326CE5' },
    { name: 'Jenkins', icon: 'fab fa-jenkins', color: '#D24939' },
    { name: 'GitLab CI', icon: 'fab fa-gitlab', color: '#FCA121' },
    { name: 'Terraform', icon: 'fas fa-cube', color: '#7B42BC' },
  ],
  'Backend': [
    { name: 'Node.js', icon: 'fab fa-node-js', color: '#339933' },
    { name: 'Python', icon: 'fab fa-python', color: '#3776AB' },
    { name: 'Kotlin', icon: 'fab fa-java', color: '#D82C20' },
    { name: 'Go', icon: 'fab fa-golang', color: '#00ADD8' },
  ],
  'Frontend': [
    { name: 'React', icon: 'fab fa-react', color: '#61DAFB' },
    { name: 'Vue.js', icon: 'fab fa-vuejs', color: '#4FC08D' },
    { name: 'JavaScript', icon: 'fab fa-js', color: '#007ACC' },
    { name: 'Next.js', icon: 'fab fa-node-js', color: '#000000' },
    { name: 'Tailwind CSS', icon: 'fab fa-css3', color: '#38B2AC' },
    { name: 'GraphQL', icon: 'fas fa-project-diagram', color: '#E535AB' },
  ],
  'Herramientas': [
    { name: 'Git', icon: 'fab fa-git-alt', color: '#F05032' },
    { name: 'Jira', icon: 'fab fa-jira', color: '#0052CC' },
    { name: 'Prometheus', icon: 'fas fa-chart-line', color: '#E6522C' },
    { name: 'Grafana', icon: 'fas fa-chart-area', color: '#F46800' },
  ],
  'Bases de Datos': [
    { name: 'PostgreSQL', icon: 'fas fa-database', color: '#336791' },
    { name: 'MySQL', icon: 'fas fa-database', color: '#4479A1' },
    { name: 'MongoDB', icon: 'fas fa-database', color: '#47A248' },
    { name: 'Redis', icon: 'fas fa-database', color: '#D82C20' },
    { name: 'OracleDB', icon: 'fas fa-database', color: '#1287B1' },
  ],
  'CMS': [
    { name: 'WordPress', icon: 'fab fa-wordpress', color: '#21759B' },
    { name: 'Drupal', icon: 'fab fa-drupal', color: '#0678BE' },
    { name: 'Joomla', icon: 'fab fa-joomla', color: '#5091CD' },
    { name: 'Strapi', icon: 'fas fa-plug', color: '#4945FF' },
    { name: 'Ghost', icon: 'fas fa-ghost', color: '#0F172A' },
  ]
}
</script>

<style scoped>
/* El CSS se mantiene igual ya que no necesita cambios */
.tech-stack-container {
  padding: 2rem;
  background: linear-gradient(135deg, var(--vp-c-bg-soft) 0%, var(--vp-c-bg) 100%);
  border-radius: 16px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.tech-stack-title {
  font-size: 2.5rem;
  color: var(--vp-c-brand);
  text-align: center;
  margin-bottom: 0.5rem;
  color: var(--vp-c-text-1);
}

.tech-stack-subtitle {
  font-size: 1.2rem;
  color: var(--vp-c-text-2);
  text-align: center;
  margin-bottom: 2rem;
}

.tech-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
}

.tech-category {
  background-color: var(--vp-c-bg-soft);
  border-radius: 12px;
  padding: 1.5rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
  transition: transform 0.3s ease;
}

.tech-category:hover {
  transform: translateY(-5px);
}

.tech-category h3 {
  color: var(--vp-c-text-1);
  font-size: 1.4rem;
  font-weight: 600;
  margin-bottom: 1rem;
  text-align: center;
}

.tech-items {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1rem;
}

.tech-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 80px;
}

.tech-icon {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 0.5rem;
  transition: transform 0.3s ease;
}

.tech-icon i {
  font-size: 1.5rem;
  color: white;
}

.tech-item:hover .tech-icon {
  transform: scale(1.1);
}

.tech-name {
  font-size: 0.8rem;
  color: var(--vp-c-text-2);
  text-align: center;
}

@media (max-width: 768px) {
  .tech-grid {
    grid-template-columns: 1fr;
  }

  .tech-category {
    padding: 1rem;
  }

  .tech-item {
    width: 70px;
  }

  .tech-icon {
    width: 40px;
    height: 40px;
  }

  .tech-icon i {
    font-size: 1.2rem;
  }
}
</style>