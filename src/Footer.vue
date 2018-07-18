<template>
    <div>
     <b-card-footer footer-bg-variant="light">
                <div>
                    connect with me on : <b-img :src="gitHubLogo" class="logo-img" fluid alt="Github Logo"/>
                    <b-img :src="linkedInLogo" class="logo-img" fluid alt="LinkedIn Logo"/>
                    <b-img :src="twitLogo" class="logo-img" fluid alt="Twitter Logo"/>
                </div>
    </b-card-footer>
    </div>   
</template>

<script>
import gitHubImg from './assets/github-logo.svg';
import linkedInImg from './assets/linkedin.svg';
import twitterImg from './assets/twitter.svg';
export default {
    data() {
       return {
           twitLogo: twitterImg,
           linkedInLogo: linkedInImg,
           gitHubLogo: gitHubImg,
       }
    }
}
</script>

<style>
    img.logo-img {
      max-width: 30px;
      margin-left: 10px;
    }
</style>
