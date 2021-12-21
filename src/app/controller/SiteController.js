const ProductsModel = require('../model/products');
const Account = require('../model/account');

class SiteController {

   home(req, res, next) {
      ProductsModel.find({})
      .then(products => res.render('index',{page: 'home',products}))
      .catch(next)
      
   }

   page(req, res) {
      res.render('index', {page: req.params.p});
   }

   intro(req, res) {
      res.render('pages/intro');
   }

   login(req, res) {
      res.render('dang-nhap');
   }

   signin(req, res, next){
      Account.findOne({
         username: req.body.username,
         password: req.body.password
      })
      .then((data) => {
         if(data != null && data.username != 'admin') {
            res.cookie('account', data._id, {maxAge: 60 * 60 * 24});
            res.json({message: 'Ton tai', data})
            // console.log(data)
         }
         else if(data != null && data.username == 'admin') {
            res.cookie('account', data._id, {maxAge: 60 * 60 * 24});
            res.cookie('admin', data._id, {maxAge: 60 * 60 * 24});
            res.json({message: 'Ton tai', data})
            // console.log(data)
         }
         else {
            // res.redirect('/dang-ki')
            res.json({message: 'Loi'})
         }

      })
   }

   cookies(req, res, next){
      if(req.cookies.account !=null){
         
         Account.findOne({
            _id: req.cookies.account
         })
         .then((acc) => {
            res.json(acc)
         })
      }
      else{
         res.send('false');
      }
   }


   logout(req, res, next){
      if(req.cookies.admin !=null){
         res.clearCookie('account')
         res.clearCookie('admin')
         res.redirect('/dang-nhap')
      }
      else{
         res.clearCookie('account')
         res.redirect('/dang-nhap')
      }
   }

   register(req,res,next){
      res.render('dang-ki');
      
   }

   createNewAcc(req, res, next){
      var username = req.body.username;
      var password = req.body.password;
      var email = req.body.email;


      Account.findOne({
         username: username,
         email: email
      })
      .then(user =>{
         if(user){
            res.status(208).json({message: 'Ton tai',user})
         }
         else{
            Account.create({
               username: username,
               password: password,
               email: email
            })
            .then(data =>{
               res.json({message: 'thanh cong', data})
            })
         }
      })
      .catch(next)

   }
}

module.exports = new SiteController;
