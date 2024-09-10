<script>
  const video = {
    id: "976010730",
    title: "McDonalds Free Fry",
    credits: "Editorial. Colour. Sound.",
    thumbnail: "https://vumbnail.com/976010730.jpg",
    gif: "https://videoapi-muybridge.vimeocdn.com/animated-thumbnails/image/bad63d4d-59c3-4904-ad38-1bfbc3723149.gif?ClientID=sulu&Date=1721882436&Signature=bda16bae37f97ca9b7bc67a3d8f5e0e62b7ad75e",
    large: false,
  };

  let videoPlaying = false;
  let playingID = video.id;

  function playVideo(id) {
    videoPlaying = true;
    playingID = id;
  }

  function stopVideo(event) {
    event.stopPropagation();
    videoPlaying = false;
  }
</script>

<div class="content">
  <div class="centered-text">
    <p>{video.title}</p>
    <p class="sub">{video.credits}</p>
  </div>
  <div class="centered-div" on:click={() => playVideo(video.id)}>
    {#if videoPlaying}
      <div class="video-player">
        <iframe
          src={`https://player.vimeo.com/video/${playingID}?autoplay=1&controls=1`}
          width="100%"
          height="100%"
          frameborder="0"
          allow="autoplay; fullscreen; picture-in-picture"
          allowfullscreen
          title="Video Player"
        ></iframe>
        <div class="player-close" on:click={stopVideo}>
          <button>Close</button>
        </div>
      </div>
    {:else}
      <img
        src={video.thumbnail}
        alt="{video.title} Thumbnail"
        class="thumbnail"
      />
      <img src={video.gif} alt="{video.title} GIF" class="gif" />
    {/if}
  </div>
</div>

<style>
  .content {
    position: relative;
    display: flex;
    height: 100vh;
    background-color: #f9f9fa;
    justify-content: center;
    align-items: center;
  }

  .centered-text {
    position: absolute;
    bottom: 80px;
    left: 30px;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: flex-start;
    padding-left: 30px;
    font-size: 40px;
    color: #050505;
    margin: 0;
  }

  .centered-div {
    position: relative;
    width: 700px;
    height: 400px;
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

  .centered-div:hover .gif {
    display: block;
  }

  .video-player {
    width: 100%;
    height: 100%;
    position: relative;
  }

  .player-close {
    position: absolute;
    top: 0;
    right: -10px; /* Move the button 10px outside the right edge of the video */
    width: 50px; /* Adjust width as needed */
    height: 100%; /* Full height of the video */
    z-index: 10;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 15px;
    font-family: akkurat, sans-serif; /* Ensure a fallback font */
    text-transform: uppercase;
    background-color: #050505; /* Black background */
    color: #f9f9fa; /* White text */
    border-radius: 0 10px 10px 0; /* Rounded corners on the right side */
    text-align: center;
    overflow: hidden; /* Ensure text doesn't overflow */
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

  .sub {
    font-size: 12px;
font-family: Akkurat, sans-serif; 

    text-transform: uppercase;
  }

  p {
    margin: 0;
  }
  @media (max-width: 500px) {
    .centered-text {
      left: 10px;
      font-size: 16px; /* Smaller font size */
      padding-left: 10px; /* Adjust padding */
    }

    .centered-div {
      width: 85vw;
      height: auto; /* Adjust height based on content */
      aspect-ratio: 16 / 9; /* Maintain aspect ratio */
    }

    .content {
      width: 50vh;
      height: 100vh;
    }

    .video-player {
      width: 85vw;
      height: auto;
      aspect-ratio: 16 / 9; /* Maintain aspect ratio */
    }

    .player-close {
      right: -10px; /* Move the button 30px outside the right edge */
      width: 30px; /* Adjust width */
    }

    .player-close button {
      font-size: 8px; /* Smaller font size */
    }
    .sub {
      font-size: 9px; /* Smaller font size */
    }
  }
</style>
