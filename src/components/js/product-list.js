import { mapActions, mapState, mapWritableState } from "pinia";
import { getAllProducts } from "@/stores/product-list-store.js";
import Images1 from "@/assets/images/iphone1.jpg";

export default {
  data() {
    return {
      loading: false,
      error: false,
      pointCard: "notPointed",
      Images1,
    };
  },
  computed: {
    ...mapState(getAllProducts, ["productDetails", "cartList", "list"]),
  },
  methods: {
    ...mapActions(getAllProducts, ["addToCartList", "GET_ALL_PRODUCTS"]),

    mouseOver(index) {
      this.productDetails[index].productPointed = "pointed";
    },
    mouseLeave(index) {
      this.productDetails[index].productPointed = "notPointed";
    },
    increaseQuantity(index) {
      if (
        this.productDetails[index].quantity < this.productDetails[index].stock
      )
        this.productDetails[index].quantity++;
      else {
        alert("Out Of Stock");
      }
    },
    decreaseQuantity(index) {
      if (this.productDetails[index].quantity > 1)
        this.productDetails[index].quantity--;
    },
    cartAppend(product) {
      this.addToCartList(product);
      alert("Item " + product.name + " Added to Cart");
    },
    updateProduct(product) {
      localStorage.setItem("updateProduct", product.id);
      this.$router.push("/update/product");
    },
    onSuccessOfProductList() {
      this.loading = false;
    },
    onFailureOfProductList() {
      this.loading = false;
      this.error = true;
    },
  },
  mounted() {
    this.GET_ALL_PRODUCTS({
      failure: this.onFailureOfProductList,
      success: this.onSuccessOfProductList,
    });
  },
};
