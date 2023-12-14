import { mapActions, mapState, mapWritableState } from "pinia";
import { getAllProducts } from "@/stores/product-list-store.js";

export default{
    data() {
        return {
          pointCard : "notPointed"
        };
      },
    computed: {
        ...mapState(getAllProducts, ["productDetails", "cartList" ,"cartItems"]),
    },   
    methods: {
        ...mapActions(getAllProducts, ["removeFromCartList","cartListClear"]),
        mouseOver(index) {
          this.cartList[index].productPointed = "pointed"
        },
        mouseLeave(index) {
          this.cartList[index].productPointed = "notPointed" 
        },
        increaseQuantity(index) {
          this.cartList[index].quantity++;
          this.cartList[index].tempQuantity++;
        },
        decreaseQuantity(index) {
          this.cartList[index].tempQuantity--;
          if(this.cartList[index].tempQuantity == 0)
          this.removeFromCartList(this.cartList[index])       //Empty hence can be removed
        },
        cartRemove(product) {
          this.removeFromCartList(product);
          alert("Item "+product.name+" Removed From Cart")
        },
        clearCart()
        {
          this.cartListClear();
        }
      }, 
}