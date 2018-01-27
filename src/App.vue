<template>
  <div id="app">
    <menuTrigger @click.native="triggerMenu"/>
    <overlayMenu ref="menu" />
    <router-view/>
  </div>
</template>

<script>
import menuTrigger from '@/components/menuTrigger';
import overlayMenu from '@/components/menu';
export default {
  name: 'app',
  components: {
    menuTrigger,
    overlayMenu
  },
  methods: {
    triggerMenu() {
      this.$refs.menu.triggerMenu();
    }
  }
}
</script>

<style lang="scss">
  *{
    box-sizing: border-box;
  }
  section{
    min-height: 100vh;
    width: 100%;
    position: relative;
  }
  .fixed {
    top: 0;
    position: fixed;
  }
</style>
