<template>
  <section class="contact">
    <div class="contact-title">
      <span>Contact me</span>
    </div>
  </section>
</template>
<script>
export default {
  name: 'contact'
}
</script>

<style lang="scss">
.contact {
  background: #EA2027;
  padding-top: 50px;
  .contact-title {
    font-family: "Poppins", sans-serif;
    font-size: 4rem;
    color: white;
    text-align: center;
    span{
      position: relative;
      &::after {
        content: '';
        position: absolute;
        width: 50%;
        height: 3px;
        background: white;
        left: calc((100% - 50%) / 2);
        top: 120%;
      }
    }
  }
}
</style>
