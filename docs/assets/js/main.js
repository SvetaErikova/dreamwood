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


// /* Booking */
// let block_booking = document.querySelectorAll('.js-booking');
//
//
// block_booking.forEach(block => {
//
//   // Date Picker Input
//   let calendar_input = block.querySelector('.booking__calendar');
//   let booking_button = block.querySelector('.booking__button');
//
//
//   let booking_link = "", arrival_date = "", leave_date = "", room = "";
//
//
//   if ( calendar_input ) {
//
//     const picker = new Litepicker({
//       element: document.getElementById('checkin'),
//       elementEnd: document.getElementById('checkout'),
//       singleMode: false,
//       autoApply: true,
//       format: 'D MMMM',
//       lang: "ru-RU",
//       minDate: new Date(),
//       position: 'left auto',
//       numberOfMonths: 2,
//       numberOfColumns: 2,
//       showTooltip: false,
//       setup: (picker) => {
//         picker.on('selected', (date1, date2) => {
//           arrival_date = date2.format('DD/MM/YYYY')
//           leave_date = date2.format('DD/MM/YYYY')
//         });
//       },
//       plugins: ['mobilefriendly'],
//       mobilefriendly: {
//         breakpoint: 668,
//       },
//     });
//   }
//
//   // Create link from inputs
//   booking_button.addEventListener('click', (e)=>{
//
//     let link = "/booking/?&arrivalDate="+arrival_date+"&departureDate="+leave_date
//     console.log(link)
//
//     window.open(link, '_blank')
//   })
//
// })

 /* Filters */




/* Кнопка показать всё */

let btn_more = document.querySelector('.js-btn-more')
let block_long_list = document.querySelectorAll('.block_list:not(.block_list-slider)')

block_long_list.forEach(list =>{
  if(btn_more){
    let long_list = list.querySelector('.block--elements')
    btn_more.addEventListener('click', ()=>{
      btn_more.classList.toggle('active')
      long_list.classList.toggle('active');

      if (btn_more.classList.contains('active')) {
        btn_more.textContent = 'Скрыть'
      } else {
        list.scrollIntoView({block: 'start'})
        btn_more.textContent = 'Показать ещё'
      }

    })

  }


})


let block_with_filters = document.querySelectorAll('.js-filtered_block');



block_with_filters.forEach(block => {
  let filter_block = block.querySelectorAll('.js-filters')
  let filter_list = block.querySelector('.block--elements')
  let filter_elements = filter_list.querySelectorAll('.card');
  let reset_button = block.querySelector('button[type=reset]');
  let not_found = block.querySelector('.not-found')

  let block_inputs = block.querySelectorAll('.filters-item')

  filter_block.forEach(b => {
    // Все инпуты
    let inputs = b.querySelectorAll('.filters-item input');



    inputs.forEach(i => {
      if ( !inputs && !filter_elements ) return;


      // смена состояния инпута
      i.addEventListener('change', (e)=> {

        let loader = block.querySelector('.loader')
        function loader_active(){
          loader.style.display='block'
          for (i = 0; cards_to_show.length >= i; i++){
            cards_to_show[i].style.opacity = 0
          }
        }
        function  loader_no_active(){
          loader.style.display='none'
          for (i = 0; cards_to_show.length >= i; i++){
            cards_to_show[i].style.opacity = 1
          }
        }

        let cards_to_show = []
        let active_input_height = block.querySelector('.filters-item [data-height]:checked');
        let active_input_age = block.querySelector('.filters-item [data-age]:checked');
        let active_input_price = block.querySelector('.filters-item [data-price]:checked');

        filter_elements.forEach(el => {

          if( el.getAttribute('data-height') >= active_input_height.getAttribute('data-height') &&
            el.getAttribute('data-age') >= active_input_age.getAttribute('data-age') &&
            el.getAttribute('data-price').includes(active_input_price.getAttribute('data-price'))) {
            el.classList.remove('hidden')
            cards_to_show.push(el)
          }
          else {
            el.classList.add('hidden')
          }
          })

        if(cards_to_show.length < 1){
          not_found.style.display = 'block'
        } else{
          not_found.style.display = 'none'
        }
        setTimeout(loader_active)
        setTimeout(loader_no_active , 600)
        })

      })

    })

  // Reset filters
  reset_button.addEventListener('click', ()=>{
    block_inputs.forEach(bi =>{
      filter_elements.forEach( el => {
        el.classList.remove('hidden')
        document.querySelector('.js-filtered_block').scrollIntoView()
        not_found.style.display = 'none'
      })
    })
  })
})


