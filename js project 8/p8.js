// var a = 12;
// console.log("hello Avi!!");

// var a = 12;
// module.exports = a;

const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.send('Hii Avi!!')
})

app.listen(3000)