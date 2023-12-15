<template>
    <div>
    <header-component></header-component>

    <div class="mainBody">
        <div class="filterDiv">
        <filter-component v-if="isProductPage" class="filterBox"></filter-component>
        </div>
        <router-view class="productBox" />
        <!-- <product-list class="productBox"></product-list> -->
    </div>
    </div>
</template>

<script src="./js/app.js"></script>

<style lang="scss" scoped>
.mainBody{
    display: flex;
    justify-content: space-around;
}
.filterDiv{
    position: relative;
    height: 400px;
    width:25%;
    // border: 1px solid black;
}
.filterBox{
    width: 100%;
    top: 2rem;
    position: absolute;
}
.productBox{
    width: 70%;
}
</style>
