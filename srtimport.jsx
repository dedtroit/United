// Simple SRT Import Script for After Effects
// Prompts the user to select an SRT file and creates text layers

// Function to convert timecode format to seconds
function timecodeToSeconds(timecode) {
    var parts = timecode.split(/[:,]/);
    return parseInt(parts[0]) * 3600 + parseInt(parts[1]) * 60 + parseInt(parts[2]) + parseInt(parts[3]) / 1000;
}

// Prompt to select the SRT file
var srtFile = File.openDialog("Select the SRT file");
if (srtFile != null) {
    srtFile.open("r");
    var comp = app.project.activeItem;
    if (comp == null || !(comp instanceof CompItem)) {
        alert("Please select a composition.");
    } else {
        app.beginUndoGroup("Import Subtitles");

        var textLayer, startTime, endTime, textContent;

        while (!srtFile.eof) {
            var index = srtFile.readln(); // Subtitle index (not used)
            if (index === "") break; // End of file

            var timecode = srtFile.readln().split(" --> ");
            startTime = timecodeToSeconds(timecode[0]);
            endTime = timecodeToSeconds(timecode[1]);

            textContent = "";
            var line = srtFile.readln();
            while (line !== "" && !srtFile.eof) {
                textContent += line + "\r";
                line = srtFile.readln();
            }

            textLayer = comp.layers.addText(textContent.trim());
            textLayer.inPoint = startTime;
            textLayer.outPoint = endTime;
            textLayer.position.setValue([comp.width / 2, comp.height - 100]); // Position subtitle near the bottom
        }

        app.endUndoGroup();
    }
    srtFile.close();
}
