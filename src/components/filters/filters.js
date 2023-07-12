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

        let loader = block.querySelector('.loader')
        function loader_active(){
          loader.style.display='block'
          for (i = 0; filter_elements.length >= i; i++){
            filter_elements[i].style.opacity = 0
          }
        }
        function  loader_no_active(){
          loader.style.display='none'
          for (i = 0; filter_elements.length >= i; i++){
            filter_elements[i].style.opacity = 1
          }
        }
        setTimeout(loader_active )
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







// block_with_filters.forEach(block => {
//   let filter_block = block.querySelectorAll('.js-filters')
//   let filter_list = block.querySelector('.block--elements')
//   let filter_elements = filter_list.querySelectorAll('[data-target-item]');
//   let reset_button = block.querySelectorAll('button[type=reset]');
//   let block_inputs = block.querySelectorAll('.filters-item')
//
//   filter_block.forEach(b => {
//     let inputs = b.querySelectorAll('[data-target]');
//     let data_attr = [];
//
//     // первые элементы по умолчанию активны
//     block_inputs.forEach(bi =>{
//       bi.querySelector('[data-target]').click()
//     })
//
//
//
//     inputs.forEach(i => {
//       if ( !inputs && !filter_elements ) return;
//
//
//       i.addEventListener('change', (e)=> {
//         data_attr = []
//
//         let active_input = block.querySelectorAll('[data-target]:checked');
//
//         // console.log(active_input)
//
//         if ( active_input.length < 1 ) {
//           filter_elements.forEach( el => {
//             el.classList.remove('hidden')
//           })
//         }
//         active_input.forEach(ai => {
//           let attr = ai.getAttribute('data-target')
//           data_attr.push(attr);
//         })
//
//         if ( data_attr.length < 1 ) return;
//
//         let cards_to_show = [];
//
//         // console.log(data_attr)
//
//         filter_elements.forEach(el => {
//           let data_target_item = el.getAttribute('data-target-item').split(',')
//           console.log(data_target_item)
//           console.log('карточка:'+data_target_item)
//           console.log('кнопка:'+data_attr)
//
//           data_attr.forEach(attr => {
//             // console.log(el.getAttribute('data-target-item'))
//             if ( el.getAttribute('data-target-item').includes(attr)  ) {
//
//               cards_to_show.push(el)
//               el.classList.remove('hidden')
//             }
//             else{
//               el.classList.add('hidden')
//             }
//
//           })
//         })
//
//       })
//
//     })
//
//   })
//
//
//   // Reset filters
//
//   reset_button.forEach(button => {
//     button.addEventListener('click', ()=>{
//       filter_elements.forEach( el => {
//         el.classList.remove('hidden')
//       })
//     })
//   })
//
// })
