

const os = require("os");
// получим имя текущего пользователя
let userName = os.userInfo().username;
console.log("Platform: " + os.platform());
console.log("Architecture: " + os.arch());
console.log("OS release: " + os.release());
 
console.log(userName);



const http = require("http");
http.createServer(function(request,response){
     
    response.end(greeting.getMessage(userName));
     
}).listen(3000, "127.0.0.1",function(){
    console.log("Сервер начал прослушивание запросов на порту 3000");
});

const User = require("./user.js");
 
let eugene = new User("Eugene", 32);
eugene.sayHi();

const welcome = require("./welcome");

welcome.getMorningMessage();
welcome.getEveningMessage();


const greeting = require("./greeting");
 
global.name = "Eugene";
 
global.console.log(date);
console.log(greeting.getMessage());

let nodePath = process.argv[0];
let appPath = process.argv[1];
let name = process.argv[2];
let age = process.argv[3];
 
console.log("nodePath: " + nodePath);
console.log("appPath: " + appPath);
console.log();
console.log("name: " + name);
console.log("age: " + age);