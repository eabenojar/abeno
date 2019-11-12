<template>
  <div class="ibmq-container">
    <div class="ibmq-introduction">
      <div class="ibmq-introduction__content">
        <h1 class="ibmq-introduction__content--title">IBM Q</h1>
        <p
          class="ibmq-introduction__content--description"
        >As a Front End Developer at IBM, I am in charge of developing websites for the IBM Quantum Computing marketing team. I use Vue.js with Nuxt.js to build a server side rendering high performance websites.</p>
        <a href="https://www.ibm.com/quantum-computing/" target="_blank">
          <button class="work-button">See my work on IBM Q</button>
        </a>
      </div>
      <div class="ibmq-introduction__image">
        <img id="table" src="../assets/images/Table.svg" alt />
        <img id="macbook" src="../assets/images/MacbookDesktop.svg" alt />
        <img id="table-legs" src="../assets/images/TableLegs.svg" alt />
        <img id="tall-monitor" src="../assets/images/TallMonitorMain.svg" alt />
        <img id="coffee-cup" src="../assets/images/CoffeeCup.svg" alt />
      </div>
    </div>
    <div class="ibmq-components">
      <h1 class="ibmq-components__title">Components</h1>
      <p
        class="ibmq-components__description"
      >On the IBM Q web team, I developed components for our site using Vue.js. I worked with UX and Visual designers to turn wireframes into final components.</p>
      <div class="ibmq-components__images">
        <img id="desktop-navbar" src="../assets/images/desktop-navbar.svg" alt />
        <img id="tablet-navbar" src="../assets/images/tablet-navbar.svg" alt />
        <img id="mobile-navbar" src="../assets/images/mobile-navbar.svg" alt />
      </div>
    </div>
    <div class="ibmq-projects-content">
      <h1 class="ibmq-projects-content__title">Optimization</h1>
      <p
        class="ibmq-projects-content__description"
      >As a front end developer, I was in charge of optimizing our website from performance, accessibility, best practices, and seo. These are the lighhouse scores showing before and after results. Our team converted the old site from Jquery/Vanilla.js to a Nuxt.js website. In the first year with the team, I built the following websites down below with Vue.js / Nuxt.js</p>
    </div>
    <div class="ibmq-projects">
      <div v-for="(item, index) in projects" v-bind:key="index" class="ibmq-projects__box">
        <img class="ibmq-projects__box--image" :src="getImage(item.image)" alt />
        <h1 class="ibmq-projects__box--title">{{item.title}}</h1>
        <p class="ibmq-projects__box--description">{{item.description}}</p>
        <div class="ibmq-projects-metrics">
          <div class="ibmq-projects-metrics-box">
            <h5>{{item.performance}}</h5>
            <p>Performance</p>
          </div>
          <div class="ibmq-projects-metrics-box">
            <h5>{{item.accessibility}}</h5>
            <p>Accessibility</p>
          </div>
          <div class="ibmq-projects-metrics-box">
            <h5>{{item.bestPractices}}</h5>
            <p>Best Practices</p>
          </div>
          <div class="ibmq-projects-metrics-box">
            <h5>{{item.seo}}</h5>
            <p>Seo</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      projects: [
        {
          title: "IBM Homepage",
          description:
            "Learn more about what IBM Q has to offer from hardware to software. earn more about what IBM Q has to offer from hardware to software",
          image: "homepage.png",
          performance: "15/93",
          accessibility: "78/96",
          bestPractices: "64/93",
          seo: "80/100"
        },
        {
          title: "What is Quantum Computing?",
          description:
            "Learn more about what IBM Q has to offer from hardware to software. earn more about what IBM Q has to offer from hardware to software",
          image: "what-is-qc.png",

          performance: "44/81",
          accessibility: "83/96",
          bestPractices: "64/64",
          seo: "89/100"
        },
        {
          title: "What is IBM Q?",
          description:
            "Learn more about what IBM Q has to offer from hardware to software. earn more about what IBM Q has to offer from hardware to software",
          image: "what-is-ibmq.png",

          performance: "37/91",
          accessibility: "88/100",
          bestPractices: "71/86",
          seo: "89/100"
        },
        {
          title: "IQX Marketing",
          description:
            "Learn more about what IBM Q has to offer from hardware to software. earn more about what IBM Q has to offer from hardware to software",
          image: "iqx-marketing.png",

          performance: "66/87",
          accessibility: "87/100",
          bestPractices: "71/71",
          seo: "100/100"
        },
        {
          title: "Simulator",
          description:
            "Learn more about what IBM Q has to offer from hardware to software. earn more about what IBM Q has to offer from hardware to software",
          image: "simulator.png",

          performance: "48/81",
          accessibility: "83/100",
          bestPractices: "64/71",
          seo: "89/100"
        },
        {
          title: "Showcase",
          description:
            "Learn more about what IBM Q has to offer from hardware to software. earn more about what IBM Q has to offer from hardware to software",
          image: "showcase.png",

          performance: "N/A",
          accessibility: "N/A",
          bestPractices: "N/A",
          seo: "N/A"
        },
        {
          title: "System",
          description:
            "Learn more about what IBM Q has to offer from hardware to software. earn more about what IBM Q has to offer from hardware to software",
          image: "system.png",

          performance: "17/80",
          accessibility: "75/96",
          bestPractices: "71/71",
          seo: "90/100"
        },
        {
          title: "Members",
          description:
            "Learn more about what IBM Q has to offer from hardware to software. earn more about what IBM Q has to offer from hardware to software",
          image: "members.png",

          performance: "64/90",
          accessibility: "75/88",
          bestPractices: "71/79",
          seo: "78/90"
        },
        {
          title: "Researchers",
          description:
            "Learn more about what IBM Q has to offer from hardware to software. earn more about what IBM Q has to offer from hardware to software",
          image: "researchers.png",

          performance: "31/84",
          accessibility: "76/100",
          bestPractices: "71/71",
          seo: "90/100"
        },
        {
          title: "Overview",
          description:
            "Learn more about what IBM Q has to offer from hardware to software. earn more about what IBM Q has to offer from hardware to software",
          image: "overview.png",

          performance: "53/81",
          accessibility: "76/81",
          bestPractices: "71/71",
          seo: "78/90"
        },
        {
          title: "Internship",
          description:
            "Learn more about what IBM Q has to offer from hardware to software. earn more about what IBM Q has to offer from hardware to software",
          image: "internship.png",

          performance: "83/91",
          accessibility: "78/100",
          bestPractices: "71/860",
          seo: "78/100"
        },
        {
          title: "Consulting",
          description:
            "Learn more about what IBM Q has to offer from hardware to software. earn more about what IBM Q has to offer from hardware to software",
          image: "consulting.png",

          performance: "31/90",
          accessibility: "76/96",
          bestPractices: "71/71",
          seo: "90/100"
        }
      ]
    };
  },
  methods: {
    getImage(pic) {
      console.log("PATH", pic);
      // var images = require.context("../assets/", false, /\.svg$/);
      // return images("../assets/images/" + pic);

      // var image = require(pic);
      var image = require(`../assets/images/${pic}`);

      console.log("IMAGE", image);
      return image;
    }
  }
};
</script>


