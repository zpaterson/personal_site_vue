<template>
  <div>
    <app-heroImage :msg="message" :imgPath="path" :introP2="p2" :introP4="p4"></app-heroImage>
    <app-footer></app-footer>
  </div>
</template>

<script>
import aboutImg from "./assets/about.jpg";
export default {
  name: 'app',
  data () {
    return {
      message: "About Me",
      path: aboutImg,
      p2: "I currently am working as a front-end web developer at Huge, where my passion for coding and UX design converge. " +
      "Prior to Huge I completed 6-month bootcamp with Techtonica, where I studied full stack web development in Javascript, " +
      "and worked on projects using HTML, CSS, JavaScript, React, Vue, Node, Express, PostgresSql, Sql, and MongoDB. ",
      p4: "I am currently working on a side project WorkoutTime, a web app that uses the Google Calendar API to calculate users free time and schedule suggested " +
      "workouts. Outside of work I like to explore topics on health and wellness, workout, listen to Podcasts, and explore new restaurants in the " +
      "city with friends and family. I’m always looking for new opportunities to collaborate on a projects, so don’t hesitate to get in touch."

    }
  }
}
</script>
