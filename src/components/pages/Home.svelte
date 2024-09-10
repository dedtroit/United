<script>
  export let goTo;
  let time = 0;
  let duration;
  let paused = true;
  let showControls = true;
  let showControlsTimeout;
  let lastMouseDown;

  function handleMove(e) {
    clearTimeout(showControlsTimeout);
    showControlsTimeout = setTimeout(() => (showControls = false), 2500);
    showControls = true;

    if (!duration) return;
    if (e.type !== "touchmove" && !(e.buttons & 1)) return;

    const clientX = e.type === "touchmove" ? e.touches[0].clientX : e.clientX;
    const { left, right } = e.target.getBoundingClientRect();
    time = (duration * (clientX - left)) / (right - left);
  }

  function handleMousedown(e) {
    lastMouseDown = new Date();
  }

  function handleMouseup(e) {
    if (new Date() - lastMouseDown < 300) {
      if (paused) e.target.play();
      else e.target.pause();
    }
  }

  function format(seconds) {
    if (isNaN(seconds)) return "...";
    const minutes = Math.floor(seconds / 60);
    seconds = Math.floor(seconds % 60);
    if (seconds < 10) seconds = "0" + seconds;
    return `${minutes}:${seconds}`;
  }
</script>

<div class="video-container">
  <video
    class="background-video"
    poster=""
    src="Media/web1reel.mp4"
    on:mousemove={handleMove}
    on:touchmove|preventDefault={handleMove}
    on:mousedown={handleMousedown}
    on:mouseup={handleMouseup}
    bind:currentTime={time}
    bind:duration
    bind:paused
    autoplay
    muted
    loop
  >
    <track kind="captions" />
  </video>

  <div class="content">
    <p class="header">
      A post production house united. <br />
      The place where artist create emotional visual beauty.
    </p>
  </div>
</div>

<style>
  .header {
    font-size: 45px;
  }
  .controls {
    position: relative;
    top: 30%;
    left: 0;
    width: 100%;
    transition: opacity 1s;
    padding: 10px; /* Optional */

       /* <div class="controls" style="opacity: {duration && showControls ? 1 : 0}">
      <progress value={time / duration || 0} />
    </div> */
    
  }
  .video-container {
    position: relative;
    width: 100%;
    height: 100%;
    overflow: hidden;
    background-color: #050505;
  }

  .background-video {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 100%;
    height: 100%;
    opacity: 40%;
    object-fit: cover;
    transform: translate(-50%, -50%);
  }

  .content {
    position: relative;
    z-index: 1;
    color: #f9f9fa;
    padding: 30px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    height: 100%;
  }

  @media (max-width: 500px) {
    .header {
      font-size: 41px;
    }

    .controls {
      top: 10%;
      padding: 2px;
    }

    .content {
      padding: 15px;
    }
  }
</style>
