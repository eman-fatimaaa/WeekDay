<template>
  <!-- App.vue starts here -->

  <v-app>
    <v-navigation-drawer app :mini-variant.sync="mini">
      <v-list-item>
        <v-list-item-content class="mt-5 text-center">
          <router-link
            class="black--text text-h6 mr-5 text"
            to="/profiledetails"
            ><v-icon>mdi-account-box</v-icon></router-link
          >
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>

      <v-list dense nav>
        <router-link class="black--text text-h6 mr-5 text" to="/profiledetails">
          <v-list-item link>
            <v-list-item-icon>
              <v-icon>mdi-account</v-icon>
            </v-list-item-icon>

            <v-list-item-content>
              <v-list-item-title>My Account</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </router-link>
        <router-link class="black--text text-h6 text mr-5" to="/Profile">
          <v-list-item link>
            <v-list-item-icon>
              <v-icon>mdi-account-circle</v-icon>
            </v-list-item-icon>

            <v-list-item-content>
              <v-list-item-title>Update Account</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </router-link>
      </v-list>
      <template v-slot:append>
        <div class="pa-2">
          <v-btn block @click="logOut"
            ><v-icon>mdi-logout</v-icon> Logout
          </v-btn>
        </div>
      </template>
    </v-navigation-drawer>

    <v-app-bar app height="85">
      <v-app-bar-nav-icon @click.stop="mini = !mini"></v-app-bar-nav-icon>

      <div class="d-flex align">
        <img v-bind:src="image" />
      </div>
      <v-text-field
        label="Search"
        placeholder=""
        filled
        rounded
        dense
        class="mt-5"
        ><v-icon>mdi-search</v-icon></v-text-field
      >

      <v-spacer></v-spacer>

      <div class="dropdown">
        <button
          class="
            btn btn-secondary
            text-color
            bg-transparent
            dropdown-toggle
            dropdownBorder
            mr-5
          "
          type="button"
          id="dropdownMenuButton"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
        >
          <v-icon>mdi-account</v-icon>
        </button>
        <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
          <a class="dropdown-item" href="#">
            <router-link
              class="black--text text-h6 mr-5 text"
              to="/profiledetails"
              >Your Account</router-link
            ></a
          >
          <a class="dropdown-item" href="#"
            ><router-link class="black--text text-h6 mr-5 text" to="/profile"
              >Update Profile</router-link
            ></a
          >
          <a class="dropdown-item black--text text-h6" href="#" @click="logOut"
            >Log Out</a
          >
        </div>
      </div>

      <div class="dropdown">
        <button
          class="
            btn btn-secondary
            text-color
            bg-transparent
            dropdown-toggle
            mr-4
          "
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
            <router-link class="black--text text-h6 mr-5 text" to="/electronics"
              >Electronics</router-link
            ></a
          >
          <a class="dropdown-item" href="#"
            ><router-link
              class="black--text text-h6 mr-5 text"
              to="/menclothing"
              >Men's Wear</router-link
            ></a
          >
          <a class="dropdown-item" href="#"
            ><router-link
              class="black--text text-h6 mr-5 text"
              to="/womenclothing"
              >Women's Wear</router-link
            ></a
          >
          <a class="dropdown-item" href="#"
            ><router-link class="black--text text-h6 mr-5 text" to="/jewelery"
              >Jewelry</router-link
            ></a
          >
        </div>
      </div>
      <!--Adds cart to app bar-->
      <Head />
    </v-app-bar>
    <v-carousel>
      <v-carousel-item
        v-for="(carouselItem, i) in carouselItems"
        :key="i"
        :src="carouselItem.src"
      ></v-carousel-item>
    </v-carousel>
    <!-- Content for products starts here-->

    <!-- Sizes your content based upon application components -->
    <v-main class="style">
      <!-- Provides the application the proper gutter -->
      <v-container fluid>
        <v-row>
          <v-col v-for="product in products" :key="product.id">
            <v-card class="mx-auto my-12" max-width="374" height="650">
              <template slot="progress">
                <v-progress-linear
                  color="deep-purple"
                  height="10"
                  indeterminate
                ></v-progress-linear>
              </template>
              <v-conatiner>
                <v-img height="250" contain :src="product.image"></v-img>

                <v-card-title
                  ><router-link
                    class="text fontSize black--text"
                    :to="{ name: 'product', params: { id: product.id } }"
                    >{{ product.title }}</router-link
                  ></v-card-title
                >
              </v-conatiner>

              <v-card-text>
                <v-row align="center">
                  <v-rating
                    :value="4.5"
                    color="amber"
                    dense
                    half-increments
                    readonly
                    size="14"
                  ></v-rating>

                  <div class="grey--text">4.5 (413)</div>
                  <v-divider class="mx-5"></v-divider>
                  <div class="black--text text-center">
                    <h5>${{ product.price }}</h5>
                  </div>
                </v-row>
              </v-card-text>

              <v-divider class="mx-5"></v-divider>
              <span>
                <v-card-title
                  ><router-link
                    class="text fontSize black--text"
                    :to="{ name: 'product', params: { id: product.id } }"
                    ><v-icon>mdi-chevron-right</v-icon>See More
                    Details</router-link
                  ></v-card-title
                >

                <v-card-title class="mr-15">
                  <v-btn
                    color="deep-purple lighten-2"
                    class="border"
                    @click="addToCart()"
                    text
                    >Add To Cart
                  </v-btn>
                </v-card-title></span
              >
            </v-card>
          </v-col>
        </v-row>
      </v-container>
      <div class="text-center mb-5">
        <v-pagination :length="4" circle></v-pagination>
      </div>
    </v-main>

    <v-footer elevation="11">
      <v-card
        flat
        tile
        color="rgb(245,245,245)"
        class="white--text text-center"
      >
        <v-card-text>
          <v-btn
            v-for="icon in icons"
            :key="icon"
            class="mx-4 black--text"
            icon
          >
            <v-icon size="24px">
              {{ icon }}
            </v-icon>
          </v-btn>
        </v-card-text>

        <v-card-text class="black--text pt-0">
          <h4>About Us</h4>

          <div class="conatiner">
            Weekday is a Swedish street/fashion brand influenced by youth
            culture and street style. The brand offers a unique retail
            experience and a carefully curated mix of women's, men's and
            accessories assortments, as well as a small selection of external
            brands.
          </div>
        </v-card-text>

        <v-divider></v-divider>

        <v-card-text class="black--text">
          {{ new Date().getFullYear() }} — <strong>Weekday</strong>
        </v-card-text>
      </v-card>
    </v-footer>
  </v-app>
