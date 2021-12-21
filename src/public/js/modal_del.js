var proId;
var exampleModal = document.getElementById('delete_pro');
var deleteForm = document.forms['delete_pro_frm'];
var btnDel_pro = document.getElementById('btn_del_pro');

exampleModal.addEventListener('show.bs.modal', function (e) {
   var button = e.relatedTarget
   proId = button.getAttribute('data-bs-id');
})

btnDel_pro.onclick = function () {
   deleteForm.action = '/admin/xoa/' + proId;
   deleteForm.submit();
}
