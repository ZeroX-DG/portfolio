<template>
  <div id="wrapper">
    <menu />
    <intro />
    <section class="placeHolder"></section>
    <about />
    <education />
    <projects />
    <writing />
    <contact />
  </div>
</template>
<script>
  import intro from '@/components/index/intro'
  import about from '@/components/index/about'
  import education from '@/components/index/education'
  import projects from '@/components/index/projects'
  import writing from '@/components/index/writing'
  import contact from '@/components/index/contact'
  export default {
    name: 'index',
    components: {
      intro,
      about,
      education,
      projects,
      writing,
      contact
    }
  }
</script>
<style lang="scss">
  @import url('https://fonts.googleapis.com/css?family=Poppins|Lora|Nunito|Playfair+Display');
</style>
