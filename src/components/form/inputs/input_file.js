/* Input type file */

function activateInputFiles(inputs){

  inputs.forEach(input => {

    let file_text = input.parentElement.querySelector(".js-changeDescriptionText")
    let changeFileButton = input.parentElement.querySelector(".js-clearFile")
    let text = file_text.textContent

    input.addEventListener("change", function(){
      file_text.innerHTML = "Загружен файл <strong>" + input.files.item(0).name +"</strong>"
      input.parentElement.classList.add("loaded");
    })

    changeFileButton.addEventListener("click", function(e){
      e.stopPropagation()
      e.preventDefault()

      input.value = ""
      input.parentElement.classList.remove("loaded")
      file_text.innerHTML = text
    })

  })

}

let inputs_file = document.querySelectorAll(".js-input_file")

activateInputFiles(inputs_file)
