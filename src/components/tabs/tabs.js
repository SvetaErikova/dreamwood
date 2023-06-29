let block_tabs = document.querySelectorAll('.block_tabs')

block_tabs.forEach(block => {
  let placeMark = block.querySelectorAll('[data-placemark]')
  let filters = block.querySelectorAll('[data-content]'),
    items = block.querySelectorAll('[data-content_item]')
  if ( !filters && !items ) return;

  filters.forEach(f => {

    f.addEventListener('click', (e) =>{
      let data_attr = f.getAttribute('data-content')

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

    })

  })
  filters[0].click()


  placeMark.forEach(f => {

    f.addEventListener('click', (e) =>{
      let data_attr = f.getAttribute('data-placemark')
      if (!data_attr) return;

      placeMark.forEach(el => {
        el.dataset.placemark !== f.dataset.placemark ? el.classList.remove('is_active') : el.classList.add('is_active')

      })

      items.forEach(el =>{
        el.dataset.content_item === data_attr ? el.classList.add('is_active') : el.classList.remove('is_active')
      })

      filters.forEach( p =>{
        p.dataset.content === data_attr ? p.classList.add('is_active')  : p.classList.remove('is_active')
      })

    })

  })
  filters[0].click()

})
