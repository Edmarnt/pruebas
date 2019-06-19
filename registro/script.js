
const signinForm = document.getElementById('signin-form');
const welcomeSection = document.querySelector('.welcome');
const signinButton = document.getElementById('signin-button');

const user = {};

function saveForm() {
  //Validamos que la información sea correcta (passwords coincidan)
  if(signinForm.password1.value === signinForm.password2.value) {
    //Guardamos los valores de los inputs
    user.email = signinForm.email.value;
    user.password = signinForm.password1.value;
    user.gender = signinForm.gender.value;
    //Limpiamos los valores de los inputs
    signinForm.email.value = '';
    signinForm.password1.value = '';
    signinForm.password2.value = '';
    signinForm.gender.value = '';
    //Ejecuto la función de imprimir
    printInfo();
  } else {
    alert('Las contraseñas no coinciden');
    signinForm.password1.value = '';
    signinForm.password2.value = '';
  }
  console.log(user);
}

function printInfo() {
  const userMail = document.querySelector('.user-mail');
  const userGender = document.querySelector('.user-gender');
  userMail.innerText = user.email;
  userGender.innerText = user.gender;

  signinForm.style.display = 'none';
  signinButton.style.display = 'none';
  welcomeSection.style.display = 'block';
}