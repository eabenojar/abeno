<template>
  <div class="container">
    <!-- <div class="main-container">
      <div class="main-container__name">
        <h1 class="name">First Lastname</h1>
      </div>
      <div class="main-container__shapes">
        <div class="home-circle"></div>

        <img class="home-laptop" src="../assets/images/Terminal.svg" alt />
        <div class="home-laptop"></div>
        <div class="button-container">
          <button class="scroll-button" v-on:click="scrollToWorkTwo">Scroll</button>
        </div>
      </div>
    </div>-->

    <div class="intro-container" id="intro-section">
      <!-- <div class="main-header">
        <h1 class="main-header__name">Eric Abenojar</h1>
      </div>-->
      <div class="intro-container__description">
        <h5 class="intro-container__sub-header">Hello!</h5>
        <h2 class="intro-container__description--title">
          Eric
          <br />Abenojar
        </h2>
        <p
          class="intro-container__description--content"
        >I am a front-end software engineer with a focus on developing beautiful interfaces and experiences</p>
      </div>
      <div class="intro-container__wireframe">
        <div class="intro-container__wireframe-images">
          <img id="wireframe" src="../assets/images/Wireframe Screen.svg" alt="wireframe" />
          <div v-if="isHomePageRendered()">
            <img
              id="desktop-wireframe"
              src="../assets/images/DesktopWireframe1.svg"
              alt="desktop wireframe"
            />

            <img
              id="tablet-wireframe"
              src="../assets/images/TabletWireframe1.svg"
              alt="mobile wireframe"
            />
            <img
              id="mobile-wireframe"
              src="../assets/images/MobileWireframe1.svg"
              alt="tablet wireframe"
            />
          </div>
        </div>
      </div>
      <!-- <div class="windows">
        <img id="mountain-window" src="../assets/images/MountainWindow.svg" alt />
        <img id="city-window" src="../assets/images/CityWindow.svg" alt />
        <img id="office-light" src="../assets/images/OfficeLight.svg" alt />
        <img id="office-light-two" src="../assets/images/OfficeLight.svg" alt />
      </div>-->
      <!-- <div class="desk">
        <img id="table" src="../assets/images/Table.svg" alt />
        <div class="typewriter">
          <div class="typewriter-text">Hey, I'm Eric Abenojar</div>
        </div>
        <img id="macbook" src="../assets/images/MacbookDesktop.svg" alt />

        <img id="table-legs" src="../assets/images/TableLegs.svg" alt />
        <img id="tall-monitor" src="../assets/images/TallMonitorMain.svg" alt />
        <img id="coffee-cup" src="../assets/images/CoffeeCup.svg" alt />
      </div>-->
    </div>
    <div class="about-container" id="about-section">
      <div class="about-container__stripes"></div>
      <div class="about-container__chalkboard">
        <img id="chalk-board" src="../assets/images/VSCodeIDE.svg" alt />
      </div>
      <div class="about-container__description">
        <h2 class="about-container__description--title">About</h2>
        <p
          class="about-container__description--content"
        >As a Mechanical Engineer from the University of Florida turned Front End Developer, I’ve always loved designing and engineering new products. I have experience building full stack applications, developing within a design system, and working with designers from UX/UI, Research, to Motion.</p>
      </div>
    </div>

    <div class="project-container" id="project-section">
      <div class="work-container__description">
        <h2 class="work-container__description--title">
          Wireframe to
          <br />product
        </h2>
        <p
          class="work-container__description--content"
        >As a Front End Developer on IBM Q, I am in charge of developing websites for the IBM Quantum Computing marketing team. I use Vue.js with Nuxt.js to build server side rendering, high performance, and accessible websites.</p>
      </div>
      <div class="work-container__chalkboard">
        <div class="project-container__card active" @click="redirectIBMQ()">
          <a href="https://www.ibm.com/quantum-computing/" target="_blank">
            <h1 class="project-container__card--title active">IBM Quantum Computing</h1>
            <p
              class="project-container__card--description active"
            >Built the IBM Q marketing website using Vue.js and Nuxt.js</p>
          </a>
        </div>
        <div class="project-container__card">
          <a href="https://minicodecamp.herokuapp.com/courses" target="_blank">
            <h1 class="project-container__card--title">Mini Code Camp</h1>
            <p
              class="project-container__card--description"
            >Built a developer meetup app using React, Redux, Node, and MongoDB</p>
          </a>
        </div>

        <div class="project-container__card">
          <a href="https://teslacloneapp.herokuapp.com/" target="_blank">
            <h1 class="project-container__card--title">Tesla Clone</h1>
            <p
              class="project-container__card--description"
            >Built a react native mobile app that allows travelers to find unque experiences guided by a local.</p>
          </a>
        </div>

        <div class="project-container__card">
          <a href="https://travelplansus.herokuapp.com/" target="_blank">
            <h1 class="project-container__card--title">Trip Planner</h1>
            <p
              class="project-container__card--description"
            >Plan up to 5 trips with total distance, total time, and directions</p>
          </a>
        </div>
      </div>
      <!-- <div class="buildings-container">
        <img class="buildings" id="building-1" src="../assets/images/Building 1.svg" alt />
        <img class="buildings" id="building-1A" src="../assets/images/Building 1.1.svg" alt />
        <img class="buildings" id="building-2" src="../assets/images/Building 2.svg" alt />
        <img class="buildings" id="building-2A" src="../assets/images/Building 2.1.svg" alt />
        <img class="buildings" id="building-3" src="../assets/images/Building 3.svg" alt />
        <img class="buildings" id="building-3A" src="../assets/images/Building 3.1.svg" alt />
      <img class="buildings" id="building-4" src="../assets/images/Building 4.svg" alt />-->
      <!-- </div> -->
    </div>
    <!-- <div class="project-container" id="project-section">
      <h1>Projects</h1>
    </div>-->
  </div>
