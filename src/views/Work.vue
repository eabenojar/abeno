<template>
  <div>
    <div>
      <h1 class="work-header">Work</h1>
    </div>
    <div class="project-container">
      <div class="project-container__card"></div>
      <div class="project-container__card"></div>
      <div class="project-container__card"></div>
      <div class="project-container__card"></div>
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
</template>

<style  scoped>
.work-header {
  font-family: Montserrat, sans-serif;
  font-weight: 700;
  font-size: 3rem;
  margin: 2rem 0 0 4rem;
}
.project-container {
  display: flex;
  flex-direction: row;
}
.project-container__card:nth-child(1) {
  height: 350px;
  width: 300px;
  background: #120f32;
  margin: 2rem 0 0 4rem;
}
.project-container__card:not(:first-child) {
  height: 350px;
  width: 300px;
  background: #120f32;
  margin: 2rem 0 0 2rem;
}
.buildings-container {
  position: absolute;
  bottom: 0;
  right: 0;
  height: 200px;
  width: 100vw;
  /* border: 2px solid grey; */
}
.buildings {
  position: absolute;
  z-index: -1000;
  bottom: 0;
  right: 0;
}
#building-1 {
  right: 700px;
  z-index: 1000;
  animation: 1.5s ease 0s 1 fadeInUp;
}
#building-1A {
  z-index: -1000;
  right: 600px;
  animation: 3.5s ease 0s 1 fadeInUp;
}
#building-2 {
  right: 280px;
  z-index: 1000;
  animation: 2.5s ease 0s 1 fadeInUp;
}
#building-2A {
  z-index: -1000;
  right: 380px;
  animation: 3.5s ease 0s 1 fadeInUp;
}
#building-3 {
  right: 440px;
  z-index: 1000;
  animation: 3.5s ease 0s 1 fadeInUp;
}
#building-3A {
  z-index: -1000;
  right: 220px;
  animation: 2.5s ease 0s 1 fadeInUp;
}

#building-4 {
  z-index: 1000;
  right: 10px;
  animation: 3.5s ease 0s 1 fadeInUp;
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
</style>