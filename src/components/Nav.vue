<template>
  <div class="container">
    <div class="nav logo">Travello</div>
    <div class="nav services-section">
      <div class="accomodations">
        <span>
          <font-awesome-icon class="icon" icon="home" size="lg" :style="{ color: '#E3E3E3' }" />
        </span>
        <div class="services-section-text">Accomodations</div>
      </div>
      <div class="car-rentals">
        <span>
          <font-awesome-icon class="icon" icon="car" size="lg" :style="{ color: '#E3E3E3' }" />
        </span>
        <div class="services-section-text">Car Rentals</div>
      </div>
      <div class="airport-taxis ">
        <span>
          <font-awesome-icon class="icon" icon="taxi" size="lg" :style="{ color: '#E3E3E3' }" />
        </span>
        <div class="services-section-text">Airport Taxis</div>
      </div>
    </div>
    <div class="nav login-section">
      <button type="button" class="register" @click="showRegister()">
        <p>Register</p>
      </button>
      <button class="sign-in" @click="showLogin()"><p>Sign In</p></button>
      <button class="help">
        <font-awesome-icon icon="comment" size="lg" />
      </button>
    </div>
    <modal name="login" :width="300" :height="230">
      <div class="register-container">
        <h1>Welcome Back</h1>
        <form class="register-form">
          <input type="text" placeholder="Enter Email" name="email" required />
          <input type="password" placeholder="Enter Password" name="psw" required />
          <button type="submit" class="SignInBtn">Sign In</button>
        </form>
      </div>
    </modal>
    <modal name="register" :width="300">
      <div class="register-container">
        <h1>Sign Up</h1>
        <form class="register-form">
          <input type="text" placeholder="Enter Email" name="email" required />
          <input type="password" placeholder="Enter Password" name="psw" required />
          <input type="password" placeholder="Repeat Password" name="psw" required />
          <p>By creating an account you agree to our <a href="#">Terms & Privacy</a>.</p>
          <button type="submit" class="registerbtn">Register</button>
        </form>
      </div>
    </modal>
  </div>
</template>
<script>
import { library } from "@fortawesome/fontawesome-svg-core";
import { faHome, faCar, faTaxi, faComment } from "@fortawesome/free-solid-svg-icons";

library.add(faHome);
library.add(faCar);
library.add(faTaxi);
library.add(faComment);
export default {
  name: "Nav",
  props: {
    msg: String
  },
  methods: {
    showLogin() {
      this.$modal.show("login");
    },
    showRegister() {
      this.$modal.show("register");
    },
    hide() {
      this.$modal.hide("hello-world");
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.container {
  display: grid;
  width: auto;
  height: auto;
  grid-template-columns: 18% auto auto;
  margin: 30px 30px 40px 40px;
}
.nav {
  color: #42b983;
  display: inline-grid;
  grid-template-columns: 20% auto auto;
  grid-template-rows: auto;
  grid-column-gap: 40px;
  justify-items: start;
  margin-right: 50px;
}
.services-section {
  display: inline-grid;
  grid-template-columns: auto auto auto;
  font-size: 10px;
  font-weight: bold;
  color: #111112;
  justify-self: start;
  align-items: center;
}
.services-section-text {
  color: #111112;
  margin-top: 4px;
}
.login-section {
  display: inline-grid;
  font-size: 10px;
  grid-template-columns: auto auto auto;
  grid-column-gap: 5px;
  justify-self: end;
  max-width: 250px;
}
.logo {
  color: black;
  justify-self: start;
  align-items: center;
  font-weight: bold;
  font-size: 22px;
  grid-template-columns: auto;
}
.accomodations {
  display: inline-flex;
  align-self: center;
  width: auto;
}
.car-rentals {
  display: inline-flex;

  width: auto;
}
.airport-taxis {
  display: inline-flex;
  width: auto;
}
.sign-in {
  margin-right: 50px;
  text-align: center;
  vertical-align: middle;
  font-weight: bold;
  color: #fee;
  background-color: #ff3511;
  border-radius: 25px;
  border: none;
  width: 100px;
  height: 40px;
}
.register {
  margin-right: 5%;
  text-align: center;
  vertical-align: middle;
  background-color: #fee;
  font-weight: bold;
  border: none;
  border-radius: 25px;
  width: 100px;
  height: 40px;
}
.icon {
  width: 17.5px;
  margin-right: 5px;
  vertical-align: middle;
  padding-top: 2px;
}
.help-icon {
  margin-right: none;
  margin-left: 4px;
  margin-top: 3px;
}
.help {
  border-radius: 50%;
  height: 40px;
  width: 40px;
  background-color: #d8d8d8;
  border: none;
}
.register-form {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #fff;
}
.register-form p {
  margin-top: 0;
  font-size: 10px;
}
.register-form input {
  border: none;
}
.register-container {
  background-color: #fff;
}
.register-container input {
  height: 24px;
  width: 200px;
  border-radius: 5px;
  font-size: 16px;
  margin-bottom: 20px;
}
.register-container h1 {
  font-size: 22px;
  background: #fff;
  color: #ff3511;
  width: 100%;
  text-align: center;
  padding: 20px 0px;
  margin-top: 0;
}
.registerbtn {
  width: 140px;
  font-size: 20px;
  border-radius: 5px;
  border: none;
  background-color: #ff3511;
  color: #ffffff;
  margin-bottom: 20px;
}
.SignInBtn {
  width: 140px;
  font-size: 20px;
  border-radius: 5px;
  border: none;
  background-color: #ff3511;
  color: #ffffff;
  margin-bottom: 20px;
}
</style>
