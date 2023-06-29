PopupManager.register('popup_for_vacancy_form', {
    close_controls: true,
    is_block_scroll: false,
  },
  {
    on_close: (popup_element, params) => {
      popup_element.querySelector('form').reset();
    }
  }
);
PopupManager.register('popup_for_form', {
    is_block_scroll: true,
    close_controls: true,
  },
  {
    on_close: (popup_element, params) => {
      popup_element.querySelector('form').reset();
    }
  }
);

PopupManager.register('popup_for_balloon',{
    is_block_scroll: true,
    close_controls: false,
  },{
    on_open: (popup_element, params) => {
      popup_element.querySelector('.balloon--image img').src = params.placemark.balloonImage;
      popup_element.querySelector('.balloon--title').textContent = params.placemark.balloonHeader;
      popup_element.querySelector('.balloon--text').textContent = params.placemark.balloonContent;
      popup_element.querySelector('a').href = params.placemark.balloonLink;
    },
  }
);

PopupManager.register('popup_for_scheme_menu', {
    is_block_scroll: true,
    close_controls: true,
  },
  {
    on_close: (popup_element, params) => {
    }
  }
);

PopupManager.register('popup_for_hero_video', {
    is_block_scroll: true,
    close_controls: true,
  },
  {
    on_open: (popup_element, params) => {
      popup_element.querySelector('video').play()
    },
    on_close: (popup_element, params) => {
      popup_element.querySelector('video').pause()
    }
  }
);

PopupManager.register('popup_for_scheme',{
    is_block_scroll: true,
    close_controls: false,
  },
  {
    on_open: (popup_element, params) => {
      let title = popup_element.querySelector('.js-popup_scheme--title'),
        subtitle = popup_element.querySelector('.js-popup_scheme--subtitle'),
        image_wrapper = popup_element.querySelector('.js-popup_scheme--image'),
        link = popup_element.querySelector('.js-popup_scheme--link');

      let scheme_object = SCHEME_PLACEMARKS[params.id] ? SCHEME_PLACEMARKS[params.id] : SCHEME_PLACEMARKS[0]

      title.textContent = scheme_object.title;
      subtitle.textContent = scheme_object.subtitle;

      link.href = scheme_object.link;

      for(let i = 0; i < scheme_object.images.length; i++) {
        let image = document.createElement('img');
        image.src = scheme_object.images[i]
        image.classList.add('popup__content-image-slide');
        image_wrapper.append(image)
      }

      activatePopupSchemeSlider(popup_element.querySelector('.js-popup_scheme--image'))

    },
    on_close: (popup_element, params) => {
      popup_element.querySelector('.js-popup_scheme--title').textContent = "";
      popup_element.querySelector('.js-popup_scheme--subtitle').textContent = "";
      popup_element.querySelector('.js-popup_scheme--image').innerHTML = "";
      popup_element.querySelector('.js-popup_scheme--link').href = ""
    }
  }
);


PopupManager.register('popup_menu',{
    is_block_scroll: true,
    close_controls: false,
  },
  {
    on_close: (popup_element, params) => {
      let accordions = popup_element.querySelectorAll('.js-openAccordion')
      accordions.forEach( a => {
        setTimeout(()=>{
          a.classList.contains('active') ? a.classList.remove('active') : false;
        }, 140)

      })
    }
  }
);

PopupManager.register('popup_for_confirmation',
  {
    is_block_scroll: true,
    close_controls: true,
  },
  {
    on_open: (popup_element, params) => {
      let message_box = popup_element.querySelector('.popup__text');
      message_box.textContent = params.text;
    },
  }
);

PopupManager.register('popup_for_filters',
  {
    is_block_scroll: true,
    close_controls: true,
  },
  {
    on_open: (popup_element, params) => {
      let block_to_clone = params.block;
      let block_content = block_to_clone.cloneNode(true);
      popup_element.querySelector('.popup__content').append(block_content);
    },
    on_close: (popup_element, open_params) => {
      setTimeout(()=>{
        popup_element.querySelector('.block--sections').remove()
      }, 100)
    }
  }
);

PopupManager.register('popup_for_room_advantages',
  {
    is_block_scroll: true,
    close_controls: true,
  },
  {
    on_open: (popup_element, params) => {

      let block_to_clone = params.block;
      let block_content = block_to_clone.cloneNode(true);
      popup_element.querySelector('.popup__content').append(block_content);

    },
    on_close: (popup_element, params) => {
      setTimeout(()=>{
        popup_element.querySelector('.room_content__advantages_list').remove()
      }, 100)
    }

  }
);

// Add event Listeners to open Popups
// Элемент (data-openpopup=""), где data-openpopup = popup.name

let open_popup_buttons = document.querySelectorAll('[data-openpopup]');

function activatePopupButtons(buttons){
  buttons.forEach(b => {

    b.addEventListener('click', (e)=>{
      e.preventDefault();

      if ( b.dataset.openpopup === "popup_for_room_advantages" ){
        let block_to_clone = b.previousElementSibling;
        if ( block_to_clone ) {
          PopupManager.open(b.dataset.openpopup, {block: block_to_clone})
        }
      }

      else if ( b.dataset.openpopup === "popup_for_scheme" ) {

        PopupManager.open(b.dataset.openpopup, {
          id: b.dataset.placemark_id ? b.dataset.placemark_id : '0'
        })
      }

      else if ( b.dataset.openpopup === "popup_for_filters") {
        let block_to_clone = b.parentElement;
        if (block_to_clone) {
          PopupManager.open(b.dataset.openpopup, {block: block_to_clone})
        }
      }

      else {
        PopupManager.open(b.dataset.openpopup);
      }

    })

  });
}

activatePopupButtons(open_popup_buttons)


/* Open popup after page loaded*/
window.addEventListener('load', ()=>{
  // PopupManager.open('popup_for_cookie')
  // PopupManager.open('popup_for_form')
})

/* Open popup after page loaded 1 time per session */
window.addEventListener('load', ()=>{
  // if ( localStorage.getItem('popState') !== 'shown' ) {
  //   active_manager.openPopup('popup_for_welcoming')
  //   localStorage.setItem('popState','shown')
  // }
})
