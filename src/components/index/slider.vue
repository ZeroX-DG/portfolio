<template>
  <div class="slider">
    <ul class="slider__itemList">
      <li class="slider__item">Web developer</li>
      <li class="slider__item">Web security researcher</li>
      <li class="slider__item">EDM fan</li>
    </ul>
  </div>
</template>
<script>
  import $ from 'jquery';
  export default {
    name: 'slider',
    created() {
      function move(){
        $(".slider__itemList").animate({
          top: "-=2rem"
        },function(){
          $(".slider__item:first").appendTo('.slider__itemList');
          $(".slider__itemList").css("top","");
        });
      }
      setInterval(function(){move();},1500);
    }
  }
</script>
<style lang="scss" scoped>
  .slider{
    width: 100%;
    height: 2rem;
    position: absolute;
    overflow: hidden;
    font-size: 1.8rem;
    text-align: center;
    .slider__itemList{
      padding: 0;
      margin: 0;
      width: 100%;
      position: absolute;
      .slider__item{
        width: 100%;
        height: 2rem;
        color: #fcf94b;
      }
    }
  }
</style>
