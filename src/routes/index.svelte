<script>
	import { onMount } from "svelte";
	import { throttle } from "lodash";
	import Scrollbar from "smooth-scrollbar";

	import Featured from "../components/pages/Featured.svelte";
	import Featured2 from "../components/pages/Featured2.svelte";
	import Featured3 from "../components/pages/Featured3.svelte";
	import Viewmore from "../components/pages/Viewmore.svelte";
	import About from "../components/pages/About.svelte";
	import About2 from "../components/pages/About2.svelte";
	import Info from "../components/pages/Info.svelte";
	import Contact from "../components/pages/Contact.svelte";
	import Home from "../components/pages/Home.svelte";

	let url = "";
	let isLoading = true;
	let scrollbar;

	onMount(() => {
		url = window.location.hash;

		setTimeout(() => {
			isLoading = false;
		}, 3000); // Increase timeout for better loading indication
		const container = document.querySelector(".horizontal-scroll");
		Scrollbar.init(container, { damping: 0.1 }); // Adjust damping as needed
	});
	function goTo(page, isWorkPage = false) {
		if (isWorkPage) {
			isLoading = true;
			setTimeout(() => {
				window.location.href = "/Videos";
			}, 1000);
		} else {
			scrollToElement(page);
			window.location.hash = page; // Update the URL hash
		}
	}

	function scrollToElement(id) {
		const element = document.getElementById(id);
		if (element) {
			element.scrollIntoView({ behavior: "smooth", block: "start" });
		} else {
		}
	}
	function handleWheel(event) {
		const container = event.currentTarget;
		const delta = event.deltaY || -event.detail;
		const scrollAmount = delta * 2; // Adjust this multiplier to change scroll speed

		throttle(() => {
			requestAnimationFrame(() => {
				container.scrollLeft += scrollAmount;
			});
		}, 20)(); // Throttle to once every 20ms

		event.preventDefault();
	}
</script>

{#if isLoading}
	<div class="loading-screen">
		<img src="/Media/Google-logo.gif" alt="Logo" />
	</div>
{:else}
	<div class="side-menu">
		<nav>
			<ul>
				<li>
					<a
						href="#Contact"
						on:click|preventDefault={() => goTo("Contact")}
						>Reach out</a
					>
				</li>
				<li>
					<a href="#Info" on:click|preventDefault={() => goTo("Info")}
						>info</a
					>
				</li>
				<li>
					<a
						href="#About"
						on:click|preventDefault={() => goTo("About")}>about</a
					>
				</li>
				<li>
					<a
						href="/Videos"
						on:click|preventDefault={() => goTo("", true)}>work</a
					>
				</li>
				<li>
					<a href="#Home" on:click|preventDefault={() => goTo("Home")}
						>home</a
					>
				</li>
			</ul>
		</nav>
	</div>
	<main class="horizontal-scroll" on:wheel={handleWheel}>
		<div id="Home" class="page width90"><Home {goTo} /></div>
		<div id="Featured" class="page width57"><Featured {goTo} /></div>
		<div id="Featured2" class="page width57"><Featured2 {goTo} /></div>
		<div id="Featured3" class="page width57"><Featured3 {goTo} /></div>
		<div id="Viewmore" class="page width30"><Viewmore {goTo} /></div>
		<div id="About" class="page width40"><About {goTo} /></div>
		<div id="About2" class="page width90"><About2 {goTo} /></div>
		<div id="Info" class="page width65"><Info {goTo} /></div>
		<div id="Contact" class="page width100"><Contact {goTo} /></div>
	</main>
{/if}

<style>
	@font-face {
		font-family: "Akkurat-Mono";
		src: url("/fonts/Akkurat-Mono.otf") format("opentype");
	}
	img {
		scale: 2%;
	}
	.logo {
		scale: 2%;
		padding: 1rem;
		box-sizing: border-box;
	}
	.side-menu {
		position: fixed;
		left: 0;
		top: 0;
		height: 100vh;
		width: 5%;
		z-index: 1000;
		display: flex;
		align-items: flex-end;
		background-color: #f9f9fa;
	}

	nav {
		width: 100%;
	}

	ul {
		list-style-type: none;
		padding: 0px;
		margin-bottom: 50px;
		text-align: left;
	}

	li {
		margin-bottom: 1rem;
	}

	a {
		display: block;
		color: #050505;
		text-decoration: none;
		padding: 1rem;
		transition: background-color 0.3s ease;
		transform: rotate(-90deg);
		transform-origin: center center;
		white-space: nowrap;
		font-size: 12px;
		font-family: akkurat;
		text-transform: uppercase;
	}

	a:hover {
		text-decoration: underline;
	}

	.horizontal-scroll {
		display: flex;
		overflow-x: scroll;
		-ms-overflow-style: none;
		scrollbar-width: none;
		height: 100vh;
		scroll-behavior: smooth;
		margin-left: 5%;
	}

	.horizontal-scroll::-webkit-scrollbar {
		display: none;
	}

	.page {
		flex: 0 0 0%; /* Each page takes full viewport width by default */
		scroll-snap-align: start; /* Snap to the start of each page */
	}

	.width100 {
		flex: 0 0 100%; /* Each page takes full viewport width */
	}

	.width90 {
		flex: 0 0 90%; /* Each page takes 90% of the viewport width */
	}

	.width65 {
		flex: 0 0 65%; /* Each page takes 60% of the viewport width */
	}

	.width57 {
		flex: 0 0 57%; /* Each page takes 60% of the viewport width */
	}
	.width40 {
		flex: 0 0 40%; /* Each page takes 50% of the viewport width */
	}
	.width30 {
		flex: 0 0 30%; /* Each page takes 50% of the viewport width */
	}

	.loading-screen {
		display: flex;
		justify-content: center;
		align-items: center;
		height: 100vh;
		background-color: #f9f9fa;
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		z-index: 9999;
		font-size: 24px;
	}
	@media (max-width: 500px) {
		.side-menu {
			width: 10vw; /* Expand to full width */
		}
		.horizontal-scroll {
			margin-left: 8.5%;
		}
	}
</style>
