<template>
    <nav>
        <div class="search-bar">
            <input type="text" v-model="searchMessage" placeholder="Search">
        </div>
        <a href="#">Login</a>
        <a href="#" @click="onCartRender">Cart ({{cartList.length}})</a>
        <a href="#" @click="onProductRender">Product List</a>
    </nav>
</template>

<script src="./js/header.js">

</script>

<style scoped>
    body {
            margin: 0;
            font-family: Arial, sans-serif;
        }

        nav {
            background-color: #333;
            overflow: hidden;
            display: flex;
            justify-content: space-around;
            align-items: center;
            padding: 10px;
        }

        .search-bar {
            width: 60%;
            margin-right: 10px;
        }

        .search-bar input {
            width: 80%;
            padding: 8px;
            box-sizing: border-box;
        }

        nav a {
            color: white;
            text-decoration: none;
            padding: 10px;
            margin: 0 5px;
        }

        nav a:hover {
            background-color: #555;
        }
</style>

