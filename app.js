const playButton = document.getElementById("playButton");
const pauseButton = document.getElementById("pauseButton");
const cover = document.getElementsByClassName("cover")[0];
const nextSongButton = document.getElementById("nextSongButton");
const prevSongButton = document.getElementById("prevSongButton");
const stopButton = document.getElementById("stopButton");
const songTitle = document.getElementById("songTitle");

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

playButton.addEventListener("click", () => {
    playOrPause();
});

stopButton.addEventListener("click", () => {
    if (isPlaying) {
        clearInterval(myInterval);
        intervalCounter = 0;
        isPlaying = false;
    }
    cover.style.transform = "rotate(0deg)";
    document.getElementById(musicInfos[songNumber].url).pause();
    document.getElementById(musicInfos[songNumber].url).currentTime = 0;
    playButton.innerHTML = '<i class="fa-solid fa-play"></i>';
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
    cover.style.backgroundImage =
        "url(" + `${musicInfos[songNumber].img}` + ")";
    cover.style.transform = "rotate(0deg)";
    intervalCounter = 0;
    songPlayer(songNumber);
    if (isPlaying) {
        clearInterval(myInterval);
        isPlaying = false;
    }
    playOrPause();
});

prevSongButton.addEventListener("click", () => {
    if (songNumber === 0) {
        songNumber = 6;
    } else {
        songNumber -= 1;
    }
    songTitle.innerText = musicInfos[songNumber].songName;
    cover.style.backgroundImage =
        "url(" + `${musicInfos[songNumber].img}` + ")";
    cover.style.transform = "rotate(0deg)";
    intervalCounter = 0;
    songPlayer(songNumber);
    if (isPlaying) {
        clearInterval(myInterval);
        isPlaying = false;
    }
    playOrPause();
});

function songPlayer(songNum) {
    // bu fonksiyon,next veya prev tuşlarına basıldığında çalan şarkıyı
    // durdurup, yeni şarkıyı çalmak için yazıldı.

    // for (let i = 0; i < musicInfos.length; i++) {
    //     document.getElementById(musicInfos[i].url).pause();
    //     document.getElementById(musicInfos[i].url).currentTime = 0;
    // }

    document
        .getElementById(musicInfos[songNum == 0 ? 6 : songNum - 1].url)
        .pause();
    document.getElementById(
        musicInfos[songNum == 0 ? 6 : songNum - 1].url
    ).currentTime = 0;
    document
        .getElementById(musicInfos[songNum == 6 ? 0 : songNum + 1].url)
        .pause();
    document.getElementById(
        musicInfos[songNum == 6 ? 0 : songNum + 1].url
    ).currentTime = 0;

    document.getElementById(musicInfos[songNum].url).play();
}

function playOrPause() {
    if (isPlaying) {
        clearInterval(myInterval);
        playButton.innerHTML = '<i class="fa-solid fa-play"></i>';
        document.getElementById(musicInfos[songNumber].url).pause();
        document.getElementById(musicInfos[songNumber].url).volume;
        isPlaying = !isPlaying;
    } else {
        myInterval = setInterval(() => {
            cover.style.transform =
                "rotate(" + `${intervalCounter * 0.2}` + "deg)";
            intervalCounter += 1;
        }, 10);
        playButton.innerHTML = '<i class="fa-solid fa-pause"></i>';
        isPlaying = !isPlaying;
        document.getElementById(musicInfos[songNumber].url).play();
    }
    volumeSetter();
}

const sound = document.getElementById("sound");
const muteButton = document.getElementById("muteButton");
let isMuted = false;
let soundValue = 0;

muteButton.addEventListener("click", () => {
    if (!isMuted) {
        muteButton.innerHTML = '<i class="fa-solid fa-volume-xmark"></i>';
        soundValue = sound.value;
        sound.value = "0";
        isMuted = !isMuted;
    } else {
        muteButton.innerHTML = '<i class="fa-solid fa-volume-high"></i>';
        sound.value = soundValue;
        isMuted = !isMuted;
    }
    volumeSetter();
});

sound.addEventListener("change", () => {
    volumeSetter();
});
sound.addEventListener("input", () => {
    volumeSetter();
});

function volumeSetter() {
    document.getElementById(musicInfos[songNumber].url).volume = `${
        sound.value * 0.1
    }`;
}

// şarkının ilerleyişi gösteren bar koyulacak.

// ses seviyesi ve mute tuşu koyulacak.
