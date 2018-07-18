<template>
  <div id="app">
    <b-navbar toggleable="md" type="dark" variant="info">
    <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>
    <b-navbar-brand tag="h1" class="my-logo">
      <router-link tag="li" to="/">{ ZP }</router-link>
    </b-navbar-brand>
      <b-collapse is-nav id="nav_collapse">
        <b-navbar-nav class="ml-auto nav-links-size"> 
          <b-nav-item>
            <router-link tag="li" to="/">Home</router-link>
          </b-nav-item>
          <b-nav-item>
            <router-link tag="li" to="/resume">Resume</router-link>
          </b-nav-item>
          <b-nav-item>
            <router-link tag="li" to="/about">About</router-link>
          </b-nav-item>
          <b-nav-item>
            <router-link tag="li" to="/contact">Contact</router-link>
          </b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
    <app-heroImage :msg="message" :introMsg="intro" :imgPath="path" :introP1="p1" :introP3="p3" v-if="['app'].indexOf($route.name)> -1"></app-heroImage>
    <app-footer v-if="['app'].indexOf($route.name)> -1"></app-footer >
    <router-view></router-view>
  </div>
</template>

<script>
import aboutImg from "./assets/about1.jpg";
export default {
  name: 'app',
  data () {
    return {
      message: "Hi , I'm Zaire",
      intro: "I'm a Full Stack Web Developer living in San Francisco",
      path: aboutImg,
      p1: "I'm a full stack web developer specializing in JavaScript, looking to enter the health and wellness field. " +
      "I'm excited for opportunities in which I can expand my skillset and work in collaborative teams.",
      p3: "Interested in working on a project together?"
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
  color: white;
}

li:hover {
  color: #5DE2E2;
}

a {
  color: white;
}
 
.my-logo {
  font-size: 30px;
}

.nav-links-size {
  font-weight: bold;
  font-size: 20px;
}
</style>
