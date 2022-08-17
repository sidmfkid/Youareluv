const loginForm = [
     document.getElementById('CustomerEmail'),
     document.getElementById('CustomerPassword'),
]

const submitButton = document.getElementById('LoginSubmit');
loginForm.forEach((el) => {
  el.addEventListener('change', handleLoginFormChange.bind(this))

})

function handleLoginFormChange(e) {

    checkRequiredFields();
    let targetNameError = (e.target.name.slice(9, -1) + '-error');
    let targetNameSuccess = (e.target.name.slice(9, -1) + '-success');
    const successEl = document.getElementById(targetNameSuccess);
    const errorEl = document.getElementById(targetNameError);

    if (e.target.value && !e.target.name.includes('password')) {
        successEl.classList.add('show')
        errorEl.classList.remove('show')
      } 
      if (!e.target.value && !e.target.name.includes('password')) {
        errorEl.classList.add('show')
        successEl.classList.remove('show')
      }
    
      if (e.target.value.length >= 8 && e.target.name.includes('password')) {
        successEl.classList.add('show')
        errorEl.classList.remove('show')
      }
      if (e.target.value.length < 8 && e.target.name.includes('password')) {
        successEl.classList.remove('show')
        errorEl.classList.add('show')
      }
    
      if (e.target.value.length === 0 && e.target.name.includes('password')) {
        console.log(e.target.value)
        successEl.classList.remove('show')
        errorEl.classList.remove('show')
      }
}


function checkRequiredFields() {
  if (loginForm[0].value && loginForm[1].value) {
    submitButton.removeAttribute('disabled')
  } else {
    submitButton.setAttribute('disabled', true)
  }
}