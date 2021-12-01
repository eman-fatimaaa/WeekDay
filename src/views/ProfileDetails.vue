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
    <v-row class="text-center mt-6">
      <v-col>
        <h1>My Profile</h1>

        <v-container style="width: 70%" class="mt-4">
          <v-container class="rounded-borders color">
            <v-row>
              <v-col cols="6" class="color" label="First Name" readonly>
                <u>
                  <v-text-field
                    style="margin: autos"
                    label="First Name"
                    readonly
                  >
                  </v-text-field>
                </u>
              </v-col>
              <v-col cols="6" class="color"
                ><v-text-field class="text-center" v-model="firstName">
                  {{ firstName }}
                </v-text-field>
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="6" class="color">
                <u> <v-text-field label="Last Name"> </v-text-field> </u>
              </v-col>
              <v-col cols="6" class="color"
                ><v-text-field v-model="lastName">
                  {{ lastName }}
                </v-text-field>
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="6" class="color">
                <u> <v-text-field label="User Name"> </v-text-field> </u>
              </v-col>
              <v-col cols="6" class="color"
                ><v-text-field v-model="userName">
                  {{ userName }}
                </v-text-field>
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="6" class="color">
                <u> <v-text-field label="Email"> </v-text-field> </u>
              </v-col>
              <v-col cols="6" class="color"
                ><v-text-field v-model="email">
                  {{ email }}
                </v-text-field>
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="6" class="color">
                <u>
                  <v-text-field label="Phone Number"> </v-text-field>
                </u>
              </v-col>
              <v-col cols="6" class="color"
                ><v-text-field v-model="number">
                  {{ number }}
                </v-text-field>
              </v-col>
            </v-row>
          </v-container>
        </v-container>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "Profile",

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
      image: require("@/assets/images/weekday.png"),
    };
  },

  created() {
    //gets the current account and diaplays credentials
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
.color {
  background-color: rgb(245, 245, 245);
}
img {
  width: 350px;
}
.border {
  border-radius: 5px;
}
.text {
  text-decoration: none;
}
.rounded-borders {
  box-shadow: 0px 4px 4px 0px;
  border-radius: 8px;
}
</style>

