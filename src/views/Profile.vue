<template>
  <v-container>
    <v-app-bar app height="90">
      <div class="d-flex">
        <img v-bind:src="image" />
      </div>

      <v-spacer></v-spacer>
      <router-link class="black--text text-h6 mr-5 text" to="/Dashboard"
        ><v-icon class="text">mdi-arrow-right</v-icon> Back to Home</router-link
      >
    </v-app-bar>
    <h3 class="text-center">Update Profile</h3>
    <v-text-field
      v-model="firstName"
      label="First name"
      required
    ></v-text-field>
    <v-text-field v-model="lastName" label="First name" required></v-text-field>
    <v-text-field v-model="userName" label="First name" required></v-text-field>
    <v-text-field v-model="email" label="First name" required></v-text-field>
    <v-text-field v-model="number" label="First name" required></v-text-field>
    <v-text-field v-model="password" label="First name" required></v-text-field>
    <v-btn @click="updateProfile()"> Update</v-btn>
  </v-container>
</template>

<script>
export default {
  name: "Profile",

  data() {
    return {
      valid: true,
      //v-modeling to store values in Local Storage
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      userName: "",
      number: "",
      currentAccount: [],
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
  methods: {
    updateProfile() {
      this.accounts = JSON.parse(localStorage.getItem("accounts"));
      /* Searches for the specified account and
      replaces the values with stored values*/

      this.index = this.accounts.findIndex((x) => x.email == this.e);
      this.accounts[this.index] = {
        email: this.email,
        firstName: this.firstName,
        lastName: this.lastName,
        password: this.password,
        userName: this.userName,

        number: this.number,
      };
      localStorage.setItem("accounts", JSON.stringify(this.accounts));
      alert("hello");
      localStorage.setItem(
        "currentAccount",
        JSON.stringify(this.accounts[this.index])
      );
      this.$alert(
        "Congratulations! Your account has been successfully updated"
      );
    },
  },
};
</script>
<style scoped>
.color {
  background-color: rgb(245, 245, 245);
}
img {
  width: 350px;
}
.text {
  text-decoration: none;
}
</style>

