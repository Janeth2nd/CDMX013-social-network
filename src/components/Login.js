import { getAuth } from 'https://www.gstatic.com/firebasejs/9.9.4/firebase-auth.js';
import { onNavigate } from '../main.js';
import { app } from '../lib/config.js';
import { googleAuth } from './google.js';
import { loginEmailPassword } from '../lib/auth.js';

export const auth = getAuth(app);

export const Login = () => {
  const div = document.createElement('div');
  const image = document.createElement('img');
  image.setAttribute('id', 'logo');
  const blueLine = document.createElement('img');
  blueLine.setAttribute('id', 'blueLine');
  const buttonLogin = document.createElement('button');
  buttonLogin.setAttribute('id', 'buttonLogin');
  const buttonGoogle = document.createElement('button');
  buttonGoogle.setAttribute('id', 'buttonGoogle');
  const giM = document.createElement('img');
  giM.setAttribute('id', 'giM');
  const buttonSignup = document.createElement('button');
  buttonSignup.setAttribute('id', 'buttonSignupLogin');
  const inputEmail = document.createElement('input');
  inputEmail.setAttribute('id', 'inputEmailLogin');
  inputEmail.setAttribute('placeholder', 'Email');
  const pinEmail = document.createElement('img');
  pinEmail.setAttribute('id', 'pinEmail');
  const inputPass = document.createElement('input');
  inputPass.setAttribute('id', 'passWordLog');
  inputPass.setAttribute('placeholder', 'Password');
  inputPass.setAttribute('type', 'password');
  const pinPassword = document.createElement('img');
  pinPassword.setAttribute('id', 'pinPassword');
  const questionLog = document.createElement('p');
  questionLog.setAttribute('id', 'questionLog');
  image.src = 'img/logo.png';
  blueLine.src = 'img/blueline2.png';
  pinEmail.src = 'img/mail.png';
  pinPassword.src = 'img/padlock1.png';
  buttonLogin.textContent = 'Log in';
  buttonGoogle.textContent = 'Sign in with Google';
  giM.src = 'img/google.png';
  buttonSignup.textContent = 'Sign Up';
  questionLog.textContent = 'Don´t have an account?';
  buttonLogin.addEventListener('click', () => {
    onNavigate('/home');
    loginEmailPassword(inputEmail.value, inputPass.value).then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      // ...
      console.log('ya entraste');
    })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log('no registro');
      // ..
      });
  });

  buttonSignup.addEventListener('click', () => {
    onNavigate('/register');
  });

  buttonGoogle.addEventListener('click', googleAuth);
  // buttonGoogle.addEventListener('click', () => {
  // onNavigate('/home');
  // });

  div.append(image, blueLine, inputEmail, pinEmail, inputPass, pinPassword, buttonLogin, giM, buttonGoogle, questionLog, buttonSignup);
  return div;
};
