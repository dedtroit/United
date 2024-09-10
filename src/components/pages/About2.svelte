<script>
  export let goTo;
</script>

<div class="container">
  <div class="content">
    <div class="centered-text">
      <div class="spacer-top"></div>
      <div class="header-wrapper">
        <i class="fas fa-location-arrow"></i>
        <div class="text-wrapper">
          <p class="header">Sacramento</p>
          <p class="sub">Headquarters</p>
        </div>
      </div>
    </div>
    <div>
      <p class="cap">Capabilities</p>
    </div>

    <div class="bottom-columns">
      <div class="column">
        <p class="column-title">Edit.</p>
        <p class="column-desc">
          Editorial <br /> Assistant editing <br /> Data management
        </p>
      </div>
      <div class="column">
        <p class="column-title">Colour.</p>
        <p class="column-desc">
          Colour correction<br /> colour grading <br />finishing
        </p>
      </div>
      <div class="column">
        <p class="column-title">Sound.</p>
        <p class="column-desc">mixing <br />mastering<br /> sound design</p>
      </div>
      <div class="column">
        <p class="column-title">Motion.</p>
        <p class="column-desc">
          Motion graphics<br /> environmental vfx <br />animation
        </p>
      </div>
    </div>
  </div>

  <video class="top-right-image" autoplay muted loop>
    <source src="/Media/wireframelogo.mp4" type="video/mp4" />
    Your browser does not support the video tag.
  </video>
</div>

<style>
  .cap {
    font-size: 40px;
    padding-bottom: 20px;
  }

  .container {
    position: relative;
  }

  .header {
    font-size: 100px;
  }

  .spacer-top {
    margin-top: 20%;
  }

  .sub {
    font-size: 12px;
    font-family: Akkurat, sans-serif;
    text-transform: uppercase;
  }

  .content {
    display: flex;
    flex-direction: column;
    height: 100vh;
    background-color: #f9f9fa;
    align-items: flex-start; /* Align content to the left */
    padding: 0 30px; /* Optional: Add some padding */
  }

  .centered-text {
    display: flex;
    flex-direction: column;
    justify-content: center; /* Center content vertically */
    align-items: flex-start; /* Align text to the left */
    font-size: 40px;
    color: #050505;
    flex: 1; /* Allow centered text to take up remaining space */
  }

  .header-wrapper {
    display: flex;
    align-items: center; /* Align icon and text vertically */
  }

  .text-wrapper {
    display: flex;
    flex-direction: column;
  }

  p {
    margin: 0; /* Remove default margin */
  }

  .bottom-columns {
    display: flex;
    justify-content: space-around; /* Space out columns horizontally */
    width: 70%;
    margin-top: auto; /* Push columns to the bottom */
    margin-bottom: 5%;
  }

  .column {
    text-align: left;
    padding: 10px;
    flex: 1;
  }

  .column-title {
    font-size: 24px;
    color: #050505;
  }

  .column-desc {
    font-size: 12px;
    font-family: Akkurat, sans-serif;
    text-transform: uppercase;
    color: #050505;
  }

  .top-right-image {
    position: absolute;
    top: 40px;
    right: 100px;
    width: 500px; /* Adjust the width as needed */
    height: 500px; /* Adjust the height as needed for cropping */
  }
  @media (max-width: 500px) {
    .content {
      height: 100vh;
      width: 50vh;
    }
    .header {
      font-size: 40px;
    }
    .spacer-top {
      margin-top: 60%;
    }
    .sub {
      font-size: 8px;
      font-family: Akkurat, sans-serif;
      text-transform: uppercase;
    }
    .top-right-image {
      position: absolute;
      top: 40px;
      right: 0px;
      width: 200px; /* Adjust the width as needed */
      height: 200px; /* Adjust the height as needed for cropping */
    }

    .column-title {
      font-size: 20px;
    }

    .column-desc {
      font-size: 8px;
    }
    .bottom-columns {
      display: flex;
      justify-content: spacve-around; /* Space out columns horizontally */
      width: 92%;
      margin-top: auto; /* Push columns to the bottom */
      margin-bottom: 5%;
    }
    .cap{
      font-size: 28px;
    }
  }
</style>
