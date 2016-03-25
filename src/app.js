'use strict';
var express= require('express'),
    posts=require('./mock/posts.json');
var app=express();

app.set('views',__dirname+'/templates');
app.set('view engine','jade');
console.log(__dirname);
app.get('/',function(request,response){
	
	response.render('index');
});

 app.get('/blog/:title?',function(request,response){
	var title=request.params.title;
	if(title===undefined){
		response.status(503);
		response.send("page is under contruction");
	}else{
		var post=posts[title] || {};
		response.render('post',{post : post});
		
	}
	
});

 app.listen(3000);