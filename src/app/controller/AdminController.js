const Product = require('../model/products');



class AdminController {

   Admin(req,res,next) {
      Product.find({})
      .then(products => res.render('./admin/index',{page: 'home', products}))
      .catch(next)
   }

   product(req,res,next){
      Product.find({})
      .then(products => res.render('./admin/index', {page: 'product', products}))
      .catch(next)
   }
   
   Add_pro(req, res, next) {
      Product.create(req.body, (err) => {
         if(err) throw (err)
         res.redirect('/admin/san-pham');
      });
        
   }
   edit_pro(req, res, next) {
      Product.findById({
         _id: req.params.id
      })
      .then(products => res.render('./admin/index', {page:'edit_pro', products}))
      .catch(next)
   }

   update_pro(req, res) {
      Product.findByIdAndUpdate(
         {_id: req.params.id}
         ,{
            ten_sp: req.body.ten_sp,
            gia: req.body.gia,
            loai: req.body.loai,
            image: req.body.image
         },(err)=>{
            if(err) throw(err)
            res.redirect('/admin/san-pham')
         })
   }

   delete(req,res){
      Product.findByIdAndDelete({
         _id: req.params.id
      },(err)=>{
         if(err) throw(err)
         res.redirect('/admin/san-pham')
      })
   }

   

}

module.exports = new AdminController;
