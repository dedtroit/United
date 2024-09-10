<script>
</script>

<div class="content">
  <div class="centered-text">
    <p><a href="/Videos">View more</a></p>
  </div>
</div>

<style>
  .content {
    position: relative; /* Position relative to its container */
    display: flex;
    height: 100vh;
    background-color: #050505;
    justify-content: center; /* Center content horizontally */
    align-items: center; /* Center content vertically */
  }

  .centered-text {
    position: absolute; /* Position relative to .content */
    bottom: 80px;
    left: 30px;
    display: flex;
    flex-direction: column;
    justify-content: flex-end; /* Align content to the bottom */
    align-items: flex-start; /* Align text to the left */
    padding-left: 30px; /* Optional: Add some padding to the left */
    font-size: 40px;
    color: #f9f9fa;
    width: auto; /* Adjust width as needed */
    height: auto; /* Adjust height as needed */
    margin: 0; /* Remove default margin */
  }

  p {
    margin: 0; /* Remove default margin */
  }
  @media (max-width: 500px) {
    .centered-text {
      padding-left: 20px;
      font-size: 20px;
    }
  }
</style>
