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


let form_block = document.querySelector('.content--form');

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

