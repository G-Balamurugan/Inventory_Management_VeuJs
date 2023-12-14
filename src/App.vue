<template>
    <div>
    <header-component></header-component>

    <div class="mainBody">
        <div class="filterDiv">
        <filter-component class="filterBox"></filter-component>
        </div>
        <router-view class="productBox" />
        <!-- <product-list class="productBox"></product-list> -->
    </div>
    </div>




  <!-- <div id="blibliApp">
    <header-component :title="'Bilibili'" @clicked-the-header="say"></header-component>
    <div class="mainCategory"> -->
     <!-- <filter-component></filter-component>
     <router-view /> -->
    <!-- <product-list></product-list> -->
    <!-- </div>
  </div> -->
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
    width: 68%;
}
// img{
//     width: 100px;
//     justify-content: center;
//     display: flex;
//     padding-left: 20px;
// }
// input{
//     width:40%;
// }
// .searchInput{
//     width: 100%;
// }
// .mainCategory{
//     padding-top: 20px;
//     display: flex;
//     width: 80%;
//     margin: 0 auto;
//     justify-content: space-between;
// }
// .filter{
//     width: 27%;
//     box-shadow: 2px 2px 2px rgba(0, 0,  0, 0.2);
//     /* display: flex;
//     align-items: center;
//     justify-content: center; */
// }
// form{
//     display: flex;
//     flex-direction: column;
// }


// p{
//     display: flex;
//     flex-direction: column;
//     text-align: center;
// }
// button{
//     width: 50%;
// }
</style>