</template>

<script>
export default {
  data() {
    return {
      isWireframeRendered: false
    };
  },

  created() {
    //   var lastScrollTop = 0;
    //   var tries = 0;
    //   // element should be replaced with the actual target element on which you have applied scroll, use window in case of no target element.
    //   window.addEventListener(
    //     "scroll",
    //     function() {
    //       console.log("SCROLL DETECTED");
    //       // or window.addEventListener("scroll"....
    //       var st = window.pageYOffset || document.documentElement.scrollTop;
    //       if (st > lastScrollTop) {
    //         // downscroll code
    //         this.scrollToWorkTwo();
    //       } else {
    //       }
    //       lastScrollTop = st <= 0 ? 0 : st; // For Mobile or negative scrolling
    //     }.bind(this),
    //     false
    //   );
    var initialPosition = 0;
    var windowPosition = window.innerHeight;
    initialPosition = windowPosition;

    var counter = 0;
    var counterProject = 0;
    window.addEventListener(
      "scroll",
      function() {
        windowPosition = window.pageYOffset;
        var chalkboard = document.getElementById("chalk-board");
        var terminal = document.getElementById("terminal");
        if (windowPosition > initialPosition * 0.05 && counter === 0) {
          chalkboard.classList.add("chalk-board-animate");
          counter++;
        } else if (windowPosition > initialPosition * 1.75) {
          const b1 = document.getElementById("building-1");
          const b1A = document.getElementById("building-1A");
          const b2 = document.getElementById("building-2");
          const b2A = document.getElementById("building-2A");
          const b3 = document.getElementById("building-3");
          const b3A = document.getElementById("building-3A");
          const b4 = document.getElementById("building-4");
          // const work = document.getElementById("project-section");
          // this.scrollToWorkTwo(work);
          b1.classList.add("building-1-animate");
          b1A.classList.add("building-1A-animate");
          b2.classList.add("building-2-animate");
          b2A.classList.add("building-2A-animate");
          b3.classList.add("building-3-animate");
          b3A.classList.add("building-3A-animate");
          b4.classList.add("building-4-animate");

          counterProject++;
        }
      }.bind(this)
    );
  },
  destroyed() {
    window.removeEventListener("scroll", this.scrollToWorkTwo);
  },
  methods: {
    // scrollTo(element, to, duration) {
    //   if (duration <= 0) return;
    //   var difference = to - element.scrollTop;
    //   var perTick = (difference / duration) * 10;

    //   setTimeout(function() {
    //     element.scrollTop = element.scrollTop + perTick;
    //     if (element.scrollTop === to) return;
    //     scrollTo(element, to, duration - 10);
    //   }, 10);
    // },
    // scrollClicked(id) {
    //   var elmnt = document.getElementById(id);
    //   scrollTo(document.body, elmnt.offsetTop, 600);
    // },
    isHomePageRendered() {
      setTimeout(() => {
        this.isWireframeRendered = true;
      }, 1600);
      return this.isWireframeRendered;
    },
    toWork() {
      this.$router.push("ibmq");
    },
    redirectIBMQ() {
      this.$router.push("ibmq");
    },
    scrollToWork() {
      scrollTo(work, 0, 1250);
      function scrollTo(element, to, duration) {
        var start = element.offsetTop;
        var change = to + start;
        var currentTime = 0;
        var increment = 20;

        var animateScroll = function() {
          currentTime += increment;
          var val = easeInOutQuad(currentTime, start, change, duration);
          element.offsetTop = val;
          if (currentTime < duration) {
            setTimeout(animateScroll, increment);
          }
        };
        animateScroll();
      }
      function easeInOutQuad(t, b, c, d) {
        t /= d / 2;
        if (t < 1) return (c / 2) * t * t + b;
        t--;
        return (-c / 2) * (t * (t - 2) - 1) + b;
      }
    },
    scrollToWorkTwo(element) {
      scrollIt(element, 1000, "easeInOutQuad", () => {
        console.log(`Just finished scrolling to ${window.pageYOffset}px`);
      });
      function scrollIt(
        destination,
        duration = 200,
        easing = "linear",
        callback
      ) {
        const easings = {
          linear(t) {
            return t;
          },
          easeInQuad(t) {
            return t * t;
          },
          easeOutQuad(t) {
            return t * (2 - t);
          },
          easeInOutQuad(t) {
            return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
          },
          easeInCubic(t) {
            return t * t * t;
          },
          easeOutCubic(t) {
            return --t * t * t + 1;
          },
          easeInOutCubic(t) {
            return t < 0.5
              ? 4 * t * t * t
              : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1;
          },
          easeInQuart(t) {
            return t * t * t * t;
          },
          easeOutQuart(t) {
            return 1 - --t * t * t * t;
          },
          easeInOutQuart(t) {
            return t < 0.5 ? 8 * t * t * t * t : 1 - 8 * --t * t * t * t;
          },
          easeInQuint(t) {
            return t * t * t * t * t;
          },
          easeOutQuint(t) {
            return 1 + --t * t * t * t * t;
          },
          easeInOutQuint(t) {
            return t < 0.5
              ? 16 * t * t * t * t * t
              : 1 + 16 * --t * t * t * t * t;
          }
        };

        const start = window.pageYOffset;
        const startTime =
          "now" in window.performance
            ? performance.now()
            : new Date().getTime();

        const documentHeight = Math.max(
          document.body.scrollHeight,
          document.body.offsetHeight,
          document.documentElement.clientHeight,
          document.documentElement.scrollHeight,
          document.documentElement.offsetHeight
        );
        const windowHeight =
          window.innerHeight ||
          document.documentElement.clientHeight ||
          document.getElementsByTagName("body")[0].clientHeight;
        const destinationOffset =
          typeof destination === "number" ? destination : destination.offsetTop;
        const destinationOffsetToScroll = Math.round(
          documentHeight - destinationOffset < windowHeight
            ? documentHeight - windowHeight
            : destinationOffset
        );

        if ("requestAnimationFrame" in window === false) {
          window.scroll(0, destinationOffsetToScroll);
          if (callback) {
            callback();
          }
          return;
        }

        function scroll() {
          const now =
            "now" in window.performance
              ? performance.now()
              : new Date().getTime();
          const time = Math.min(1, (now - startTime) / duration);
          const timeFunction = easings[easing](time);
          window.scroll(
            0,
            Math.ceil(
              timeFunction * (destinationOffsetToScroll - start) + start
            )
          );

          if (window.pageYOffset === destinationOffsetToScroll) {
            if (callback) {
              callback();
            }
            return;
          }

          requestAnimationFrame(scroll);
        }

        scroll();
      }
    }
  }
};
</script>

