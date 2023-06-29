window.addEventListener('load', () => {
  let vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', `${vh}px`)

  if ( window.matchMedia('(min-width: 1024px)').matches ) {
    let scrollbar_width = window.innerWidth - document.documentElement.clientWidth
    document.documentElement.style.setProperty('--scrollbarWidth', `${scrollbar_width}px`)
  }

  let header_height = document.querySelector('header').getBoundingClientRect().height
  document.documentElement.style.setProperty('--headerHeight', `${header_height}px`)

});

