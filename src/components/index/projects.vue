<template>
  <section class="projects">
    <div class="projects__title-block">
      <div class="mask">
        <h1>My projects</h1>
      </div>
    </div>
    <div class="project-list">
      <div v-for="(project, index) in projects" :key="project.title"
          :class="'project project--' + [index % 2 == 0 ? 'left' : 'right']"
          :data-aos="'fade-up-' + [index % 2 == 0 ? 'right' : 'left']"
          data-aos-duration="1000"
          data-aos-easing="ease-out-quad">
        <div class="project__img-wrapper">
          <img :src="'../../static/' + project.image" />
        </div>
        <div class="project__description">
          <h1 class="project__title">
            {{ project.title }}
          </h1>
          <div class="project__short-description">
            {{ project.description }}
          </div>
          <span class="project__view-link">View project</span>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  name: 'projects',
  data() {
    return {
      projects: [
        {
          "image": "noticeZ.png",
          "title": "NoticeZ",
          "description": "A simple JS library for creating web push notifications"
        },
        {
          "image": "ispeakalone.png",
          "title": "I speak alone",
          "description": "A webapp for people who practising IELTS speaking alone"
        },
        {
          "image": "elisten.png",
          "title": "EListen",
          "description": "A webapp for people who practising listening to English words"
        }
      ]
    }
  }
}
</script>
<style lang="scss">
.projects {
  margin-top: 300px; // skew-background on education block
  background: #ffffff;
  &__title-block {
    width: 100%;
    height: 200px;
    color: white;
    background: url("../../assets/project.jpg");
    background-attachment: fixed;
    background-size: 100% 150%;
    font-size: 5rem;
    font-family: "Poppins", sans-serif;
    .mask {
      width: 100%;
      height: 200px;
      background: rgba(0, 0, 0, 0.6);
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
  .project-list {
    overflow: hidden;
    .project--right {
      float: right;
      .project__description {
        left: 0%;
      }
    }
    .project--left {
      float: left;
      .project__description {
        left: 50%;
      }
    }
    &::after {
      content:"";
      clear:both;
      display:block;
    }
    .project {
      position: relative;
      margin-top: -150px;
      clear: both;
      &:first-child {
        margin-top: 0;
      }
      &:last-child {
        margin-bottom: 100px;
      }
      &__img-wrapper {
        width: 600px;
        margin: 100px;
        overflow: hidden;
        position: relative;
        box-shadow: 0px 2px 33px 3px rgba(0,0,0,0.24);
        img{
          width: 100%;
          transition: transform 0.5s;
          display: block;
          &:hover {
            transform: scale(1.2);
          }
        }
      }
      &__description {
        width: 400px;
        height: 300px;
        background: #1C1C1C;
        color: white;
        padding: 45px;
        position: absolute;
        top: 50%;
      }
      &__title {
        font-family: "Poppins", sans-serif;
        font-weight: 700;
        font-size: 2.5rem;
        position: relative;
        &::after {
          content: '';
          width: 30%;
          height: 2px;
          background: #a06801;
          position: absolute;
          left: 0;
          top: 150%;
        }
      }
      &__short-description {
        margin-top: 50px;
        font-family: "Nunito", sans-serif;
        font-size: 1.2rem;
        line-height: 2rem;
      }
      &__categories {
        margin-top: 50px;
        font-family: "Nunito", sans-serif;
        font-size: 1.2rem;
        line-height: 2rem;
      }
      &__view-link {
        font-size: 1.5rem;
        font-family: "Lora", sans-serif;
        position: absolute;
        bottom: 50px;
        color: #db8f00;
        font-style: italic;
        cursor: pointer;
        &::after{
          content: '';
          width: 0;
          height: 2px;
          background: #db8f00;
          position: absolute;
          top: 50%;
          left: 0;
          transition: width 0.5s;
        }
        &:hover::after{
          width: 105%;
        }
      }
    }
  }
}
</style>