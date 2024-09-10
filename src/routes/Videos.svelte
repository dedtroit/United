<script>
  import { onMount } from "svelte";

  let videoPlaying = false;
  let playingID = "";
  let selectedCategory = "All";
  let filteredVideos = [];

  const videos = [
    {
      id: "976053491",
      title: "The Story Of Us",
      thumbnail: "https://vumbnail.com/976053491.jpg",
      gif: "https://videoapi-muybridge.vimeocdn.com/animated-thumbnails/image/670e74af-a170-40ba-9985-cde9e04a705a.gif?ClientID=sulu&Date=1721882615&Signature=a68ec9bbab2c79fd53ab0fd6e33ba8bcc6c0e2e9",
      large: false,
      category: "Film",
    },
    {
      id: "980902606",
      title: "Find Your Inner Chef",
      thumbnail: "https://vumbnail.com/980902606.jpg",
      gif: "https://videoapi-muybridge.vimeocdn.com/animated-thumbnails/image/7bc0525b-170f-436a-a0dd-cf9969056b66.gif?ClientID=sulu&Date=1722995483&Signature=479f7a5fe3262c00305201a1584fe2dcf1f7c7e3",
      large: false,
      category: "Commercial",
    },
    {
      id: "976086861",
      title: "G70-GR4 By Genesis - Social Cut",
      thumbnail: "https://vumbnail.com/976086861.jpg",
      gif: "https://videoapi-muybridge.vimeocdn.com/animated-thumbnails/image/77319811-a9cd-44f5-a765-3351508eed8c.gif?ClientID=sulu&Date=1721882129&Signature=ceaf54166c05391a7f5d4da55d0b985e8ee7e215",
      large: true,
      category: "Social",
    },
    {
      id: "976012978",
      title: "A Story of Transparency",
      thumbnail: "https://vumbnail.com/976012978.jpg",
      gif: "https://videoapi-muybridge.vimeocdn.com/animated-thumbnails/image/7c3e48b6-8f6b-498e-8552-99f1f2493eb1.gif?ClientID=sulu&Date=1722996891&Signature=b764ce1207299e2a7b01440fffb40783fae93cc1",
      large: false,
      category: "Commercial",
    },
    {
      id: "976016985",
      title: "Alstead",
      thumbnail: "https://vumbnail.com/976016985.jpg",
      gif: "https://videoapi-muybridge.vimeocdn.com/animated-thumbnails/image/b858fde7-b581-4163-9791-c447c5c8b30d.gif?ClientID=sulu&Date=1722996220&Signature=8c40244f1aca46effe7e660548d90e59d20218a6",
      large: false,
      category: "Commercial",
    },
    {
      id: "976010137",
      title: "Ledger CL - Spec Design",
      thumbnail: "https://vumbnail.com/976010137.jpg",
      gif: "https://videoapi-muybridge.vimeocdn.com/animated-thumbnails/image/a2af9a4c-ae58-4cba-9664-05c161f6b774.gif?ClientID=sulu&Date=1722996602&Signature=128e91b12eafe38c095174297a8a89628335fa48",
      large: true,
      category: "Commercial",
    },
    {
      id: "976093966",
      title: "Why not now?",
      thumbnail: "https://vumbnail.com/976093966.jpg",
      gif: "https://videoapi-muybridge.vimeocdn.com/animated-thumbnails/image/5957ef2e-28ea-4992-95ec-07d0894fda73.gif?ClientID=sulu&Date=1722996212&Signature=cd166a280c3a99bd9172509dd010be82768c3db9",
      large: false,
      category: "Music",
    },
    {
      id: "976011316",
      title: "Goodbye",
      thumbnail: "https://vumbnail.com/976011316.jpg",
      gif: "https://videoapi-muybridge.vimeocdn.com/animated-thumbnails/image/8ebc43e1-3a77-4127-84a6-9d6fe7054a12.gif?ClientID=sulu&Date=1722995069&Signature=ef2a16231cb9c92c71b2ca28337345ef1f1a4e53",
      large: false,
      category: "Music",
    },
    {
      id: "976101913",
      title: "Lemon Perfect",
      thumbnail: "https://vumbnail.com/976101913.jpg",
      gif: "https://videoapi-muybridge.vimeocdn.com/animated-thumbnails/image/49a67a27-282d-4cef-b489-774776f46a61.gif?ClientID=sulu&Date=1722996577&Signature=40afe4dfed5606b330bb1e7413992a74ed312d37",
      large: false,
      category: "Social",
    },
    {
      id: "976010730",
      title: "McDonald's Free Fry",
      thumbnail: "https://vumbnail.com/976010730.jpg",
      gif: "https://videoapi-muybridge.vimeocdn.com/animated-thumbnails/image/bad63d4d-59c3-4904-ad38-1bfbc3723149.gif?ClientID=sulu&Date=1721882436&Signature=bda16bae37f97ca9b7bc67a3d8f5e0e62b7ad75e",
      large: false,
      category: "Social",
    },
    {
      id: "976084401",
      title: "Kuwalla Tee",
      thumbnail: "https://vumbnail.com/976084401.jpg",
      gif: "https://videoapi-muybridge.vimeocdn.com/animated-thumbnails/image/88ae95f6-dbd3-4baf-bdfb-f8030c1cb088.gif?ClientID=sulu&Date=1722996587&Signature=4293b54cb4be7367d550b8a814e39398cc3834c7",
      large: false,
      category: "Commercial",
    },
    {
      id: "976010193",
      title: "Dave Modz",
      thumbnail: "https://vumbnail.com/976010193.jpg",
      gif: "https://videoapi-muybridge.vimeocdn.com/animated-thumbnails/image/ae5ee77c-28f5-4701-93e7-03f0848d018b.gif?ClientID=sulu&Date=1722996867&Signature=04704a8074b86f143897ed67aba4c0d65e00ba3f",
      large: false,
      category: "Commercial",
    },
    {
      id: "976013416",
      title: "When you understand Truth",
      thumbnail: "https://vumbnail.com/976013416.jpg",
      gif: "https://videoapi-muybridge.vimeocdn.com/animated-thumbnails/image/f9343c64-d22c-40d8-86be-e86c5840b196.gif?ClientID=sulu&Date=1722996820&Signature=f84949fe3f76dadbe5b147fb3a5cb12ce1616bc0",
      large: false,
      category: "Commercial",
    },
  ];

  const categories = ["All", "Commercial", "Social", "Film", "Music"];

  function playVideo(id) {
    videoPlaying = true;
    playingID = id;
  }

  function stopVideo() {
    videoPlaying = false;
    playingID = "";
  }

  function filterVideos(video) {
    return selectedCategory === "All" || video.category === selectedCategory;
  }

  function updateFilter(category) {
    selectedCategory = category;
    filteredVideos = videos.filter(filterVideos);
  }

  // Initialize filteredVideos when the component mounts
  onMount(() => {
    filteredVideos = videos.filter(filterVideos);
  });
