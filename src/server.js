const express = require('express');
const morgan = require('morgan');
const path = require('path');
const app = express();
const port = 8080;
const route = require('./router');
const db = require('./config/db');

const cookieParser = require('cookie-parser');



//template engine (giao dien)
app.set('view engine','ejs');
app.set('views',path.join(__dirname, 'resources','views'));

// connect to database
db.connect();

app.use(morgan(':method :url :status - :response-time ms'))
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use(cookieParser());
//public file
app.use(express.static(path.join(__dirname,'public')));

//route
route(app);

app.listen(port,()=>{
   console.log(`App listening at http://localhost:${port}`)
});
