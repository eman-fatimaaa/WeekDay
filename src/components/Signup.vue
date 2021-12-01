<template>
  <div class="SignUp">
    <v-app-bar app height="90">
      <div class="d-flex">
        <img v-bind:src="image" />
      </div>

      <v-spacer></v-spacer>
    </v-app-bar>
    <v-container class="mt-15 width">
      <v-row class="text-center color">
        <!--Sign up Form begins here-->
        <v-col>
          <h1>Sign Up</h1>

          <v-container class="center">
            <v-form ref="form" v-model="valid" lazy-validation>
              <v-row no-gutters>
                <v-col cols="4">
                  <v-text-field
                    label="First Name"
                    type="text"
                    :rules="nameRules"
                    v-model="firstName"
                    required
                  ></v-text-field>
                </v-col>

                <v-col cols="4 " class="ml-15">
                  <v-text-field
                    label="Last Name"
                    type="text"
                    :rules="nameRules"
                    v-model="lastName"
                    required
                  ></v-text-field>
                </v-col>
              </v-row>
              <v-row no-gutters>
                <v-col cols="4">
                  <v-text-field
                    label="Email"
                    type="email"
                    :rules="emailRules"
                    v-model="email"
                    required
                  ></v-text-field>
                </v-col>
                <v-col cols="4" class="ml-15">
                  <v-text-field
                    label="User Name"
                    type="text"
                    :rules="userNameRules"
                    v-model="userName"
                    required
                  ></v-text-field>
                </v-col>
              </v-row>
              <v-row no-gutters>
                <v-col cols="4">
                  <v-text-field
                    :append-icon="show4 ? 'mdi-eye' : 'mdi-eye-off'"
                    label="Password"
                    type="password"
                    v-model="password"
                    :rules="passwordRules"
                  ></v-text-field>
                </v-col>
                <v-col cols="4" class="ml-15">
                  <v-text-field
                    label="Phone Number"
                    type="tel"
                    v-model="number"
                    :rules="numberRules"
                  ></v-text-field>
                </v-col>
              </v-row>
              <v-row>
                <v-col cols="3">
                  <v-btn
                    height="39"
                    depressed
                    color="primary"
                    @click="validateAndStoreData"
                    block
                    class="btnMargin"
                  >
                    Sign Up
                  </v-btn>
                </v-col>
                <p class="pMargin">
                  Already have an account?<router-link
                    class="black--text mr-5"
                    to="/Login"
                    ><a>Log In</a></router-link
                  >
                </p>
              </v-row>
            </v-form>
          </v-container>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import {
  emailRules,
  nameRules,
  userNameRules,
  numberRules,
  passwordRules,
} from "@/constants/Constants.js";

export default {
  name: "HelloWorld",

  data() {
    return {
      agreeToTerms: false,
      valid: true,

      //data properties for Regex
      emailRules: emailRules,
      nameRules: nameRules,
      userNameRules: userNameRules,
      passwordRules: passwordRules,
      numberRules: numberRules,
      //data properties for storing data
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      userName: "",
      number: "",
      accounts: [],

      checkbox: false,
      image: require("@/assets/images/weekday.png"),
    };
  },
  created() {
    this.accounts = JSON.parse(localStorage.getItem("accounts") || "[]");
  },
  methods: {
    validateAndStoreData() {
      if (this.$refs.form.validate()) {
        let account = {
          firstName: this.firstName,
          lastName: this.lastName,
          email: this.email,
          password: this.password,
          userName: this.userName,
          number: this.number,
        };
        this.accounts.push(account);
        localStorage.setItem("accounts", JSON.stringify(this.accounts));

        this.$alert("Your account has been created successfully.");
        this.$router.push({ name: "Login" });
      } else {
        this.$alert("Please fill input feilds");
      }
    },
  },
};
</script>
<style scoped>
.center {
  margin-left: 15%;
}
img {
  width: 350px;
}
.text {
  text-decoration: none;
}
.margin {
  margin-right: 5%;
}
.color {
  background-color: rgba(245, 245, 245, 0.5);
  border-radius: 10px;
  box-shadow: 0px 1px 4px 0px;
}
.btnMargin {
  margin-left: 90%;
}
.pMargin {
  margin-left: -17%;
}
.width {
  width: 1000px;
}
</style>
