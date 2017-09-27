/* DO NOT CHANGE THE GLOBAL VARIABLE NAME */

window.VUELOG_DATABASE = {

  config: {
    // The name of your site, will be displayed in browser tab and site header.
    brand: {'en-US': 'Vuelog', 'ru-RU': 'Видослов'},

    // The image displayed in site header right beside the brand.
    logo: './static/vuelog.svg',

    // Path to the domain root that serves your site, starts and ends with slash (`/`).
    // Set to `'/'` if your site is under domain root.
    base: '/',

    // The path to route to when you visit `/`.
    // Set to `/home`, `/blog` or a valid path at your need.
    homePath: '/home',

    // Whether footer is visible on `homePath` or not.
    homeFooter: false,

    // Vuelog interface language. Currently only support 'ru-RU' and 'en-US'.
    defaultLang: 'ru-RU',

    // Allow/disallow visitors to switch interface language.
    switchLang: true,

    // Available languages for switching. Must be a subset of supported languages, or leave empty.
    selectedLangs: [],

    // Number of posts listed in a blog/category view.
    postsCount: 3,

    // Fill in the shortname to integrate Disqus with your blog.
    disqusShortname: '',

    // Fill in the account to integrate IntenseDebate with your blog.
    intenseDebateAccount: '',

    // Fill in the uid to integrate LiveRe with your blog.
    livereUid: '',

    // Options for marked, see https://github.com/chjj/marked#options-1 for detail
    markedOptions: {}
  },

  navigation: [
    {
      label: {'en-US': 'About', 'ru-RU': 'Об этом'},
      type: 'page',
      path: '/page/about'
    },
    {
      label: {'en-US': 'Links', 'ru-RU': 'Ссылки'},
      type: 'dropdown',
      path: '', // (OPTIONAL) dropdown can be routable too if you set a valid route path
      children: [
        {
          label: {'en-US': 'Weibo', 'ru-RU': 'Хуйбо'},
          type: 'outgoing',
          link: '#'
        },
        {
          label: 'GitHub',
          type: 'outgoing',
          link: '#'
        },
        {
          label: 'StackOverflow',
          type: 'outgoing',
          link: '#'
        }
      ]
    }
  ],

  pages: [
    {
      title: {'en-US': 'About Vuelog', 'ru-RU': 'О Видослове'},
      slug: 'about',
      exclude: true,      // (OPTIONAL) `true` to exclude the page from archive view
      titleless: false,   // (OPTIONAL) `true` to hide the title in page view
      commentless: false, // (OPTIONAL) `true` to disable comments for the page
      draft: false        // (OPTIONAL) `true` to make the page temporarily inaccessible
    }
  ]
}
