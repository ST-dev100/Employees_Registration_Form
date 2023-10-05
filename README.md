# <u>Employees Registration Web Application</u>
   ## Basic Web Technologies
* [Embeded Javascript Template](#EJS)
* [Express js ](#Express_js)
* [Mongo Database](#Mongo)
   - [mongoose](#mongoose)


<br>
<br>


## EJS(Embeded Javascript Templete)
 *EJS is a simple templating language that lets you generate HTML markup with plain JavaScript. No religiousness about how to organize things. No reinvention of iteration and control-flow. It's just plain JavaScript.* 
   
   <div style="color:green;font-weight:900;font-size:30px"> INSTALLATION</div>
 
 ```
 npm install ejs
```
<span style="color:green;font-weight:900;font-size:30px">Set the View Engine in Express</span>
```
 var express = require('express');
var app = express();

// set the view engine to ejs
app.set('view engine', 'ejs');
```
## Express_js
 *Express.js is a small framework that works on top of Node.js web server functionality to simplify its APIs and add helpful new features. It makes it easier to organize your application’s functionality with middleware and routing. It adds helpful utilities to Node.js HTTP objects and facilitates the rendering of dynamic HTTP objects.*
 ```
npm install express
```
```
const express = require('express')
const app = express()
```
## Mongodb
*MongoDB is a NoSQL database management application. NoSQL database systems offer an alternative to traditional relational databases using SQL (Structured Query Language). Data is stored in tables, rows, and columns in a relational database, with relationships between entities.*
  ### mongoose
  ```
   npm install mongoose
```
Connect to the MongoDB Database
```
mongoose.connect('mongodb://127.0.0.1:27017/myapp');
```
