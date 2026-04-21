const audioplayer= document.getElementById("audioplayer");
const audiosource= document.getElementById("audiosource");
const playlist= document.getElementById("carrusel");
const links= playlist.getElementsByTagNameNS("*", "img");
const albumcover= document.getElementById("albumcover");
const songtitle= document.getElementById("songtitle");
const nomcancion= playlist.getElementsByTagNameNS("h4");
const albumphoto= playlist.getElementsByTagNameNS("div", "img");

for(let link of links){
    link.addEventListener("click", function(e){
        e.preventDefault(); 
        audiosource.src= this.getAttribute("data-src");
        audioplayer.load();
        audioplayer.play();
        for (let x of nomcancion){
                songtitle.textContent= x.textContent;
        }
        for (let y of albumphoto){
                albumcover.src= y.src;
            }
    });
    
     
}
