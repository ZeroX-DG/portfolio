<template>
  <section class="education">
    <div class="skew__block">
      <h1 class="education-title" 
          data-aos="fade-in"
          data-aos-duration="500"
          data-aos-easing="ease-out-quad">
          My education
      </h1>
    </div>
    <div class="education-content">
      <div class="school-section" 
          data-aos="fade-up"
          data-aos-duration="500"
          data-aos-easing="ease-out-quad">
        <div class="left">
          <img src="../../assets/hackathon.jpg" alt="">
        </div>
        <div class="right">
          <h1 class="school-name">Self taught</h1>
          <span class="school-time">2013 - infinity</span>
          <p class="school-details">
            I must admit that nearly 80% of my programming knowledge is 
            coming from the internet. I started to study computer programming 
            and web security when I was in grade 7 (2013). There some few 
            troubles at first but I still able to overcome them all.
            <br>
            I've written an article 
            <a href="https://medium.com/the-z/how-i-taught-myself-programming-c690a85700ac">
              describing my process of learning programming.
            </a> 
          </p>
          <h2 class="school-achivement">My achievement</h2>
          <ul class="achivements">
            <li>I'm youngest moderator of the Vietnam cyber security forum (ceh.vn)</li>
            <li>Being offered to teach web development at howkteam.vn</li>
            <li>I'm the ex-moderator of security365.vn</li>
          </ul>
        </div>
      </div>
      <div class="school-section" 
          data-aos="fade-up"
          data-aos-duration="500"
          data-aos-easing="ease-out-quad">
        <div class="left">
          <img src="../../assets/aptech.jpg" alt="">
        </div>
        <div class="right">
          <h1 class="school-name">FPT Aptech</h1>
          <span class="school-time">2016 - 2018</span>
          <p class="school-details">
            I dropped out of high school and joined Aptech in 2016 when
            I was 15 years old. It's a bit scary at first because I will
            study with school leavers and college students, however, I 
            still manage to become the best student in class.
          </p>
          <h2 class="school-achivement">My achievement</h2>
          <ul class="achivements">
            <li>
              Highest achievement in courses: 
              <ul>
                <li>SQL Server</li>
                <li>Designing and publishing websites</li>
                <li>Elementary Programming in C</li>
              </ul>
            </li>
            <li>I'm the team leader for all 3 school projects</li>
          </ul>
        </div>
      </div>
      <div class="block-quote">
        <div class="img">
          <img src="../../assets/me.jpg" />
        </div>
        <div class="text">
          I believe marks are not important, only passion and how much knowledge that 
          you obtained after study will decide how successful you will be 
          in the future.
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import $ from 'jquery';
export default {
  name: 'education',
  methods: {
    isElementInView(elem){
      let docViewTop = $(window).scrollTop();
      let docViewBottom = docViewTop + $(window).height();
      let elemTop = $(elem).offset().top;
      return ((elemTop <= docViewBottom) && (elemTop >= docViewTop));
    }
  },
  mounted() {
    $(window).scroll(() => {
      if(this.isElementInView(".education-title")) {
        $(".education .skew__block").css("transform", "skewY(10deg)");
        $(".education .education-title").css("transform", "skewY(-10deg)");
      }
    });
  }
}
</script>
<style lang="scss">
.education {
  background: white;
  box-sizing: border-box;
  //margin-top: 150px;
  .skew__block {
    background: #172fb5;
    width: 100%;
    height: 300px;
    transform-origin: top left;
    transition: transform 0.5s;
    //transform: skewY(10deg);
    position: absolute;
    .education-title {
      font-size: 3rem;
      font-family: "Poppins", sans-serif;
      font-weight: 700;
      margin-bottom: 50px;
      color: white;
      transition: transform 0.5s;
      //transform: skewY(-10deg);
      margin-left: 50px;
    }
  }
  .education-content {
    width: 100%;
    height: calc(100% - 300px);
    background: #172fb5;
    position: relative;
    top: 300px;
    color: white;
    padding-left: 50px;
    box-sizing: border-box;
    z-index: 10;
    img {
      box-shadow: 0 0px 20px rgba(0, 0, 0, 0.24);
    }
    .school-section {
      margin-left: 50px;
      margin-bottom: 100px;
      display: flex;
      &:last-child {
        margin-bottom: 200px;
      }
      .right {
        width: 60%;
        padding-right: 20px;
      }
      .left {
        width: 40%;
      }
      img {
        width: 80%;
      }
      a {
        text-decoration: underline;
        color: white;
      }
      .school-name {
        font-size: 2rem;
        font-family: "Poppins", sans-serif;
        font-weight: 700;
      }
      .school-time {
        font-size: 1.2rem;
        font-family: "Poppins", sans-serif;
        font-weight: 700;
        line-height: 5rem;
      }
      .school-details {
        font-size: 1.5rem;
        font-family: "Nunito", sans-serif;
        line-height: 2rem;
      }
      .school-achivement {
        font-family: "Poppins", sans-serif;
        font-weight: 700;
        font-size: 1.5rem;
        margin-top: 20px;
      }
      .achivements {
        font-family: "Nunito", sans-serif;
        font-size: 1.5rem;
        margin-top: 20px;
        list-style-type: disc;
        margin-left: 40px;
        li {
          line-height: 40px;
          width: 100%;
          min-height: 40px;
          ul {
            list-style-type: square;
            margin-left: 30px;
          }
        }
      }
    }
  }
  .block-quote {
    width: 50%;
    height: 200px;
    background: #0d1b6d;
    margin-bottom: 100px;
    margin-left: 50%;
    transform: translateX(-50%);
    color: white;
    //padding: 50px;
    font-family: "Nunito", sans-serif;
    font-size: 1.2rem;
    line-height: 2.5rem;
    box-shadow: 0 0px 20px rgba(0, 0, 0, 0.24);
    display: flex;
    .img {
      width: 20%;
      padding-left: 30px;
      display: flex;
      align-items: center;
      img {
        border-radius: 50%;
        width: 90%;
      }
    }
    .text {
      width: 80%;
      padding: 20px;
      display: flex;
      align-items: center;
    }
  }
}
</style>