<template>
  <div class="titleBar">
    <div class="innerBar">
      <img :src="image" alt="Lodaing" />
    </div>
    <div class="searchBar">
      <input
        v-model="searchMessage"
        type="text"
        placeholder="Search"
        class="searchInput"
      />
      <p>Search Message : {{ searchMessage }}{{title}}</p>
    </div>
    <div class="user">
      <a :href="loginPath" @click="$emit('clicked-the-header',title)">Login</a>
      <a :href="cartPath" @click="cartAlert">Cart</a>
      <a v-if="login" :href="accountPath" @click="accountAlert">Account</a>
      <a v-else :href="signIn">SignIn</a>
    </div>
  </div>
</template>

<script src="./js/header.js"></script>

<style scoped>
.titleBar {
  height: 100px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-right: 40px;
  background-color: aquamarine;
}
.innerBar {
  display: flex;
  align-content: center;
}

img {
  width: 100px;
  justify-content: center;
  display: flex;
  padding-left: 20px;
}
.searchBar {
  width: 40%;
  display: flex;
  flex-direction: column;
}
input {
  width: 40%;
}
p {
  display: flex;
  flex-direction: column;
  text-align: center;
}
.user {
  width: 30%;
  display: flex;
  justify-content: space-between;
}
</style>
