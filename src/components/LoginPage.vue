<template>
  <div class="container">
      <h2>qhelper</h2>
      <h2>Hotel Miracle Quarantine Assistance System</h2>
  </div>
  <div class="container">
    <form action="/action_page.php">
      <div class="row">
        <button type="button">Guests</button>
        <button type="button">Admin</button> <br />
        <input
          type="text"
          name="roomNumber"
          placeholder="Room Number"
          required
        />
        <br />
        <input type="text" name="firstName" placeholder="First Name" required />
        <br />
        <input type="submit" value="Enter" class="btn" />
      </div>
    </form>
  </div>

  <div class="container">
    <div class="row">
      <div class="col">
        New guest?
        <a href="./RegistrationForm01.vue">Register here when you arrive!</a>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>