<style scoped lang="scss">
@mixin flex-grid($justify, $align) {
  display: flex;
  justify-content: center;
  align-items: center;
}
.ibmq-container {
  position: absolute;
  top: 60px;
  left: 0;
  padding: 0;
  background: #f1f3f5;
  background-image: -webkit-repeating-radial-gradient(
    center center,
    rgba(0, 0, 0, 0.2),
    rgba(0, 0, 0, 0.2) 1px,
    transparent 1px,
    transparent 100%
  );
  background-image: -moz-repeating-radial-gradient(
    center center,
    rgba(0, 0, 0, 0.2),
    rgba(0, 0, 0, 0.2) 1px,
    transparent 1px,
    transparent 100%
  );
  background-image: -ms-repeating-radial-gradient(
    center center,
    rgba(0, 0, 0, 0.2),
    rgba(0, 0, 0, 0.2) 1px,
    transparent 1px,
    transparent 100%
  );
  background-image: repeating-radial-gradient(
    center center,
    rgba(0, 0, 0, 0.2),
    rgba(0, 0, 0, 0.2) 1px,
    transparent 1px,
    transparent 100%
  );
  -webkit-background-size: 20px 20px;
  -moz-background-size: 20px 20px;
  background-size: 20px 20px;
  z-index: 1000;
}
.work-button {
  width: 240px;
  height: 48px;
  text-decoration: none;
  background: #120f32;
  margin: 2rem 3rem;
  border-radius: 5px;
  color: #fff;
  font-family: Montserrat, sans-serif;
  font-size: 14px;
  font-weight: 400;
  button {
    outline: none;
  }
}
.work-button:hover {
  height: 48px;
  width: 240px;
  background: #312985;
  border-radius: 5px;
  color: #fff;
  font-family: Montserrat, sans-serif;
  font-size: 14px;
  font-weight: 400;
  button {
    outline: none;
  }
}
.ibmq-introduction {
  height: 95vh;
  width: 100vw;
  display: flex;
  flex-direction: row;
  .ibmq-introduction__content {
    width: 50vw;
    height: 100vh;
  }
  .ibmq-introduction__image {
    width: 50vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    position: relative;
  }
}

