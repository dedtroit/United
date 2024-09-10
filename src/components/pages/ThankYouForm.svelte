<script>
    function redirectToGoogle() {
        window.location.href = "https://calendar.app.google/evFsagMy9mYPxfuXA";
    }
</script>

<div class="thank-you">
    <div class="message">
        Thanks, we'll be in touch shortly.<br />
        Feel free to book a call below.
    </div>
    <div class="button-container">
        <button class="dico-btn form-button" on:click={redirectToGoogle} />
    </div>
</div>

<style>
    @font-face {
        font-family: "FoundersGrotesk-Medium";
        src: url("/fonts/FoundersGrotesk-Medium.otf") format("opentype");
    }
    @font-face {
        font-family: "suit";
        src: url("/static/fonts/SUIT-Light.otf") format("opentype");
    }
    @font-face {
        font-family: "Akkurat-Mono";
        src: url("/fonts/Akkurat-Mono.otf") format("opentype");
    }
    @font-face {
        font-family: Akkurat;
        src:
            url("https://d33wubrfki0l68.cloudfront.net/9f02a726216e5782250ec9dc5a23397ff9e61477/c8999/static/fonts/akkurat/akkuratmonollweb-regular.woff")
                format("woff"),
            url("https://d33wubrfki0l68.cloudfront.net/230f284e1b4f73d5e1af3fed889650bd4f0c1891/ff891/static/fonts/akkurat/akkuratmonollweb-regular.woff2")
                format("woff2");
        font-weight: 400;
        font-style: normal;
    }

    .message {
        font-size: 18px;
        line-height: 1.5;
        margin-bottom: 20px;
        font-family: suit;
        color: white;
        text-align: left;
    }
    .dico-btn {
        margin-top: 10px;
        border-radius: 50px;
        width: 50px;
        height: 50px;
        background-color: #d8c3a5;
        border: none;
        color: #fff;
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

    .dico-btn:before {
        content: "\2192"; /* Unicode for left arrow */
        position: absolute;
        top: 27%;
        left: 30%;
        transform: rotate(0deg);
        width: 20px;
        height: 0px;
        background-color: white;
        transition: transform 0.3s ease-in-out;
    }

    .dico-btn:hover {
        width: 150px;
    }
    .dico-btn:hover:before {
        transform: rotate(0);
        width: 100%;
        background-color: transparent;
        text-align: center;
        content: "Book now";
        line-height: 1; /* Adjust line-height to match the button height */
        left: 60%;
        top: 35%; /* Adjust the top value to center the text vertically */
        transform: translate(
            -50%,
            -50%
        ); /* Move the text vertically centered */
    }
</style>
