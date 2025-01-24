<template>
    <Layout>
      <template #layout-bottom>
        <!-- Reemplazo el footer de VitePress con componente Footer -->
        <Footer />
      </template>
    </Layout>
    <Copyright />
  </template>
  
  <script setup lang="ts">
  import DefaultTheme from 'vitepress/theme'
  import Footer from './components/Footer.vue'
  
  const { Layout } = DefaultTheme
  </script>
  
  <style>
  /* Ocultar el footer original de VitePress */
  :deep(.VPFooter) {
    display: none !important;
  }
  
  /* Asegurarse de que el contenido ocupe todo el espacio disponible */
  :deep(.VPContent) {
    min-height: calc(100vh - var(--vp-nav-height));
    display: flex;
    flex-direction: column;
  }
  
  /* Asegurarse de que el contenido principal ocupe todo el espacio disponible */
  :deep(.vp-doc) {
    flex-grow: 1;
  }
  
  /* Estilos para nuestro footer personalizado */
  :deep(.site-footer) {
    margin-top: auto;
    width: 100%;
    max-width: var(--vp-layout-max-width);
    margin-left: auto;
    margin-right: auto;
    padding-left: max(32px, calc((100% - (var(--vp-layout-max-width) - 64px)) / 2));
    padding-right: max(32px, calc((100% - (var(--vp-layout-max-width) - 64px)) / 2));
  }
  </style>