<script>
  const submitForm = async () => {
    console.log("running");
    const apiKey = "296c419b1083991a56292a4ce261485eceaece10";
    const url = "https://unitedposthouse.pipedrive.com/v1/persons/search";
    const email = document.querySelector(".email-input").value.toLowerCase();
    const searchTerm = encodeURIComponent(email); // URL encode the search term

    // Specify the fields to perform the search from
    const fields = "email";
    // Set exact_match to true to search for an exact match of the email
    const exactMatch = true;

    // Construct the URL with query parameters
    const searchUrl = `${url}?api_token=${apiKey}&term=${searchTerm}&fields=${fields}&exact_match=${exactMatch}`;
    console.log(searchUrl);
    try {
      // Perform the search to find the person based on the email
      const response = await fetch(searchUrl);
      const searchData = await response.json();

      // Check if any person matching the email was found
      if (searchData.success && searchData.data.items.length > 0) {
        // Get the ID of the first person found
        const personId = searchData.data.items[0].item.id;

        // Update the specific field with the provided key
        const updateUrl = `https://unitedposthouse.pipedrive.com/v1/persons/${personId}`;
        const updateData = {
          ["0463578c689b8c3272a48bed31aac4213074ab33"]: "UNSUB",
        };

        // Perform the update request
        const updateResponse = await fetch(`${updateUrl}?api_token=${apiKey}`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(updateData),
        });

        if (updateResponse.ok) {
          console.log("Field updated successfully");
          // Change screen content to display success message
          document.querySelector('.unsubscribe-message').textContent = 'You have successfully unsubscribed';
          // Wait for 2 seconds and redirect to www.unitedposthouse.com
          setTimeout(() => {
            window.location.href = 'https://www.unitedposthouse.com';
          }, 2000);
        } else {
          console.error("Failed to update field");
        }
      } else {
        console.log("Person not found");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };
</script>

<div class="unsubscribe-container">
  <img
    src="/images/_0002_Full-logo-white.png"
    alt="Logo"
    class="logo"
    style="width: 150px; position: absolute; top: 20px; left: 20px"
  />
  <div class="unsubscribe-body">
    <p class="unsubscribe-message">ENTER YOUR EMAIL TO UNSUBSCRIBE:</p>
    <input type="email" class="email-input" placeholder="Your email" />
    <button class="unsubscribe-btn" on:click={submitForm}>UNSUBSCRIBE</button>
  </div>
</div>


<style>
  /* Global Styles */

  @keyframes pulsate {
    0% {
      transform: scale(0.1, 0.1);
      opacity: 0;
    }
    50% {
      opacity: 1;
    }
    100% {
      transform: scale(1.2, 1.2);
      opacity: 0;
    }
  }

  .unsubscribe-container {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
  }

  .unsubscribe-body {
    margin-bottom: 16px;
    text-align: center;
  }

  .unsubscribe-message {
    font-size: 25px;
    color: #ccc;
    font-family: Akkurat;
    margin-bottom: 20px;
  }

  .email-input {
    border: none;
    border-bottom: 2px solid #d6d6d6;
    font-size: 18px;
    padding: 12px 10px;
    margin-bottom: 20px;
    width: 300px;
    box-sizing: border-box;
    transition: border-color 0.3s ease-in-out;
    background-color: transparent;
    color: #fff;
    font-family: Akkurat;
    text-transform: uppercase;
  }

  .email-input:focus {
    outline: none;
    border-color: #d8c3a5;
  }

  .unsubscribe-btn {
    border: none;
    border-radius: 25px;
    padding: 12px 24px;
    background-color: #d8c3a5;
    color: #fff;
    font-size: 10px;
    cursor: pointer;
    transition: background-color 0.3s ease-in-out;
    font-family: Akkurat;
    text-transform: uppercase;
  }

  .unsubscribe-btn:hover {
    background-color: #bfbfbf;
  }

  @media (max-width: 767px) {
    body {
      font-size: 14px;
    }
  }

  /* Add media query for tablet devices */
  @media (min-width: 768px) and (max-width: 991px) {
    body {
      font-size: 15px;
    }
  }

  /* Add media query for desktop devices */
  @media (min-width: 992px) {
    body {
      font-size: 16px;
    }
  }
</style>
