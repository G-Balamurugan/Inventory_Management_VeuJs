<template>
  <div id="blibliApp">
    <header-component :title="'Bilibili'" @clicked-the-header="say"></header-component>
    <div class="mainCategory">
     <filter-component></filter-component>
    <product-list></product-list>
    </div>
  </div>
</template>

<script src="./js/app"></script>

<style lang="scss" scoped>

img{
    width: 100px;
    justify-content: center;
    display: flex;
    padding-left: 20px;
}
input{
    width:40%;
}
.searchInput{
    width: 100%;
}
.mainCategory{
    padding-top: 20px;
    display: flex;
    width: 80%;
    margin: 0 auto;
    justify-content: space-between;
}
.filter{
    width: 27%;
    box-shadow: 2px 2px 2px rgba(0, 0,  0, 0.2);
    /* display: flex;
    align-items: center;
    justify-content: center; */
}
form{
    display: flex;
    flex-direction: column;
}


p{
    display: flex;
    flex-direction: column;
    text-align: center;
}
button{
    width: 50%;
}
</style>
