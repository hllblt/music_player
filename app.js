const playButton = document.getElementById("playButton");
const pauseButton = document.getElementById("pauseButton");

// playButton.addEventListener("click", () => {
//     playButton.style.opacity = "0";
//     pauseButton.style.opacity = "1";
// });
let isPlaying = false;

playButton.addEventListener("click", () => {
    if (isPlaying) {
        playButton.innerHTML = '<i class="fa-solid fa-play"></i>';

        isPlaying = !isPlaying;
    } else {
        isPlaying = !isPlaying;
        playButton.innerHTML = '<i class="fa-solid fa-pause"></i>';
    }
});
