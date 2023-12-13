<template>
        <div class="products">
            <div class="innerProducts" v-for="innerCart in 4" :key="innerCart">
              <div class="product" v-for="(product , index) in productDetails" :key="index">
                  <picture>
                      <img :src="product.image" alt="Loading Image">
                  </picture>
                  <div class="details" v-on:mouseover="mouseover(index)" v-on:mouseleave="mouseleave(index)">
                      <p>
                          <b>{{product.name}}</b>
                          <small>{{product.price}}</small>
                          <a v-show="product.buyEnable" @click="addToCart(product.name)" :href="buyPath">Buy</a>
                      </p>
                  </div>
              </div>
            </div>
        </div>  
</template>

<script src="./js/product-list.js">

</script>

<style scoped>
img{
    width: 80%;
    height: 70%;
}
.products{
    width: 70%;
    box-shadow: 2px 2px 2px rgba(0, 0,  0, 0.2);
}
.innerProducts{
    height: 25%;
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap;
    box-shadow: 2px 2px 2px rgba(0, 0,  0, 0.2);
}
.product{
    width: 20%;
    height: 90%;
    box-shadow: 2px 2px 2px rgba(0, 0,  0, 0.2);
    padding: 15px;
    margin: 5px;
}
p{
    display: flex;
    flex-direction: column;
    text-align: center;
}
</style>