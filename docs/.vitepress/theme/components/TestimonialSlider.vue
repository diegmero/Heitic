<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

interface Testimonial {
  id: number
  name: string
  company: string
  role: string
  image: string
  quote: string
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'Ana Martínez',
    company: 'TechCorp',
    role: 'CTO',
    image: 'https://w7.pngwing.com/pngs/364/52/png-transparent-avatar-girl-person-user-woman-avatar-vol-1-icon.png',
    quote: 'Heitic transformó completamente nuestra infraestructura tecnológica. Su equipo demostró un nivel excepcional de profesionalismo y expertise.'
  },
  {
    id: 2,
    name: 'Carlos Rodriguez',
    company: 'InnovaSoft',
    role: 'CEO',
    quote: 'La consultoría estratégica de Heitic nos ayudó a optimizar nuestros procesos y reducir costos operativos en un 40%, me encantó y aún continuamos.',
    image: 'https://www.creativefabrica.com/wp-content/uploads/2023/01/30/Bearded-Man-Avatar-Icon-Graphics-59392089-1.jpg'
  },
  {
    id: 3,
    name: 'Laura Sánchez',
    company: 'DataPro',
    role: 'Director de Operaciones',
    quote: 'Su solución de analytics nos permitió tomar decisiones basadas en datos que impulsaron nuestro crecimiento ya que se realizó transformación digital.',
    image: 'https://img.favpng.com/19/23/8/businessperson-avatar-woman-png-favpng-iEUYrF6jymp6RPPizhu2jUUA7.jpg'
  }
]

const currentIndex = ref(0)
const autoPlayInterval = ref<number | null>(null)

const nextTestimonial = () => {
  currentIndex.value = (currentIndex.value + 1) % testimonials.length
}

const prevTestimonial = () => {
  currentIndex.value = currentIndex.value === 0 ? testimonials.length - 1 : currentIndex.value - 1
}

const startAutoPlay = () => {
  autoPlayInterval.value = window.setInterval(nextTestimonial, 5000)
}

const stopAutoPlay = () => {
  if (autoPlayInterval.value) {
    clearInterval(autoPlayInterval.value)
    autoPlayInterval.value = null
  }
}

onMounted(() => {
  startAutoPlay()
})

onUnmounted(() => {
  stopAutoPlay()
})
</script>

<template>
  <div 
    class="testimonial-slider"
    @mouseenter="stopAutoPlay"
    @mouseleave="startAutoPlay"
  >
    <div class="testimonial-container">
      <div class="image-column">
        <img src="https://lh4.googleusercontent.com/kwReoruMMLhs9AXiSLQt2Ga3TFhbz9Txb78M-_tfXLTGJwr_iCXwPO7QgiYq7NzcB0KbJ9wZCiTPVMn1AgfLQXHgoJ-eeo-P3dhnfW-EBulAOFubKWpARzEyduxCzi-iZll17ryV" alt="Testimonial Image" class="testimonial-image">
      </div>
      <div class="content-column">
        <div 
          class="testimonial"
          v-for="(testimonial, index) in testimonials"
          :key="testimonial.id"
          :class="{ active: index === currentIndex }"
        >
          <div class="testimonial-content">
            <div class="quote-icon">❝</div>
            <p class="quote">{{ testimonial.quote }}</p>
            <div class="author-info">
              <img 
                :src="testimonial.image" 
                :alt="testimonial.name"
                class="author-image"
              />
              <div class="author-details">
                <strong class="author-name">{{ testimonial.name }}</strong>
                <span class="author-role">{{ testimonial.role }}</span>
                <span class="author-company">{{ testimonial.company }}</span>
              </div>
            </div>
          </div>
        </div>

        <div class="controls">
          <button @click="prevTestimonial" class="control-button">←</button>
          <div class="dots">
            <button 
              v-for="(_, index) in testimonials" 
              :key="index"
              @click="currentIndex = index"
              :class="{ active: index === currentIndex }"
              class="dot-button"
            />
          </div>
          <button @click="nextTestimonial" class="control-button">→</button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.testimonial-slider {
  width: 100%;
  max-width: 100%;
  margin: 2rem auto;
  background-color: var(--vp-c-bg-soft);
  border-radius: 12px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  overflow: hidden;
}

.testimonial-container {
  display: flex;
  min-height: 100%;
}

.image-column {
  flex: 1;
  overflow: hidden;
}

.testimonial-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.content-column {
  flex: 1;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.testimonial {
  position: absolute;
  opacity: 0;
  transform: translateX(20px);
  transition: all 0.5s ease-in-out;
  visibility: hidden;
}

.testimonial.active {
  position: relative;
  opacity: 1;
  transform: translateX(0);
  visibility: visible;
}

.testimonial-content {
  text-align: left;
}

.quote-icon {
  font-size: 3rem;
  color: var(--vp-c-brand);
  margin-bottom: 1rem;
  line-height: 1;
}

.quote {
  font-size: 1.1rem;
  line-height: 1.6;
  color: var(--vp-c-text-1);
  margin-bottom: 2rem;
}

.author-info {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.author-image {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  object-fit: cover;
  border: 3px solid var(--vp-c-brand);
}

.author-details {
  text-align: left;
}

.author-name {
  display: block;
  color: var(--vp-c-text-1);
  font-size: 1.1rem;
  margin-bottom: 0.2rem;
}

.author-role,
.author-company {
  display: block;
  color: var(--vp-c-text-2);
  font-size: 0.9rem;
}

.controls {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 1rem;
  margin-top: 2rem;
}

.control-button {
  background: var(--vp-c-brand);
  color: white;
  border: none;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background-color 0.3s;
}


.dots {
  display: flex;
  gap: 0.5rem;
}

.dot-button {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  border: none;
  background: var(--vp-c-text-3);
  cursor: pointer;
  padding: 0;
  transition: background-color 0.3s;
}

.dot-button.active {
  background: var(--vp-c-brand);
}

@media (max-width: 768px) {
  .testimonial-container {
    flex-direction: column;
  }

  .image-column {
    height: 200px;
  }

  .content-column {
    padding: 1rem;
  }

  .quote {
    font-size: 1rem;
  }

  .author-image {
    width: 50px;
    height: 50px;
  }

  .controls {
    justify-content: center;
  }
}
</style>