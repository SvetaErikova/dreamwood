Inputmask({
  mask: "+7 999 999 99 99",
  inputmode: 'numeric',
  showMaskOnFocus: true,
  "clearIncomplete": true,
  clearMaskOnLostFocus: true,
  greedy: false,
  nullable: true,
}).mask("input[type='tel']");


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

let inputs = document.querySelectorAll('input[name]:not([type="hidden"])');

inputs.forEach(input => {
  input.addEventListener('change', ()=>{
    validateInputs(input)
  })
})

function validateForm(form){
  form.reportValidity()
}

