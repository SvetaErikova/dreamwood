let block_tabs = document.querySelectorAll('.block_tabs')

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
    if ( window.matchMedia('(min-width: 992px)').matches ){
      filters[0].click()
  }

})


