<script>
	import emailjs from "emailjs-com";
	let successMessage = "";
	let email = "";
	let videoUrl = "";
	let comments = "";
	let name = "";

	// JavaScript functions to open and close the popup
	function openPopup() {
		document.getElementById("myPopup").style.display = "block";
	}

	function closePopup() {
		document.getElementById("myPopup").style.display = "none";
	}

	// Initialize EmailJS
	emailjs.init("1mcKRU6uJVUM-Gc9W"); // Replace with your actual User ID

	// Handle form submission
	function handleSubmit() {
		// Perform validation
		if (!email || !videoUrl || !name) {
			alert("Email and Video URL are required");
			return;
		}

		// Your logic to send data using EmailJS
		emailjs
			.send("service_5chpp1r", "template_odatfxi", {
				name,
				email,
				videoUrl,
				comments,
			})
			.then(function (response) {
				console.log("Email sent successfully:", response);
				// Update success message
				successMessage = "Email sent successfully";
				// Close the popup after submitting
			})
			.catch(function (error) {
				console.error("Error sending email:", error);
				// Update success message on error
				successMessage = "Error sending email";
			});
	}
</script>

<div class="content">
	<div class="header">
		<div class="topbar">
			<div class="local">
				<img
					src="/images/_0002_Full-logo-white.png"
					alt="Logo"
					class="logo"
				/>
			</div>
			<a href="/form" class="contact" title="get video editing quote"
				>START A PROJECT</a
			>
		</div>
		<div class="based" />
		<div class="based2" />
	</div>
	<div class="hero">
		<div class="headercolr">
			<h1>
				<br />CLAIM YOUR OFFER <br />
			</h1>
		</div>
		<div class="subheadcolr">
			<h2>
				FREE FEEDBACK SESSION<br />
			</h2>
		</div>
		<div class="instructions">
			Once you click on "Claim Offer" you will be prompted to add the
			video's url. <br />Afterwards you will receive a video from us on
			our feedback within 10 days in your email.
		</div>
		<a on:click={openPopup} class="contact" title="get video editing quote"
			>CLAIM OFFER</a
		>
		<!-- Popup content -->

		<div id="myPopup" class="popup">
			<h2>CLAIM OFFER</h2>
			<form on:submit|preventDefault={handleSubmit}>
				<input
					id="Name"
					bind:value={name}
					required
					placeholder="Name"
				/>
				<input
					type="url"
					id="videoUrl"
					bind:value={videoUrl}
					required
					placeholder="Video URL"
				/>
				<input
					type="email"
					id="email"
					bind:value={email}
					required
					placeholder="Email"
				/>
				<textarea
					id="comments"
					bind:value={comments}
					placeholder="Commments  "
				></textarea>

				<div class="button-container">
					<button type="submit">SUBMIT</button>
					<button on:click={closePopup}>CLOSE</button>
				</div>
			</form>

			<!-- Success message -->
			{#if successMessage}
				<div class="success-message">
					Success: {successMessage}
				</div>
			{/if}
		</div>

		<div class="spacer2" />

		<a
			href="https://unitedposthouse.com/"
			class="contact"
			title="get video editing quote">VIEW WORK</a
		>
	</div>

	<div class="footer">
		<div class="footer-wrapper">
			*This offer expires 2.14.24. By claiming this offer you agree to the
			following: United Post House has the right to review the content you
			choose to send and will not use it for promotional use. United Post
			House has agreed to give their time to review 1 (one) edit per
			company/individual. United Post House must receive the video 2 weeks
			after claiming the offer otherwise the company/individual has
			forfeited their offer.
		</div>
	</div>
</div>

<style>
	/* Style for the popup */
	.popup {
		display: none;
		position: fixed;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		padding: 20px;
		background: #fff;
		border: 1px solid #ccc;
		box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
		z-index: 1000;
		width: 50%;
		height: 30%;
	}

	.popup input,
	.popup textarea {
		width: 100%;
		padding: 8px;
		margin-top: 5px;
		box-sizing: border-box;
		border: 1px solid #ccc;
		border-radius: 4px;
	}

	.popup textarea {
		height: 100px; /* Adjust the height as needed */
	}

	.popup button {
		background-color: #736f68;
		color: #fff;
		padding: 10px 15px;
		border: none;
		border-radius: 4px;
		cursor: pointer;
		font-size: 12px;
		margin-top: 10px;
		font-family: Akkurat;
	}

	.popup button:hover {
		background-color: #5e5b57;
	}

	.spacer2 {
		padding-top: 10px;
	}
	.footer {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center; /* Added to center along the main axis */
		padding-bottom: 200px;
		font-size: 13px;
		z-index: 1;
		max-width: 1000px;
		margin: 0 auto; /* Added to center the container horizontally */
	}

	.footer-wrapper {
		color: #fff3;
		z-index: 1;
		text-align: left;
	}

	.headercolr {
		color: #fff;
		z-index: 1;
	}
	.subheadcolr {
		color: #fff;
		z-index: 1;
	}
	.instructions {
		color: #fff;
		z-index: 1;
		padding-bottom: 50px;
		font-size: 16px;
		max-width: 700px;
	}

	.topbar {
		display: flex;
		flex-direction: row;
		width: 100%;
		justify-content: space-between;
		align-items: center;
		z-index: 1;
	}

	.based {
		color: #fff;
		font-size: 12px;
		font-family: Akkurat;
	}
	.based2 {
		color: #fff;
		font-size: 12px;
		font-family: Akkurat;
	}

	.logo {
		width: 180px;
		padding-top: 15px;
	}

	.header {
		display: flex;
		justify-content: space-between;
		align-items: flex-start;
		flex-direction: column;
	}

	.contact {
		font-size: 12px;
		padding: 10px 50px;
		background-color: #736f68;
		color: #fff;
		text-align: center;
		text-decoration: none;
		max-width: 300px;
		z-index: 2;
		cursor: pointer;
		font-family: Akkurat;
	}

	.header .contact {
		font-size: 12px;
		padding: 10.5px 50px 10px 50px;
		line-height: 10px;
	}

	.content {
		display: flex;
		flex-direction: column;
		height: 100vh;
		padding-right: 30px;
		padding-left: 30px;
		justify-content: space-between;
	}

	.hero {
		text-align: center;
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	.hero h1 {
		font-weight: 400 !important;
		font-size: 60px;
		line-height: 55px;
		padding-bottom: 15px;
		margin-bottom: 0px;
	}

	.hero h2 {
		margin-top: 0px;
		font-weight: 400 !important;
		font-size: 20px;
		font-family: Akkurat;
	}

	.spacer {
		height: 0px;
	}

	@media only screen and (max-width: 1200px) {
		.hero h1 {
			font-size: 95px;
			line-height: 85px;
			padding-bottom: 15px;
		}
	}

	@media only screen and (max-width: 1000px) {
		.hero h1 {
			font-size: 80px;
			line-height: 70px;
			padding-bottom: 15px;
		}

		.hero h2 {
			font-size: 25px;
		}
	}

	@media only screen and (max-width: 850px) {
		.hero h1 {
			font-size: 70px;
			line-height: 65px;
			padding-bottom: 15px;
		}

		.hero h2 {
			font-size: 25px;
		}
		.footer {
			font-size: 25px;
		}
	}

	@media only screen and (max-width: 750px) {
		.hero h1 {
			font-size: 55px;
			line-height: 50px;
			padding-bottom: 15px;
		}

		.hero h2 {
			font-size: 20px;
		}
		.footer {
			font-size: 20px;
		}
	}

	@media only screen and (max-width: 600px) {
		.footer {
			font-size: 20px;
			padding-bottom: 100px;
		}

		.logo {
			width: 100px;
		}

		.based {
			font-size: 10px;
		}
		.based2 {
			font-size: 10px;
		}

		.header .contact {
			font-size: 10px;
		}

		.content {
			padding-right: 30px;
		}

		.hero h1 {
			font-size: 45px;
			line-height: 40px;
			padding-bottom: 15px;
		}

		.hero h2 {
			font-size: 15px;
			margin-bottom: 20px;
		}
	}

	@media only screen and (max-width: 450px) {
		.header .contact {
			padding: 11.5px 30px 10px 30px;
		}
		.hero h1 {
			font-size: 39px;
			line-height: 34px;
			padding-bottom: 20px;
		}
		.footer {
			padding-bottom: 100px;
			font-size: 15px;
		}
	}

	@media only screen and (max-width: 400px) {
		.header .contact {
			padding: 11.5px 20px 10px 20px;
		}

		.logo {
			width: 80px;
		}

		.contact {
			font-size: 15px;
		}

		.hero h1 {
			font-size: 33px;
			line-height: 28px;
			padding-bottom: 15px;
		}

		.hero h2 {
			font-size: 11px;
		}
	}

	@media only screen and (max-width: 350px) {
		.hero h1 {
			font-size: 27px;
			line-height: 22px;
			padding-bottom: 15px;
		}
	}

	@media only screen and (max-width: 300px) {
		.hero h1 {
			font-size: 23px;
			line-height: 20px;
			padding-bottom: 15px;
		}
	}
</style>
