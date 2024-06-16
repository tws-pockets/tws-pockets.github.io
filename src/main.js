import { createApp } from 'vue'
import App from './App.vue'
import { loadFonts } from './plugins/webfontloader'

import router from './plugins/router'
import i18n from './plugins/i18n'

import "../node_modules/github-fork-ribbon-css/gh-fork-ribbon.css"
import vuetify from './plugins/vuetify'
// import store from './store'

import i18nArticleFetcher from '@/mixins/i18nArticleFetcher';

loadFonts()
createApp(App)
// .use(store)
.use(vuetify).use(i18n).use(router)
.mixin(i18nArticleFetcher)
.mount('#app')
