/*
Rest Api Webservice 
Author :-Samiyal Massy
s
*/

var crypto=require('crypto');
var uuid=require('uuid');
var express=require('express');
var mysql=require('mysql');
var bodyParser=require('body-parser');

var con=mysql.createConnection(
    {
        host:'localhost',
        user:'root',
        password:'',
        database:'demonodejs',
    }
);


var app=express();
app.use(bodyParser.json);
app.use(bodyParser.urlencoded({extended:true}));


app.listen(3000,()=>
{


    console.log('Samiyal Node Js Helloo World RestApi.');
})
