const audioplayer= document.getElementById("audioplayer");
const audiosource= document.getElementById("audiosource");
const playlist= document.getElementById("carrusel");
const links= playlist.getElementsByClassName("display_cancion");

for(let link of links){
    link.addEventListener("click", function(e){
        e.preventDefault(); 
        audiosource.src= this.getAttribute("data-src");
        audioplayer.load();
        audioplayer.play();
    });
}
