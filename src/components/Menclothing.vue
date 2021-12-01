<template>
  <v-app>
    <v-app-bar app height="90">
      <div class="d-flex">
        <img v-bind:src="image" />
      </div>

      <v-spacer></v-spacer>
      <div class="dropdown mr-5">
        <button
          class="btn btn-secondary color dropdown-toggle bg-transparent"
          type="button"
          id="dropdownMenuButton"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
        >
          Choose Specific Category
        </button>
        <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
          <a class="dropdown-item" href="#">
            <router-link class="black--text text-h6 mr-5" to="/electronics"
              >Electronics</router-link
            ></a
          >
          <a class="dropdown-item" href="#"
            ><router-link class="black--text text-h6 mr-5" to="/menclothing"
              >Men's Wear</router-link
            ></a
          >
          <a class="dropdown-item" href="#"
            ><router-link class="black--text text-h6 mr-5" to="/womenclothing"
              >Women's Wear</router-link
            ></a
          >
          <a class="dropdown-item" href="#"
            ><router-link class="black--text text-h6 mr-5" to="/jewelery"
              >Jewelery</router-link
            ></a
          >
        </div>
      </div>
      <router-link class="black--text text-h6 mr-5 text" to="/Dashboard"
        ><v-icon class="text">mdi-arrow-right</v-icon> Back to Home</router-link
      >
    </v-app-bar>
    <v-card class="d-flex flex-row flex-wrap">
      <v-card
        id="my-card"
        class="mx-auto my-12"
        max-width="270"
        v-for="menclothing in menclothings"
        :key="menclothing.id"
      >
        <v-img contain height="250" :src="menclothing.image"> </v-img>
        <v-card-title>{{ menclothing.title }}</v-card-title>

        <v-card-text>
          <v-row align="center" class="mx-0"> </v-row>

          <div class="my-4">
            <h6>Price : ${{ menclothing.price }}</h6>
          </div>
        </v-card-text>

        <v-divider class="mx-4"></v-divider>
        <v-btn class="ma-2" outlined @click="addToCart"> + Add to Cart </v-btn>
      </v-card>
    </v-card>
  </v-app>
</template>


<script>
import Vue from "vue";
import VueAxios from "vue-axios";
import axios from "axios";
Vue.use(VueAxios, axios);

export default {
  name: "menclothing",
  // props: ["jewelery"],
  data: () => {
    return {
      loading: false,
      selection: 1,
      menclothings: [],
      image: require("@/assets/images/weekday.png"),
    };
  },

  mounted() {
    Vue.axios
      .get("https://fakestoreapi.com/products/category/men's clothing")
      .then((response) => {
        (this.menclothings = response.data), console.log(response.data);
      });
  },
  methods: {
    reserve() {
      this.loading = true;

      setTimeout(() => (this.loading = false), 2000);
    },
    addToCart() {
      this.$alert("Added to cart");
      this.$store.dispatch("addProductToCart", {
        product: this.product,
        quantity: 1,
      });
    },
  },
};
</script>

<style scoped>
img {
  width: 350px;
}
.color {
  color: black;
}
.text {
  text-decoration: none;
}
</style>