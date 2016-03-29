'use strict';
var express= require('express'),
    posts=require('./mock/posts.json');
	
var postlist=Object.keys(posts).map(function(v){
	return posts[v];
});
	

var app=express();
app.use('/static',express.static(__dirname+'/public'));
app.set('views',__dirname+'/templates');
app.set('view engine','jade');
console.log(__dirname);
app.get('/',function(request,response){
	
	var path=request.path;
	response.locals.path=path;
	response.render('index');
});

 app.get('/blog/:title?',function(request,response){
	var title=request.params.title;
	if(title===undefined){
	
		response.render('blog',{posts : postlist});
	}else{
		var post=posts[title] || {};
		response.render('post',{post : post});
		
	}
	
});

 app.listen(3000);