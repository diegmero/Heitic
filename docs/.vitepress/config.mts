import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "Heitic | Docs",
  description: "A VitePress Site",
  themeConfig: {
    siteTitle: 'Heitic',
    nav: [
      { text: 'Home', link: '/' },
      {
        text: 'Desarrollo',
        items: [
          { text: 'Frontend', link: '/Frontend/' },
          { text: 'Backend', link: '/backend/' },
          { text: 'Database', link: '/backend/database' },
        ]
      },
      {
        text: 'Operaciones',
        items: [
          { text: 'Infraestructura', link: '/operations/docker' },
          { text: 'Contenedores', link: '/operations/kubernetes' },
          { text: 'CI/CD', link: '/operations/git' },
          { text: 'Testing', link: '/operations/testing' },
          { text: 'Monitoring', link: '/operations/monitoring' },
        ]
      },
      {
        text: 'Seguridad',
          items: [
            { text: 'Seguridad de la Infraestructura', link: '/security/infrastructure' },
            { text: 'Seguridad de la Aplicación', link: '/security/application' },
            { text: 'Compliance - Regulaciones', link: '/security/communication' },
          ]
      },
      {
        text: 'Arquitectura',
          items: [
            { text: 'Patrones de diseño', link: '/architecture/overview' },
            { text: 'Cloud Arquitecture', link: '/architecture/design' },
            { text: 'Escalabilida', link: '/architecture/deployment' },
          ]
      },
      {
        text: 'Data',
          items: [
            { text: 'Big Data', link: '/data/overview' },
            { text: 'Data Science', link: '/data/design' },
            { text: 'Data Engineering', link: '/data/deployment' },
          ]
      },
      {
        text: 'Metodologías',
          items: [
            { text: 'Agile', link: '/methodology/scrum' },
            { text: 'DevOps Culture', link: '/methodology/kanban' },
            { text: 'Quality Assurance', link: '/methodology/waterfall' },
          ]
      },
      {
        text: 'Herramientas',
          items: [
            { text: 'Control de versiones', link: '/tools/docker' },
            { text: 'IDEs', link: '/tools/kubernetes' },
            { text: 'Colaboration Tools', link: '/tools/git' },
          ]
      },
      {
        text: 'Cloud',
          items: [
            { text: 'GCP', link: '/cloud/gcp' },
            { text: 'AWS', link: '/cloud/aws' },
            { text: 'Azure', link: '/cloud/azure' },
          ]
      }
    ],

    sidebar: {
      '/guide/': [
        {
          text: 'Guide',
          items: [
            { text: 'Introduction', link: '/guide/introduction' },
            { text: 'Installation', link: '/guide/installation' }
          ]
        }
      ],
      '/Frontend/': [
        {
          text: 'Frontend',
          items: [
            { text: 'Html', link: '/Frontend/markdown-examples' },
            { text: 'Css', link: '/Frontend/api-examples' },
            { text: 'Javascript', link: '/Frontend/javascript-examples' },
            {
              text: 'Java',
              collapsed: true,
                items: [
                  { text: 'Introduction', link: '/backend/java/introduction' },
                  { text: 'Installation', link: '/backend/java/installation' }
                ]
            }
          ]
        }
      ],
      '/backend/': [
        {
          text: 'Backend',
          items: [
            { text: 'API Examples', link: '/backend/api' },
            { text: 'Database Examples', link: '/backend/database' },
          ]
        }
      ]
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' },
      { icon: 'linkedin', link: 'https://www.linkedin.com/in/vuejs-vitepress/' }
    ]
  }
})



