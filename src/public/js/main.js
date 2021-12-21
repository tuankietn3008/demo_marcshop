// const { create, $where } = require("../../app/model/products");

// Modal
var modal = document.getElementById("myModal");
var btn = document.getElementById("cart");
var close = document.getElementsByClassName("close")[0];
var close_footer = document.getElementsByClassName("close-footer")[0];
var order = document.getElementsByClassName("order")[0];
btn.onclick = function () {
  modal.style.display = "block";
}
close.onclick = function () {
  modal.style.display = "none";
}
close_footer.onclick = function () {
  modal.style.display = "none";
}
order.onclick = function () {
  alert("Cảm ơn bạn đã thanh toán đơn hàng")
}
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

// Giỏ Hàng Of thanhlongcart

// xóa cart
var remove_cart = document.getElementsByClassName("btn-danger");
for (var i = 0; i < remove_cart.length; i++) {
  var button = remove_cart[i]
  button.addEventListener("click", function () {
    var button_remove = event.target
    button_remove.parentElement.parentElement.remove()
    updatecart()
  })
}
// thay đổi số lượng
var quantity_input = document.getElementsByClassName("cart-quantity-input");
for (var i = 0; i < quantity_input.length; i++) {
  var input = quantity_input[i];
  input.addEventListener("change", function (event) {
    var input = event.target
    if (isNaN(input.value) || input.value <= 0) {
      input.value = 1;
    }
    updatecart()
  })
}

// Thêm vào giỏ
var add_cart = document.getElementsByClassName("btn-cart");
for (var i = 0; i < add_cart.length; i++) {
  var add = add_cart[i];
  add.addEventListener("click", function (event) {

    var button = event.target;
    var product = button.parentElement.parentElement;
    var img = product.parentElement.getElementsByClassName("img-prd")[0].src
    var title = product.getElementsByClassName("content-product-h3")[0].innerText
    var price = product.getElementsByClassName("price")[0].innerText
    addItemToCart(title, price, img)
    // Khi thêm sản phẩm vào giỏ hàng thì sẽ hiển thị modal
    modal.style.display = "block";

    updatecart()
  })
}

function addItemToCart(title, price, img) {
  var cartRow = document.createElement('div')
  cartRow.classList.add('cart-row')
  var cartItems = document.getElementsByClassName('cart-items')[0]
  var cart_title = cartItems.getElementsByClassName('cart-item-title')
  for (var i = 0; i < cart_title.length; i++) {
    if (cart_title[i].innerText == title) {
      alert('Sản Phẩm Đã Có Trong Giỏ Hàng')
      return
    }
  }

  var cartRowContents = `
  <div class="cart-item cart-column">
      <img class="cart-item-image" src="${img}" width="100" height="100">
      <span class="cart-item-title">${title}</span>
  </div>
  <span class="cart-price cart-column">${price}</span>
  <div class="cart-quantity cart-column">
      <input class="cart-quantity-input" type="number" value="1">
      <button class="btn btn-danger" type="button">Xóa</button>
  </div>`
  cartRow.innerHTML = cartRowContents
  cartItems.append(cartRow)
  cartRow.getElementsByClassName('btn-danger')[0].addEventListener('click', function () {
    var button_remove = event.target
    button_remove.parentElement.parentElement.remove()
    updatecart()
  })
  cartRow.getElementsByClassName('cart-quantity-input')[0].addEventListener('change', function (event) {
    var input = event.target
    if (isNaN(input.value) || input.value <= 0) {
      input.value = 1;
    }
    updatecart()
  })
}
// update cart 
function updatecart() {
  var cart_item = document.getElementsByClassName("cart-items")[0];
  var cart_rows = cart_item.getElementsByClassName("cart-row");
  var total = 0;
  for (var i = 0; i < cart_rows.length; i++) {
    var cart_row = cart_rows[i]
    var price_item = cart_row.getElementsByClassName("cart-price ")[0]
    var quantity_item = cart_row.getElementsByClassName("cart-quantity-input")[0]
    var price = parseFloat(price_item.innerText)
    var quantity = quantity_item.value
    total = total + (price * quantity)
  }
  document.getElementsByClassName("cart-total-price")[0].innerText = total + '$'
}

