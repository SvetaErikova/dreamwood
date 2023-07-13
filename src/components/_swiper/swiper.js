/* Слайдеры */
function calculateOffsetBefore(){
  if ( window.matchMedia('(min-width: 1024px)').matches ) {
    console.log(parseInt(window.getComputedStyle(document.documentElement).getPropertyValue('--g-80')))
    return Number(window.getComputedStyle(document.documentElement).getPropertyValue('--g-80'))
  } else if ( window.matchMedia('(max-width: 992px)').matches ){
    return Number(16)
  }
}

let banner_slider = document.querySelectorAll('.block_banner-group');

banner_slider.forEach(banner_sl => {

  let slider_controls = document.createElement('div');
  slider_controls.classList.add('slider_controls');

  let swiper_nav_prev = document.createElement('div');
  swiper_nav_prev.classList.add('swiper-button-prev');
  slider_controls.append(swiper_nav_prev);

  let swiper_nav_next = document.createElement('div');
  swiper_nav_next.classList.add('swiper-button-next');
  slider_controls.append(swiper_nav_next);

  if ( banner_sl.classList.contains('.block_banner-hero') ) {
    const hero_slider = new Swiper(banner_sl.querySelector('.block--wrapper'), {
      createElements: true,
      slideClass: 'banner',
      slidesPerView: 1,
      grabCursor: false,
      simulateTouch: true,
      allowTouchMove: true,
      centeredSlides: true,
      focusableElements: 'input, select, option, textarea, button, label, a',
      effect: 'slide',
      loop: true,
      mousewheel: {
        forceToAxis: true,
      },
      navigation: {
        nextEl: swiper_nav_next,
        prevEl: swiper_nav_prev,
      },
    });

    if (hero_slider.slides.length <= 1) {
      hero_slider.navigation.nextEl.classList.add('hidden')
      hero_slider.navigation.prevEl.classList.add('hidden')
      hero_slider.disable()
    }
  }
  else {
    const hero_slider = new Swiper(banner_sl.querySelector('.block--wrapper'), {
      createElements: true,
      slideClass: 'banner',
      slidesPerView: 1,
      grabCursor: false,
      simulateTouch: true,
      allowTouchMove: true,
      centeredSlides: true,
      focusableElements: 'input, select, option, textarea, button, label, a',
      effect: 'slide',
      loop: true,
      mousewheel: {
        forceToAxis: true,
      },
      navigation: {
        nextEl: swiper_nav_next,
        prevEl: swiper_nav_prev,
      },
      spaceBetween: parseInt(window.getComputedStyle(banner_sl).getPropertyValue('padding'))
    });

    if (hero_slider.slides.length <= 1) {
      hero_slider.navigation.nextEl.classList.add('hidden')
      hero_slider.navigation.prevEl.classList.add('hidden')
      hero_slider.disable()
    }
  }

  banner_sl.append(slider_controls);
})



let swiper_block = document.querySelectorAll('.block_list-slider');

