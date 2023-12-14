import { mapActions, mapState, mapWritableState } from "pinia";
import { getAllProducts } from "@/stores/product-list-store.js";
export default{
    data() {
        return {
            searchMessage : ''
        }
    },
    computed: {
        ...mapState(getAllProducts, ["cartList","cartItems"]),
      },
      methods: {
        onCartRender()
        {
            this.$router.push("/cart")
        },
        onProductRender()
        {
            this.$router.push("/")
        }
    },
}