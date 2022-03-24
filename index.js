const formElement = document.querySelector('#form')
const buttonElement = document.querySelector('#button')
formElement.addEventListener('submit', (event) => {
    console.log('submit')
    if (!formElement.checkValidity()) {
      event.preventDefault()
      formElement.classList.add('enable-validation')
    }
  })