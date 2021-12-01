<template>
  <div class="about">
    <h1>This is an about page</h1>

    <!-- <Product/> -->
    <ProductList />
  </div>
</template>

<script>
//import Product from '../views/Product.vue'
import ProductList from "../components/ProductList.vue";

export default {
  components: {
    // Product,
    ProductList,
  },
};
</script>