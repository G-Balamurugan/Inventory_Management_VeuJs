// import image from "@/assets/images/tree-logo.jpg";

import { mapActions, mapState, mapWritableState } from "pinia";
import { getAllProducts } from "@/stores/product-list-store.js";
export default {
  // methods {

  // }
  // created()
  // {

  // },
  data() {
    return {
      pointCard : "notPointed"
    };
  },
  computed: {
    ...mapState(getAllProducts, ["productDetails", "cartList"]),
  },
  methods: {
    ...mapActions(getAllProducts, ["addToCartList"]),
    mouseOver(index) {
      this.productDetails[index].productPointed = "pointed"
    },
    mouseLeave(index) {
      this.productDetails[index].productPointed = "notPointed" 
    },
    increaseQuantity(index) {
      this.productDetails[index].quantity++;
    },
    decreaseQuantity(index) {
      if(this.productDetails[index].quantity > 1)
      this.productDetails[index].quantity--;
    },
    cartAppend(product) {
      this.addToCartList(product);
      alert("Item "+product.name+" Added to Cart")
    },
  },
};
