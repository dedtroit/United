<script>
    export let goTo;
</script>

<div class="container">
    <div class="content">
        <div class="centered-text">
            <div class="spacer-top"></div>
            <p class="mainheader">Don't be a stranger</p>
        </div>
        <div class="reps"></div>
        <div class="bottom-columns">
            <div class="column">
                <p class="column-title">Jobs.</p>
                <p class="column-desc">
                    <a href="mailto:jobs@unitedposthouse.com"
                        >jobs@unitedposthouse.com</a
                    >
                </p>
            </div>
            <div class="column">
                <p class="column-title">PR.</p>
                <p class="column-desc">
                    <a href="mailto:PR@unitedposthouse.com"
                        >PR@unitedposthouse.com</a
                    >
                </p>
            </div>
            <div class="column">
                <p class="column-title">Other Inquiries.</p>
                <p class="column-desc">
                    <a href="mailto:inquiries@unitedposthouse.com"
                        >inquiries@unitedposthouse.com</a
                    >
                </p>
            </div>
        </div>
    </div>
</div>

<style>
    .reps {
        text-align: left;
        padding: 10px;
    }
    .container {
        position: relative;
    }
    .mainheader {
        font-size: 100px;
    }

    .spacer-top {
        margin-top: 8%;
    }

    .content {
        display: flex;
        flex-direction: column;
        height: 100vh;
        background-color: #f9f9fa;
        align-items: flex-start; /* Align content to the left */
        padding: 0 30px; /* Optional: Add some padding */
    }

    .centered-text {
        display: flex;
        flex-direction: column;
        justify-content: center; /* Center content vertically */
        align-items: flex-start; /* Align text to the left */
        font-size: 40px;
        color: #050505;
        flex: 1; /* Allow centered text to take up remaining space */
    }

    p {
        margin: 0; /* Remove default margin */
    }

    .bottom-columns {
        display: flex;
        justify-content: space-around; /* Space out columns horizontally */
        width: 95%;
        margin-top: auto; /* Push columns to the bottom */
        margin-bottom: 5%;
    }

    .column {
        text-align: left;
        padding: 10px;
        flex: 1;
    }

    .column-title {
        font-size: 35px;
        color: #050505;
    }

    a {
        font-size: 12px;
        font-family: Akkurat, sans-serif;

        text-transform: uppercase;
        color: #050505;
    }

    @media (max-width: 500px) {
        .column-title {
            font-size: 20px;
            color: #050505;
        }
        a {
            font-size: 8px;
            font-family: Akkurat, sans-serif;

            text-transform: uppercase;
            color: #050505;
        }
        .mainheader {
        font-size: 50px;
    }
        
    }
</style>
