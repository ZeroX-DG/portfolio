<template>
  <section class="intro fixed">
    <div class="mask"></div>
    <h2 class="name">Hung Nguyen</h2>
    <slider />
    <scrollDownButton />
  </section>
</template>

<script>
import scrollDownButton from '@/components/index/scrollDownButton';
import slider from '@/components/index/slider';
export default {
  name: "intro",
  components: {
    scrollDownButton,
    slider
  }
}
</script>

<style lang="scss">
.intro {
  background: url("../../assets/intro.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  color: white;
}

.mask {
  width: 100%;
  height: 100%;
  position: absolute;
  background: rgba(0, 0, 0, 0.8);
}

.name {
  font-size: 5rem;
  position: absolute;
  top: 30%;
  width: 100%;
  text-align: center;
  font-family: "Lora", sans-serif;
  letter-spacing: 20px;
}

.slider {
  top: 50%;
}
</style>