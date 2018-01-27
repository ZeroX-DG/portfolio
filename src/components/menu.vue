<template>
  <div class="overlay-menu">
    <div class="menu__item" @click="goToSection('about')">
      <span class="text">About</span>
    </div>
    <div class="menu__item" @click="goToSection('education')">
      <span class="text">Education</span>
    </div>
    <div class="menu__item" @click="goToSection('projects')">
      <span class="text">Projects</span>
    </div>
    <div class="menu__item" @click="goToSection('events')">
      <span class="text">Events</span>
    </div>
    <div class="menu__item" @click="goToSection('contact')">
      <span class="text">Contact</span>
    </div>
  </div>
</template>

<script>
import $ from 'jquery';
export default {
  name: "overlayMenu",
  data() {
    return {
      isMenuOpen: false
    }
  },
  methods: {
    goToSection(name) {
      $('html,body').animate({
        scrollTop: $("."+name).offset().top
      },'slow');
      this.closeNav();
    },
    triggerMenu() {
      if(this.isMenuOpen) {
        this.closeNav();
      }
      else {
        this.openNav();
      }
    },
    removeText (callback) {
      let listOfMenuText = $(".menu__item .text");
      listOfMenuText.each(function(index, item) {
        setTimeout(function(){
          $(item).css("margin-left", "100%");
          $(item).css("opacity", "0");
          if (index == listOfMenuText.toArray().length - 1) {
            callback();
          }
        }, (index + 1) * 200);
      });
    },
    removeMenuItem(callback) {
      let listOfMenuItem = $(".menu__item");
      listOfMenuItem.each(function(index, item) {
        setTimeout(function() {
          $(item).css("opacity", "0");
          if (index == listOfMenuItem.toArray().length - 1) {
            callback();
          }
        }, (index + 1) * 300);
      });
    },
    closeNav() {
      this.isMenuOpen = false;
      this.removeText(() => {
        this.removeMenuItem(() => {
          $(".overlay-menu").css("display", "none");
        });
      });
    },
    openMenuItem(callback) {
      let listOfMenuItem = $(".menu__item");
      listOfMenuItem.each(function(index, item) {
        setTimeout(function() {
          $(item).css("opacity", "1");
          if (index == listOfMenuItem.toArray().length - 1) {
            callback();
          }
        }, (index + 1) * 200);
      });
    },
    openText () {
      let listOfMenuText = $(".menu__item .text");
      listOfMenuText.each(function(index, item) {
        setTimeout(function(){
          $(item).css("margin-left", "0%");
          $(item).css("opacity", "1");
        }, (index + 1) * 200);
      });
    },
    openNav() {
      this.isMenuOpen = true;
      $(".overlay-menu").css("display", "flex");
      this.openMenuItem(this.openText);
    }
  }
}
</script>

<style lang="scss">
.overlay-menu {
  width: 100%;
  height: 100%;
  position: fixed;
  z-index: 100;
  display: none;
  .menu__item {
    background: black;
    width: calc(100% / 5);
    height: 100%;
    font-size: 3.5rem;
    color: white;
    border-left: 1px solid #1f1f1f;
    display: flex;
    padding-top: 5%;
    align-items: center;
    writing-mode: vertical-lr;
    transform: rotate(180deg);
    cursor: pointer;
    transition: all 0.5s;
    overflow: hidden;
    opacity: 0;
    .text {
      transition: all 0.5s;
      position: relative;
      opacity: 0;
      margin-left: 100%;
      &::before {
        content: '';
        width: 1px;
        height: 20px;
        background: white;
        position: absolute;
        top: -30px;
        left: 50%;
        transition: all 0.5s ease;
      }
    }
    &:hover{ 
      background: white;
    }
    &:hover .text {
      margin-top: 100px;
      color: black;
    }
    &:hover .text::before {
      background: black;
      height: 100px;
      top: -130px;
    }
  }
}
</style>