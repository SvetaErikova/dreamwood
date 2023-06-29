/* Кнопка скопировать номер */
//
// const copyToClipboard = (content, el) => {
//   if (window.isSecureContext && navigator.clipboard) {
//     navigator.clipboard.writeText(content);
//   } else {
//     unsecuredCopyToClipboard(content, el);
//   }
// };
//
// const unsecuredCopyToClipboard = (text, parentEl) => {
//   const textArea = document.createElement("textarea");
//   textArea.value=text;
//   parentEl.appendChild(textArea);
//   textArea.focus();
//   textArea.select();
//   try{
//     document.execCommand('copy')
//   }
//   catch(err){
//     console.error('Unable to copy to clipboard',err)
//   }
//   parentEl.removeChild(textArea)
// };
//
// let copy_buttons = document.querySelectorAll('.js_copy_phone')
//
// copy_buttons.forEach(b =>{
//   b.addEventListener('click', (e)=>{
//     let text = b.dataset.phone_number
//     copyToClipboard(text, e.currentTarget.parentNode)
//     b.textContent = "Скопировано!";
//     b.classList.add('is_copying')
//
//     setTimeout(()=>{
//       b.textContent = "Скопировать номер";
//       b.classList.remove('is_copying')
//     }, 1400)
//   })
// })


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


/* Скролл хедера мобилка */

// if ( window.matchMedia('(max-width:992px)').matches ) {
//
//   window.addEventListener('scroll', (e)=>{
//     let current_scroll = window.pageYOffset || document.documentElement.scrollTop;
//
//     current_scroll >= last_scroll && current_scroll ? document.querySelector('header').classList.add('scrolled-up') : document.querySelector('header').classList.remove('scrolled-up')
//
//     last_scroll = current_scroll
//   })
//
//   let submenu_button = document.querySelector('#js-open_panel')
//
//   submenu_button.addEventListener('click', ()=>{
//
//     submenu_button.nextElementSibling.classList.toggle('active')
//   })
// }



/* Навигация в хедере */

// if ( window.matchMedia('(min-width:993px)').matches ) {
//
//   let header_nav = document.querySelector('.header--nav')
//   let dropdown_button = header_nav.querySelector('.header--nav_item-more')
//   let dropdown_menu = header_nav.querySelector('.header--nav_item-more .is_dropdown--content .header_menu')
//
//   function isOverflown(element) {
//     return element.scrollWidth > element.clientWidth;
//   }
//
//   if ( isOverflown(header_nav) ) {
//     while( isOverflown(header_nav) ){
//
//       let last_link = header_nav.querySelector('.header--nav > div:last-of-type')
//       header_nav.removeChild(last_link)
//       dropdown_menu.appendChild(last_link)
//     }
//
//     dropdown_button.classList.remove('hidden')
//   }
//
// }

// opening menu

let opening_menu = document.querySelector('.header--burger')
let menu = document.querySelector('.header_menu')

opening_menu.addEventListener('click', (e) => {
      menu.classList.add('is_open')
  })

let  close_menu = document.querySelector('.header_menu-close')

close_menu.addEventListener('click', (e) => {
  menu.classList.remove('is_open')
})