// menu mobile
var btn_menu = document.getElementById("btnmenu");
btn_menu.addEventListener("click", function () {
  var item_menu = document.getElementById("menutop");
  if (item_menu.style.display === "block") {
    item_menu.style.display = "none";
  } else {
    item_menu.style.display = "block";
  }
})
// test
//------------------------------SLIDER--------------------------
const imgItem = document.querySelectorAll(".aspect-ratio-169 img")
const imgItemContainer = document.querySelector(".aspect-ratio-169")
const dotItem = document.querySelectorAll(".dot")
let index = 0;
let imgLeng = imgItem.length
imgItem.forEach(function (image, index) {
  image.style.left = index * 100 + "%"
  dotItem[index].addEventListener("click", function () {
    slideRun(index)
  })
})
function slider() {
  index++;
  if (index >= imgLeng) { index = 0 }

  slideRun(index)
}
function slideRun(index) {
  imgItemContainer.style.left = "-" + index * 100 + "%"
  const dotActive = document.querySelector(".active")
  dotActive.classList.remove("active")
  dotItem[index].classList.add("active");
}

setInterval(slider, 5000)




const toP = document.querySelector(".top")
window.addEventListener("scroll", function () {
  const X = this.pageYOffset;
  if (X > 1) { toP.classList.add("active") }
  else {
    toP.classList.remove("active")
  }
})
//------------------------------------Menu-SLIDEBAR-CARTEGORY-------------------
const itemsliderbar = document.querySelectorAll(".cartegory-left-li")
itemsliderbar.forEach(function (menu, index) {
  menu.addEventListener("click", function () {
    menu.classList.toggle("block")
  })
})
//--------------------------------------PRODUCT----------------------
const bigImg = document.querySelector(".product-content-left-big-img img")
const smalImg = document.querySelectorAll(".product-content-left-small-img img")
smalImg.forEach(function (imgItem, X) {
  imgItem.addEventListener("click", function () {
    bigImg.src = imgItem.src
  })
})


const baoquan = document.querySelector(".baoquan")
const chitiet = document.querySelector(".chitiet")
if (baoquan) {
  baoquan.addEventListener("click", function () {
    document.querySelector(".product-content-right-bottom-content-chitiet").style.display = "none"
    document.querySelector(".product-content-right-bottom-content-baoquan").style.display = "block"
  })
}
if (chitiet) {
  chitiet.addEventListener("click", function () {
    document.querySelector(".product-content-right-bottom-content-chitiet").style.display = "block"
    document.querySelector(".product-content-right-bottom-content-baoquan").style.display = "none"
  })
}
const butTon = document.querySelector(".product-content-right-bottom-top")
if (butTon) {
  butTon.addEventListener("click", function () {
    document.querySelector(".product-content-right-bottom-content-big").classList.toggle("activeB")
  })
}

function ImageFlieAsURL(){
  var fileSelected = document.getElementById('image').files;
  var fileReader = new FileReader();
  fileReader.onload = function(fileLoaderEvent){
    var srcData = fileLoaderEvent.target.result;
    var newImage = document.createElement('img');
    newImage.src = srcData;
    $('#showbf').append(newImage);
  }
  fileReader.readAsDataURL(fileSelected);
}

function clickLuu() {
  const data = {
    ten_sp: document.getElementById('ten_sp').value,
    mota: document.getElementById('mota').value,
    size: document.getElementById('size').value,
    loai: document.getElementById('loai').value,
    gia: document.getElementById('gia').value,
    image: document.getElementById('image').value
  }
  fetch('/admin', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  }).then(res =>{
    return res.json()
  }).then(data =>{
    console.log(data)
  })

}
