// /* Блок со схемой */
//
// let block_scheme = document.querySelectorAll('.content_scheme')
//
// block_scheme.forEach(block => {
//   let filters = block.querySelectorAll('[data-place]'),
//     items = block.querySelectorAll('[data-place_item]')
//   if ( !filters && !items ) return;
//
//   filters.forEach(f => {
//
//     f.addEventListener('click', (e) =>{
//       let data_attr = f.getAttribute('data-place')
//
//       if (!data_attr) return;
//
//       filters.forEach(el => {
//         el !== f ? el.classList.remove('is_active') : el.classList.add('is_active')
//       })
//
//       items.forEach(el =>{
//         el.dataset.place_item === data_attr ? el.classList.add('is_active') : el.classList.remove('is_active')
//       })
//
//       // block.dataset.active_road = data_attr
//     })
//
//   })
//
//   filters[0].click()
//
// })
