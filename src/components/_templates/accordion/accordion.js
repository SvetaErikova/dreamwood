// Accordion
let accordion = document.querySelectorAll('.block-accordion')

accordion.forEach(item => {
  if(accordion){
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
    accordionItems[0].click()


  }
})

