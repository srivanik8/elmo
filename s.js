const startBtn = document.getElementById("startBtn");
const stopBtn = document.getElementById("stopBtn");
const gifContainer = document.querySelector(".gif-container");
const gif = document.getElementById("gif");
const durationElement = document.getElementById("duration");

let startTime;
let endTime;

const gifs = ["https://i.pinimg.com/originals/15/57/0c/15570c8c023fd605cc328ef7faa8703e.gif", "https://i.pinimg.com/originals/87/d0/a1/87d0a1c00992741d11e386bbbcb83748.gif", "https://i.pinimg.com/originals/b5/b5/a6/b5b5a6e1b3d168eb7e4dc7072b292808.gif"]; // Replace with your actual GIF sources
let gifIndex = 0;
let gifPlaying = false;
let gifInterval;


function playNextGif() {
    if (gifIndex >= gifs.length) {
        gifIndex = 0;
        shuffleArray(gifs); // Reset to the first GIF if we've played all of them
    }

    gifContainer.style.display = "block";
    gif.src = gifs[gifIndex];
    gifIndex++;
}

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]]; // Swap elements to shuffle
    }
}



function playRandomGif() {
    if (gifIndex >= gifs.length) {
        gifIndex = 0; // Reset to the first GIF if we've played all of them
    }
    
    gifContainer.style.display = "block";
    gif.src = gifs[gifIndex];
    gifIndex++;
    gifPlaying = true;
}


startBtn.addEventListener("click", () => {
    if (!gifPlaying) {
        
        playRandomGif();
        shuffleArray(gifs);
        startTime = new Date();
        playNextGif();
        const interval = 5000;
        gifInterval = setInterval(playNextGif, interval);

    }
});

stopBtn.addEventListener("click", () => {
    if (gifPlaying) {
        gifContainer.style.display = "none";
        endTime = new Date();
        const duration = (endTime - startTime) / 1000; // Calculate duration in seconds
        durationElement.textContent = `Duration: ${duration.toFixed(2)} seconds`;
        gifPlaying = false;
        clearInterval(gifInterval);
    }
});
