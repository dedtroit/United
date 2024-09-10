<script>
  import { onMount } from "svelte";
  import ThankYouForm from "../../components/pages/ThankYouForm.svelte";

  let questions = [
    { id: 1, question: "What is your name?", answer: "" },
    { id: 2, question: "", answer: "" },
    {
      id: 3,
      question: "Sweet, what's your email address?",
      answerType: "email",
      answer: "",
    },
    {
      id: 4,
      question: "And your phone number?",
      answerType: "tel",
      answer: "",
    },
    {
      id: 5,
      question: "Perfect thanks, What's your budget for the project?",
      answerType: "choices",
      key: "budget",
      choices: [
        "$50,000+",
        "$20,000 - $50,000",
        "$10,000 - $20,000",
        "$5,000 - $10,000",
      ],
      answer: "",
    },
    { id: 6, question: "Tell us a little about the project", answer: "" },
    { id: 7, question: "Where are you located", answer: "" },
  ];

  let currentQuestionIndex = 0;
  let currentQuestion = questions[currentQuestionIndex];
  let answers = {};

  let showThankYou = false;
  let showError = false;

  function handleNextQuestion() {
    const currentAnswer =
      answers[
        currentQuestion.answerType === "choices"
          ? currentQuestion.key
          : currentQuestion.id
      ];

    if (
      (!currentAnswer || currentAnswer === "") &&
      currentQuestion.answerType !== "choices"
    ) {
      showError = true;
      return;
    }

    showError = false;

    if (currentQuestion.answerType === "email") {
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      const inputIsValid = emailPattern.test(currentAnswer);

      if (!inputIsValid) {
        showError = true;
        return;
      }
    }

    if (currentQuestionIndex < questions.length - 1) {
      currentQuestionIndex++;
      currentQuestion = questions[currentQuestionIndex];
      answers[currentQuestion.id] = ""; // Clear the answer value for the current question

      if (currentQuestionIndex === 1) {
        currentQuestion.question = `What's up ${answers[1]}! What is the name of your company?`;
      }
    } else {
      // Form submission logic goes here
      submitForm();
      showThankYou = true;
    }
  }
  function handlePreviousQuestion() {
    if (currentQuestionIndex > 0) {
      currentQuestionIndex--;
      currentQuestion = questions[currentQuestionIndex];
    }
  }

  function handleAnswerInput(event) {
    if (currentQuestion.answerType === "choices") {
      answers[5] = event.target.value; // Update the value for the choices question
    } else if (currentQuestion.answerType === "tel") {
      const phoneNumberPattern = /^\d{10}$/;
      const inputIsValid = phoneNumberPattern.test(
        event.target.value.replace(/[()-\s]/g, ""),
      );

      if (!inputIsValid) {
        event.target.setCustomValidity(
          "Please enter a valid 10-digit phone number",
        );
      } else {
        event.target.setCustomValidity("");
      }

      const formattedValue = event.target.value
        .replace(/[^\d]/g, "")
        .slice(0, 10)
        .replace(/[()-\s]/g, "")
        .replace(/(\d{3})(\d{0,3})(\d{0,4})/, function (match, p1, p2, p3) {
          if (!p2 && !p3) return "(" + p1;
          if (p2 && !p3) return "(" + p1 + ") " + p2;
          return "(" + p1 + ") " + p2 + "-" + p3;
        });

      if (formattedValue !== event.target.value) {
        event.target.value = formattedValue;
        event.target.reportValidity();
      } else if (!inputIsValid) {
        event.target.reportValidity();
      }

      answers[currentQuestion.id] = formattedValue;
    } else {
      answers[currentQuestion.id] = event.target.value;
    }

    if (currentQuestion.answerType === "email") {
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      const inputIsValid = emailPattern.test(event.target.value);

      if (!inputIsValid) {
        event.target.setCustomValidity("Please enter a valid email address");
        showError = true;
      } else {
        event.target.setCustomValidity("");
        showError = false;
      }

      event.target.reportValidity();
    }
  }

  onMount(() => {
    const formBody = document.getElementById("form-body");
    formBody.scrollTop = formBody.scrollHeight;
  });

  function handleSelectEnterKey(event) {
    if (event.key === "Enter") {
      handleNextQuestion();
    }
  }

  function showThankYouMessage() {
    showThankYou = true;
  }

  const submitForm = async () => {
    const webhookURL =
      "https://discord.com/api/webhooks/1265892999792037928/unD6mvSoZPE-T_4LdJMjk5AmDuy7glmygg-qOp2x3qPzM_-okkeZU1SvJ9btJQu5nD__"; // Replace with your actual Discord webhook URL
    const data = {
      content: `New Project Submission:
        - Name: ${answers[1]}
        - Company: ${answers[2]}
        - Email: ${answers[3]}
        - Phone: ${answers[4]}
        - Budget: ${answers[5]}
        - Project Description: ${answers[6]}
        - Location: ${answers[7]}`,
    };

    fetch(webhookURL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };
</script>

<div class="form-container">
  <div class="start">Start a project.</div>

  <div id="form-body">
    {#if !showThankYou}
      <div class="question">
        <div class="question-wrapper">
          <p class="question-text">{currentQuestion.question}</p>
          {#if currentQuestion.answerType === "choices"}
            <select
              class="answer-input"
              id="input"
              on:change={handleAnswerInput}
              on:keydown={handleSelectEnterKey}
            >
              <option value="">SELECT</option>
              {#each currentQuestion.choices as choice}
                <option value={choice}>{choice}</option>
              {/each}
            </select>
          {:else}
            <input
              type="text"
              class="answer-input"
              id="input"
              bind:value={answers[currentQuestion.id]}
              on:input={handleAnswerInput}
              on:keydown={(e) => {
                if (e.key === "Enter") handleNextQuestion();
              }}
            />
          {/if}
          {#if showError}
            <p class="error-message">This field is required</p>
          {/if}
        </div>
        <div class="button-container">
          {#if currentQuestionIndex > 0}
            <button class="back-btn" on:click={handlePreviousQuestion}>
              {currentQuestionIndex < questions.length - 1 ? "" : ""}
            </button>
          {/if}
          <button class="next-btn" on:click={handleNextQuestion}>
            {currentQuestionIndex < questions.length - 1 ? "" : ""}
          </button>
        </div>
      </div>
    {:else}
      <ThankYouForm />
    {/if}
  </div>
</div>

<style>
  .start {
    font-size: 35px;
    color: #f9f9fa;
    display: flex;
    justify-content: space-around;
    margin-top: auto;
    margin-bottom: 5%;
    margin-left: 1%;
  }
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
  .error-message {
    color: #f9f9fa;
    font-family: Akkurat, sans-serif;

    text-transform: uppercase;
    font-size: 12px;
  }
  .form-container {
    display: flex;
    align-items: center;
    height: 100vh;
    background-color: #050505;
  }

  #form-body {
    margin-bottom: 16px;
    margin-left: 10%;
  }

  .question {
    margin-bottom: 48px;
    opacity: 0;
    animation: fade-in 0.3s ease-in-out forwards;
  }

  .question-text {
    font-size: 25px;
    margin-bottom: 24px;
    color: #f9f9fa;
  }

  .question-text {
    font-size: 25px;
    margin-right: 12px;
    color: #f9f9fa;
  }

  .answer-input {
    border: none;
    border-bottom: 2px solid #d6d6d6;
    font-size: 18px;
    padding: 12px 10px;
    margin-bottom: 32px;
    width: 800px;
    box-sizing: border-box;
    transition: border-color 0.3s ease-in-out;
    background-color: transparent;
    content: 300px;
    color: #f9f9fa;
    font-family: Akkurat, sans-serif;

    text-transform: uppercase;
  }

  .answer-input:focus {
    outline: none;
    border-color: #c4baaf;
  }
  .answer-input:hover {
    outline: none;
    background-color: rgba(255, 255, 255, 0.2);
  }
  .back-btn {
    margin-top: 10px;

    border-radius: 50px;
    width: 50px;
    height: 50px;
    background-color: #c4baaf;
    border: none;
    color: #f9f9fa;
    text-align: center;
    text-decoration: none;
    font-size: 15px;
    font-weight: 400;
    letter-spacing: 1px;
    font-family: Akkurat, sans-serif;

    text-transform: uppercase;
    transition: width 0.3s ease-in-out;
    position: relative;
    overflow: hidden;
    float: left; /* Add float property to position it to the left */
  }

  .back-btn:before {
    content: "\2190"; /* Unicode for left arrow */
    position: absolute;
    top: 45%;
    left: 50%;
    transform: translate(-50%, -50%);
    transition: transform 0.3s ease-in-out;
  }

  .back-btn:hover {
    width: 120px;
  }

  .back-btn:hover:before {
    content: "Back";
    line-height: 1; /* Adjust line-height to match the button height */
    top: 50%;
    left: 40px; /* Adjust the top value to center the text vertically */
    transform: translate(-50%, -50%); /* Move the text vertically centered */
  }

  .next-btn {
    margin-top: 10px;
    border-radius: 50px;
    width: 50px;
    height: 50px;
    background-color: #c4baaf;
    border: none;
    color: #f9f9fa;
    text-align: center;
    text-decoration: none;
    font-size: 15px;
    font-weight: 400;
    letter-spacing: 1px;
    font-family: Akkurat, sans-serif;

    text-transform: uppercase;
    transition: width 0.3s ease-in-out;
    position: relative;
    margin-left: 5px;
    overflow: hidden;
    float: left; /* Add float property to position it to the left */
  }

  .next-btn:before {
    content: "\2192"; /* Unicode for left arrow */
    position: absolute;
    top: 27%;
    left: 30%;
    transform: rotate(0deg);
    width: 20px;
    height: 0px;
    background-color: f9f9fa;
    transition: transform 0.3s ease-in-out;
  }

  .next-btn:hover {
    width: 120px;
  }
  .next-btn:hover:before {
    transform: rotate(0);
    width: 100%;
    background-color: transparent;
    text-align: center;
    content: "Next";
    line-height: 1; /* Adjust line-height to match the button height */
    left: 60%;
    top: 35%; /* Adjust the top value to center the text vertically */
    transform: translate(-50%, -50%); /* Move the text vertically centered */
  }




  @media (max-width: 500px) {
    .start {
      font-size: 20px;
    }

    .question-text {
      font-size: 16px;
    }

    .answer-input {
      font-size: 14px;
      max-width: 100%;
      width: 100%;
    }

    .back-btn,
    .next-btn {
      font-size: 12px; /* Smaller font size */
      padding: 6px 12px; /* Smaller padding */
      width: 40px; /* Smaller width */
      height: 40px; /* Smaller height */
    }
    
    .back-btn:before,
    .next-btn:before {
      font-size: 14px; /* Smaller icon font size */
    }

    .form-container {

      width: 150%;
    }
  }







  @media (min-width: 992px) {
    .answer-input {
      width: 800px;
    }
  }

  @keyframes fade-in {
    from {
      opacity: 0;
      transform: translateY(10px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
</style>
