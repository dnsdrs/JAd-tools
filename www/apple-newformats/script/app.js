var video = document.querySelector(".scroll_ad_video");
window.onscroll = function () {
    var videoPosition = video.getBoundingClientRect().top 
    if (window.innerHeight - videoPosition > 0 && videoPosition > 0) {
        console.log(window.innerHeight - videoPosition)
        video.currentTime = video.duration * ((window.innerHeight - videoPosition) / window.innerHeight)
    }
}

var element = document.querySelector(".test")


function handleOrientation(evt) {
    let x = parseInt(evt.gamma / 2) + "px";
    let y = parseInt(evt.beta/ 2) + "px";
    let z = ((Math.abs(evt.gamma) + Math.abs(evt.beta) + 8) / 3) + "px";    
    element.style.setProperty('--z', z);
    element.style.setProperty('--x', x);
    element.style.setProperty('--y', y);
    element.style.setProperty('--alpha', ((evt.alpha) / 180)*100 / 2 + "px");
    element.style.setProperty('--beta', ((evt.beta - 90) / 180)*100 / 2 + "px");
    element.style.setProperty('--gamma', evt.gamma);
  }
  
  window.addEventListener('deviceorientation', handleOrientation);