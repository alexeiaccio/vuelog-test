<template>
  <div class="page">
    <vuelog-renderer class="page-body" :type="'page'" :metadata="page"></vuelog-renderer>
    <vuelog-comments v-if="!page.commentless" :path="$route.fullPath"></vuelog-comments>
  </div>
</template>

<script>
  import { retrieveByLanguage } from '../helpers'
  import VuelogRenderer from '../components/VuelogRenderer'

  export default {
    name: 'vuelog-page',

    components: {
      VuelogRenderer
    },

    computed: {
      active () {
        return this.$store.getters.lang
      },

      config () {
        return this.$store.getters.config
      },

      title () {
        var title = retrieveByLanguage(this.page.title, this.active, this.config.defaultLang)
        return retrieveByLanguage(this.config.brand, this.active, this.config.defaultLang) + ' | ' + title
      },

      page () {
        const pages = this.$store.getters.pages
        for (var i = 0; i < pages.length; i++) {
          if (pages[i].slug === this.$route.params.page) {
            return pages[i]
          }
        }
        this.oops()
        return { markdown: '', slug: '', title: '' }
      }
    },

    methods: {
      oops () {
        this.$router.replace('/oops')
      }
    },

    created () {
      this.$store.dispatch('documentTitle', this.title)
    },

    watch: {
      $route (to, from) {
        if (to.query.lang !== from.query.lang) {
          this.$store.dispatch('documentTitle', this.title)
        }
      }
    }
  }
</script>

<style lang="stylus" scoped>
  .page
  .page-body
    flex 1
    display flex
    flex-direction column
</style>