<style scoped lang="scss">
@mixin border-boxes {
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}
.container {
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

.typewriter {
  font-family: Courier, monospace;
  display: inline-block;
  position: absolute;
  top: 0;
  left: calc(5% + 20px);
  z-index: 100;
}

.typewriter-text {
  display: inline-block;
  overflow: hidden;

  letter-spacing: 1px;
  animation: typing 5s steps(30, end), blink 3s step-end infinite;
  white-space: nowrap;
  font-size: 20px;
  font-weight: 700;
  border-right: 4px solid grey;
  box-sizing: border-box;
}

@keyframes typing {
  from {
    width: 0%;
  }
  to {
    width: 100%;
  }
}

@keyframes blink {
  from,
  to {
    border-color: transparent;
  }
  50% {
    border-color: orange;
  }
}
.main-container {
  position: relative;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  background: red;
}
.main-container__name {
  position: absolute;
  top: 0;
  height: 100vh;
  width: 50vw;
  display: flex;
  justify-content: center;
  align-items: center;
}
.name {
  font-family: Montserrat, sans-serif;
  font-weight: 700;
  font-size: 4rem;
  animation: 2s ease-out 0s 1 fadeInDown;
}
.main-header__name {
  font-family: Montserrat, sans-serif;
  font-weight: 400;
  font-size: 3rem;
}
.home-circle {
  position: absolute;
  top: -15vw;
  right: -15vw;
  height: 50vw;
  width: 50vw;
  max-height: 1080px;
  max-width: 1080px;
  border-radius: 25vw;
  background: #6ecdbb;
  animation: 2s ease-out 0s 1 slideInFromRight;
}
.home-laptop {
  position: absolute;
  height: 50vh;
  width: 40vw;
  top: 10vw;
  right: 10vw;
  border-radius: 12px;
  background-color: #ced9f5;
  animation: 2s ease-out 0s 1 slideInFromLeft;
}
.button-container {
  height: 100vh;
  width: 100vw;
  position: absolute;
  top: 0;
  left: 0;
}
.scroll-button {
  position: absolute;
  right: 1rem;
  bottom: 1rem;
  height: 60px;
  width: 200px;
  border: none;
  border-radius: 15px;
  background: #e74c3c;
  color: #fff;
  font-weight: 600;
  font-size: 28px;
}
.desk,
.windows {
  display: flex;
  justify-content: space-around;
  height: calc(50vh);
}
.desk {
  position: relative;
  margin: 2rem 0 0 0;
  /* background: red; */
  width: 500px;
}

.chalk-board-animate {
  animation: 3s ease 0s 1 fadeInUp;
}
.terminal-animate {
  animation: 3s ease 0s 1 fadeInUp;
}
#intro-section {
  height: 100vh;
  width: 100vw;
  max-height: 900px;
  /* background: lightsalmon; */
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
}