.ibmq-introduction__content--title {
  font-family: Montserrat, sans-serif;
  font-weight: 600;
  font-size: 3rem;
  margin: 6rem 0 0 0;
  padding: 0 3rem;
}
.ibmq-introduction__content--description {
  font-family: Montserrat, sans-serif;
  font-weight: 400;
  font-size: 1.25rem;
  margin: 2rem 0 0 0;
  padding: 0 3rem;
}
.ibmq-components {
  .ibmq-components__title {
    font-family: Montserrat, sans-serif;
    font-weight: 600;
    font-size: 3rem;
    margin: 0;
    padding: 0 3rem;
  }
  .ibmq-components__description {
    font-family: Montserrat, sans-serif;
    font-weight: 400;
    font-size: 1.25rem;
    margin: 2rem 0 0 0;
    padding: 0 3rem;
    width: 50%;
  }
  .ibmq-components__images {
    width: 100%;
    height: auto;
    display: flex;
    justify-content: center;
    // flex-direction: column;
    align-items: center;
    flex-wrap: wrap;
    #desktop-navbar {
      width: 80%;
      margin: 4rem 0 2rem 0;
    }
    #tablet-navbar {
      margin: 0 2rem 0 0;
    }
    #mobile-navbar {
      margin: 0;
    }
  }
}
.ibmq-projects-content {
  .ibmq-projects-content__title {
    font-family: Montserrat, sans-serif;
    font-weight: 600;
    font-size: 3rem;
    margin: 6rem 0 0 0;
    padding: 0 3rem;
  }
  .ibmq-projects-content__description {
    font-family: Montserrat, sans-serif;
    font-weight: 400;
    font-size: 1.25rem;
    margin: 2rem 0 0 0;
    padding: 0 3rem;
    width: 50%;
  }
}
.ibmq-projects {
  height: auto;
  min-height: 100vh;
  width: 100%;
  padding: 2rem 0;
  width: 100%;
  margin: 0;
  @include flex-grid(center, center);
  flex-direction: row;
  flex-wrap: wrap;

  .ibmq-projects__box--title,
  .ibmq-projects__box--description {
    color: #fff;
    margin: 2rem 1rem 2rem 1rem;
    top: 2rem;
    font-family: Montserrat, sans-serif;
    z-index: 1000;
    position: relative;
  }
}
.ibmq-projects__box {
  height: 300px;
  width: 400px;
  margin: 2rem 1rem 2rem 1rem;
  box-shadow: 10px 10px 10px rgba(0, 0, 0, 0.1);
  position: relative;
  flex-direction: column;
  background: none;
  border-radius: 4px;
}

