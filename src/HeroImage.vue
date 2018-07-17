<template>
<b-jumbotron>
  <template slot="header">
    <p class="intro-header">{{msg}}</p>
  </template>
  <template slot="lead">
    <p class="intro-text">{{introMsg}}</p>
      <b-img rounded="circle" class="intro-img" :src="imgPath" fluid alt="Responsive image"/>
  </template>
  <hr class="my-4">
  <div class="pg-text">
    <p>{{introP1}} <br/>{{introP2}}</p>
  </div>
  <b-btn variant="success" size="lg" href="#">Email Me</b-btn>
</b-jumbotron>
</template>

<script>
 export default {
     props: ['msg', 'introMsg', 'imgPath', 'introP1', 'introP2'],
     data(){
       return {
           message: ' ',
           intro: ' ',
           path: ' ',
           p1: ' ',
           p2: ' '
       }
     }
 }
</script>

<style>
p.intro-header {
    font-family: 'Lobster';
    font-weight: bold;
}

p.intro-text {
    font-family: 'Roboto', sans-serif;
    font-size: 40px;
}

.pg-text {
    font-size: 20px;
}

.intro-img {
    width: 40%;
}
</style>