<template>
  <div class="navbar">
    <ul v-if="this.$router.currentRoute.fullPath !== '/ibmq'">
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
    <ul v-else-if="this.$router.currentRoute.fullPath === '/ibmq'">
      <li>
        <a href="/">Home</a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
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
    }
  },
  mounted() {
    console.log("PATH", this.$router.currentRoute.fullPath);
  }
};
</script>


<style scoped>
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