<template>
    <b-jumbotron>
    <template slot="header">
        <p class="intro-header">{{msg}}</p>
    </template>
    <template slot="lead">
        <p class="intro-text">{{introMsg}}</p>
        <b-img rounded="circle" class="intro-img" :src="imgPath" fluid alt="Responsive image"/>
    </template>
    <b-container fluid class="">
        <hr class="my-4">
            <b-row>
                <b-col md="6" offset-md="3">
                    <div class="pg-text1">
                        <p>{{introP1}}</p>
                    </div>
                </b-col>
            </b-row>
            <b-row>
                <b-col md="6" offset-md="3">
                    <div class="pg-text3">
                        <p>{{introP3}}</p>
                    </div>
                </b-col>
            </b-row>
            <b-row>
                <b-col md="8" offset-md="2">
                    <div class="pg-text2">
                        <p>{{introP2}} <br/> <br/>{{introP4}}</p>
                    </div>
                </b-col>
            </b-row>
    </b-container>
    <b-btn variant="success" size="lg" href="#">Email Me → </b-btn>
    </b-jumbotron>
</template>

<script>
 export default {
     props: ['msg', 'introMsg', 'imgPath', 'introP1', 'introP2', 'introP3', 'introP4'],
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

.pg-text1 {
    color: #565D5D;
    font-size: 22px;
    text-align: left;
    padding-top: 20px;
}
.pg-text2 {
    color: #565D5D;
    font-size: 22px;
    text-align: left;
}

.pg-text3 {
    color: #565D5D;
    font-weight: bold;
    font-size: 20px;
    text-align: center;
    padding-top: 30px;
    margin-bottom: -70px;
}

.intro-img {
    width: 40%;
}
</style>