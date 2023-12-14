<template>
    <div class="productsBox" >
        <div class="productsCard" :class="product.productPointed" v-on:mouseover="mouseOver(index)" v-on:mouseleave="mouseLeave(index)" v-for="(product , index) in productDetails" :key="index">
            <img :src="product.image" alt="Loading Image"/>
            <div class="productDesc">
                <p><b>{{product.name}}</b></p>
                <p>Price : <b>{{product.price}}</b></p>
            </div>
            <div class="addCart">
                <div class="productQuantity">
                    <button @click="decreaseQuantity(index)">-</button>
                    <p>{{product.quantity}}</p>
                    <button @click="increaseQuantity(index)">+</button>
                </div>
                <button class="cartButton" @click="cartAppend(product)">Add to Cart</button>
            </div>
        </div>
    </div>
</template>

<script src="./js/product-list.js">

</script>

<style scoped>
button{
    height: auto;
    width: auto;
    border-radius: 5px;
}
.cartButton{
    width: auto;
    height: 25px;
    border-radius: 20px;
    
}
  img {
    height: 275px;
    width: 200px;
  }

  .productsBox {
    display: flex;
    justify-content: space-around; 
    flex-wrap: wrap;
  }
.pointed{
    box-shadow: 2px 2px 10px black;
}
.notPointed{
    box-shadow: none;
}
  .productsCard {
    text-align: center;
    box-sizing: border-box; 
    border: 1px solid #ccc; 
    margin: 10px;
    padding: 10px;
    line-height: 0.1px;
  }

  .productDesc {
    display: flex;
    flex-direction: column;
    line-height: 0.1px;
  }

  .productQuantity {
    display: flex;
     align-items: center;
  }

  .addCart {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
  }
</style>



       <!-- <div class="products">
            <div class="innerProducts" v-for="innerCart in 4" :key="innerCart">
              <div class="product" v-for="(product , index) in productDetails" :key="index">
                  <picture>
                      <img :src="product.image" alt="Loading Image">
                  </picture>
                  <div class="details" v-on:mouseover="mouseover(index)" v-on:mouseleave="mouseleave(index)">
                      <p>
                          <b>{{product.name}}</b>
                          <small>{{product.price}}</small>
                          <div class="quantity">
                            <button @click="decreasePQ(index)">-</button>
                            <p>{{product.quantity}}</p>
                            <button @click="increasePQ(index)">+</button>
                            <button @click="cartAppend(product)">Cart</button>
                          </div>
                          <a v-show="product.buyEnable" @click="addToCart(product.name)" :href="buyPath">Buy</a>
                      </p>
                  </div>
              </div>
            </div>
        </div>   -->


        /* img{
    width: 80%;
    height: 70%;
}
.products{
    width: 70%;
    box-shadow: 2px 2px 10px rgba(0, 0,  0, 0.2);
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
.quantity{
    display: flex;
} */