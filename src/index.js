const path = require('path');
const express = require('express');
const morgan = require('morgan');
const handlebars = require("express-handlebars");
const app = express();
const port = 3000;

//gọi đến file index trong thu muc routes
const route = require('./routes');
app.use(express.static(path.join(__dirname,'public')));

//post data
app.use(express.urlencoded({
  extended:true
}));
//post dang ajax...
app.use(express.json());

//HTTP local
app.use(morgan("combined"));


//Tamplate engine

app.engine('hbs',handlebars({
  extname: '.hbs'
}));

app.set('view engine','hbs');
app.set('views',path.join(__dirname,'resources/views'));

route(app);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
})


