<template>
    <div :class="$style.copyright">
      <div :class="$style.copyrightContent">
        <p>&copy; {{ currentYear }} Heitic. Todos los derechos reservados.</p>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  
  const currentYear = ref(new Date().getFullYear())
  </script>
  
  <style module>
  .copyright {
    background-color: var(--vp-c-bg);
    color: var(alt);
  }
  
  .copyrightContent {
    display: flex;
    justify-content: center;
    align-items: center;
    max-width: var(--vp-layout-max-width);
    margin: 0 auto;
    padding: 0.5rem 32px;
  }
  
  .copyrightContent p {
    margin: 0;
    font-size: 0.9rem;
    font-weight: 500;
  }
  </style>