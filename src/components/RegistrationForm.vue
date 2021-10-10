<template>
  <h1>qhelper</h1>
  <h1>Hotel Miracle</h1>
  <h1>Post Arrival Registration</h1>
  <div class = "topbar">
      Personal information
      Room Selection
      Pass Generation
  </div>
  <div id="reg_form">
    <div class="container" id="left">
      <div class="row">
        <div class="col-name">
          <label>Name</label>
        </div>
        <div class="col-con">
          <select id="gender" name="gender">
            <option value="mr">Mr</option>
            <option value="mrs">Mrs</option>
            <option value="ms">Ms</option>
          </select>
          <input
            type="text"
            id="fname"
            name="firstname"
            placeholder="First name"
          />
        </div>
      </div>
      <br />
      <div class="row">
        <div class="col-name">
          <label for="nric">NRIC / Passport Number</label>
        </div>
        <div class="col-con">
          <input
            type="text"
            id="nric"
            name="nric"
            placeholder="e.g: A12345678"
          />
        </div>
        <br />
        <div class="col-name">
          <label for="doa">Date of Arrival</label>
        </div>
        <div class="col-con">
          <input
            type="text"
            id="doa"
            name="doa"
            placeholder="e.g: 01/09/2021"
          />
        </div>
        <br />
        <div class="col-name">
          <label for="flight">Flight / Coach / Ferry Number</label>
        </div>
        <div class="col-con">
          <input
            type="text"
            id="flight"
            name="flight"
            placeholder="e.g: MU567"
          />
        </div>
        <br />
        <h4>Travel History (Past 14 days)</h4>
        <div class="col-name">
          <label for="sdate">Start date</label>
          <label for="edate">End date</label>
        </div>
        <div class="col-con">
          <input type="date" id="sdate" name="sdate" />
          ---
          <input type="date" id="edate" name="edate" />
        </div>
        <br />
        <div class="col-name">
          <label for="vaccine">COVID-19 Vaccination History</label>
        </div>
        <div class="col-con">
          <select id="vaccine" name="vaccine">
            <option value="vaccinated_Pfizer">Vaccinated - Pfizer</option>
            <option value="vaccinated_Comirnaty">Vaccinated - Comirnaty</option>
            <option value="not_vaccinated">Not Vaccinated</option>
          </select>
        </div>
      </div>
    </div>
    <div class="container" id="middle">
      <div class="row">
        <div class="col-name">
          <br />
          <label></label>
        </div>
        <div class="col-con">
          <input
            type="text"
            id="lname"
            name="lastname"
            placeholder="Last name"
          />
        </div>
      </div>
      <br />
      <div class="row">
        <div class="col-name">
          <label for="contact">Contact Number</label>
        </div>
        <div class="col-con">
          <input
            type="text"
            id="contact"
            name="contact"
            placeholder="e.g: +65 12345678"
          />
        </div>
        <br />
        <div class="col-name">
          <label for="cod">Country of Departure</label>
        </div>
        <div class="col-con">
          <select id="cod" name="cod">
            <option value="china">China</option>
          </select>
        </div>
        <br />
        <div class="col-name">
          <label for="seat">Seat Number</label>
        </div>
        <div class="col-con">
          <input type="text" id="seat" name="seat" placeholder="e.g: 45D" />
        </div>
        <br /><br /><br /><br />
        <div class="col-name">
          <label for="country">Country & Region</label>
        </div>
        <div class="col-con">
          <select id="country" name="country">
            <option value="china">China</option>
          </select>
        </div>
        <br />
        <div class="col-name">
          <label for="passtype">Arrival Passenger Type</label>
        </div>
        <div class="col-con">
          <select id="passtype" name="passtype">
            <option value="singapore citizen">Singapore Citizen</option>
            <option value="short term visitor">Short Term Visitor</option>
            <option value="long term pass holder">Long Term Pass Holder</option>
          </select>
        </div>
      </div>
    </div>
    <div class="container" id="right">
      <h4>
        I hereby declare that the above mentioned information is true to the
        best of my knowledge.
      </h4>
      <h4>
        I understand that in the event of my information being found false or
        incorrect at any stage, I shall fully be liable to the prevaling laws
        and / or subject to sanictions.
      </h4>
      <input type="submit" value="Declare and Continue  >" class="btn" />
    </div>
  </div>
</template>

<style scoped>
#reg_form {
  width: 80vw;
  height: 60vh;
}
#left {
  position: relative;
  width: 35%;
  left: 10%;
  height: 100%;
  float: left;
  text-align: left;
}
#middle {
  position: relative;
  width: 35%;
  height: 100%;
  left: 10%;
  float: left;
  text-align: left;
}
#right {
  position: relative;
  width: 30%;
  height: 100%;
  left: 10%;
  float: left;
}
</style>
