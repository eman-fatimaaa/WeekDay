import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Login from "../views/Login.vue";
import Dashboard from "../views/Dashboard.vue";
import product from "../views/product.vue";
import Checkout from "../components/Checkout.vue";
import Profile from "../views/Profile.vue";
import Jewelery from "../components/Jewelery.vue";
import Menclothing from "../components/Menclothing.vue";
import Womenclothing from "../components/Womenclothing.vue";
import Electronics from "../components/Electronics.vue";
import ProfileDetails from "../views/ProfileDetails.vue";
import store from "../store";



Vue.use(VueRouter);
//Route paths for components

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,

  },
  {
    path: "/Login",
    name: "Login",
    component: Login,
  },
  {
    path: "/Dashboard",
    name: "Dashboard",
    component: Dashboard,
    //Guards the route for Dashbaord
    beforeEnter: (to, from, next) => {
      if (store.state.authenticated == false) {
        next(false);
      }
      else {
        next();
      }
    }
  },
  {
    path: "/product/:id",
    name: "product",
    component: product,
    props: true,

  },
  {
    path: "/checkout",
    name: "checkout",
    component: Checkout,

  },
  {
    path: "/profile",
    name: "profile",
    component: Profile,

  },
  {
    path: "/jewelery",
    component: Jewelery,
    name: "jewelery",
    props: true,
  },
  {
    path: "/electronics",
    component: Electronics,
    name: "electronics",
  },
  {
    path: "/menclothing",
    component: Menclothing,
    name: "menclothing",
  },
  {
    path: "/womenclothing",
    component: Womenclothing,
    name: "womenclothing",
  },
  {
    path: "/profiledetails",
    component: ProfileDetails,
    name: "profiledetails",
  },

];

const router = new VueRouter({
  routes,
});

export default router;
