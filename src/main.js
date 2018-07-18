import Vue from 'vue';
import VueRouter from 'vue-router';
import BootstrapVue from "bootstrap-vue";
import {Jumbotron} from 'bootstrap-vue/es/components';
import bCardFooter from 'bootstrap-vue/es/components/card/card-footer';
import App from './App.vue';
import Resume from './Resume.vue';
import About from './About.vue';
import Contact from './Contact.vue';
import HeroImage from './HeroImage.vue';
import Footer from './Footer.vue';
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

Vue.component('b-card-footer', bCardFooter);
Vue.component('app-heroImage', HeroImage);
Vue.component('app-footer', Footer);

new Vue({
  el: '#app',
  router,
  render: h => h(App)
});
