<template>
  <div class="navbar">
    <ul>
      <li>
        <a href="/">Home</a>
      </li>
      <li>
        <a href="/about">About</a>
      </li>
      <li>
        <a href="/work">Work</a>
      </li>
      <!-- <li>
        <a href="/contact">Contact</a>
      </li>-->
    </ul>
  </div>
</template>


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
  margin: 0 4rem;
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
</style>