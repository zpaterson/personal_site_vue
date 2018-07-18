<template>
       <div>
         <b-img  :src="resumeImage" fluid alt="Responsive image"/>
         <app-footer></app-footer>
      </div>
</template>

<script>
  import resumeImg from "./assets/resume.jpg";
  export default {
      data() {
          return {
             resumeImage: resumeImg
          }
      }
  }
</script>
