import Vue from 'vue';
import VueRouter from 'vue-router';
import BootstrapVue from "bootstrap-vue";
import App from './App.vue';
import Resume from './Resume.vue';
import About from './About.vue';
import Contact from './Contact.vue';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

Vue.use(VueRouter);
Vue.use(BootstrapVue);

const routes = [
  {path: '/resume', component: Resume},
  {path: '/about', component: About},
  {path: '/contact', component: Contact},
];

const router = new VueRouter({
  routes,
  mode: 'history',
});


new Vue({
  el: '#app',
  router,
  render: h => h(App)
});
