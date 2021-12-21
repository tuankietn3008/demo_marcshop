
var username = document.querySelector('#username')
var email = document.querySelector('#email')
var password = document.querySelector('#password')
var confirmPassword = document.querySelector('#confirm_password')
var form = document.querySelector('form')
var checkBox = document.getElementById('checkHienthi')
var btnDangki = document.getElementById('btn_DK')


checkBox.onclick = function () {
   if (checkBox.checked) {
      password.type = 'text'
      confirmPassword.type = 'text'
   }
   else {
      password.type = 'password'
      confirmPassword.type = 'password'
   }
}


function showErr(input, message) {
   let parent = input.parentElement;
   let small = parent.querySelector('small')
   parent.classList.add('error')
   small.innerText = message
}

function showSucces(input) {
   let parent = input.parentElement;
   let small = parent.querySelector('small')
   parent.classList.remove('error')
   small.innerText = ''
}

function checkEmptyError(listInput) {
   let isEmptyError = false;
   listInput.forEach(input => {
      input.value = input.value.trim()

      if (!input.value) {
         isEmptyError = true;
         showErr(input, 'Không được để trống!!!')
      }
      else {
         showSucces(input)
      }
   });

   return isEmptyError
}

function checkEmailError(input) {
   const regexEmail =
      /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
   input.value = input.value.trim()

   let isEmailError = !regexEmail.test(input.value)
   if (regexEmail.test(input.value)) {
      showSucces(input)
   }
   else {
      showErr(input, 'Email invalid')
   }

   return isEmailError
}

function checkLengthError(input, min, max) {
   input.value = input.value.trim()

   if (input.value.length < min) {
      showErr(input, `Phai co it nhat ${min} ky tu`)
      return true
   }

   if (input.value.length > max) {
      showErr(input, `Khong duoc vuot qua ${max} ky tu`)
      return true
   }

   return false
}

function checkAlikeError(passwordInput, cfpasswordInput) {
   if (passwordInput.value !== cfpasswordInput.value) {
      showErr(cfpasswordInput, 'Mat khau khong trung khop!')
      return true
   }

   return false
}

btnDangki.addEventListener('click', function (e) {
   e.preventDefault()

   let isEmptyError = checkEmptyError([username, password, confirmPassword])
   let isEmailError = checkEmailError(email)
   let isUsernameError = checkLengthError(username, 3, 10)
   let isPasswordError = checkLengthError(password, 8, 16)
   let isCfPasswordError = checkLengthError(confirmPassword, 8, 16)
   let isAlikeError = checkAlikeError(password, confirmPassword)



   if (isEmptyError || isEmailError || isUsernameError || isPasswordError || isCfPasswordError || isAlikeError) {

   }
   else {

      async function postData(url = '', data = {}) {
         const response = await fetch(url, {
            method: 'POST',
            headers: {
               'Content-Type': 'application/json'

            },
            body: JSON.stringify(data)
         });
         return response.json();
      }

      postData('/dang-ki', { username: username.value, email: email.value, password: password.value })
         .then(function(data) {
            if(data.message === 'Ton tai'){
               alert('Tài khoản đã tồn tại!!!')
            }
            else if(data.message ==='thanh cong'){
               alert('Tạo tài khoản thành công!')
               window.location = '/dang-nhap'
            }
            else{
               alert('Lỗi Server!!!')
            }
            console.log(data.message)
         });
         

   }
})