swiper_block.forEach(swiper_item => {

  let slides_per_view = 0, slides_per_view_pad = 0, slides_per_view_mobile = 1;

  switch( true ){
    case swiper_item.classList.contains('content_offers'):
      slides_per_view = 4;
      slides_per_view_pad = 2.3 ;
      slides_per_view_mobile = 1.3;
      break;
    case swiper_item.classList.contains('content_area'):
      slides_per_view = 3;
      slides_per_view_pad = 2.3 ;
      slides_per_view_mobile = 1.3;
      break;
    case swiper_item.classList.contains('content_cards'):
      slides_per_view = 4;
      slides_per_view_pad = 2.3 ;
      slides_per_view_mobile = 1.3;
      break;
    case swiper_item.classList.contains('content_galleries'):
      slides_per_view = 4;
      slides_per_view_pad = 2.3 ;
      slides_per_view_mobile = 1.3;
      break;
    case swiper_item.classList.contains('content_events'):
      slides_per_view = 4 ;
      slides_per_view_pad = 2.3 ;
      slides_per_view_mobile = 1.3;
      break;
    case swiper_item.classList.contains('content_personage'):
      slides_per_view = 4;
      slides_per_view_pad = 2.3 ;
      slides_per_view_mobile = 1.3;
      break;
    case swiper_item.classList.contains('content_restaurant'):
      slides_per_view = 2;
      slides_per_view_pad = 2 ;
      slides_per_view_mobile = 1;
      break;
    case swiper_item.classList.contains('content_partners'):
      slides_per_view = 4;
      slides_per_view_pad = 2.3 ;
      slides_per_view_mobile = 1.3;
      break;
  }


  let slider_controls = document.createElement('div');
  slider_controls.classList.add('slider_controls');


  let swiper_nav_prev = document.createElement('div');
  swiper_nav_prev.classList.add('swiper-button-prev');
  slider_controls.append(swiper_nav_prev);

  let swiper_nav_next = document.createElement('div');
  swiper_nav_next.classList.add('swiper-button-next');
  slider_controls.append(swiper_nav_next);


  const swiper = new Swiper(swiper_item.querySelector('.block--elements'), {
    createElements: true,
    slideClass: 'card',
    slidesPerView: slides_per_view,
    grabCursor: true,
    simulateTouch: true,
    freeMode: false,
    allowTouchMove: true,
    uniqueNavElements: true,
    focusableElements: 'input, select, option, textarea, button, video, label, a, button, .card__image_slide',
    mousewheel: {
      forceToAxis: true,
    },
    navigation: {
      nextEl: swiper_nav_next,
      prevEl: swiper_nav_prev,
    },

    breakpoints: {
      240: {
        spaceBetween: 8,
        slidesPerView: slides_per_view_mobile,
        // slidesOffsetBefore: 16,
        // slidesOffsetAfter: 16,
      },
      768: {
        spaceBetween: 18,
        slidesPerView: slides_per_view_pad,
        // slidesOffsetBefore: 16,
        // slidesOffsetAfter: 16,
      },
      1024: {
        spaceBetween: 24,
        slidesOffsetBefore: 0,
        slidesOffsetAfter: 0,
        slidesPerView: slides_per_view,
      },
      1441:{
        spaceBetween: 40,
        slidesOffsetBefore: 0,
        slidesOffsetAfter: 0,
      }

    },
  });


  if (swiper.slides.length <= 1) {
    swiper.navigation.nextEl.classList.add('hidden')
    swiper.navigation.prevEl.classList.add('hidden')
    swiper.disable()
  }

  swiper.el.append(slider_controls);

})


let gallery_swiper = document.querySelectorAll('.js-gallerySwiper');

gallery_swiper.forEach(gallery => {
  let slider_controls = document.createElement('div');
  slider_controls.classList.add('slider_controls');

  let swiper_nav_prev = document.createElement('div');
  swiper_nav_prev.classList.add('swiper-button-prev');
  slider_controls.append(swiper_nav_prev);

  let swiper_nav_next = document.createElement('div');
  swiper_nav_next.classList.add('swiper-button-next');
  slider_controls.append(swiper_nav_next);


  const swiper = new Swiper(gallery, {
    createElements: true,
    slidesPerView: 'auto',
    // centeredSlides: true,
    loop: true,
    loopedSlides: 3,
    grabCursor: true,
    simulateTouch: true,
    freeMode: false,
    // allowTouchMove: true,
    // cssMode: true,
    // mousewheel: {
    //   forceToAxis: true,
    // },


    effect: 'slide',
    initialSlide: 1,
    slideClass: 'gallery--item',
    navigation: {
      nextEl: swiper_nav_next,
      prevEl: swiper_nav_prev,
    },

    setWrapperSize: true,

    breakpoints: {
      320: {
        spaceBetween: 20,
        slidesPerView: 1.3
      },
      820: {
        spaceBetween: 40,
        slidesPerView: 'auto'

      }
    },
  });

  if (swiper.slides.length <= 1) {
    swiper.navigation.nextEl.classList.add('hidden')
    swiper.navigation.prevEl.classList.add('hidden')
    swiper.disable()
  }

  gallery.append(slider_controls);

})


let slider_cards_image =  document.querySelectorAll('.block_list:not(.block_list-slider) .card--image')


slider_cards_image.forEach( el => {
  if (el.children.length > 1){

    const swiper = new Swiper(el, {
      createElements: true,
      slideClass: 'card--image_slide',
      loop: true,
      slidesPerView: 1,
      grabCursor: true,
      simulateTouch: true,
      allowTouchMove: true,
      uniqueNavElements: true,

      mousewheel: {
        forceToAxis: true,
      },
      pagination: true,
      navigation: true
      // {
      //     nextEl: swiper_nav_next,
      //     prevEl: swiper_nav_prev,
      //   },


    });
  }
})
