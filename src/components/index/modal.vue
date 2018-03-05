<template>
  <div>
    <transition name="fade">
      <div v-if="open"
          class="modal-mask" 
          @click="closeModal()"></div>
    </transition>
    <transition name="fade">
      <div v-if="open"
          class="email-modal modal">
        <h1 class="title">Hi! Here is my email</h1>
        <p class="content email">viethungax@gmail.com</p>
        <p class="content">
          Don't hesitate to send me an email
        </p>
        <p class="content">
          I bite sometimes but not you :)
        </p>
      </div>
    </transition>
  </div>
</template>
<script>
export default {
  name: 'modal',
  data() {
    return {
      open: false
    }
  },
  methods: {
    closeModal() {
      this.open = false;
    },
    openModal() {
      this.open = true;
    }
  }
}
</script>

<style lang="scss">
.modal-mask {
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  position: fixed;
  top: 0;
}
.modal {
  width: 60%;
  background: white;
  border-radius: 15px;
  padding: 50px;
  box-sizing: border-box;
  color: black;
  font-family: "Nunito", sans-serif;
  margin-left: calc((100% - 60%) / 2);
  position: fixed;
  top: 20%;
  .title {
    font-size: 50px;
  }

  .content {
    font-size: 30px;
    margin-top: 30px;
  }

  .email {
    background: #282828;
    color: white;
    padding: 20px 50px;
    margin-left: -50px;
    margin-right: -50px;
  }
}
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
