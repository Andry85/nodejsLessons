// получаем модуль Express
const express = require("express");
// создаем приложение
const app = express();
 
// устанавливаем обработчик для маршрута "/"
app.get("/", function(request, response){
 
    response.end("Hello from Expre!");
});
// начинаем прослушивание подключений на 3000 порту
app.listen(3000);

function displaySync(callback){
    callback();
}
 
console.log("Начало работы программы");
 
setTimeout(function(){
         
        console.log("timeout 500");
}, 500);
 
setTimeout(function(){
         
        console.log("timeout 100");
}, 100);
 
displaySync(function(){console.log("without timeout")});
console.log("Завершение работы программы");