<template>
  <div class="scrollDownbtn"></div>
</template>

<script>
export default {
  name: "scrollDownButton"
}
</script>

<style lang="scss">
@keyframes scrollDownButton {
  0% {
    top: 30%;
    opacity: 1;
  }

  25% {
    top: 50%;
    opacity: 1;
  }

  50% {
    top: 50%;
    opacity: 0;
  }

  100% {
    top: 30%;
    opacity: 0;
  }
}
.scrollDownbtn {
  width: 30px;
  height: 50px;
  position: absolute;
  bottom: 30px;
  left: calc((100% - 30px) / 2);
  border: 3px solid #afafaf;
  border-radius: 23px;
  &::before {
    position: absolute;
    top: 30%;
    left: calc((100% - 10px) / 2);
    background: #afafaf;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    animation-name: scrollDownButton;
    animation-duration: 2.5s;
    animation-timing-function: linear;
    animation-iteration-count: infinite;
    content: '';
  }
}
</style>