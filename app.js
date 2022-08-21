const playButton = document.getElementById("playButton");
const pauseButton = document.getElementById("pauseButton");
const cover = document.getElementsByClassName("cover")[0];

let isPlaying = false;
let intervalCounter = 1;

// const myInterval = setInterval(() => {
//     cover.style.transform = `rotate(${intervalCounter*45}deg)"`;
//     intervalCounter += 1
//  }, 1000);

playButton.addEventListener("click", () => {
    if (isPlaying) {
        clearInterval(myInterval);
        playButton.innerHTML = '<i class="fa-solid fa-play"></i>';
        console.log(isPlaying);
        isPlaying = !isPlaying;
    } else {
        myInterval = setInterval(() => {
            cover.style.transform =
                "rotate(" + `${intervalCounter * 0.5}` + "deg)";
            intervalCounter += 1;
            // console.log("Interval");
        }, 10);
        playButton.innerHTML = '<i class="fa-solid fa-pause"></i>';
        // console.log(isPlaying);
        isPlaying = !isPlaying;
    }
});
