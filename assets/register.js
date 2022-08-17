const registerForm = [
    document.getElementById('RegisterForm-email'),
     document.getElementById('RegisterForm-FirstName'),
     document.getElementById('RegisterForm-LastName'),
     document.getElementById('RegisterForm-password'),
]

const registerButton = document.getElementById('submitRegister');
const errorMessage = document.querySelector('.error-message')
const successMessage = document.querySelector('.success-message')
let elNames = [];
registerForm.forEach((el) => {
  el.addEventListener('change', handleRegisterFormChange.bind(this))
elNames.push(el.name.slice(9, -1))
})

console.log(elNames)
function handleRegisterFormChange(e) {
  checkRequiredFields();
  e.preventDefault();
  let targetNameError = (e.target.name.slice(9, -1) + '-error');
  let targetNameSuccess = (e.target.name.slice(9, -1) + '-success');
  const successEl = document.getElementById(targetNameSuccess);
  const errorEl = document.getElementById(targetNameError);

  // if (e.target.name.includes('password')) {
  //   e.target.value = ''
  // }


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


  // console.log(e.target.value, e.target.name)

}

function checkRequiredFields() {
  if (registerForm[0].value && registerForm[1].value && registerForm[2].value && registerForm[3].value.length >= 8) {
    registerButton.removeAttribute('disabled')
  } else {
    registerButton.setAttribute('disabled', true)
  }
}