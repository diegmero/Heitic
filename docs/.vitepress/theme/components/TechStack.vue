<template>
  <div class="tech-stack-container">
    <div class="tech-stack-header">
      <h2 class="tech-stack-title">Tecnologías</h2>
      <p class="tech-stack-subtitle">Herramientas que impulsan mi trabajo</p>
    </div>
    
    <div class="tech-stack-grid">
      <div 
        v-for="(technologies, category) in techStacks" 
        :key="category" 
        class="tech-category-card"
      >
        <h3 class="tech-category-title">{{ category }}</h3>
        
        <div class="tech-items-grid">
          <div 
            v-for="tech in technologies" 
            :key="tech.name" 
            class="tech-item"
            :data-tech="tech.name"
          >
            <div class="tech-icon-wrapper">
              <i :class="tech.icon" class="tech-icon"></i>
            </div>
            <span class="tech-name">{{ tech.name }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const techStacks = {
  'Cloud & DevOps': [
    { name: 'Google Cloud', icon: 'fab fa-google' },
    { name: 'AWS', icon: 'fab fa-aws' },
    { name: 'Azure', icon: 'fab fa-microsoft' },
    { name: 'Docker', icon: 'fab fa-docker' },
    { name: 'Kubernetes', icon: 'fas fa-dharmachakra' },
    { name: 'Jenkins', icon: 'fab fa-jenkins' },
    { name: 'GitLab CI', icon: 'fab fa-gitlab' }
  ],
  'Backend': [
    { name: 'Node.js', icon: 'fab fa-node-js' },
    { name: 'Python', icon: 'fab fa-python' },
    { name: 'Java', icon: 'fab fa-java' },
    { name: 'Go', icon: 'fab fa-golang' }
  ],
  'Frontend': [
    { name: 'React', icon: 'fab fa-react' },
    { name: 'Vue.js', icon: 'fab fa-vuejs' },
    { name: 'JavaScript', icon: 'fab fa-js' },
    { name: 'Next.js', icon: 'fab fa-node-js' },
    { name: 'Tailwind CSS', icon: 'fab fa-css3' }
  ],
  'Herramientas': [
    { name: 'Git', icon: 'fab fa-git-alt' },
    { name: 'Jira', icon: 'fab fa-jira' },
    { name: 'Prometheus', icon: 'fas fa-chart-line' },
    { name: 'Grafana', icon: 'fas fa-chart-area' }
  ],
  'Bases de Datos': [
    { name: 'PostgreSQL', icon: 'fas fa-database' },
    { name: 'MySQL', icon: 'fas fa-database' },
    { name: 'MongoDB', icon: 'fas fa-database' },
    { name: 'Redis', icon: 'fas fa-database' },
    { name: 'OracleDB', icon: 'fas fa-database' }
  ],
  'CMS': [
    { name: 'WordPress', icon: 'fab fa-wordpress' },
    { name: 'Drupal', icon: 'fab fa-drupal' },
    { name: 'Joomla', icon: 'fab fa-joomla' },
    { name: 'Strapi', icon: 'fas fa-code' },
    { name: 'Ghost', icon: 'fas fa-ghost' }
  ]
}
</script>

<style scoped>
.tech-stack-container {
  max-width: 1200px;
  margin: 2rem auto;
  background: var(--vp-c-bg);
  color: var(--vp-c-text-1);
  overflow: hidden;
}

.tech-stack-header {
  text-align: center;
  margin-bottom: 2rem;
}

.tech-stack-title {
  font-size: 2.5rem;
  color: var(--vp-c-text-1);
  margin-bottom: 0.5rem;
  font-weight: 700;
}

.tech-stack-subtitle {
  font-size: 1.2rem;
  color: var(--vp-c-text-2);
}

.tech-stack-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 4rem;
}

.tech-category-card {
  background: var(--vp-c-bg-soft);
  border-radius: 12px;
  padding: 1.5rem;
  box-shadow: var(--vp-shadow-2);
  transition: transform 0.3s ease;
}

.tech-category-card:hover {
  transform: translateY(-10px);
}

.tech-category-title {
  text-align: center;
  font-size: 1.4rem;
  color: var(--vp-c-text-1);
  margin-bottom: 1.5rem;
  border-bottom: 2px solid var(--vp-c-divider);
  padding-bottom: 0.5rem;
}

.tech-items-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
  justify-items: center;
}

.tech-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
}

.tech-icon-wrapper {
  width: 70px;
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 0.75rem;
}

.tech-icon {
  font-size: 2.5rem;
  color: var(--vp-c-text-2);
  opacity: 0.6;
  transition: all 0.3s ease;
}

.tech-item:hover .tech-icon {
  opacity: 1;
  transform: scale(1.1);
}

/* Color específicos para tecnologías */
.tech-item[data-tech="Google Cloud"] .tech-icon { color: #4285F4; }
.tech-item[data-tech="AWS"] .tech-icon { color: #FF9900; }
.tech-item[data-tech="Azure"] .tech-icon { color: #0078D4; }
.tech-item[data-tech="Docker"] .tech-icon { color: #2496ED; }
.tech-item[data-tech="Kubernetes"] .tech-icon { color: #326CE5; }
.tech-item[data-tech="Jenkins"] .tech-icon { color: #D24939; }
.tech-item[data-tech="GitLab CI"] .tech-icon { color: #FC6D26; }
.tech-item[data-tech="Node.js"] .tech-icon { color: #339933; }
.tech-item[data-tech="Python"] .tech-icon { color: #3776AB; }
.tech-item[data-tech="Java"] .tech-icon { color: #ED1D25; }
.tech-item[data-tech="Go"] .tech-icon { color: #00ADD8; }
.tech-item[data-tech="React"] .tech-icon { color: #61DAFB; }
.tech-item[data-tech="Vue.js"] .tech-icon { color: #4FC08D; }
.tech-item[data-tech="JavaScript"] .tech-icon { color: #F7DF1E; }
.tech-item[data-tech="Next.js"] .tech-icon { color: #000000; }
.tech-item[data-tech="Tailwind CSS"] .tech-icon { color: #38B2AC; }
.tech-item[data-tech="Git"] .tech-icon { color: #F1502F; }
.tech-item[data-tech="Jira"] .tech-icon { color: #0052CC; }
.tech-item[data-tech="Prometheus"] .tech-icon { color: #E6522C; }
.tech-item[data-tech="Grafana"] .tech-icon { color: #F46800; }
.tech-item[data-tech="WordPress"] .tech-icon { color: #21759B; }
.tech-item[data-tech="Drupal"] .tech-icon { color: #0678BE; }
.tech-item[data-tech="Joomla"] .tech-icon { color: #5388B7; }
.tech-item[data-tech="Strapi"] .tech-icon { color: #4945FF; }
.tech-item[data-tech="Ghost"] .tech-icon { color: #b502fc; }
.tech-item[data-tech="PostgreSQL"] .tech-icon { color: #336791; }
.tech-item[data-tech="MySQL"] .tech-icon { color: #4479A1; }
.tech-item[data-tech="MongoDB"] .tech-icon { color: #47A248; }
.tech-item[data-tech="Redis"] .tech-icon { color: #DC382D; }
.tech-item[data-tech="OracleDB"] .tech-icon { color: #F80000; }

.tech-name {
  font-size: 0.9rem;
  color: var(--vp-c-text-2);
  text-align: center;
}

@media (max-width: 768px) {
  .tech-stack-grid {
    grid-template-columns: 1fr;
  }

  .tech-items-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}
</style>