Inputmask({
  mask: "+7 999 999 99 99",
  inputmode: 'numeric',
  showMaskOnFocus: true,
  "clearIncomplete": true,
  clearMaskOnLostFocus: true,
  greedy: false,
  nullable: true,
}).mask("input[type='tel']");

/* form */


let form_block = document.querySelector('.content_form');

if ( form_block ) {
  let reset_button = form_block.querySelector('button[type=reset]');
  let fieldsets = form_block.querySelectorAll('fieldset:not(.form-finish)');
  // let fieldsets = form_block.querySelectorAll('fieldset');
  let inputs = form_block.querySelectorAll('input')


  // Отмена отправки формы
  let btn_submit = form_block.querySelector('button[type=submit]')
  btn_submit.addEventListener('click', (e) =>{
    e.preventDefault()
  })


  fieldsets.forEach(fs => {

    let button_next = fs.querySelector('.form_next')
    let button_prev = fs.querySelector('.form_prev')

    if (fs.querySelector('input').value == '' || fs.querySelector('input[type=radio]').checked === false){
      button_next.disabled  = true
    }


    inputs.forEach(i => {
      if ( !inputs ) return;

      // смена состояния инпута
      i.addEventListener('input', (e)=> {
        if (form_block.querySelector('.active input').value <= 1){
          button_next.disabled  = true
        } else {
          form_block.querySelector('fieldset.active .form_next').disabled = false
        }

      })
      })


    if ( button_next !== null ) {
      button_next.addEventListener('click', (e)=>{
        fs.classList.remove('active')
        fs.nextElementSibling.classList.add('active')
      })
    }

    if ( button_prev  !== null ) {
      button_prev.addEventListener('click', (e)=>{
        fs.classList.remove('active')
        fs.previousElementSibling.classList.add('active')
      })
    }

  })
  // Reset filters
  reset_button.addEventListener('click', ()=>{
    for (let i = 1; i <= fieldsets.length; i++){
      fieldsets[0].classList.add('active')
      form_block.querySelectorAll('fieldset')[i].classList.remove('active')
    }
  })
}



/* Открытие карточек */
if ( window.matchMedia('(max-width:1023px)').matches ){
  let header_dropdown = document.querySelectorAll('.is_dropdown')

  header_dropdown.forEach(item => {
    item.addEventListener('click', (e) => {
      e.preventDefault()
      e.currentTarget.classList.toggle('is_open')
    })
  })
}

/* Скролл хедера */

let last_scroll = 0;

window.addEventListener('scroll', (e) => {

  document.documentElement.scrollTop > 0 ? document.querySelector('header').classList.add('scrolled') : document.querySelector('header').classList.remove('scrolled')

})

window.addEventListener('load', (e) => {

  document.documentElement.scrollTop > 0 ? document.querySelector('header').classList.add('scrolled') : document.querySelector('header').classList.remove('scrolled')

})


/* График работы мобилка */

if ( window.matchMedia('(max-width:768px)').matches ) {

  document.querySelector('.header--contacts_item.is_dropdown').addEventListener('click', (e) =>{
    PopupManager.open('popup_for_schedule')
  })
}



// opening menu
let opening_menu = document.querySelector('.header--burger')
let menu = document.querySelector('.header_menu')
if (opening_menu){
  let opening_menu = document.querySelector('.header--burger')


  opening_menu.addEventListener('click', (e) => {
    menu.classList.add('is_open')
  })



  let  close_menu = document.querySelector('.header_menu-close')

  close_menu.addEventListener('click', (e) => {
    menu.classList.remove('is_open')
  })
}

// скрытие меню клику вне меню
document.addEventListener( 'click', (e) => {
  let menu = document.querySelector('.header_menu.is_open')
  if(menu){
    let burger = document.querySelector('.header__burger-line')
    if (e.target !== menu && e.target !== opening_menu && e.target !== burger ) {
      menu.classList.remove('is_open')
    }
  }
})

// скрытие меню по кнопке Escape
document.addEventListener('keydown', function(e) {
  if( e.key ){
    menu.classList.remove('is_open')
  }
});

// плавный скролл


const smoothLinks = document.querySelectorAll('a[href^="#"]')
for (let smoothLink of smoothLinks) {
  smoothLink.addEventListener('click', function (e) {
    e.preventDefault()
    const id = smoothLink.getAttribute('href')

    document.querySelector(id).scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })
  })
}




// иконка плей
let  gallery = document.querySelector('.content_gallery')

