<template>
  <div class="menu-trigger">
    <span class="bar first-bar"></span>
    <span class="bar second-bar"></span>
    <span class="bar third-bar"></span>
  </div>
</template>
<script>
import $ from 'jquery';
export default {
  name: 'menuTrigger'
}
</script>
<style lang="scss">
.menu-trigger {
  width: 40px;
  height: 30px;
  position: fixed;
  top: 20px;
  right: 20px;
  z-index: 1000;
  cursor: pointer;
  .first-bar, .second-bar, .third-bar {
    background: #fcf94b;
    width: 40px;
    height: 3px;
    position: absolute;
    transition: width 0.3s;
    right: 0;
  }
  .first-bar {
    top: 0;
  }
  .second-bar {
    top: 30%;
    width: 30px;
  }
  .third-bar {
    top: 60%;
  }
  &:hover .first-bar, &:hover .third-bar{
    width: 30px;
  }
  &:hover .second-bar {
    width: 40px;
  }
}
</style>