// .vitepress/theme/index.ts
import { h } from 'vue'
import type { Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import TestimonialSlider from './components/TestimonialSlider.vue'

export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    app.component('TestimonialSlider', TestimonialSlider)
  }
} satisfies Theme