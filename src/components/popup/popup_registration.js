
let btn_open_form = document.querySelectorAll('.js-btn-open-form')
btn_open_form.forEach( btn =>{
  btn.addEventListener('click' , (e) =>{
     e.preventDefault()
    PopupManager.open('popup_for_form')
  })
})

PopupManager.register('popup_for_form',{
    is_block_scroll: true,
    close_controls: false,
  }
);



PopupManager.register('popup_for_schedule',{
    is_block_scroll: true,
    close_controls: false,
  }
);


PopupManager.register('popup_for_scheme',{
    is_block_scroll: true,
    close_controls: false,
  },
  {
    on_open: (popup_element, params) => {
      let title = popup_element.querySelector('.popup__content-title'),
        subtitle = popup_element.querySelector('.popup__content-text')


      title.textContent = params.title.textContent;
      subtitle.append(params.subtitle)


    },
    on_close: (popup_element, params) => {
      popup_element.querySelector('.popup__content-title').textContent = "";
      popup_element.querySelector('.popup__content-text').textContent = "";
    }
  }
);

