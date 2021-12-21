

$.ajax({
   type: 'POST',
   url: '/cookies',
   success: (data) => {
      console.log(data)
      var account = ``;
      if (data != 'false' && data.username == 'admin') {
         account = `
            <div>
               <div class="admin_number">` + data.username + `</div>
               <div class="admin_cardName"></div>
            </div>
            <div class="iconCardBx">
               <i class="fas fa-user-shield"></i>
            </div>`;
         // console.log(account)
         $('#user').html(account);
      }
      else if (data != 'false' && data.username != 'admin'){
         account = `<a href="#"><i class="fas fa-user"></i> `+ data.username + `</a>
         <ul class="sub_menu">
             <li><a href="/dang-nhap">Đăng nhập</a></li>
             <li><a href="/dang-xuat">Đăng xuất</a></li>
         </ul>`;
         $('#user').html(account);
      }
      else{

      }

   }
})

