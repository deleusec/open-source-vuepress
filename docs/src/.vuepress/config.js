const { description } = require('../../package')

module.exports = {
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#title
   */
  title: 'Présentation Projet Open Source',
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#description
   */
  description: description,

  /**
   * Extra tags to be injected to the page HTML `<head>`
   *
   * ref：https://v1.vuepress.vuejs.org/config/#head
   */
  head: [
    ['meta', { name: 'theme-color', content: '#9461E5' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['link', { rel: 'icon',type:'image/png', href: '/logo.png' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }]
  ],

  /**
   * Theme configuration, here is the default theme configuration for VuePress.
   *
   * ref：https://v1.vuepress.vuejs.org/theme/default-theme-config.html
   */
  themeConfig: {
    repo: '',
    editLinks: false,
    logo:'assets/img/logo.svg',
    docsDir: '',
    editLinkText: '',
    lastUpdated: false,
    nav: [
      {
        text: 'Projets',
        link: '/projects/'
      },
      {
        text: 'Outils',
        link: '/tools/',
      },
      {
        text: 'Github',
        link: 'https://github.com/deleusec'
      }
    ],
    sidebar: {
      '/projects/': [
        {
          title: 'Projects',
          collapsable: false,
          children: [
            '',
            'geeksblabla',
            'voyager-hf',
          ]
        }
      ],

      '/tools/': [
        {
          title: 'Outils',
          collapsable: false,
          children: [
            '',
            'links'
          ]
        }
      ],
    }
  },

  /**
   * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
   */
  plugins: [
    '@vuepress/plugin-back-to-top',
    '@vuepress/plugin-medium-zoom',
  ]
}
