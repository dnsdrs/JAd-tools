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
    var x = -1 * (evt.gamma / 90) * 0.1 * window.innerWidth
    var y = -1 * ((Math.abs(evt.beta)-90)/90) * 275
    x = Math.floor(x * 1000) / 1000 + "px"
    y = Math.floor(y * 1000) / 1000 + "px"
    console.log({ x:  x, y: y})
    console.log({ gamma:  evt.gamma, beta: evt.beta})
    element.style.setProperty('--x', x);
    element.style.setProperty('--y', y);

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