</template>
  
  <script>
import Vue from "vue";
import axios from "axios";
import VueAxios from "vue-axios";
Vue.use(VueAxios, axios);

import Head from "@/components/Head.vue";
export default {
  name: "Dashboard",
  components: {
    Head,
  },

  computed: {
    products() {
      return this.$store.state.products;
    },
  },
  mounted() {
    //dispatches getProduct to the DOM
    this.$store.dispatch("getProducts");
  },

  data: () => ({
    mini: true,
    productsArray: null,
    e1: 1,
    image: require("@/assets/images/weekday.png"),

    drawer: true,

    items: [
      { title: "Home", icon: "mdi-home-city" },
      { title: "My Account", icon: "mdi-account" },
      { title: "Users", icon: "mdi-account-group-outline" },
    ],

    carouselItems: [
      {
        src: require("@/assets/images/group2.jpeg"),
      },
      {
        src: require("@/assets/images/vouge.png"),
      },
    ],
    icons: ["mdi-facebook", "mdi-twitter", "mdi-linkedin", "mdi-instagram"],
  }),
  methods: {
    //Redirects user to the login page
    logOut() {
      this.$router.push({ name: "Login" });
      this.$store.state.authenticated = false;
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
  width: 310px;
}
.align {
  margin-left: -5%;
}
.margin {
  margin-left: -11%;
}
.rounded-cards {
  border-radius: 5%;
}
.text {
  text-decoration: none;
}
.fontSize {
  font-size: 19px;
}
.style {
  margin-top: -7%;
}
.color {
  background-color: rgb(245, 245, 245);
}
.text-color {
  color: black;
}
.border {
  border: 1px solid black;
}
.dropdownBorder {
  border: none;
}
.text {
  text-decoration: none;
}
</style>



