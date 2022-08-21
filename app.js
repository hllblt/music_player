const playButton = document.getElementById("playButton");
const pauseButton = document.getElementById("pauseButton");
const cover = document.getElementsByClassName("cover")[0];
const nextSongButton = document.getElementById("nextSongButton");
const prevSongButton = document.getElementById("prevSongButton");
const songTitle = document.getElementById("songTitle");
// const display = document.getElementsByClassName("display")[0];

const musicInfos = [
    {
        img: "https://imgyukle.com/f/2022/08/21/nyAJFN.jpg",
        songName: "Rihanna - Diamonds",
        url: "diamonds",
    },
    {
        img: "https://imgyukle.com/f/2022/08/21/nyAnse.jpg",
        songName: "Pharrell Williams - Happy",
        url: "happy",
    },
    {
        img: "https://imgyukle.com/f/2022/08/21/nyAVSR.jpg",
        songName: "Indila - Dernière Danse",
        url: "indila",
    },
    {
        img: "https://imgyukle.com/f/2022/08/21/nyAE9c.jpg",
        songName: "Khaled - C'est La Vie",
        url: "khaled",
    },
    {
        img: "https://imgyukle.com/f/2022/08/21/nyAovt.jpg",
        songName: "Anne Marie - Rockabye",
        url: "rockabye",
    },
    {
        img: "https://imgyukle.com/f/2022/08/21/nyArnP.jpg",
        songName: "Ed Sheeran - Shape of You",
        url: "shape",
    },
    {
        img: "https://imgyukle.com/f/2022/08/21/nyAyjq.jpg",
        songName: "Sia - Titanium",
        url: "titanium",
    },
];

let isPlaying = false;
let intervalCounter = 1;
let songNumber = 0;
let isFirstPlay = true;

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
                "rotate(" + `${intervalCounter * 0.2}` + "deg)";
            intervalCounter += 1;
            // console.log("Interval");
        }, 10);
        playButton.innerHTML = '<i class="fa-solid fa-pause"></i>';
        // console.log(isPlaying);
        isPlaying = !isPlaying;
    }
});

// in this part, we assigned next and prev buttons' functions. when we press
// buttons, song, song name and album cover will be changed.
nextSongButton.addEventListener("click", () => {
    // console.log("next");
    if (songNumber === 6) {
        songNumber = 0;
    } else {
        songNumber += 1;
    }
    songTitle.innerText = musicInfos[songNumber].songName;
    cover.style.backgroundImage = "url(" + `${musicInfos[songNumber].img}` + ")";
    cover.style.transform = "rotate(0deg)";
    intervalCounter = 0;
});
prevSongButton.addEventListener("click", () => {
    // console.log("prev");
    if (songNumber === 0) {
        songNumber = 6;
    } else {
        songNumber -= 1;
    }
    songTitle.innerText = musicInfos[songNumber].songName;
    cover.style.backgroundImage = "url(" + `${musicInfos[songNumber].img}` + ")";
    cover.style.transform = "rotate(0deg)";
    intervalCounter = 0;
});
