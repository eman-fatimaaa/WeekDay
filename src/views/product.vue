<template>
  <div class="conatiner">
    <v-app-bar app height="90">
      <div class="d-flex">
        <img v-bind:src="image" />
      </div>

      <v-spacer></v-spacer>

      <router-link class="black--text text-h6 mr-5 text" to="/Dashboard"
        ><v-icon class="text">mdi-arrow-right</v-icon> Back to Home</router-link
      >
    </v-app-bar>
    <v-card class="mx-auto my-12" max-width="700">
      <template slot="progress">
        <v-progress-linear
          color="deep-purple"
          height="10"
          indeterminate
        ></v-progress-linear>
      </template>

      <v-img height="250" :src="product.image" contain></v-img>

      <v-card-title>{{ product.title }}</v-card-title>

      <v-card-text>
        <v-row align="center" class="mx-0">
          <v-rating
            :value="4.5"
            color="amber"
            dense
            half-increments
            readonly
            size="14"
          ></v-rating>

          <div class="grey--text ms-4 mb-5">4.5 (413)</div>
        </v-row>

        <div>
          {{ product.description }}
        </div>
      </v-card-text>

      <v-divider class="mx-4"></v-divider>
      <v-card>
        <v-card-title>In Stock</v-card-title>

        <v-card-actions>
          <v-btn color="deep-purple lighten-2" text @click="addToCart()"
            >Add To cart
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-card>
  </div>
</template>

<script>
export default {
  props: ["id"],

  mounted() {
    this.$store.dispatch("getProduct", this.id);
  },
  data() {
    return {
      image: require("@/assets/images/weekday.png"),
    };
  },
  computed: {
    product() {
      return this.$store.state.product;
    },
  },

  methods: {
    addToCart() {
      this.$alert("Cart updated");
      this.$store.dispatch("addProductToCart", {
        product: this.product,
        quantity: 1,
      });
    },
  },
};
</script>
<style scoped>
.text {
  text-decoration: none;
}
img {
  width: 350px;
}
</style>
