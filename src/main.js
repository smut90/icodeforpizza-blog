import Vue from 'vue'
import App from './App.vue'
import router from './router'
import BootstrapVue from 'bootstrap-vue'
import AOS from 'aos'
import markdown from 'highlight.js/lib/languages/markdown';
import go from 'highlight.js/lib/languages/go';
import js from 'highlight.js/lib/languages/javascript';
import 'highlight.js/styles/dracula.css';
import 'aos/dist/aos.css'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faQuoteLeft, faArrowCircleRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import VueScrollTo from 'vue-scrollto'
import VueGtag from "vue-gtag";
import VueMeta from 'vue-meta';

import VueHighlightJS from 'vue-highlightjs'

Vue.config.productionTip = false;

Vue.use(BootstrapVue);
Vue.use(VueScrollTo);
library.add(faQuoteLeft, faArrowCircleRight);
Vue.component('font-awesome-icon', FontAwesomeIcon);

Vue.use(VueHighlightJS, {
  languages: {
    markdown,
    go,
    js
  }
});

Vue.use(VueGtag, {
  config: { id: "G-QTNXYE7JM4" }
}, router);

Vue.use(VueMeta);

new Vue({
  created () {
    AOS.init()
  },
  router,
  render: h => h(App),
}).$mount('#app');
