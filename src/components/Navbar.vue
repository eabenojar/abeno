<template>
  <div v class="navbar">
    <ul v-if="this.$router.currentRoute.fullPath !== '/ibmq' && deviceWidth > 992">
      <li>
        <a href="/">Home</a>
      </li>
      <li>
        <a @click="scrollClicked(`about-section`)">About</a>
      </li>
      <li>
        <a @click="scrollClicked(`project-section`)">Work</a>
      </li>
    </ul>
    <ul v-else-if="this.$router.currentRoute.fullPath === '/ibmq' && !isNavOpen">
      <li>
        <a href="/">Home</a>
      </li>
    </ul>
    <nav class="tablet-mobile-nav" v-else-if="isNavOpen && deviceWidth <= 992">
      <ul>
        <li>
          <a href>
            <i></i>Home
          </a>
        </li>
        <li>
          <a href>
            <i></i>About
          </a>
        </li>
      </ul>
    </nav>

    <div class="menu-toggle" id="menu-toggle" @click="openNav()" v-if="deviceWidth <= 992">
      <div class="hamburger"></div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isNavOpen: false,
      deviceWidth: 0
    };
  },
  methods: {
    scrollTo(element, to, duration) {
      if (duration <= 0) return;
      var difference = to - element.scrollTop;
      var perTick = (difference / duration) * 10;
      setTimeout(function() {
        element.scrollTop = element.scrollTop + perTick;
        if (element.scrollTop === to) return;
        scrollTo(element, to, duration - 10);
      }, 10);
    },
    scrollClicked(id) {
      var elmnt = document.getElementById(id);
      scrollTo(document.body, elmnt.offsetTop, 2000);
    },
    openNav() {
      this.isNavOpen = !this.isNavOpen;
      // var siteNav = (document.getElementById("site-nav").style.display = block);
      console.log("NAVBAR IS CLICKED", this.isNavOpen);
    },
    handleResize() {
      this.deviceWidth = window.innerWidth;
    }
  },
  created() {
    window.addEventListener("resize", this.handleResize);
    this.handleResize();
  },
  destroyed() {
    window.removeEventListener("resize", this.handleResize);
  },
  mounted() {
    console.log("PATH", this.$router.currentRoute.fullPath);
  }
};
</script>


<style scoped>
.container {
  width: 95%;
  max-width: 1000px;
  margin: 0 auto;
}

header {
  background: #e54b4b;
  color: #ebebd3;
  padding: 1em 0;
  position: relative;
}

header::after {
  content: "";
  clear: both;
  display: block;
}

.logo {
  float: left;
  font-size: 1rem;
  margin: 0;
  text-transform: uppercase;
  font-weight: 700;
}

.logo span {
  font-weight: 400;
}
.tablet-mobile-nav {
  position: absolute;
  top: 60px;
  right: 0;
  background-color: #4c628d;
  width: 300px;
  z-index: 10000;
  height: 450px;
  /* clip-path: circle(0px at top right); */
  /* transition: clip-path ease-in-out 700ms; */
}
.site-nav {
  position: absolute;
  top: 100%;
  right: 0%;
  background: #464655;
  clip-path: circle(0px at top right);
  transition: clip-path ease-in-out 700ms;
  display: block;
}

.site-nav--open {
  clip-path: circle(250% at top right);
  /* display: block; */
}

.site-nav ul {
  margin: 0;
  padding: 0;
  list-style: none;
}

.site-nav li {
  border-bottom: 1px solid #575766;
}

.site-nav li:last-child {
  border-bottom: none;
}

.site-nav a {
  color: #ebebd3;
  display: block;
  padding: 2em 4em 2em 1.5em;
  text-transform: uppercase;
  text-decoration: none;
}

.site-nav a:hover,
.site-nav a:focus {
  background: #e4b363;
  color: #464655;
}

.site-nav--icon {
  display: inline-block;
  font-size: 1.5em;
  margin-right: 1em;
  width: 1.1em;
  text-align: right;
  color: rgba(255, 255, 255, 0.4);
}

.menu-toggle {
  padding: 1em;
  position: absolute;
  top: 0.5em;
  right: 0.5em;
  cursor: pointer;
}

.hamburger,
.hamburger::before,
.hamburger::after {
  content: "";
  display: block;
  background: #4c628d;
  height: 3px;
  width: 1.75em;
  border-radius: 3px;
  transition: all ease-in-out 500ms;
}

.hamburger::before {
  transform: translateY(-6px);
}

.hamburger::after {
  transform: translateY(3px);
}

.open .hamburger {
  transform: rotate(45deg);
}

.open .hamburger::before {
  opacity: 0;
}

.open .hamburger::after {
  transform: translateY(-3px) rotate(-90deg);
}

@media (min-width: 700px) {
  s .menu-toggle {
    display: none;
  }

  .site-nav {
    height: auto;
    position: relative;
    background: transparent;
    float: right;
    clip-path: initial;
  }

  .site-nav li {
    display: inline-block;
    border: none;
  }

  .site-nav a {
    padding: 0;
    margin-left: 3em;
  }

  .site-nav a:hover,
  .site-nav a:focus {
    background: transparent;
  }

  .site-nav--icon {
    display: none;
  }
}
.navbar {
  height: 60px;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  background: none;
  z-index: 10000;
}
ul {
  list-style-type: none;
  margin: 0 2rem;
  float: left;
}
ul li {
  display: inline;
  margin: 0 1.5rem 0 0;
  font-family: Montserrat, sans-serif;
  font-weight: 200;
  font-size: 1rem;
}
ul li a {
  text-decoration: none;
  color: #000;
}
@media only screen and (max-width: 768px) {
  ul {
    list-style-type: none;
    margin: 0;
    float: left;
  }
}
</style>