import { songs } from "../songs.js";

let track = 0;
let total = songs.length;
let title = "";
let artist = "";
let src = "";
let time = 0;
let list = "";

let a = document.createElement("audio");
let tab_title = document.getElementById("tab_title");
a.addEventListener("ended", () => next());

const setTrack = (val) =>{
    track = val;
    load();
    play();
}

const play = () => {
    update(0)
    a.currentTime = time;
    a.play();
}
const paus = () => {
    a.pause();
    time = a.currentTime; 
    tab_title.innerText = "Paused: " + tab_title.innerText;
}
const load = () => {
    time = 0;
    a.load();
    tab_title.innerText = "React Music App"
}
const prev = () => {
    load();
    setTimeout(() => {        
        update(-1);
        print();
        play();
    }, 200); 
    
}
const next = () => {
    load();
    setTimeout(() => {
        update(1);
        print();
        play();
    }, 200); 
}
const print = () => {
    console.log({track: track, title: title, artist:artist, src: src});
}
const update = (change) => {
    total = songs.length;
    track = (track+change) < 0 ? songs.length-1 : (track + change) % total;
    document.getElementById("title").innerText = songs[track].title;
    document.getElementById("artist").innerText = songs[track].artist;
    a.setAttribute('src', songs[track].url);
    document.getElementById("cheese").style.height = "auto";
    tab_title.innerText = `${songs[track].artist} - ${songs[track].title}`;
}

const printList = () =>{
    let leForm = document.getElementById('playlist');
    if(list === ""){
        songs.forEach( x => list += x.id + ": " + x.artist + " - " + x.title + "\n\n");
        leForm.innerText = list;
        leForm.style.visibility = 'hidden';
    }
    leForm.style.visibility = leForm.style.visibility === 'hidden' ? 'visible' : 'hidden';
}

export {
    play,
    paus,
    load,
    prev,
    next,
    setTrack,
    printList
}