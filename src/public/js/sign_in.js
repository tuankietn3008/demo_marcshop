
var username = document.querySelector('#username_dn')
var password = document.querySelector('#password_dn')
var form_dn = document.querySelector('form')
var checkBox_dn = document.getElementById('checkHienthi_dn')
var btn_Dangnhap = document.getElementById('submit_login')

checkBox_dn.onclick = function () {
   if (checkBox_dn.checked) {
      password.type = 'text'
   }
   else {
      password.type = 'password'
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




btn_Dangnhap.addEventListener('click', function (e) {
   e.preventDefault()

   let isCheckEmptyError = checkEmptyError([username, password])
   let isUsernameLengthError = checkLengthError(username, 3, 10)
   let isPasswordError = checkLengthError(password, 5, 16)

   if (isCheckEmptyError || isUsernameLengthError || isPasswordError) {

   }
   else {

      async function postDangnhap(url = '', data = {}) {
         const response = await fetch(url, {
            method: 'POST',
            headers: {
               'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
         });

         return response.json();
      }



      postDangnhap('/dang-nhap', { username: username.value, password: password.value })
         .then(function (response) {
            if (response.message =='Ton tai') {
               console.log(response)
               alert(`Đăng nhập thành công! Xin chào ${response.data.username}`)
               if (response.data.username == 'admin') {
                  window.location = '/admin'
               }
               else if(response.data.username != 'admin') {
                  window.location = '/'
               }
            }
            else if(response.message == 'Loi') {
               alert('Tài khoản và mật khẩu không đúng hoặc không tồn tại!!!')
            }

         })
   }
})

