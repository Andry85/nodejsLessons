const express = require("express");
const expressHbs = require("express-handlebars");
const hbs = require("hbs");
const app = express();

hbs.registerHelper("getTime", function(){
     
    var myDate = new Date();
    var hour = myDate.getHours();
    var minute = myDate.getMinutes();
    var second = myDate.getSeconds();
    if (minute < 10) {
        minute = "0" + minute;
    }
    if (second < 10) {
        second = "0" + second;
    }
    return "Текущее время: " + hour + ":" + minute + ":" + second;
});
  
// устанавливаем настройки для файлов layout
app.engine("hbs", expressHbs(
    {
        layoutsDir: "views/layouts", 
        defaultLayout: "layout",
        extname: "hbs"
    }
))
app.set("view engine", "hbs");
hbs.registerPartials(__dirname + "/views/partials");
 
app.use("/contact", function(request, response){
      
    response.render("contact", {
        title: "Мои контакты",
        email: "gavgav@mycorp.com",
        phone: "+1234567890"
    });
}); 
 
app.use("/", function(request, response){
      
    response.render("home");
});
app.listen(3000);