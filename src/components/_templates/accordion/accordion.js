// Accordion

let accordionItems = document.querySelectorAll(".js-openAccordion");

accordionItems.forEach(item => {

  item.addEventListener("click", function(e){

    accordionItems.forEach(it => {
      if(it !== e.currentTarget) {
        it.classList.remove('is_open')
      }
    });
    item.classList.toggle('is_open')
  })
})

