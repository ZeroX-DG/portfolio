<template>
  <section class="contact">
    <div class="contact-title">
      <span>Contact me</span>
    </div>
    <div class="contacts">
      <a href="https://fb.com/ZeroXCEH">
        <div class="contact-block">
          <i class="fa fa-facebook"></i>
        </div>
      </a>
      <a href="https://twitter.com/ZeroX-DG">
        <div class="contact-block">
          <i class="fa fa-twitter"></i>    
        </div>
      </a>
      <a href="https://github.com/ZeroX-DG">
        <div class="contact-block">
          <i class="fa fa-github"></i>
        </div>
      </a>
      <div class="contact-block" @click="openEmail">
        <i class="fa fa-envelope"></i>
      </div>
    </div>
    <modal ref="email_modal" />
  </section>
</template>
<script>
import modal from './modal';
export default {
  name: 'contact',
  components: {
    modal
  },
  methods: {
    openEmail() {
      this.$refs.email_modal.openModal();
    }
  }
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
  .contacts {
    width: 500px;
    display: flex;
    margin-top: 150px;
    justify-content: space-around;
    margin-left: calc((100% - 500px) / 2);
    a {
      text-decoration: none;
      color: inherit;
    }
    .contact-block {
      width: 100px;
      height: 100px;
      display: flex;
      border: 3px solid white;
      color: white;
      align-items: center;
      justify-content: center;
      font-size: 30px;
      cursor: pointer;
      transition: all 0.4s;
      &:hover {
        background: white;
        border-radius: 50%;
        font-size: 50px;
      }
      &:hover .fa-facebook {
        color: #4267b2;
      }
      &:hover .fa-twitter {
        color: #1da1f2;
      }
      &:hover .fa-github {
        color: black;
      }
      &:hover .fa-envelope {
        color: #8e44ad;
      }
    }
  }
}
</style>
