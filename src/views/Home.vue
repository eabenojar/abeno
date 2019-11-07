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
          First
          <br />Lastname
        </h2>
        <p
          class="intro-container__description--content"
        >I am First Lastname, a design-minded front-end software engineer focused on building beautiful interfaces and experiences</p>
      </div>
      <div class="intro-container__wireframe">
        <img id="wireframe" src="../assets/images/Wireframe Screen.svg" alt />
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
        >As a Mechanical Engineer turned Front End Developer, I’ve always loved designing and engineering new products. I have experience building full stack applications, as well as, working with designers to map out a concept to final product.</p>
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
        >As a Front End Developer on IBM Q, I am in charge of developing websites for the IBM Quantum Computing marketing team. I use Vue.js with Nuxt.js to build a server side rendering, high performance, and accessible websites.</p>
        <button class="work-button" @click="toWork()" type="button">View my work on IBM Q</button>
      </div>
      <div class="work-container__chalkboard">
        <div class="project-container__card active" @click="redirectIBMQ()">
          <h1 class="project-container__card--title active">Project 1</h1>
          <p
            class="project-container__card--description active"
          >Built the IBM Q marketing website using Vue.js and Nuxt.js</p>
        </div>
        <div class="project-container__card">
          <h1 class="project-container__card--title">Project 2</h1>
          <p
            class="project-container__card--description"
          >Built a developer meetup app using React, Redux, Node, and MongoDB</p>
        </div>
        <div class="project-container__card">
          <h1 class="project-container__card--title">Project 3</h1>
          <p
            class="project-container__card--description"
          >Built a react native mobile app that allows travelers to find unque experiences guided by a local.</p>
        </div>
        <div class="project-container__card">
          <h1 class="project-container__card--title">Project 4</h1>
          <p
            class="project-container__card--description"
          >Built a platform for validating talent all in one place for mid-senior lvl roles</p>
        </div>
      </div>
      <div class="buildings-container">
        <img class="buildings" id="building-1" src="../assets/images/Building 1.svg" alt />
        <img class="buildings" id="building-1A" src="../assets/images/Building 1.1.svg" alt />
        <img class="buildings" id="building-2" src="../assets/images/Building 2.svg" alt />
        <img class="buildings" id="building-2A" src="../assets/images/Building 2.1.svg" alt />
        <img class="buildings" id="building-3" src="../assets/images/Building 3.svg" alt />
        <img class="buildings" id="building-3A" src="../assets/images/Building 3.1.svg" alt />
        <img class="buildings" id="building-4" src="../assets/images/Building 4.svg" alt />
      </div>
    </div>
    <!-- <div class="project-container" id="project-section">
      <h1>Projects</h1>
    </div>-->
  </div>
</template>

<script>
export default {
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
          console.log("SCROLLED TO 2ND DIV!");
          chalkboard.classList.add("chalk-board-animate");
          counter++;
        } else if (windowPosition > initialPosition * 1.75) {
          console.log("SCROLL TO 3RD DIV");
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
    console.log("WINDOW POSITION", windowPosition);
  },
  destroyed() {
    window.removeEventListener("scroll", this.scrollToWorkTwo);
  },
  methods: {
    toWork() {
      this.$router.push("ibmq");
    },
    redirectIBMQ() {
      this.$router.push("ibmq");
    },
    scrollToWork() {
      // const work = document.getElementById("intro-section");
      console.log("GET WORK IN", work.offsetTop);
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
/* .container {
  background: linear-gradient(90deg, #1370fb (22px - 2px), transparent 1%)
      center,
    linear-gradient(#1370fb (22px - 2px), transparent 1%) center, #3882e8;
  background-size: 22px 22px;
  z-index: 1000;
} */
/* .container {
  background: rgb(33, 147, 176);
  background: linear-gradient(
    90deg,
    rgba(33, 147, 176, 1) 0%,
    rgba(109, 213, 237, 1) 100%
  );
} */
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
#table {
  position: absolute;
  left: auto;
  bottom: 60%;
  animation: 2s ease 0s 1 fadeInLeft;
}
#macbook {
  position: absolute;
  left: 5%;
  bottom: calc(60% + 20px);
  animation: 3s ease 0s 1 fadeInDown;
}
#coffee-cup {
  position: absolute;
  right: 0;
  bottom: calc(60% + 20px);
  animation: 4s ease 0s 1 fadeInLeft;
  /* animation-iteration-count: infinite; */
}
#tall-monitor {
  position: absolute;
  right: 15%;
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
/* #intro-section {
  height: 100vh;
  width: 100vw;
  background: #fff;
  display: flex;
  flex-direction: row;
} */
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
    width: 80%;
  }
  .intro-container__wireframe {
    height: 100%;
    width: 50vw;
    display: flex;
    justify-content: center;
    align-items: center;
    #wireframe {
      margin: 0;
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
    height: 100vh;
    width: 100%;
    // background: #556cd6;
    background: #f9f9f9;
    position: absolute;
    top: 0;
    left: 0;
    transform: skewY(-15deg);
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
      font-size: 3rem;
    }
    .about-container__description--content {
      font-family: Montserrat, sans-serif;
      font-weight: 300;
      font-size: 1.5rem;
      width: 80%;
    }
  }
}
#project-section {
  height: 100vh;
  width: 100vw;
  display: flex;
  max-height: 900px;
  flex-direction: row;
  /* background: #2471a3; */
  .work-container__description {
    width: 50%;
    height: 100%;
    padding: 0 4rem;
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
    .work-button {
      height: 48px;
      width: 240px;
      background: #120f32;
      border-radius: 5px;
      color: #fff;
      font-family: Montserrat, sans-serif;
      font-size: 14px;
      font-weight: 400;
    }
    .work-button:hover {
      height: 48px;
      width: 200px;
      background: #312985;
      border-radius: 5px;
      color: #fff;
      font-family: Montserrat, sans-serif;
      font-size: 14px;
      font-weight: 400;
      margin: 0 3rem;
    }
  }
  .work-container__chalkboard {
    width: 100%;
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

.about-container__chalkboard {
  width: 50%;
  height: 100%;
  display: flex;
  overflow: hidden;
  /* position: relative; */
  justify-content: center;
  /* align-items: center; */
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

/* .project-container__card:hover {
  height: 350px;
  width: 300px;
  background: #fcfcfc;
  box-shadow: -15px 15px 15px rgba(0, 0, 0, 0.15);
  margin: 6rem 0 0 1rem;
} */

/* .project-container__card .active:hover h1,
.project-container__card .active:hover p {
  color: #120f32;
} */

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
</style>