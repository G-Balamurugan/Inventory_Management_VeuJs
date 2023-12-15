import { mapActions, mapState, mapWritableState } from "pinia";
import { getAllProducts } from "@/stores/product-list-store.js";
export default {
  data() {
    return {
      productId: localStorage.getItem("updateProduct"),
      product: {},
      productName: "",
      productPrice: "",
      productStock: "",
      productCategory: "",
    };
  },
  computed: {
    ...mapState(getAllProducts, ["productDetails", "cartList", "list"]),
  },
  methods: {
    ...mapActions(getAllProducts, [
      "addToCartList",
      "GET_ALL_PRODUCTS",
      "UPDATE_PRODUCT",
    ]),
    addProductInfo() {
      for (let index = 0; index < this.productDetails.length; index++) {
        if (this.productDetails[index].id == this.productId) {
          this.product = this.productDetails[index];
          break;
        }
      }
      if (
        this.productName == "" ||
        this.productPrice == "" ||
        this.productStock == "" ||
        this.productCategory == ""
      ) {
        alert("Enter all fields ..!");
        return;
      } else if (this.productPrice <= 0 || this.productStock <= 0) {
        alert("Price and Stock can only be Positive");
        return;
      } else if (
        this.productName == this.product.name &&
        this.productPrice == this.product.price &&
        this.productStock == this.product.stock &&
        this.productCategory == this.product.category
      ) {
        alert("Enter New Values");
        return;
      } else {
        console.log("Hello --> Update");
        const cartRequest = {
          name: this.productName,
          price: this.productPrice,
          quantity: this.productStock,
          category: {
            id: 1,
            name: "electronics",
          },
        };
        const actions = {
          payload: cartRequest,
        };
        this.UPDATE_PRODUCT(actions, this.product.id);
        // this.$router.push("/")
      }
    },
  },
  mounted() {
    for (let index = 0; index < this.productDetails.length; index++) {
      if (this.productDetails[index].id == this.productId) {
        this.product = this.productDetails[index];
        this.productName = this.product.name;
        this.productPrice = this.product.price;
        this.productStock = this.product.stock;
        this.productCategory = this.product.category;
        break;
      }
    }
  },
};
