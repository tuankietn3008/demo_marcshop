const mongoose = require('mongoose');
const schema = mongoose.Schema;

const Product  = new schema(
   {
      ten_sp: String,
      mota: String,
      gia: Number,
      image: String,
      loai: String,
      size: String
   },
   {
      collection: 'products'
   });

   module.exports = mongoose.model('Product',Product);