#mountain-window {
  margin: 0 1rem 0 0;
  width: 40%;
  max-width: 550px;
  animation: 3.5s ease 0s 1 openWindow;
}
#city-window {
  width: 40%;
  max-width: 550px;
  animation: 3.5s ease 0s 1 openWindow;
}
#office-light,
#office-light-two {
  position: absolute;
  left: 10%;
  top: 0;
  animation: 4.5s ease 0s 1 fadeInDown;
}
#office-light-two {
  left: 5%;
  top: -50px;
}

#intro-section {
  height: 100vh;
  width: 100vw;
  max-height: 900px;
  /* background: #fff; */
  display: flex;
  flex-direction: row;
}

.intro-container {
  .intro-container__description {
    width: 50%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 0 4rem;
    @include border-boxes();
  }
  .intro-container__sub-header {
    font-family: Montserrat, sans-serif;
    font-weight: 400;
    font-size: 1.5rem;
  }
  .intro-container__description--title {
    font-family: Montserrat, sans-serif;
    font-weight: 600;
    font-size: 3rem;
    margin: 6rem 0 0 0;
  }
  .intro-container__description--content {
    font-family: Montserrat, sans-serif;
    font-weight: 300;
    font-size: 1.5rem;
    width: 100%;
  }
  .intro-container__wireframe {
    height: 100%;
    width: 50vw;
    display: flex;
    justify-content: center;
    align-items: center;

    .intro-container__wireframe-images {
      position: relative;
      left: auto;
      width: 80%;
      max-width: 500px;
      height: 300px;
      max-height: 350px;
      #wireframe {
        position: absolute;
        width: 100%;
        top: 0;
        left: auto;
        animation: 1.5s ease 0s 1 fadeInUp;
      }
      #desktop-wireframe {
        position: absolute;
        left: 5%;
        top: 25%;
        width: 35%;
        animation: 1.5s ease 0s 1 fadeInLeft;
      }
      #tablet-wireframe {
        position: absolute;
        top: 25%;
        left: 45%;
        width: 30%;
        animation: 2s ease 0s 1 fadeInLeft;
      }
      #mobile-wireframe {
        position: absolute;
        right: 5%;
        top: 25%;
        width: 15%;
        animation: 2.5s ease 0s 1 fadeInLeft;
      }
    }
  }
}
#about-section {
  height: 100vh;
  width: 100%;
  max-height: 900px;
  display: flex;
  flex-direction: row;
  position: relative;
  .about-container__stripes {
    height: 95vh;
    width: 100%;
    // background: #556cd6;
    background: #f9f9f9;
    position: absolute;
    top: 0;
    left: 0;
    transform: skewY(-10deg);
    z-index: -1000;
  }
  .about-container__description {
    width: 50%;
    height: 100%;
    display: flex;
    @include border-boxes();
    padding: 0 4rem;
    flex-direction: column;
    justify-content: center;
    .about-container__description--title {
      font-family: Montserrat, sans-serif;
      font-weight: 600;
      margin: 0;
      font-size: 3rem;
    }
    .about-container__description--content {
      font-family: Montserrat, sans-serif;
      font-weight: 300;
      font-size: 1.5rem;
      width: 100%;
    }
  }
}
#project-section {
  min-height: 100vh;
  height: auto;
  width: 100vw;
  display: flex;
  flex-direction: row;
  /* background: #2471a3; */
  .work-container__description {
    width: 40%;
    height: 100%;
    min-height: 100vh;

    padding: 0 2rem 0 4rem;
    @include border-boxes();
    display: flex;
    overflow: hidden;
    position: relative;
    justify-content: center;
    flex-direction: column;
    .work-container__description--title {
      font-family: Montserrat, sans-serif;
      font-weight: 600;
      font-size: 3rem;
      margin: 2rem 0 0 0;
    }

    .work-container__description--content {
      font-family: Montserrat, sans-serif;
      font-weight: 300;
      font-size: 1.5rem;
      width: 80%;
    }
  }
  .work-container__chalkboard {
    width: 60%;
    min-height: 100vh;
    height: 100%;
    display: flex;
    flex-wrap: wrap;
    align-content: center;
    overflow: hidden;
    position: relative;
    justify-content: center;
    /* Buildings */
    .project-container__card:nth-child(1) {
      height: 250px;
      width: 300px;
      background: #120f32;
      box-shadow: -15px 15px 15px rgba(0, 0, 0, 0.15);
      margin: 1rem 0 0 1rem;
    }
    .project-container__card:not(:first-child) {
      height: 250px;
      width: 300px;
      background: #fcfcfc;
      box-shadow: -15px 15px 15px rgba(0, 0, 0, 0.15);
      margin: 1rem 0 0 1rem;
    }
    .project-container__card {
      a {
        text-decoration: none !important;
      }
    }
    .project-container__card--title.active,
    .project-container__card--description.active,
    .project-container__card--title,
    .project-container__card--description {
      font-family: Montserrat, sans-serif;
      font-weight: 600;
      font-size: 2rem;
      color: #fff;
      margin: 2rem 1rem 1rem 1rem;
    }
    .project-container__card--title,
    .project-container__card--description {
      color: #120f32;
    }
    .project-container__card--description.active,
    .project-container__card--description {
      font-weight: 100;
      font-size: 1rem;
    }
    .project-container__card:hover {
      height: 250px;
      width: 300px;
      background: #120f32;
      box-shadow: -15px 15px 15px rgba(0, 0, 0, 0.15);
      // margin: 6rem 0 0 1rem;
    }
    .project-container__card:hover h1,
    .project-container__card:hover p {
      color: #fff;
    }
  }
}

