<template>
  <div id="blibliApp">
    <header>
      <div class="wrapper">
        <HelloWorld msg="Vite + Vue 3" />

        <nav class="button">
          <router-link
            to="/"
            class="home-button"
          >
            Home
          </router-link>
          <router-link
            to="/about"
            class="about-button"
          >
            About
          </router-link>
        </nav>
      </div>
    </header>

    <router-view />
  </div>
</template>

<script src="./js/app"></script>

<style lang="scss" scoped>
@import '@blibli/blue-design-tokens/dist/tokens-default.scss';

#blibliApp {
  margin: 0 auto;
  font-family: $blu-font-family-body-text;
  background: #242424;
}

header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  text-align: center;
  margin-top: 2rem;
  font-family: 'Segoe UI';
}

nav a.router-link-exact-active {
  color: hsla(160, 100%, 37%, 1);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid rgba(84, 84, 84, 0.48);
}

nav a:first-of-type {
  border: 0;
}

.home-button, .about-button{
  font-size: 1rem;
  color: white;
}

.home-button:hover, .about-button:hover{
  background-color: hsla(160, 100%, 37%, 0.2);
  border-radius: 0.4em;
}

@media (max-width: 768px) {
  header{
    margin-bottom: 5%;
  }
}

@media (max-width: 425px) {
  header{
    margin-bottom: 10%;
  }
}

@media (min-width: 1024px) {
  #blibliApp {
    padding: 0% 10%;
    display: grid;
    grid-template-columns: 1fr 1fr;
  }

  header {
    display: flex;
    place-items: center;
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
    justify-content: center;
  }

  nav {
    text-align: center;
    margin-left: -1rem;
    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
