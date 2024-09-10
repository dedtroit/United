<script>
  export let goTo;
</script>

<div class="content">
  <div class="centered-text">
    <div class="spacer-top"></div>

    <p class="header">United Mission</p>
    <p class="sub">Unite A people</p>

    <div class="spacer"></div>

    <p class="header">United Vision</p>
    <p class="sub">
      transcends mere editing; as a post production house we look <br /> to
      unite a people and transform the biggest communication <br /> center,
      film, to transmit Truth by one, having meaningful <br /> relationships
      with those in the industry and two, aiding <br /> the leading communicators
      of truth with our craft.
    </p>

    <div class="spacer"></div>

    <p class="header">United Core</p>
    <p class="sub">Integrity | Stewardship | Artisanship</p>
  </div>
</div>

<style>
  .header {
    font-size: 35px;
  }
  .spacer {
    margin-top: 10%;
  }
  .spacer-top {
    margin-top: 15%;
  }
  .sub {
    font-size: 12px;
    font-family: Akkurat, sans-serif;
    text-transform: uppercase;
  }
  .content {
    display: flex;
    height: 100vh;
    background-color: #050505;
    justify-content: flex-start; /* Align content to the left */
    align-items: flex-start; /* Center content vertically */
  }

  .centered-text {
    display: flex;
    flex-direction: column;
    justify-content: center; /* Center content vertically */
    align-items: flex-start; /* Align text to the left */
    padding-left: 30px; /* Optional: Add some padding to the left */
    font-size: 40px;
    color: #f9f9fa;
  }

  p {
    margin: 0; /* Remove default margin */
  }

  @media (max-width: 500px) {
    .content {
      height: 100vh;
      width: 50vh;
    }
    .header {
      font-size: 25px;
    }
    .spacer {
      margin-top: 15%;
    }
    .spacer-top {
      margin-top: 60%;
    }
    .sub {
      font-size: 8px;
      font-family: Akkurat, sans-serif;
      text-transform: uppercase;
    }
  }
</style>
