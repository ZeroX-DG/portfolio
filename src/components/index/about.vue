<template>
  <section class="about">
    <img src="../../assets/me_about.jpg"
        alt="my image"
        class="about__avatar"
        data-aos="fade-in"
        data-aos-duration="500"
        data-aos-easing="ease-out-quad">
    <h1 class="about__title"
        data-aos="fade-up"
        data-aos-duration="500"
        data-aos-easing="ease-out-quad">About me</h1>
    <div class="about__content"
        data-aos="fade-up"
        data-aos-duration="500"
        data-aos-easing="ease-out-quad">
      Hi, I'm Hung, a young web developer from Ho Chi Minh city, Vietnam.
      I have been learning and making website and software for more than 3.5
      years, since I'm 13 years old.
      <br>
      <br>
      After grade 9, I dropped out of high school to apply and study software
      engineering at Aptech. Although I was only 15 years old and most of the
      students there are from 18 to 25 years old, I was still able to become the
      best student in class thanks to the knowledge that I absorbed from the
      Internet.
      <br>
      <br>
      Now I'm currently studying higher diploma in software engineering
      at FPT Aptech technology institute. After finishing my study at Aptech, my
      plan is to study abroad at a university for a better education.
    </div>
  </section>
</template>
<script>
export default {
  name: 'about'
}
</script>

<style lang="scss">
.about {
  //top: 100vh;
  background: white;
  .about__avatar {
    position: absolute;
    right: 100px;
    margin-top: -50px;
    width: 500px;
    height: auto;
    box-shadow: 0 0px 20px rgba(0, 0, 0, 0.24);
  }
  .about__title {
    font-family: "Lora", sans-serif;
    font-size: 5rem;
    position: absolute;
    top: 50px;
    left: 100px;
  }
  .about__content {
    position: absolute;
    top: 200px;
    left: 100px;
    font-family: "Lora", sans-serif;
    font-size: 1.5rem;
    width: 50%;
    line-height: 2.5rem;
  }
}
</style>