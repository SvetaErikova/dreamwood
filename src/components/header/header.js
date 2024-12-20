
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



