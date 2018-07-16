import Vue from 'vue';
import VueRouter from 'vue-router';
import BootstrapVue from "bootstrap-vue";
import {Jumbotron} from 'bootstrap-vue/es/components';
import App from './App.vue';
import Resume from './Resume.vue';
import About from './About.vue';
import Contact from './Contact.vue';
import HeroImage from './HeroImage.vue';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

Vue.use(VueRouter);
Vue.use(BootstrapVue);
Vue.use(Jumbotron);

const routes = [
  {path: '/', name: 'app'},
  {path: '/resume', name: 'resume', component: Resume},
  {path: '/about', name: 'about', component: About},
  {path: '/contact', name: 'contact', component: Contact},
];

const router = new VueRouter({
  routes,
  mode: 'history',
});

Vue.component('app-heroImage', HeroImage);

new Vue({
  el: '#app',
  router,
  render: h => h(App)
});
