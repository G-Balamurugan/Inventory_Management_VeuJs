<template>
  <div class="greetings">
    <div class="logos">
      <a
        href="https://vitejs.dev"
        target="_blank"
      >
        <img
          src="@/assets/images/vite.svg"
          class="logo"
          alt="Vite logo"
        >
      </a>
      <a
        href="https://v2.vuejs.org/"
        target="_blank"
      >
        <img
          src="@/assets/images/vue.svg"
          class="logo vue"
          alt="Vue logo"
        >
      </a>
    </div>
    <h1 class="green">
      {{ msg }}
    </h1>
    <p class="read-the-docs">
      Click on the Vite and Vue logos to learn more
    </p>
  </div>
</template>

<script src="./js/hello-world"></script>

<style lang="scss" scoped>
.logos{
  text-align: center;
  display: flex;
  justify-content: center;
  height: 12em;
}

.logo {
  width: 160px;
  padding: 1.3em;
  will-change: filter;
}

h1 {
  margin-top: 0%;
  font-weight: 500;
  font-size: 48px;
  font-family: 'Segoe UI';
}

.green {
  color: hsla(160, 100%, 37%, 1);
}

.greetings {
  text-align: center;
}

.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
.read-the-docs {
  color: #888888;
  font-family: 'Segoe UI';
  font-size: 15px;
  margin-bottom: 3%;
}

@media (max-width: 768px) {
  h1 {
    margin-top: 0%;
  }
  .logo {
    padding: 0em;
    margin: 0.6rem;
    width: 140px;
  }
}
</style>
