<template>
  <section class="writing">
    <div class="triangle__block">
      <h1 class="writing-title" 
          data-aos="fade-in"
          data-aos-duration="500"
          data-aos-easing="ease-out-quad">
          My articles
      </h1>
    </div>
    <div class="articles">
      <div v-for="article in articles"
            :class="'article ' + article.size"
            :key="article.title">
        <a :href="article.link">
          <img :src="'../../static/' + article.img">
          <div class="article__content" 
              :style="'background:' + article.background ">
            {{article.title}}
          </div>
        </a>
      </div>
    </div>
  </section>
</template>

<script>
import $ from 'jquery'
export default {
  name: 'writing',
  data() {
    return {
      articles: [
        {
          size: 'width-2-3',
          title: 'Breaking down one of the coolest JavaScript obfuscators',
          img: 'JSArticle.png',
          link: 'https://medium.com/the-z/breaking-down-one-of-the-coolest-javascript-obfuscators-15b234f768c',
          background: '#F0DB4F'
        },
        {
          size: 'width-1-3',
          title: 'Having fun with puppeteer JS',
          img: 'puppeteerArticle.png',
          link: 'https://medium.com/the-z/having-fun-with-puppeteer-js-5a744babaf0a',
          background: '#03D3A7'
        },
        {
          size: 'width-1-3',
          title: 'I’m scared to make contact with poor people',
          img: 'poorpeopleArticle.jpeg',
          link: 'https://medium.com/the-z/im-scared-to-make-contact-with-poor-people-cb7a5272438b',
          background: '#605448'
        },
        {
          size: 'width-2-3',
          title: 'How I made a web app to help improve English listening skill',
          img: 'elistenArticle.jpeg',
          link: 'https://medium.com/the-z/how-i-made-a-web-app-to-help-improve-english-listening-skill-f21ad81beef3',
          background: '#2D3E50'
        }
      ]
    }
  }
}
</script>

<style lang="scss">
.writing {
  background: #f5f5f5;
  box-sizing: border-box;
  .triangle__block {
    clip-path: polygon(0 0, 50% 100%, 100% 0);
    background: white;
    width: 100%;
    height: 300px;
    z-index: 1;
    position: relative;
    .writing-title {
      font-family: "Lora", sans-serif;
      font-size: 5rem;
      text-align: center;
    }
  }
  .articles {
    z-index: 10;
    width: 70%;
    margin-top: -180px;
    margin-left: calc((100% - 70%) / 2);
    padding: 50px;
    padding-bottom: 170px;
    position: relative;
    a {
      color: white;
      text-decoration: none;
    }
    .width-2-3 {
      width: 66%;
    }
    .width-1-3 {
      width: 33%;
    }
    .article {
      position: relative;
      display: inline-block;
      overflow: hidden;
      height: 360px;
      color: white;
      cursor: pointer;
      margin-left: 2px;
      transition: all 0.5s;
      &:hover {
        transform: scale(0.95);
      }
      &:hover .article__content{
        opacity: 0.9;
      }
      &:hover img{
        transform: scale(1.2);
      }
      img {
        display: block;
        height: 100%;
        transition: all 0.3s;
      }
      .article__content {
        width: 100%;
        height: 100%;
        padding: 20px;
        font-size: 2rem;
        display: flex;
        justify-content: center;
        align-items: center;
        position: absolute;
        bottom: 0;
        opacity: 0;
        transition: all 0.3s;
        font-family: "Poppins", sans-serif;
        line-height: 3rem;
      }
    }
  }
}
</style>