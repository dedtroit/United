<script>
    import style from "$lib/styles/style.css";
</script>

<div class="date">01.03.2023</div>

<div class="hero">
    <div class="headercolr">
        <h1>Premiere Pro to <br />Davinci Resolve 18</h1>
    </div>
    <div class="subheadcolr">
        <h2>Color Grading Workflow (2023 EASY)</h2>
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
            src="https://youtu.be/LIeAgp123To?autoplay=1&controls=1&rel=0&showinfo=0&autohide=1&mute=0"
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
        Color grading is an essential aspect of video editing that can take your
        videos to the next level. It is the process of adjusting the colors,
        contrast, and saturation of a video to achieve a specific look or feel.
        In this blog post, we will be discussing the Premiere Pro to Davinci
        Resolve 18 color grading workflow using XML files.
        <br/>
        <br/>
        1. Export your project as an XML file in Premiere Pro: Before you
        can begin color grading in Davinci Resolve, you need to export your
        project as an XML file in Premiere Pro. This can be done by going to
        File > Export > Final Cut Pro XML. 
        <br/>
        <br/>
        2. Import the XML file into Davinci
        Resolve: Once you have exported your project as an XML file, you can
        import it into Davinci Resolve. This can be done by going to File >
        Import AAF, EDL, XML. 
        <br/>
        <br/>
        3. Map the source and destination clips: After
        importing the XML file, you will need to map the source and destination
        clips. This will ensure that Davinci Resolve can match the footage in
        your Premiere Pro project with the footage in your Davinci Resolve
        project. 
        <br/>
        <br/>
        4. Begin color grading: Now that your footage is in Davinci
        Resolve, you can begin color grading. Davinci Resolve has a wide range
        of color grading tools, such as the color wheels, color curves, and
        color match, that you can use to achieve the look you want. 
        <br/>
        <br/>
        5. Export your
        final video: Once you have finished color grading, export your final
        video. This can be done by going to the "deliver" tab in Davinci Resolve
        and selecting the appropriate export settings. 
        <br/>
        <br/>
        By following these simple
        steps, you can easily transfer your footage from Premiere Pro to Davinci
        Resolve and take advantage of its powerful color grading tools using XML
        files. Remember to export your project as an XML file in Premiere Pro,
        import the XML file into Davinci Resolve, map the source and destination
        clips, begin color grading, and export your final video. Happy grading!
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
