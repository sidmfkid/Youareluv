const activateForm = [
    document.getElementById('password_confirmation'),
    document.getElementById('password'),
]

const submitButton = document.getElementById('ActivateSubmit');
activateForm.forEach((el) => {
 el.addEventListener('change', handleActivateFormChange.bind(this))

})

function handleActivateFormChange(e) {

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
 if (activateForm[0].value === activateForm[1].value && activateForm[0].value.length >= 8 && activateForm[1].value.length >= 8) {
   submitButton.removeAttribute('disabled')
 } else {
   submitButton.setAttribute('disabled', true)
 }
}