// /* Filters */
// function arrayRemove(arr, value) {
//   return arr.filter(function(ele){
//     return ele != value;
//   });
// }
//
// function findCommonElements(arr1, arr2) {
//   return arr1.some(item => arr2.includes(item))
// }
//
// /* Кнопка показать всё */
//
// let list_to_crop = document.querySelectorAll('.js-long_list')
//
// list_to_crop.forEach(list =>{
//   let button = list.querySelector('.js-toggle_content');
//
//   button.addEventListener('click', ()=>{
//     button.classList.toggle('active')
//     list.classList.toggle('active');
//
//     if (button.classList.contains('active')) {
//       button.textContent = 'Скрыть'
//       document.querySelector('.filters__more').style.display = 'flex'
//     } else {
//       button.textContent = 'Показать ещё'
//       document.querySelector('.filters__more').style.display = 'none'
//     }
//
//   })
//
// })
//
//
// select = document.querySelectorAll('.select')
// select.forEach(function(selectActive){
//   selectActive.addEventListener('change', (e) =>{
//     s = e.currentTarget
//     option = s.querySelectorAll('.option')
//     for(i=1; i < option.length; i++){
//       if(s.value === option[i].value){
//         s.classList.add('select-active')
//         s.dataset.target = option[i].value
//       }
//     }
//   })
// })
//
// let block_with_filters = document.querySelectorAll('.js-filtered_block');
//
// block_with_filters.forEach(block => {
//   let filter_block = block.querySelectorAll('.js-filters')
//
//   let targets_list = document.getElementById('content_to_sort');
//   let content_elements = targets_list.querySelectorAll('li[data-content]');
//   let reset_button = block.querySelectorAll('button[type=reset]');
//
//   filter_block.forEach(b => {
//     let inputs = b.querySelectorAll('[data-target]');
//     let data_attr = [];
//
//     inputs.forEach(i => {
//       if ( !inputs && !content_elements ) return;
//
//       i.addEventListener('change', (e)=> {
//         data_attr = []
//
//         let active_input = block.querySelectorAll(':scope .select-active, [data-target]:checked');
//
//         //console.log(active_input)
//
//         if ( active_input.length < 1 ) {
//           content_elements.forEach( el => {
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
//         content_elements.forEach(block => {
//           let data_content = block.getAttribute('data-content').split(',')
//           console.log('карточка:'+data_content)
//           console.log('кнопка:'+data_attr)
//
//           data_attr.forEach(attr => {
//             if ( block.getAttribute('data-content').includes(attr) ) {
//               console.log(block.getAttribute('data-content').includes(attr) )
//
//               cards_to_show.push(block)
//               block.classList.remove('hidden')
//             }else
//               block.classList.add('hidden')
//           })
//         })
//
//       })
//     })
//   })
//
//
//   // Reset filters
//
//   reset_button.forEach(button => {
//     button.addEventListener('click', ()=>{
//       content_elements.forEach( el => {
//         el.classList.remove('hidden')
//       })
//     })
//   })
//
// })
