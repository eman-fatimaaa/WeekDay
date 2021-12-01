<template>
  <div class="Checkout">
    <v-app-bar app height="90">
      <div class="d-flex">
        <img v-bind:src="image" />
      </div>

      <v-spacer></v-spacer>
      <router-link class="black--text text-h6 mr-5" to="/Login"
        >Log In</router-link
      >
      <router-link class="black--text text-h6 mr-5" to="/">Sign Up</router-link>
      <router-link class="black--text text-h6 mr-5" to="/Dashboard"
        >Home</router-link
      >
    </v-app-bar>
    <v-stepper v-model="e1" class="mt-15">
      <v-stepper-header>
        <v-stepper-step :complete="e1 > 1" step="1">
          Delivery Details
        </v-stepper-step>

        <v-divider></v-divider>

        <v-stepper-step :complete="e1 > 2" step="2">
          Personal Details
        </v-stepper-step>

        <v-divider></v-divider>

        <v-stepper-step step="3"> Payment</v-stepper-step>
      </v-stepper-header>

      <v-stepper-items>
        <v-stepper-content step="1">
          <v-card class="mb-12 colors" height="200px"></v-card>

          <v-btn color="primary" @click="e1 = 2"> Continue </v-btn>

          <v-btn text> Cancel </v-btn>
        </v-stepper-content>

        <v-stepper-content step="2">
          <v-card class="mb-12 colors" height="200px">
            <v-card-text v-model="email"> {{ email }}</v-card-text>

            <v-card-text v-model="userName"> {{ userName }}</v-card-text>
            <v-card-text v-model="password"> {{ password }}</v-card-text>
            <v-card-text v-model="number"> {{ number }}</v-card-text>
          </v-card>

          <v-btn color="primary" @click="e1 = 3"> Continue </v-btn>

          <v-btn text> Cancel </v-btn>
        </v-stepper-content>

        <v-stepper-content step="3">
          <v-card class="mb-12 colors" height="200px">
            <v-card-text>
              <v-row align="center">
                <v-container class="border">
                  <v-checkbox
                    hide-details
                    class="shrink mr-2 mt-0"
                    label="Credit/Debit Card"
                  ></v-checkbox>
                </v-container>
              </v-row>

              <v-row align="center" class="mt-10">
                <v-container class="border">
                  <v-checkbox
                    hide-details
                    class="shrink mr-2 mt-0"
                    label="Master CArd"
                  ></v-checkbox>
                </v-container>
              </v-row>
            </v-card-text>
          </v-card>

          <v-btn color="primary" @click="e1 = 1"> Continue </v-btn>

          <v-btn text> Cancel </v-btn>
        </v-stepper-content>
      </v-stepper-items>
    </v-stepper>
  </div>
</template>



<script>
export default {
  name: "Checkout",
  data() {
    return {
      valid: true,
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      userName: "",
      number: "",
      currentAccount: [],
      e1: 1,
      image: require("@/assets/images/weekday.png"),
    };
  },
  created() {
    this.currentAccount = JSON.parse(localStorage.getItem("currentAccount"));

    this.firstName = this.currentAccount.firstName;
    this.lastName = this.currentAccount.lastName;
    this.userName = this.currentAccount.userName;
    this.email = this.currentAccount.email;
    this.password = this.currentAccount.password;
    this.number = this.currentAccount.number;
  },
};
</script>

<style scoped>
.border {
  border: 3px solid black;
}
img {
  width: 350px;
}
.colors {
  background-color: rgb(245, 245, 245);
}
</style>