if(gallery){
  let gallery_img = gallery.querySelectorAll('.gallery--item')


  gallery_img.forEach( e =>{
    let video =gallery.querySelectorAll('figure[data-src$=".mp4"]')
    video.forEach(v =>{
      if(e.contains(v)){
        e.classList.add('video')
      }
    })
  })

}



let map_places = document.getElementById('map')


  ymaps.ready(init);

  function init(){
    const map = new ymaps.Map('map', {
      center: [44.396631, 33.937235], // Москва
      zoom: 16
    });
    map.geoObjects
      .add(new ymaps.Placemark([ 44.397679, 33.936053], {
        iconCaption: 'Дримвуд',
      }, {
        iconColor: '#77b945',
        preset: 'islands#greenFamilyIcon',
      }))
  }


let btn_open_form = document.querySelectorAll('.js-btn-open-form')
btn_open_form.forEach( btn =>{
  btn.addEventListener('click' , (e) =>{
     e.preventDefault()
    PopupManager.open('popup_for_form')
  })
})

PopupManager.register('popup_for_form',{
    is_block_scroll: true,
    close_controls: false,
  }
);



PopupManager.register('popup_for_schedule',{
    is_block_scroll: true,
    close_controls: false,
  }
);


PopupManager.register('popup_for_scheme',{
    is_block_scroll: true,
    close_controls: false,
  },
  {
    on_open: (popup_element, params) => {
      let title = popup_element.querySelector('.popup__content-title'),
        subtitle = popup_element.querySelector('.popup__content-text')


      title.textContent = params.title.textContent;
      subtitle.append(params.subtitle)


    },
    on_close: (popup_element, params) => {
      popup_element.querySelector('.popup__content-title').textContent = "";
      popup_element.querySelector('.popup__content-text').textContent = "";
    }
  }
);




let block_tabs = document.querySelectorAll('.js-tabs')

block_tabs.forEach(block => {
  let placeMark = block.querySelectorAll('[data-placemark]'),
      filters = block.querySelectorAll('[data-content]'),
      items = block.querySelectorAll('[data-content_item]'),
      scheme = document.querySelector('.content_scheme')
  if ( !filters && !items ) return;

  filters.forEach(f => {
    // клик
    f.addEventListener('click', (e) =>{

      let data_attr = f.getAttribute('data-content')

      // если клик в блоке с картой
      if( scheme && window.matchMedia('(max-width: 992px)').matches && scheme.contains(f) ){

          items.forEach(el =>{
            if(el.dataset.content_item === f.dataset.content){

              filters.forEach( p =>{
                p.dataset.content === data_attr ? p.classList.add('is_active')  : p.classList.remove('is_active')
              })

              el === el.getElementsByTagName('p')
              placeMark.forEach( p =>{
                p.dataset.placemark === data_attr ? p.classList.add('is_active')  : p.classList.remove('is_active')
              })
              PopupManager.open('popup_for_scheme', {title: f, subtitle: el})
            }
          })

        } else {


        if (f.dataset.content === 'all'){
          filters.forEach(el => {

            el !== f ? el.classList.remove('is_active') : el.classList.add('is_active')

          })

          items.forEach(el =>{
            el.classList.add('is_active')
          })
        } else {

          // let data_attr = f.getAttribute('data-content')
          if (!data_attr) return;

          filters.forEach(el => {
            el !== f ? el.classList.remove('is_active') : el.classList.add('is_active')
          })

          items.forEach(el =>{
            el.dataset.content_item === data_attr ? el.classList.add('is_active') : el.classList.remove('is_active')
          })

          placeMark.forEach( p =>{
            p.dataset.placemark === data_attr ? p.classList.add('is_active')  : p.classList.remove('is_active')
          })

        }

      }

    })
    if( scheme && window.matchMedia('(max-width: 992px)')){
      items[0].classList.add('is_active')
      filters[0].classList.add('is_active')
    } else {
      filters[0].click()
    }


  })



  placeMark.forEach(f => {

    f.addEventListener('click', (e) =>{
      let data_attr = f.getAttribute('data-placemark')
      if (!data_attr) return;

      placeMark.forEach(el => {
        el.dataset.placemark !== f.dataset.placemark ? el.classList.remove('is_active') : el.classList.add('is_active')

      })

      filters.forEach( p =>{
        p.dataset.content === data_attr ? p.click()  : p.classList.remove('is_active')
      })
    })
  })
    if ( window.matchMedia('(min-width: 993px)').matches ){
      filters[0].click()
  }

})