.about-container__chalkboard {
  width: 50%;
  height: 100%;
  display: flex;
  overflow: hidden;
  /* position: relative; */
  justify-content: center;
  /* align-items: center; */
  img {
    width: calc(100% - 4rem);
  }
}

@keyframes openWindow {
  0% {
    height: 0;
    opacity: 0;
  }
  100% {
    height: 100%;
    opacity: 1;
  }
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
@keyframes slideInFromRight {
  0% {
    transform: rotate(315deg) translateX(100vw);
  }
  100% {
    transform: rotate(315deg) translateX(0);
  }
}
@keyframes slideInFromLeft {
  0% {
    transform: translateX(-100vw);
  }
  100% {
    transform: translateX(0);
  }
}

.buildings-container {
  position: absolute;
  bottom: 0;
  right: 0;
  height: 200px;
  width: 100vw;
}
.buildings {
  position: absolute;
  z-index: -1000;
  bottom: 0;
  right: 0;
}
.building-1-animate {
  right: 700px;
  z-index: 1000;
  animation: 1.5s ease 0s 1 fadeInTop;
}
.building-1A-animate {
  z-index: -1000;
  right: 600px;
  animation: 1.75s ease 0s 1 fadeInTop;
}
.building-2-animate {
  right: 280px;
  z-index: 1000;
  animation: 2s ease 0s 1 fadeInTop;
}
.building-2A-animate {
  z-index: -1000;
  right: 380px;
  animation: 2.5s ease 0s 1 fadeInTop;
}
.building-3-animate {
  right: 440px;
  z-index: 1000;
  animation: 2.75s ease 0s 1 fadeInTop;
}
.building-3A-animate {
  z-index: -1000;
  right: 220px;
  animation: 3s ease 0s 1 fadeInTop;
}

.building-4-animate {
  z-index: 1000;
  right: 10px;
  animation: 3.5s ease 0s 1 fadeInTop;
}

@keyframes fadeInTop {
  0% {
    opacity: 0;
    transform: translateY(-400px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}
@media only screen and (max-width: 1200px) {
  #project-section {
    min-height: 100vh;
    height: auto;
    width: 100vw;
    display: flex;
    flex-direction: column;
    /* background: #2471a3; */
    .work-container__description {
      width: 100%;
      min-height: 0;
      height: 100%;
      padding: 6rem 4rem 4rem 4rem;
      @include border-boxes();
      display: flex;
      overflow: hidden;
      position: relative;
      justify-content: flex-start;
      flex-direction: column;
      .work-container__description--title {
        font-family: Montserrat, sans-serif;
        font-weight: 600;
        font-size: 3rem;
        margin: 6rem 0 0 0;
      }

      .work-container__description--content {
        font-family: Montserrat, sans-serif;
        font-weight: 300;
        font-size: 1.5rem;
        width: 80%;
      }
    }
    .work-container__chalkboard {
      width: 100%;
      min-height: 0;
      padding: 0 0 4rem 0;
      height: auto;
      display: flex;
      flex-wrap: wrap;
      align-content: center;
      // overflow: hidden;
      position: relative;
      justify-content: center;
      /* Buildings */
      .project-container__card:nth-child(1) {
        height: 250px;
        width: 400px;
        background: #120f32;
        box-shadow: -15px 15px 15px rgba(0, 0, 0, 0.15);
        margin: 1rem 0 0 1rem;
      }
      .project-container__card:not(:first-child) {
        height: 250px;
        width: 400px;
        background: #fcfcfc;
        box-shadow: -15px 15px 15px rgba(0, 0, 0, 0.15);
        margin: 1rem 0 0 1rem;
      }

      .project-container__card--title.active,
      .project-container__card--description.active,
      .project-container__card--title,
      .project-container__card--description {
        font-family: Montserrat, sans-serif;
        font-weight: 600;
        font-size: 2rem;
        color: #fff;
        margin: 2rem 1rem 1rem 1rem;
      }
      .project-container__card--title,
      .project-container__card--description {
        color: #120f32;
      }
      .project-container__card--description.active,
      .project-container__card--description {
        font-weight: 100;
        font-size: 1rem;
      }
      .project-container__card:hover {
        height: 250px;
        width: 400px;
        background: #120f32;
        box-shadow: -15px 15px 15px rgba(0, 0, 0, 0.15);
        // margin: 6rem 0 0 1rem;
      }
      .project-container__card:hover h1,
      .project-container__card:hover p {
        color: #fff;
      }
    }
  }
}
@media only screen and (max-width: 768px) {
  #intro-section {
    height: 100vh;
    width: 100vw;
    max-height: 900px;
    /* background: lightsalmon; */
    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex-direction: column;
  }
  .intro-container {
    .intro-container__description {
      width: 100%;
      height: 100%;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      padding: 0 4rem;
      @include border-boxes();
    }
    .intro-container__wireframe {
      height: 100%;
      display: flex;
      padding: 0 4rem;
      justify-content: flex-start;
      align-items: flex-start;
      .intro-container__wireframe-images {
        position: relative;
        left: auto;
        width: 100%;
        max-width: 500px;
        height: 300px;
        max-height: 350px;
        #wireframe {
          position: absolute;
          width: 100%;
          top: 0;
          left: auto;
          animation: 1.5s ease 0s 1 fadeInUp;
        }
        #desktop-wireframe {
          position: absolute;
          left: 5%;
          top: 25%;
          width: 35%;
          animation: 1.5s ease 0s 1 fadeInLeft;
        }
        #tablet-wireframe {
          position: absolute;
          top: 25%;
          left: 45%;
          width: 30%;
          animation: 2s ease 0s 1 fadeInLeft;
        }
        #mobile-wireframe {
          position: absolute;
          right: 5%;
          top: 25%;
          width: 15%;
          animation: 2.5s ease 0s 1 fadeInLeft;
        }
      }
    }
  }
  #project-section {
    min-height: 100vh;
    height: auto;
    width: 100vw;
    display: flex;
    flex-direction: column;
    /* background: #2471a3; */
    .work-container__description {
      width: 100%;
      min-height: 0;
      height: 100%;
      padding: 6rem 4rem 4rem 4rem;
      @include border-boxes();
      display: flex;
      overflow: hidden;
      position: relative;
      justify-content: flex-start;
      flex-direction: column;
      .work-container__description--title {
        font-family: Montserrat, sans-serif;
        font-weight: 600;
        font-size: 3rem;
        margin: 8rem 0 0 0;
      }

      .work-container__description--content {
        font-family: Montserrat, sans-serif;
        font-weight: 300;
        font-size: 1.5rem;
        width: 80%;
      }
    }
    .work-container__chalkboard {
      width: 100%;
      min-height: 0;
      padding: 0 0 4rem 0;
      height: auto;
      display: flex;
      flex-wrap: wrap;
      align-content: center;
      // overflow: hidden;
      position: relative;
      justify-content: center;
      /* Buildings */
      .project-container__card:nth-child(1) {
        height: 250px;
        width: 300px;
        background: #120f32;
        box-shadow: -15px 15px 15px rgba(0, 0, 0, 0.15);
        margin: 1rem 0 0 1rem;
      }
      .project-container__card:not(:first-child) {
        height: 250px;
        width: 300px;
        background: #fcfcfc;
        box-shadow: -15px 15px 15px rgba(0, 0, 0, 0.15);
        margin: 1rem 0 0 1rem;
      }

      .project-container__card--title.active,
      .project-container__card--description.active,
      .project-container__card--title,
      .project-container__card--description {
        font-family: Montserrat, sans-serif;
        font-weight: 600;
        font-size: 2rem;
        color: #fff;
        margin: 2rem 1rem 1rem 1rem;
      }
      .project-container__card--title,
      .project-container__card--description {
        color: #120f32;
      }
      .project-container__card--description.active,
      .project-container__card--description {
        font-weight: 100;
        font-size: 1rem;
      }
      .project-container__card:hover {
        height: 250px;
        width: 300px;
        background: #120f32;
        box-shadow: -15px 15px 15px rgba(0, 0, 0, 0.15);
        // margin: 6rem 0 0 1rem;
      }
      .project-container__card:hover h1,
      .project-container__card:hover p {
        color: #fff;
      }
    }
  }
  #about-section {
    height: 100vh;
    width: 100%;
    max-height: 900px;
    display: flex;
    flex-direction: column;
    position: relative;

    .about-container__chalkboard {
      width: 100%;
      height: 100%;
      display: flex;
      overflow: hidden;
      order: 2;
      /* position: relative; */
      justify-content: center;
      /* align-items: center; */
    }
    .about-container__stripes {
      height: 100vh;
      width: 100%;
      // background: #556cd6;
      background: #f9f9f9;
      position: absolute;
      top: 0;
      left: 0;
      transform: skewY(-10deg);
      z-index: -1000;
    }
    .about-container__description {
      width: 100%;
      height: 100%;
      order: 1;
      display: flex;
      @include border-boxes();
      padding: 0 4rem;
      flex-direction: column;
      justify-content: center;
      .about-container__description--title {
        font-family: Montserrat, sans-serif;
        font-weight: 600;
        font-size: 3rem;
      }
      .about-container__description--content {
        font-family: Montserrat, sans-serif;
        font-weight: 300;
        font-size: 1.5rem;
        width: 100%;
      }
    }
  }
}
@media only screen and (max-width: 540px) {
  #intro-section {
    min-height: 100vh;
    height: auto;
    width: 100vw;
    /* background: lightsalmon; */
    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex-direction: column;
  }
  .intro-container {
    .intro-container__description {
      width: 100%;
      height: 100%;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      padding: 0 2rem;
      @include border-boxes();
      .intro-container__sub-header {
        font-family: Montserrat, sans-serif;
        font-weight: 400;
        font-size: 1.25rem;
      }
      .intro-container__description--title {
        font-family: Montserrat, sans-serif;
        font-weight: 600;
        font-size: 2rem;
        margin: 0;
      }
      .intro-container__description--content {
        font-family: Montserrat, sans-serif;
        font-weight: 300;
        font-size: 1rem;
        width: 100%;
      }
    }
    .intro-container__wireframe {
      height: 100%;
      width: 80%;
      padding: 0 2rem;
      display: flex;
      justify-content: flex-start;
      align-items: flex-start;
      .intro-container__wireframe-images {
        position: relative;
        left: auto;
        width: 100%;
        max-width: 400px;
        height: 300px;
        max-height: 300px;
        #wireframe {
          position: absolute;
          // width: 100%;
          top: 0;
          left: auto;
          animation: 1.5s ease 0s 1 fadeInUp;
        }
        #desktop-wireframe {
          position: absolute;
          left: 5%;
          top: 25%;
          width: 35%;
          animation: 1.5s ease 0s 1 fadeInLeft;
        }
        #tablet-wireframe {
          position: absolute;
          top: 25%;
          left: 45%;
          width: 30%;
          animation: 2s ease 0s 1 fadeInLeft;
        }
        #mobile-wireframe {
          position: absolute;
          right: 5%;
          top: 25%;
          width: 15%;
          animation: 2.5s ease 0s 1 fadeInLeft;
        }
      }
    }
  }
  #project-section {
    min-height: 100vh;
    height: auto;
    width: 100vw;
    display: flex;
    flex-direction: column;
    /* background: #2471a3; */
    .work-container__description {
      width: 100%;
      min-height: none;
      height: 100%;

      padding: 2rem;
      @include border-boxes();
      display: flex;
      overflow: hidden;
      position: relative;
      justify-content: flex-start;
      flex-direction: column;
      .work-container__description--title {
        font-family: Montserrat, sans-serif;
        font-weight: 600;
        font-size: 2rem;
        margin: 3rem 0 0 0;
      }

      .work-container__description--content {
        font-family: Montserrat, sans-serif;
        font-weight: 300;
        font-size: 1rem;
        width: 100%;
      }
    }
    .work-container__chalkboard {
      width: 100%;
      padding: 0 0 4rem 0;
      height: auto;
      display: flex;
      flex-wrap: wrap;
      align-content: center;
      // overflow: hidden;
      position: relative;
      justify-content: center;
      /* Buildings */
      .project-container__card:nth-child(1) {
        height: 250px;
        width: calc(100% - 4rem);
        background: #120f32;
        box-shadow: -15px 15px 15px rgba(0, 0, 0, 0.15);
        margin: 1rem 0 0 0;
      }
      .project-container__card:not(:first-child) {
        height: 250px;
        width: calc(100% - 4rem);
        background: #fcfcfc;
        box-shadow: -15px 15px 15px rgba(0, 0, 0, 0.15);
        margin: 1rem 0 0 0;
      }

      .project-container__card--title.active,
      .project-container__card--description.active,
      .project-container__card--title,
      .project-container__card--description {
        font-family: Montserrat, sans-serif;
        font-weight: 600;
        font-size: 2rem;
        color: #fff;
        margin: 2rem 1rem 1rem 1rem;
      }
      .project-container__card--title,
      .project-container__card--description {
        color: #120f32;
      }
      .project-container__card--description.active,
      .project-container__card--description {
        font-weight: 100;
        font-size: 1rem;
      }
      .project-container__card:hover {
        height: 250px;
        width: calc(100% - 4rem);
        background: #120f32;
        box-shadow: -15px 15px 15px rgba(0, 0, 0, 0.15);
        // margin: 6rem 0 0 1rem;
      }
      .project-container__card:hover h1,
      .project-container__card:hover p {
        color: #fff;
      }
    }
  }
  #about-section {
    min-height: 100vh;
    height: auto;
    width: 100%;
    max-height: none;
    display: flex;
    flex-direction: column;
    position: relative;

    .about-container__chalkboard {
      width: 100%;
      height: 100%;
      display: flex;
      // padding: 0 4rem;
      overflow: hidden;
      order: 2;
      /* position: relative; */
      justify-content: center;
      /* align-items: center; */
      img {
        width: calc(100% - 4rem);
      }
    }
    .about-container__stripes {
      min-height: 95vh;
      height: auto;
      width: 100%;
      background: #f9f9f9;
      position: absolute;
      top: 0;
      left: 0;
      transform: skewY(-10deg);
      z-index: -1000;
    }
    .about-container__description {
      width: 100%;
      height: 100%;
      order: 1;
      display: flex;
      @include border-boxes();
      padding: 0 2rem;
      flex-direction: column;
      justify-content: center;
      .about-container__description--title {
        font-family: Montserrat, sans-serif;
        font-weight: 600;
        margin: 4rem 0 0 0;
        font-size: 2rem;
      }
      .about-container__description--content {
        font-family: Montserrat, sans-serif;
        font-weight: 300;
        font-size: 1rem;
        width: 100%;
      }
    }
  }
}
</style>