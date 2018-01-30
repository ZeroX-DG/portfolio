<template>
  <div class="overlay-menu">
    <canvas id="particles" class="hidden"></canvas>
    <div class="menu__item"
          id='about'
          @click="goToSection('about')">
      <span class="text">About</span>
    </div>
    <div class="menu__item" 
          id='education'
          @click="goToSection('education')">
      <span class="text">Education</span>
    </div>
    <div class="menu__item" 
          id='projects'
          @click="goToSection('projects')">
      <span class="text">Projects</span>
    </div>
    <div class="menu__item" 
          id='writing'
          @click="goToSection('writing')">
      <span class="text">Articles</span>
    </div>
    <div class="menu__item" 
          id='contact'
          @click="goToSection('contact')">
      <span class="text">Contact</span>
    </div>
  </div>
</template>

<script>
import $ from 'jquery';
import Particle from '@/particles.js'
export default {
  name: "overlayMenu",
  data() {
    return {
      isMenuOpen: false
    }
  },
  mounted() {
    // init hover
    $('.menu__item').hover((e) => {
      this.openCanvas(e.target.id);
    }, () => {
      this.closeCanvas();
    });
    //this.initCanvas();
  },
  methods: {
    initCanvas(){
      // init canvas
      let ctx = document.getElementById('particles').getContext("2d");
      let maxAmount = 10;
      let particles = [];
      for (let i = 0; i < maxAmount; i++) {
        let particle = new Particle(ctx);
        particle.show();
      }
    },
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
    },
    openCanvas(menu_id) {
      let x = $("#" + menu_id).offset().left;
      $("#particles").css("left", x);
      $("#particles").removeClass("hidden");
      $("#particles").css('width', $(window).width() / 5 + 'px');
      $("#particles").css('height', $(window).height() + 'px');
      $("#particles").prop('width', $(window).width() / 5);
      $("#particles").prop('height', $(window).height());
      //this.initCanvas();
    },
    closeCanvas() {
      $("#particles").addClass("hidden");
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
      transition: all 1s;
      opacity: 0;
      margin-left: 100%;
    }
    &::before {
      content: '';
      width: 1px;
      height: 30px;
      background: white;
      position: absolute;
      top: 30px;
      left: 50%;
      transition: all 1s ease;
    }
    &:hover{ 
      background: white;
    }
    &:hover .text {
      margin-top: 200px;
      color: black;
      transform: rotate(90deg);
    }
    &:hover::before {
      background: black;
      height: 250px;
    }
  }
}

#particles {
  position: fixed;
  z-index: 1000;
  pointer-events: none;
}

.hidden {
  visibility: hidden;
}
</style>