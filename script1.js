console.log("Welcome to Melophile");

// Initialize the Variables
let songIndex = 0;
let audioElement = new Audio('songs_1/1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let masterSongName = document.getElementById('masterSongName');
let songItems = Array.from(document.getElementsByClassName('songItem'));

let songs = [
    {songName: "Higher Romantic Song by Avanti", filePath: "songs_1/1.mp3", coverPath: "covers_1/1.jpg"},
    {songName: "Italy Romantic Song by Aylex", filePath: "songs_1/2.mp3", coverPath: "covers_1/2.jpg"},
    {songName: "Married Life Romantic Song by Aylex", filePath: "songs_1/3.mp3", coverPath: "covers_1/3.jpg"},
    {songName: "There for U Romantic Song by Beau Walker", filePath: "songs_1/4.mp3", coverPath: "covers_1/4.jpg"},
    {songName: "Beloved Romantic Song by Kasia", filePath: "songs_1/5.mp3", coverPath: "covers_1/5.jpg"},
    {songName: "With You Romantic Song by AgusAlvarez,LukeBergs", filePath: "songs_1/6.mp3", coverPath: "covers_1/6.jpg"},
    {songName: "Together Romantic Song by Lukrembo", filePath: "songs_1/7.mp3", coverPath: "covers_1/7.jpg"},
    {songName: "Beautiful Liar Romantic Song by AgusAlvarez,Markvard", filePath: "songs_1/8.mp3", coverPath: "covers_1/8.jpg"},
    {songName: "Miss You Back Romantic Song by Nettson", filePath: "songs_1/9.mp3", coverPath: "covers_1/9.jpg"},
    {songName: "Tropica Romantic Song by Ocan Bloom", filePath: "songs_1/10.mp3", coverPath: "covers_1/10.jpg"},
]

songItems.forEach((element, i)=>{ 
    element.getElementsByTagName("img")[0].src = songs[i].coverPath; 
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName; 
})
 

// Handle play/pause click
masterPlay.addEventListener('click', ()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
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
})
// Listen to Events
audioElement.addEventListener('timeupdate', ()=>{ 
    // Update Seekbar
    progress = parseInt((audioElement.currentTime/audioElement.duration)* 100); 
    myProgressBar.value = progress;
})

myProgressBar.addEventListener('change', ()=>{
    audioElement.currentTime = myProgressBar.value * audioElement.duration/100;
})

const makeAllPlays = ()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');
    })
}

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click', (e)=>{ 
        makeAllPlays();
        songIndex = parseInt(e.target.id);
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        audioElement.src = `songs_1/${songIndex+1}.mp3`;
        masterSongName.innerText = songs[songIndex].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        gif.style.opacity = 1;
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
    })
})

document.getElementById('next').addEventListener('click', ()=>{
    if(songIndex>=9){
        songIndex = 0
    }
    else{
        songIndex += 1;
    }
    audioElement.src = `songs_1/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');

})

document.getElementById('previous').addEventListener('click', ()=>{
    if(songIndex<=0){
        songIndex = 0
    }
    else{
        songIndex -= 1;
    }
    audioElement.src = `songs_1/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
})