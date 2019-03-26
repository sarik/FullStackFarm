require('./checkhhh');
const express = require('express');
const app = express();

let y;
console.log(process.env);
if (process.env.NODE_ENV === 'production') {
 y = require('./expressexport');
}
else{
     y = require('./expressexport');  
}
y.b(app);

app.listen(5000);

const ll = require('./gggh');
