let reviews_block = document.querySelectorAll('.content_reviews')

reviews_block.forEach(block => {
  let reviews_video = block.querySelectorAll('.review--image')

  reviews_video.forEach(video_item => {
    let video = video_item.querySelector('video')
    if ( video ) {
      video.onplaying = function () {
        video_item.classList.add('is_playing')
      }
      video.onpause  = function () {
        video_item.classList.remove('is_playing')
      }

      video_item.addEventListener('click', (e)=>{
        video.paused || video.ended ?  video.play() : video.pause()
      })
    }
  })
})

