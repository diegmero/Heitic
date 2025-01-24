import { h } from 'vue'
import type { Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import './custom.css'
import TechStack from './components/TechStack.vue'
import LogoCarousel from './components/LogoCarousel.vue'
import TestimonialSlider from './components/TestimonialSlider.vue'
import WhyChooseUs from './components/WhyChooseUs.vue'
import ContactUs from './components/ContactUs.vue'
import Layout from './Layout.vue'
import Footer from './components/Footer.vue'

export default {
  extends: DefaultTheme,
  Layout,
  enhanceApp({ app }) {
    app.component('TechStack', TechStack)
    app.component('LogoCarousel', LogoCarousel)
    app.component('TestimonialSlider', TestimonialSlider)
    app.component('WhyChooseUs', WhyChooseUs)
    app.component('ContactUs', ContactUs)
    app.component('Footer', Footer)
  }
} satisfies Theme