import Vue from 'vue'
import App from './App.vue'
import router from './router'
import BootstrapVue from 'bootstrap-vue'
import AOS from 'aos'
// import VueHighlightJS from 'vue-highlight.js';
import markdown from 'highlight.js/lib/languages/markdown';
import go from 'highlight.js/lib/languages/go';
import 'highlight.js/styles/dracula.css';
// import 'highlight.js/styles/vs.css';
import 'aos/dist/aos.css'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faQuoteLeft, faArrowCircleRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import VueScrollTo from 'vue-scrollto'

import VueHighlightJS from 'vue-highlightjs'

Vue.config.productionTip = false;

Vue.use(BootstrapVue);
Vue.use(VueScrollTo);
library.add(faQuoteLeft, faArrowCircleRight);
Vue.component('font-awesome-icon', FontAwesomeIcon);

// Vue.use(VueHighlightJS);
Vue.use(VueHighlightJS, {
  // Register only languages that you want
  languages: {
    markdown,
    go
  }
});

new Vue({
  created () {
    AOS.init()
  },
  router,
  render: h => h(App),
}).$mount('#app');
