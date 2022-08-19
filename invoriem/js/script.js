$(document).ready(function(){
    $(".owl-carousel").owlCarousel({
        dots: false,
        margin: 48,
        loop: true
    });
  });

//   Video

const videoBtn = document.querySelector('#video-btn');
const videoPicture = document.querySelector('.video__picture');
const videoWrapper = document.querySelector('.video');
const video = document.querySelector('#video-file');

videoBtn.addEventListener('click', function() {
  videoPicture.classList.add('none');
  videoWrapper.classList.remove('video-overlay');
  videoBtn.classList.add('none');

  if(video.paused){
    video.play()
  } 
  
})

video.addEventListener('click', function() {

  if(video.paused){

    video.play();
  }else{
    videoPicture.classList.remove('none');
    videoWrapper.classList.add('video-overlay');
    videoBtn.classList.remove('none');
    video.pause();
  }

  
  })

