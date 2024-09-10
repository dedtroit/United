<script>
    import style from "$lib/styles/style.css";
</script>

<div class="date">01.07.2023</div>

<div class="hero">
    <div class="headercolr">
        <h1>
            Pre render<br />Premiere Pro timeline<br />For Smooth Real<br />Time Playback
        </h1>
    </div>
    <div class="subheadcolr">
        <h2>Red, Yellow & Green Bars Explained</h2>
        <h3>2 minute read</h3>
        <h4>
            by Danny Matthews / <a
                class="textdecor"
                target="blank"
                href="https://www.dannymatthews.net"
                title="video editing home">Danny Matthews Creative</a
            >
        </h4>
    </div>
    <div class="spacer2" />
</div>
<div class="frame">
    <div class="video">
        <iframe
            class="responsive-iframe"
            src="https://youtu.be/skwi3-Fi6TI?autoplay=1&controls=1&rel=0&showinfo=0&autohide=1&mute=0"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
        />
    </div>
</div>
<div class="spacer3" />

<div class="text">
    <h3>
        Real-time playback is essential for a smooth and efficient video editing
        process. However, it can be challenging to achieve when working with
        large and complex timelines in Premiere Pro. In this blog post, we will
        be discussing the technique of pre-rendering your timeline for smooth
        real-time playback.
        <br />
        <br />
        Understand the color bars: In
        Premiere Pro, the color bars on your timeline indicate the playback
        performance of your video. Green bars indicate that the video is playing
        back in real-time, yellow bars indicate that the video is playing back
        with some minor lag, and red bars indicate that the video is playing
        back with significant lag. 
        <br />
        <br />
        Identify problem areas: Look at your timeline
        and identify any areas where you have red or yellow bars. These are the
        areas that are causing your playback to lag. 
        <br />
        <br />
        Pre-render the problem
        areas: To fix the lag, you can pre-render the problem areas by selecting
        the clips and going to Sequence > Render In to Out. This will create a
        pre-rendered version of the clips that will play back smoothly in
        real-time. 
        <br />
        <br />
        Use proxy files: Another way to improve real-time playback
        performance is by using proxy files. These are smaller versions of your
        footage that are easier for your computer to handle. To create proxy
        files, go to File > Media > Export > Proxies. 
        <br />
        <br />
        Close unnecessary
        programs: Close any unnecessary programs running on your computer to
        free up resources for Premiere Pro. 
        <br />
        <br />
        By following these tips, you can
        achieve smooth real-time playback in Premiere Pro, even when working
        with large and complex timelines. Remember to understand the color bars,
        identify problem areas, pre-render the problem areas, use proxy files
        and close unnecessary programs.
    </h3>
</div>

<style>
    .date {
        text-align: right;
        color: rgb(90, 90, 90);
        font-size: 15px;
        font-family: monospace;
        padding-top: 20px;
        padding-right: 20px;
    }
    .responsive-iframe {
        border: 0;
        height: 100%;
        left: 0;
        position: absolute;
        top: 0;
        width: 100%;
    }

    .textdecor {
        text-decoration: none;
        color: rgb(90, 90, 90);
    }
    .video {
        padding-top: 56.25%;
        position: relative;
    }
    .frame {
        width: 60%;
        margin: 0 auto;
    }
    .text {
        text-align: left;
        display: flex;
        flex-direction: column;
        margin: 0px 200px;
        font-family: "suit";
        color: rgb(90, 90, 90);
    }
    .spacer2 {
        padding-top: 30px;
    }
    .spacer3 {
        padding-top: 50px;
    }

    .headercolr {
        color: white;
        font-family: "suit";
    }
    .subheadcolr {
        color: rgb(90, 90, 90);
        font-family: "suit";
        padding-top: 15px;
    }

    .hero {
        text-align: center;
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .hero h1 {
        font-weight: 400 !important;
        font-size: 100px;
        line-height: 80px;
        padding-bottom: 0px;
        margin-bottom: 0px;
    }

    .hero h2 {
        margin-top: 0px;
        font-weight: 400 !important;
        font-size: 30px;
    }
    @media only screen and (max-width: 1200px) {
        .text {
            margin: 0px 50px;
            font-size: 20px;
        }
    }
    @media only screen and (max-width: 600px) {
        .text {
            font-size: 15px;
        }
    }
    @media only screen and (max-width: 600px) {
        .textdecor {
            font-size: 10px;
        }
        .hero h1 {
            font-size: 50px;
            line-height: 40px;
        }

        .hero h2 {
            font-size: 20px;
        }
        .text {
            font-size: 12px;
        }
    }
</style>
