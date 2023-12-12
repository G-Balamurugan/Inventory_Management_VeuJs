<template>
  <div class="home blu">
    <div class="card">
      <h1>This is a Home page</h1>
      <button
        id="countButton"
        type="button"
        @click="setCount"
      >
        Count is {{ count }}
      </button>
      <ApiCall />
      <p class="text">
        Edit
        <code>components/HelloWorld.vue</code> to test HMR
      </p>
    </div>
  </div>
</template>

<script src="./js/home-page"></script>

<style lang="scss" scoped>
@import '@blibli/blue-design-tokens/dist/tokens-default.scss';

.home{
  display: flex;
  align-items: center;
  flex-direction: column;
  color: #888888;
}

.card{
  font-size: 0.87em;
  text-align: center;
  .text{
    font-size: 1.1em;
    margin-top: 7%;
  }
  h1{
    font-size: 2.72em;
    color: $blu-color-neutral-text-inv;
  }
  button{
    margin-top: 10%;
    border-radius: 8px;
    border: 1px solid transparent;
    padding: 0.6em 1.2em;
    font-size: 1.2em;
    font-weight: 500;
    font-family: inherit;
    background-color: #1a1a1a;
    cursor: pointer;
    transition: border-color 0.25s;
    color: rgba(255, 255, 255, 0.87);
  }
  button:hover {
    border-color: #646cff;
  }
  button:focus,
  button:focus-visible {
    outline: 4px auto -webkit-focus-ring-color;
  }
}

@media (max-width: 768px) {
  header{
    margin-bottom: 5%;
  }
}

@media (min-width: 1024px) {
  .home {
    min-height: 100vh;
    display: flex;
    justify-content: center;
  }
}
</style>
