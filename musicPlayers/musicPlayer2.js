let mySong = document.getElementById("mySong")
let MasterPlay = document.getElementById("MasterPlay")
let myProgressBar = document.getElementById('myProgressBar');
let audioElement = document.getElementById("mySong")
let Equalizer = document.getElementsByClassName("Equalizer");
let imgsrc = document.getElementById("imgsrc");
let Repeat = document.getElementById("Repeat")
let forward = document.getElementById("Forward");
let backward = document.getElementById("Backward");

MasterPlay.addEventListener("click", function(){
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        MasterPlay.classList.remove("fa-play-circle");
        MasterPlay.classList.add("fa-pause-circle");  
        imgsrc.style.opacity = 1;  
    }
    else{
        audioElement.pause();
        MasterPlay.classList.remove("fa-pause-circle");
        MasterPlay.classList.add("fa-play-circle");  
        imgsrc.style.opacity = 0;  
    } 
});

audioElement.addEventListener('timeupdate', ()=>{ 
    // Update Seekbar
    progress = parseInt((audioElement.currentTime/audioElement.duration)* 100); 
    myProgressBar.value = progress;
})

myProgressBar.addEventListener('change', ()=>{
    audioElement.currentTime = myProgressBar.value * audioElement.duration/100;
})
Repeat.addEventListener("click", function(){
    audioElement.currentTime = 0;
});
forward.addEventListener('click', function(){
    
})
function addtolist(event){
  console.log(event);
}


/*let songIndex = 0;

let songs = [
    {songName: "My Universe", filePath: "My Universe.mp3"},
    {songName: "My Universe", filePath: "My Universe.mp3"},
    {songName: "My Universe", filePath: "My Universe.mp3"},
    {songName: "My Universe", filePath: "My Universe.mp3"},
    {songName: "My Universe", filePath: "My Universe.mp3"},
    {songName: "My Universe", filepath: "My Universe.mp3"},
    {songName: "My Universe", filepath: "My Universe.mp3"},
];
MasterPlay.addEventListener('click', ()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        MasterPlay.classList.remove('fa-play-circle');
        MasterPlay.classList.remove('fa-pause-circle');
        Equalizer.style.opacity = 1;
    }
    else{
        audioElement.pause();
        MasterPlay.classList.remove('fa-pause-circle');
        MasterPlay.classList.remove('fa-play-circle');
        Equalizer.style.opacity = 0;
    }
});
audioElement.addEventListener('timeupdate', ()=>{
    
    progress = parseInt((audioElement.currentTime/audioElement.duration)*100)
    
    myProgressBar.value = progress;
});
myProgressBar.addEventListener('change', ()=>{

    audioElement.currentTime = myProgressBar.value * audioElement.duration/100;
});*/
