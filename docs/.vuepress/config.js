module.exports = {
  title: 'Clue-UI',
  description: '最NB的UI送给最懒的你',

  head: [
    ['link', { rel: 'icon', href: '/favicon-32x32.png' }],
    ['link', { rel: 'stylesheet', href: '/style.css' }],
    // ['meta', { name: 'theme-color', content: '#3eaf7c' }]
  ],
  themeConfig: {
    nav: [
      { text: '指南', link: '/guide/' },
      { text: '沙盘', link: '/play' },
      // { text: '组建', link: '/components/' },
      // { text: '驱动', link: '/directives/' },
      // {
      //   text: '语言',
      //   items: [
      //     { text: '中文', link: '/language/chinese' },
      //     { text: 'Japanese', link: '/language/japanese' }
      //   ]
      // },
      { text: '关于', link: '/about' },
      { text: 'GitHub', link: 'https://github.com/clue-ui/clue-ui' }
    ],

    sidebar: {
      '/guide/': [
        {
          title: '开始',
          collapsable: false,
          children: [
            'install',
            'color'
          ]
        }, {
          title: '组建',
          collapsable: false,
          children: [
            'components/button',
            'components/input'
          ]
        }
      ],
      '/foo/': [
      ]
    }
  },

  // postcss todo: require .postcssrc.js
  postcss: {
    plugins: [
      require('tailwindcss')('src/clue-ui/assets/tailwind.js'),
      require('autoprefixer')
    ]
  },

  // markdown
  markdown: {
    config: md => {
      md.use(require('./markdown/demo'))
    }
  }
}
