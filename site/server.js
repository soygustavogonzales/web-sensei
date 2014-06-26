var http = require('http'),
express = require('express'),
jade = require('jade'),
fs = require('fs'),
//routes = require('./routes/router.js'),
app = express(),
l = console.log,
server = http.createServer(app);

app.configure(function(){
	app.set('port',4500||process.env.PORT)
	app.use(express.static(__dirname+'/public'))
	app.use(express.static(__dirname+'/views'))
	//app.use('/views',__dirname+'/views')
	/*
	app.use(function(req,res){
 	res.send(404,"<h1>OOPS!!page not found</h1>")
 });
	app.use(function(err,req,res,next){
 	res.status(err.status||404)
		res.send(err.message)
 });
	*/
})

//routes(app,jade,fs,__dirname);

	app.get('/',function(req,res){
			//res.sendfile(__dirname+'/views/index_.html');
			//console.log(__dirname)
			res.render('index.jade',{app:"myApp"})
	})
	app.get('/index2',function(req,res){
			res.sendfile(__dirname+'/views/index_.html');
			//console.log(__dirname)
			//res.render('index_.jade')
	})
server.listen(app.get('port'),function(){
	l("Server runing in port: "+app.get('port'));
})
