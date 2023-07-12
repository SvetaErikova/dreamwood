Inputmask({
  mask: "+7 999 999 99 99",
  inputmode: 'numeric',
  showMaskOnFocus: true,
  "clearIncomplete": true,
  clearMaskOnLostFocus: true,
  greedy: false,
  nullable: true,
}).mask("input[type='tel']");

//
// function validateInputs(i) {
//     let error_text = parent.querySelector('.form__input-error')
//     let parent = i.closest('.form__input');
//
//     i.addEventListener('blur', ()=>{
//
//       if ( !i.checkValidity() ) {
//         i.setAttribute("invalid", '');
//         i.removeAttribute("valid", '');
//
//         parent ? parent.classList.add('error') : null;
//         error_text ? error_text.textContent = "Данное поле не заполнено или заполнено неверно" : "";
//       }
//       else {
//
//         i.removeAttribute("invalid", '');
//         i.setAttribute("valid", '');
//
//         parent ? parent.classList.remove('error') : null;
//         error_text ? error_text.textContent = "Данное поле не заполнено или заполнено неверно" : "";
//       }
//     })
// }
//
// let inputs = document.querySelectorAll('input[name]:not([type="hidden"])');
//
// inputs.forEach(input => {
//   input.addEventListener('change', ()=>{
//     validateInputs(input)
//   })
// })

function validateForm(form){
  form.reportValidity()
}


/* form */


let form_block = document.querySelector('.content--form');

if ( form_block ) {
  let reset_button = form_block.querySelector('button[type=reset]');
  let fieldsets = form_block.querySelectorAll('fieldset:not(.form-finish)');
  let inputs = form_block.querySelectorAll('input')
  fieldsets.forEach(fs => {

    let button_next = fs.querySelector('.form_next')
    let button_prev = fs.querySelector('.form_prev')

    if (fs.querySelector('input').value == '' || fs.querySelector('input[type=radio]').checked === false){
      button_next.disabled  = true
    }


    inputs.forEach(i => {
      if ( !inputs ) return;

      // смена состояния инпута
      i.addEventListener('change', (e)=> {
        let fieldsets_active = form_block.querySelector('fieldsets.active')
        form_block.querySelector('fieldset.active .form_next').disabled = false
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
  // reset_button.addEventListener('click', ()=>{
  //   for (let i = 1; i <= fieldsets.length; i++){
  //     fieldsets[0].classList.add('active')
  //     fieldsets[i].classList.remove('active')
  //   }
  // })
}
// сделать активные поля обязательными