</script>

<main>
  <div class="side-menu {videoPlaying ? 'hidden' : ''}">
    <nav>
      <ul class="filters">
        <!-- Filters Section -->
        <!-- <div>
          {#each categories as category}
            <button
              class:selected={selectedCategory === category}
              on:click={() => updateFilter(category)}
            >
              {category}
            </button>
          {/each}
        </div>-->
      </ul>
      <ul>
        <li><a href="/">home</a></li>
      </ul>
    </nav>
  </div>

  <div class="padding-offset">
    <!-- Video Grid -->
    <div class="grid">
      {#each filteredVideos as video}
        <div
          class="project-item {video.large ? 'large-video' : ''}"
          on:click={() => playVideo(video.id)}
        >
          <p>{video.title}</p>
          <div class="img-src">
            <img
              src={video.thumbnail}
              alt="{video.title} Thumbnail"
              class="thumbnail"
            />
            <img src={video.gif} alt="{video.title} GIF" class="gif" />
          </div>
        </div>
      {/each}
    </div>

    <!-- Video Player Modal -->
    {#if videoPlaying}
      <div class="player-model">
        <div
          class="player-close {videoPlaying ? 'open' : 'closed'}"
          on:click={stopVideo}
        >
          <button>Close</button>
        </div>
        <div class="video-player">
          <iframe
            src={`https://player.vimeo.com/video/${playingID}?autoplay=1&controls=0`}
            width="100%"
            height="100%"
            frameborder="0"
            allow="autoplay; fullscreen; picture-in-picture"
            allowfullscreen
            title="Video Player"
          ></iframe>
        </div>
      </div>
    {/if}
    <!-- Background overlay -->
    {#if videoPlaying}
      <div class="video-overlay visible"></div>
    {/if}
  </div>
</main>

<style>
  .filters {
    display: flex;
    justify-content: center;
    gap: 10px;
    margin-bottom: 100px;
  }

  .filters button {
    background: transparent;
    color: #050505;
    padding: 5px 10px;
    font-size: 10px;
    text-transform: uppercase;
    font-family: Akkurat, sans-serif;
    border: none;
  }

  .filters button.selected {
    background-color: #050505;
    color: #f9f9fa;
  }

  .filters button:hover {
    background-color: #e0e0e0;
  }

  .player-close {
    position: absolute;
    top: 0;
    right: 0; /* Align flush to the right edge */
    width: 50px; /* Adjust width as needed */
    height: 100%; /* Full height of the video */
    z-index: 10;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 12px;
    font-family: Akkurat, sans-serif;
    text-transform: uppercase;
    background-color: #f9f9fa; /* Background color */
    color: #050505; /* Text color */
    border-radius: 0 10px 10px 0; /* Rounded corners on the right side */
    text-align: center;
    overflow: hidden; /* Ensure text doesn't overflow */
    transform: translateX(100%); /* Hide initially */
    transition: transform 1s ease; /* Smooth transition */
  }

  .player-close.open {
    transform: translateX(0); /* Show when open */
  }

  .player-close button {
    all: unset; /* Remove default button styling */
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    transform: rotate(-90deg); /* Rotate text sideways */
    transform-origin: center; /* Ensure rotation is around the center */
  }

  .padding-offset {
    padding-left: 70px;
  }

  .grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 15px;
    font-size: 12px;
    text-transform: uppercase;
    color: #f9f9fa;
    font-family: Akkurat, sans-serif;
    margin-left: 20px;
  }

  .project-item {
    padding: 10px;
    position: relative;
  }

  .large-video {
    grid-column: span 2;
    grid-row: span 2;
  }
  .img-src {
    position: relative;
    width: 100%;
    height: 100%;
  }
  .thumbnail {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }
  .gif {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: none;
    position: absolute;
    top: 0;
    left: 0;
  }
  .project-item:hover .gif {
    display: block;
  }
  .video-player {
    width: 100%;
    height: 100%;
  }
  .video-overlay {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0); /* Black with opacity */
    opacity: 0;
    transition: opacity 0.3s ease;
    z-index: 5;
  }

  .video-overlay.visible {
    opacity: 1;
  }

  .player-model {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 10; /* Ensure it's above the overlay */
  }

  .side-menu.hidden {
    transform: translateX(-100%);
  }

  .side-menu {
    position: fixed;
    left: 0;
    top: 0;
    height: 100vh;
    width: 5%;
    background-color: #f9f9fa;
    z-index: 1000;
    display: flex;
    flex-direction: column; /* Stack items vertically */
    justify-content: flex-end; /* Align items to the bottom */
    transition: transform 0.3s ease;
  }

  nav {
    width: 100%;
  }

  ul {
    list-style-type: none;
    padding: 0px;
    margin-bottom: 30px;
    text-align: left;
    display: flex;
    flex-direction: column; /* Stack items vertically */
  }

  li {
    margin-bottom: 1rem;
    transform: rotate(-90deg);
  }

  a {
    display: block;
    color: #050505;
    text-decoration: none;
    padding: 1rem;
    transition: background-color 0.3s ease;
    transform-origin: center center;
    white-space: nowrap;
    font-size: 12px;
    font-family: Akkurat, sans-serif;
    text-transform: uppercase;
  }

  a:hover {
    text-decoration: underline;
  }
  @media (max-width: 800px) {
    .grid {
      grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
    }
  }

  @media (max-width: 500px) {
    .side-menu {
      width: 10vw; /* Expand to full width */
    }
    .grid {
      font-size: 9px;
      margin-left: -33px;
    }
  }
</style>