Fancybox.bind('.gallery *[data-fancybox]', {
  infinite: false,
  groupAll: true
})


/* Page navigation Company */

let block_with_navigation = document.querySelectorAll(".js-page_navigation");

if ( block_with_navigation ) {

  let anchor_links = document.querySelectorAll('.js-anchor_link');

  anchor_links.forEach(link => {
    link.addEventListener("click", (event) => {
      event.preventDefault();

      let hash = event.currentTarget.hash.substring(1);
      let target = document.getElementById(hash);

      target.scrollIntoView({
        behavior: "smooth",
        block: "center"
      });
    });
  });

  let callback = (entries, observer) => {
    entries.forEach(entry => {
      let link = document.querySelector("a[href='#"+ entry.target.id +"']");

      if ( entry.isIntersecting ) {
        link.classList.add("is_active")

      } else {
        link.classList.remove("is_active")
      }

    })
  }

  let observer = new IntersectionObserver(callback, {
    threshold: [0.5]
  });


  window.addEventListener("scroll", (event) => {

    anchor_links.forEach(link => {

      let hash = link.hash.substring(1)

      let section = document.getElementById(hash);
      if ( section ) observer.observe(section);
    });

  });
}

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
        spaceBetween: 20,
        slidesOffsetBefore: 0,
        slidesOffsetAfter: 0,
        slidesPerView: slides_per_view,
      },
      1441:{
        spaceBetween: 20,
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

//
// let map = document.getElementById('map')
// let block_with_map = document.querySelector('.content_contacts')
//
// if ( block_with_map && map ) {
//   ymaps.ready(init);
//
//   function init() {
//     let map_settings = {};
//
//     if (  typeof SITE_MAP_SETTINGS === 'undefined' || SITE_MAP_SETTINGS === null ){
//       map_settings = {
//         coords: [44.843170, 33.604412],
//         title: "Заголовок",
//         text: "Описание вашего отеля",
//         link: "/",
//         image: "/assets/img/1.jpg",
//         mark: "",
//       };
//
//     } else {
//       map_settings = {...SITE_MAP_SETTINGS}
//     }
//
//
//     var map = new ymaps.Map("map", {
//         center: [44.843170, 33.604412],
//         zoom: 15,
//         controls: ['routeButtonControl']
//       }, {
//         searchControlProvider: 'yandex#search'
//       }),
//
//       placemark = new ymaps.Placemark(map_settings.coords, {
//           balloonContentHeader: "Жемчужина ",
//           balloonContent: "<a href='https://yandex.ru/maps/?ll=33.604466%2C44.842974&mode=routes&rtext=~44.843170%2C33.604412&rtt=auto&ruri=~ymapsbm1%3A%2F%2Fgeo%3Fdata%3DCgo0MDY2NjYyODI1EpMB0KDQvtGB0YHQuNGPLCDQoNC10YHQv9GD0LHQu9C40LrQsCDQmtGA0YvQvCwg0JHQsNGF0YfQuNGB0LDRgNCw0LnRgdC60LjQuSDRgNCw0LnQvtC9LCDRgdC10LvQviDQn9C10YHRh9Cw0L3QvtC1LCDQndCw0LHQtdGA0LXQttC90LDRjyDRg9C70LjRhtCwLCAyIgoN62oGQhVoXzNC&z=18.68' target='_blank'>проложить маршрут</a>",
//           // offset: [50, -30]
//         }, {
//           iconLayout: 'default#image',
//           iconImageHref: '/assets/img/icons/placemark.svg',
//           iconImageSize: [48, 56],
//           iconImageOffset: [-24, -56],
//           closeButton: false,
//           hideIconOnBalloonOpen: false,
//           balloonOffset: [100, 40]
//         }
//       );
//
//     map.geoObjects.add(placemark);
//
//     // Открываем балун на карте (без привязки к геообъекту).
//     placemark.balloon.open();
//
//     map.behaviors.disable('scrollZoom');
//
//
//   }
// }



// Accordion
let accordion = document.querySelectorAll('.block-accordion')

accordion.forEach(item => {
  if(accordion){
    let accordionItems = document.querySelectorAll(".js-openAccordion");

    accordionItems.forEach(item => {

      item.addEventListener("click", function(e){

        accordionItems.forEach(it => {
          if(it !== e.currentTarget) {
            it.classList.remove('is_open')
          }
        });
        item.classList.toggle('is_open')
      })

    })
    accordionItems[0].click()


  }
})


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

