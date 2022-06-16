var e

function animateOnScroll(video) {
    window.onscroll = function () {
        var videoPosition = video.getBoundingClientRect().top 
        if (window.innerHeight - videoPosition > 0 && videoPosition > 0) {
            console.log(window.innerHeight - videoPosition)
            video.currentTime = video.duration * ((window.innerHeight - videoPosition) / window.innerHeight)
        }
    }
}

function playOnViewportEnter(video) {
    var options = {
        root: document.window,
        rootMargin: '0px',
        threshold: 1.0
      }
      
    var observer = new IntersectionObserver(callback, options);
    observer.observe(video);

    function callback(evt) {
        e = evt[0]
        if (evt[0].intersectionRatio == 1 && (video.currentTime === 0 || video.currentTime === video.duration)) {
            video.play();
        }
    }
}


var header_video = document.querySelector(".header_video_ad_video")
var scroll_video = document.querySelector(".scroll_ad_video")
    if (window.innerWidth < 800) {
        playOnViewportEnter(header_video)
        playOnViewportEnter(scroll_video)
    } else {
        animateOnScroll(header_video)
        animateOnScroll(scroll_video)
    }


var element = document.querySelector(".test")


function handleOrientation(evt) {
    let x = parseInt(evt.gamma / 2) + "px";
    let y = parseInt(evt.beta/ 2) + "px";
    let z = ((Math.abs(evt.gamma) + Math.abs(evt.beta) + 8) / 3) + "px";    
    element.style.setProperty('--z', z);
    element.style.setProperty('--x', x);
    element.style.setProperty('--y', y);
    element.style.setProperty('--alpha', ((((180-Math.abs(evt.alpha-180))*((evt.alpha-180)/Math.abs(evt.alpha-180)))/180)) * 0.2 * window.innerWidth + "px");
    element.style.setProperty('--beta', (((((180-Math.abs(evt.beta-180))*((evt.beta-180)/Math.abs(evt.beta-180)))/180)) + 0.5) * 275 + "px");

}
  
window.addEventListener('deviceorientation', handleOrientation);
  
document.querySelector(".custom_pulse_ad").addEventListener("click", function (e) { e.currentTarget.classList.toggle("hidden") })

function handleStick(format) {
    window.onscroll = function () {
        if (window.scrollY > 700) {
            format.classList.add("unsticked")
        } else {
            format.classList.remove("unsticked")
        }
    }
}

handleStick(document.querySelector(".header_video_ad"))