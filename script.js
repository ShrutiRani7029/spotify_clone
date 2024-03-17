
    console.log("Welcome to JavaScript");

    // Initialize the Variables
    let songIndex = 0;
    let audioElement = new Audio('songs/1.mp3'); // Adjust the path to your audio file
    let masterPlay = document.getElementById('masterPlay');
    let myProgressBar = document.getElementById('myProgressBar');
    let bottomControls = document.getElementById('bottomControls');
    let gif= document.getElementById('gif');



    let songs = [
        { songName: "Tere Hawale", filePath: "songs/1.mp3", coverPath: "covers/1.jpg" },
        { songName: "Tere Hawale", filePath: "songs/2.mp3", coverPath: "covers/2.jpg" },
        { songName: "Tere Hawale", filePath: "songs/3.mp3", coverPath: "covers/3.jpg" },
        { songName: "Tere Hawale", filePath: "songs/4.mp3", coverPath: "covers/4.jpg" },
        { songName: "Tere Hawale", filePath: "songs/5.mp3", coverPath: "covers/5.jpg" },
        { songName: "Tere Hawale", filePath: "songs/6.mp3", coverPath: "covers/6.jpg" },
        { songName: "Tere Hawale", filePath: "songs/7.mp3", coverPath: "covers/7.jpg" },
    ];

    // Handle play/pause click
    masterPlay.addEventListener('click', () => {
        if (audioElement.paused || audioElement.currentTime <= 0) {
            audioElement.play();
            masterPlay.classList.remove('fa-play-circle');
            masterPlay.classList.add('fa-pause-circle');
            gif.style.opacity = 1;
        }
        else{
            audioElement.pause();
            masterPlay.classList.remove('fa-pause-circle');
            masterPlay.classList.add('fa-play-circle');
            gif.style.opacity = 0;

        }
    });

    // Listen to events
    audioElement.addEventListener('timeupdate', () => {
        progress = parseInt((audioElement.currentTime/audioElement.duration)* 100);
        myProgressBar.value = progress;
    });

    myProgressBar.addEventListener('change', ()=>{
        audioElement.currentTime = myProgressBar.value * audioElement.duration/100;
    })