.ibmq-projects__box--title {
  font-weight: 600;
  font-size: 1.5rem;
}
.ibmq-projects__box--description {
  font-family: Montserrat, sans-serif;
  font-weight: 400;
  font-size: 0.8rem;
}
.ibmq-projects__box--image {
  position: absolute;
  top: 0;
  left: 0;
  border-radius: 4px;
  height: 100%;
  width: 100%;
}
.ibmq-projects-metrics {
  position: absolute;
  bottom: -50px;
  right: 5%;
  margin: auto;
  height: 100px;
  display: flex;
  flex-direction: row;
  background: #fff;
  width: 90%;
  border-radius: 3px;
  box-shadow: 10px 10px 10px rgba(0, 0, 0, 0.1);
  .ibmq-projects-metrics-box {
    width: 25%;
    text-align: left;
    padding-left: 1rem;
    h5 {
      font-family: Montserrat, sans-serif;
      font-weight: 600;
      font-size: 0.8rem;
    }
    p {
      font-family: Montserrat, sans-serif;
      font-weight: 400;
      font-size: 0.75rem;
    }
  }
}
#table {
  position: absolute;
  left: auto;
  bottom: 60%;
  animation: 2s ease 0s 1 fadeInLeft;
}
#macbook {
  position: absolute;
  left: 15%;
  bottom: calc(60% + 20px);
  animation: 3s ease 0s 1 fadeInDown;
}
#coffee-cup {
  position: absolute;
  left: auto;
  bottom: calc(60% + 20px);
  animation: 4s ease 0s 1 fadeInLeft;
}
#tall-monitor {
  position: absolute;
  left: 60%;
  bottom: calc(60% + 20px);
  animation: 2s ease 0s 1 fadeInDown;
}
#table-legs {
  position: absolute;
  bottom: calc(60% - 150px);
  left: auto;
  height: 150px;
  animation: 3s ease 0s 1 fadeInUp;
}
@keyframes fadeInDown {
  0% {
    opacity: 0;
    transform: translateY(-200px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}
@keyframes fadeInLeft {
  0% {
    opacity: 0;
    transform: translateX(200px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}
@keyframes fadeInUp {
  0% {
    opacity: 0;
    transform: translateY(200px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}
@media only screen and (max-width: 960px) {
  .ibmq-projects {
    min-height: 100vh;
    height: auto;
    width: 100%;
    padding: 4rem 0;
    margin: 0;
    @include flex-grid(center, center);
    flex-direction: column;
    // flex-wrap: wrap;

    .ibmq-projects__box--title,
    .ibmq-projects__box--description {
      color: #fff;
      margin: 2rem 1rem 2rem 1rem;
      top: 2rem;
      font-family: Montserrat, sans-serif;
      z-index: 1000;
      position: relative;
    }
  }
  .ibmq-introduction {
    height: 100vh;
    width: 100vw;
    display: flex;
    flex-direction: column;
    .ibmq-introduction__content {
      width: 100vw;
      height: 100vh;
    }
    .ibmq-introduction__image {
      width: 60%;
      padding: 0 2rem;
      height: 100vh;
      position: relative;
    }
  }
  .ibmq-components__images {
    width: 100%;
    height: auto;
    display: flex;
    justify-content: center;
    // flex-direction: column;
    align-items: center;
    flex-wrap: wrap;
    #desktop-navbar {
      width: 80%;
      margin: 4rem 0 2rem 0;
    }
    #tablet-navbar {
      width: 80%;
      max-width: 500px;
      margin: 0 2rem 2rem 0;
    }
    #mobile-navbar {
      width: 80%;
      max-width: 300px;
      margin: 2rem;
    }
  }
  #table {
    position: absolute;
    left: auto;
    width: 80%;
    bottom: 60%;
    animation: 2s ease 0s 1 fadeInLeft;
  }
  #macbook {
    position: absolute;
    left: 15%;
    width: 35%;
    bottom: calc(60% + 10px);
    animation: 3s ease 0s 1 fadeInDown;
  }
  #coffee-cup {
    position: absolute;
    left: 70%;
    bottom: calc(60% + 10px);
    animation: 4s ease 0s 1 fadeInLeft;
  }
  #tall-monitor {
    position: absolute;
    left: 50%;
    width: 30%;
    bottom: calc(60% + 10px);
    animation: 2s ease 0s 1 fadeInDown;
  }
  #table-legs {
    position: absolute;
    bottom: calc(60% - 150px);
    width: 75%;
    left: auto;
    height: 150px;
    animation: 3s ease 0s 1 fadeInUp;
  }
  .ibmq-projects__box {
    height: 300px;
    width: 100%;
    max-width: 400px;
    margin: 2rem 0;
    box-shadow: 10px 10px 10px rgba(0, 0, 0, 0.1);
    background: none;
    border-radius: 4px;
  }
  .ibmq-projects-content {
    .ibmq-projects-content__title {
      font-family: Montserrat, sans-serif;
      font-weight: 600;
      font-size: 3rem;
      margin: 6rem 0 0 0;
      padding: 0 3rem;
    }
    .ibmq-projects-content__description {
      font-family: Montserrat, sans-serif;
      font-weight: 400;
      font-size: 1.25rem;
      margin: 2rem 0 0 0;
      padding: 0 3rem;
      width: 80%;
    }
  }
}
@media only screen and (max-width: 540px) {
  #table,
  #macbook,
  #coffee-cup,
  #tall-monitor,
  #table-legs {
    display: none;
  }
  .ibmq-introduction .ibmq-introduction__content {
    width: 100vw;
    height: auto;
  }
  .work-button {
    margin: 2rem 2rem;
  }
  .ibmq-introduction {
    max-height: 100vh;
    height: auto;
    width: 100vw;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
  }
  .ibmq-components .ibmq-components__images #tablet-navbar[data-v-6640f917] {
    margin: 0 0 2rem 0;
  }
  .ibmq- .ibmq-intro .work-button {
    width: 240px;
    height: 48px;
    text-decoration: none;
    background: #120f32;
    margin: 2rem 2rem;
    border-radius: 5px;
    color: #fff;
    font-family: Montserrat, sans-serif;
    font-size: 14px;
    font-weight: 400;
  }
  .ibmq-introduction__content--title {
    font-family: Montserrat, sans-serif;
    font-weight: 600;
    font-size: 3rem;
    margin: 6rem 2rem 0 2rem;
    padding: 0;
  }
  .ibmq-introduction__content--description {
    font-family: Montserrat, sans-serif;
    font-weight: 400;
    font-size: 1.25rem;
    margin: 2rem 2rem;
    padding: 0;
    width: 80%;
  }
  .ibmq-components .ibmq-components__title {
    font-family: Montserrat, sans-serif;
    font-weight: 600;
    font-size: 3rem;
    margin: 6rem 2rem 0 2rem;
    padding: 0;
  }
  .ibmq-projects-content .ibmq-projects-content__title {
    font-family: Montserrat, sans-serif;
    font-weight: 600;
    font-size: 3rem;
    margin: 6rem 2rem 0 2rem;
    padding: 0;
  }
  .ibmq-components .ibmq-components__description {
    font-family: Montserrat, sans-serif;
    font-weight: 400;
    font-size: 1.25rem;
    margin: 2rem 2rem;
    padding: 0;
    width: 80%;
  }
  .ibmq-projects-content .ibmq-projects-content__description {
    font-family: Montserrat, sans-serif;
    font-weight: 400;
    font-size: 1.25rem;
    margin: 2rem 2em;
    padding: 0;
    width: 80%;
  }
}
</style>