import Vue from 'vue'
import VueMeta from 'vue-meta'
import VueRouter from 'vue-router'
import * as database from 'database'

import VuelogHome from '../views/VuelogHome'
import VuelogOops from '../views/VuelogOops'
import VuelogPage from '../views/VuelogPage'
import VuelogContent from '../views/VuelogContent'

Vue.use(VueMeta)
Vue.use(VueRouter)

function contentRoutes (name) {
  return [
    { path: '', name: name, component: VuelogContent },
    { path: ':part', name: `${name}-more`, component: VuelogContent }
  ]
}

var routes = [
  { path: '/page/:page', component: VuelogPage, children: contentRoutes('page') },
  { path: '/oops', name: 'oops', component: VuelogOops }
]

if (database.config.homePath === '/home') {
  routes.push({ path: '/home', name: 'home', component: VuelogHome })
} else {
  routes.push({ path: '/home', redirect: database.config.homePath })
}
routes.push({ path: '/', redirect: database.config.homePath })
routes.push({ path: '*', redirect: '/oops' })

const router = new VueRouter({
  routes,
  mode: 'hash',
  base: database.config.base
})

router.beforeEach((to, from, next) => {
  var modified = false
  var route = Object.assign({}, to)

  // Param `part` is presented but not a natural number
  if (to.params.part) {
    let natural = Number.parseInt(to.params.part, 10)
    if (!Number.isNaN(natural) && `${natural}` !== to.params.part) {
      route.params.part = `${natural}`
      modified = true
    }
  }

  // Locale set could be missing
  if (from.query.lang && !to.query.lang) {
    route.query.lang = from.query.lang
    modified = true
  }

  if (modified) {
    next(route)
  } else {
    next()
  }
})

export default router
