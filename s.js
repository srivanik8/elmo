const startBtn = document.getElementById("startBtn");
        const stopBtn = document.getElementById("stopBtn");
        const party = document.getElementById("party");
        const gifContainer = document.querySelector(".gif-container");
        const gif = document.getElementById("gif");
        const durationElement = document.getElementById("duration");
        const eat = document.getElementById("eat");
        const sleep = document.getElementById("sleep");
        const love = document.getElementById("love");

        let gifPlaying = false;
        let startTime;
        let intervalId;

        startBtn.addEventListener("click", () => {
            if (!gifPlaying) {
                gifContainer.style.display = "block";
                gif.src = "https://pic.chinesefontdesign.com/uploads/2017/08/chinesefontdesign.com-2017-08-13_10-51-19_542528.gif"; // Set the default GIF source here
                startTime = new Date();
                gifPlaying = true;
                updateDuration();
            }
        });

        party.addEventListener("click", () => {
            if (gifPlaying) {
                // Change the GIF source when the "Change GIF" button is clicked
                gif.src = "https://pic.chinesefontdesign.com/uploads/2017/08/chinesefontdesign.com-2017-08-13_10-51-02_876913.gif"; // Set the new GIF source here
                setTimeout(() => {
                    gif.src = "https://pic.chinesefontdesign.com/uploads/2017/08/chinesefontdesign.com-2017-08-13_10-51-19_542528.gif"; // Switch back to the default GIF
                }, 5000);
            }
        });

        stopBtn.addEventListener("click", () => {
            if (gifPlaying) {
                gifContainer.style.display = "none";
                clearInterval(intervalId);
                const endTime = new Date();
                const duration = (endTime - startTime) / 1000; // Calculate duration in seconds
                const formattedDuration = formatDuration(duration);
                durationElement.textContent = `Duration: ${formattedDuration}`;
                gifPlaying = false;
            }
        });

        function formatDuration(seconds) {
            const hours = Math.floor(seconds / 3600);
            const minutes = Math.floor((seconds % 3600) / 60);
            const remainingSeconds = Math.floor(seconds % 60);
            return `${hours}h ${minutes}m ${remainingSeconds}s`;
        }

        function updateDuration() {
            intervalId = setInterval(() => {
                const currentTime = new Date();
                const elapsedSeconds = (currentTime - startTime) / 1000;
                const formattedDuration = formatDuration(elapsedSeconds);
                durationElement.textContent = `Duration: ${formattedDuration}`;
            }, 100); // Update every 100 milliseconds
        }

        eat.addEventListener("click", () => {
            if (gifPlaying) {
                // Change the GIF source when the "Change GIF" button is clicked
                gif.src = "https://pic.chinesefontdesign.com/uploads/2017/08/chinesefontdesign.com-2017-08-13_10-51-06_538447.gif"; // Set the new GIF source here
                setTimeout(() => {
                    gif.src = "https://pic.chinesefontdesign.com/uploads/2017/08/chinesefontdesign.com-2017-08-13_10-51-19_542528.gif"; // Switch back to the default GIF
                }, 5000);
            }
        });

        sleep.addEventListener("click", () => {
            if (gifPlaying) {
                // Change the GIF source when the "Change GIF" button is clicked
                gif.src = "https://pic.chinesefontdesign.com/uploads/2017/08/chinesefontdesign.com-2017-08-13_10-51-16_767650.gif"; // Set the new GIF source here
                setTimeout(() => {
                    gif.src = "https://pic.chinesefontdesign.com/uploads/2017/08/chinesefontdesign.com-2017-08-13_10-51-19_542528.gif"; // Switch back to the default GIF
                }, 5000);
            }
        });

        love.addEventListener("click", () => {
            if (gifPlaying) {
                // Change the GIF source when the "Change GIF" button is clicked
                gif.src = "https://pic.chinesefontdesign.com/uploads/2017/08/chinesefontdesign.com-2017-08-13_10-51-17_977357.gif"; // Set the new GIF source here
                setTimeout(() => {
                    gif.src = "https://pic.chinesefontdesign.com/uploads/2017/08/chinesefontdesign.com-2017-08-13_10-51-19_542528.gif"; // Switch back to the default GIF
                }, 5000);
            }
        });