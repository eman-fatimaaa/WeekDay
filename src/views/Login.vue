<template>
  <div class="Login">
    <v-app-bar app height="90">
      <div class="d-flex">
        <img v-bind:src="image" />
      </div>

      <v-spacer></v-spacer>
    </v-app-bar>
    <v-container class="mt-15 width">
      <v-row class="text-center color" cols="6">
        <!-- Log in form starts here-->
        <v-col>
          <h1>Log In</h1>
          <v-container class="align">
            <v-form ref="form">
              <v-col cols="5">
                <v-text-field
                  label="User Name"
                  type="text"
                  required
                  v-model="userName"
                  :rules="userNameRules"
                ></v-text-field>
              </v-col>
              <v-col cols="5">
                <v-text-field
                  :append-icon="show4 ? 'mdi-eye' : 'mdi-eye-off'"
                  label="Password"
                  type="password"
                  v-model="password"
                  :rules="passwordRules"
                ></v-text-field>
              </v-col>
              <v-col cols="5">
                <v-btn depressed color="primary" block @click="logIn">
                  Log In
                </v-btn>
              </v-col>
              <p class="pMargin">
                Don't have an account?<router-link
                  class="black--text mr-5"
                  to="/"
                  ><a>Sign Up</a></router-link
                >
              </p>
            </v-form>
          </v-container>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>
<script>
import { userNameRules, passwordRules } from "@/constants/Constants.js";

export default {
  name: "Login",

  data() {
    return {
      image: require("@/assets/images/weekday.png"),
      valid: true,

      //data properties for Regex
      userNameRules: userNameRules,
      passwordRules: passwordRules,
      //v-modeling for two way binding
      userName: "",
      password: "",
      accounts: [],
    };
  },

  methods: {
    logIn() {
      this.accounts = JSON.parse(localStorage.getItem("accounts"));

      //checks for the specific account and stores in new cuurentAccount
      this.currentAccount = this.accounts.find((u) => {
        return u.userName == this.userName && u.password == this.password;
      });
      if (this.currentAccount) {
        (this.$store.state.authenticated = true),
          this.$router.push({ name: "Dashboard" });

        localStorage.setItem(
          "currentAccount",
          JSON.stringify(this.currentAccount)
        );
      } else {
        this.$alert("We are afraid your account does not exist");
      }
    },
  },
};
</script>
<style scoped>
.align {
  margin-left: 28%;
}
img {
  width: 350px;
}
.color {
  background-color: rgba(245, 245, 245, 0.5);
  border-radius: 10px;
  box-shadow: 0px 1px 4px 0px;
}
.width {
  width: 900px;
}
.pMargin {
  margin-left: -59%;
}
</style>
