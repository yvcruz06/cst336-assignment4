var express = require('express');
var app = express();
var knockknock = require('knock-knock-jokes');
var joke = knockknock();

app.use(express.static('public'));
app.set('view engine', 'ejs');

app.get('/', function(req, res){
    var url = "https://en.wikipedia.org/wiki/Image_file_formats";
    res.render('mainpage', {"source":url, "joke":joke});
});

app.get('/compound', function(req, res){
    var url = "https://en.wikipedia.org/wiki/Image_file_formats#Compound_formats";
    res.render('compound', {"source":url, "joke":joke});
});

app.get('/raster', function(req, res){
    var url = "https://en.wikipedia.org/wiki/Raster_graphics";
    res.render('raster', {"source":url, "joke":joke});
});

app.get('/vector', function(req, res){
     var url = "https://modassicmarketing.com/understanding-image-file-types";
    res.render('vector', {"source":url, "joke":joke});
});


app.get('*', function(req, res){
   res.render('error'); 
});

//starting server
app.listen(process.env.PORT, process.env.IP, function(){
    console.log("Express server is running...");
});