<template>
  <!-- <LoginPage/> -->
  <!-- <RegistrationForm/> -->
  <!-- <RoomSelection name="Mr Jones"/> -->
  <PassGeneration name="Bond Jones" roomNo="0224" roomType="Smart Single Room" time="6 Sept 2021 23:59pm"/>
</template>

<script>
// import LoginPage from './components/LoginPage.vue'
//import RegistrationForm from './components/RegistrationForm.vue'
//import RoomSelection from './components/RoomSelection.vue'
import PassGeneration from './components/PassGeneration.vue'
export default {
  name: 'App',
  components: {
    //LoginPage,
    //RegistrationForm,
    //RoomSelection,
    PassGeneration,
  }
}

</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
