const playButton = document.getElementById("playButton");
const pauseButton = document.getElementById("pauseButton");
const cover = document.getElementsByClassName("cover")[0];
const nextSongButton = document.getElementById("nextSongButton");
const prevSongButton = document.getElementById("prevSongButton");
const songTitle = document.getElementById("songTitle");
// const display = document.getElementsByClassName("display")[0];

const happy = document.getElementById("happy");
console.log(happy);

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
    // if (isPlaying) {
    //     clearInterval(myInterval);
    //     playButton.innerHTML = '<i class="fa-solid fa-play"></i>';
    //     isPlaying = !isPlaying;
    // } else {
    //     myInterval = setInterval(() => {
    //         cover.style.transform =
    //             "rotate(" + `${intervalCounter * 0.2}` + "deg)";
    //         intervalCounter += 1;
    //     }, 10);
    //     playButton.innerHTML = '<i class="fa-solid fa-pause"></i>';
    //     isPlaying = !isPlaying;
    // }
    playOrPause();
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
}

// HATIRLATMA
// play ya da pause tuşuna basıldığında çalışacak bir fonksiyon yazılacak.
// bu fonksiyon aynı zamanda next ya da prev tuşuna basıldığında da
// çalışacak. next ya da prev tuşuna basıldığında play tuşuna da basılmış
// gibi algılayacak.
