<script>
    import style from "$lib/styles/style.css";
</script>

<div class="date">01.05.2023</div>

<div class="hero">
    <div class="headercolr">
        <h1>Speed Ramp <br />in Premiere Pro</h1>
    </div>
    <div class="subheadcolr">
        <h2>Improve your videos (for beginners)</h2>
        <h3>3 minute read</h3>
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
            src="https://youtu.be/INHzSw1EawA?autoplay=1&controls=1&rel=0&showinfo=0&autohide=1&mute=0"
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
        Speed ramping is a popular technique used in video editing that involves
        changing the speed of a clip to create a specific effect. In this blog
        post, we will be discussing the speed ramping technique in Premiere Pro.
        <br />
        <br />
        Import your footage into Premiere Pro:
        Before you can begin speed ramping, you need to import your footage into
        Premiere Pro. Once your footage is imported, drag it onto your timeline.
        <br />
        <br />
        Apply the time remapping effect: To start speed ramping, apply the time
        remapping effect to the clip you want to edit. You can do this by
        right-clicking on the clip and selecting "Speed/Duration." 
        <br />
        <br />
        Add keyframes: Once you have applied the time remapping effect, add
        keyframes by clicking on the stopwatch icon. This will allow you to
        change the speed of your clip at specific points in time. 
        <br />
        <br />
        Adjust the
        speed of your clip: Now that you have added keyframes, you can adjust
        the speed of your clip by moving the keyframes along the timeline. For
        example, you can slow down the speed of your clip at the beginning and
        then gradually increase the speed as the clip progresses. 
        <br />
        <br />
        Fine-tune your
        speed ramp: Finally, fine-tune your speed ramp by adjusting the position
        of the keyframes and the speed of your clip. You can also add or remove
        keyframes as needed to achieve the desired effect. 
        <br />
        <br />
        By following these
        simple steps, you can easily create speed ramp effects in Premiere Pro.
        Remember to import your footage into Premiere Pro˝
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
