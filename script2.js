console.log("Welcome to Melophile");

// Initialize the Variables
let songIndex = 0;
let audioElement = new Audio('songs_2/1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let masterSongName = document.getElementById('masterSongName');
let songItems = Array.from(document.getElementsByClassName('songItem'));

let songs = [
    {songName: "Bhari Mehefil by Shipra Goyal", filePath: "songs_2/1.mp3", coverPath: "covers_2/1.jpg"},
    {songName: "Chaliya", filePath: "songs_2/2.mp3", coverPath: "covers_2/2.jpg"},
    {songName: "I don't give A", filePath: "songs_2/3.mp3", coverPath: "covers_2/3.jpg"},
    {songName: "Maybe My soulmate died", filePath: "songs_2/4.mp3", coverPath: "covers_2/4.jpg"},
    {songName: "Nour Eisobh", filePath: "songs_2/5.mp3", coverPath: "covers_2/5.jpg"},
    {songName: "Sadi jindegi Hai Tha Baliya", filePath: "songs_2/6.mp3", coverPath: "covers_2/6.jpg"},
    {songName: "Sui se Sui by Akriti Kakar", filePath: "songs_2/7.mp3", coverPath: "covers_2/7.jpg"},
    {songName: "Tere Vaaste by Varun Jain and Sahib Faridi", filePath: "songs_2/8.mp3", coverPath: "covers_2/8.jpg"},
    {songName: "Yaar ka satya Hua Hai by B.Parak and Nayazuddin siddiki", filePath: "songs_2/9.mp3", coverPath: "covers_2/9.jpg"},
    {songName: "Zihaal e Miskin", filePath: "songs_2/10.mp3", coverPath: "covers_2/10.jpg"},
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
        audioElement.src = `songs_2/${songIndex+1}.mp3`;
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
    audioElement.src = `songs_2/${songIndex+1}.mp3`;
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
    audioElement.src = `songs_2/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
})