var http = require('http'),
express = require('express'),
jade = require('jade'),
fs = require('fs'),
//routes = require('./routes/router.js'),
app = express(),
l = console.log,
server = http.createServer(app);

app.configure(function(){
	var oneYear = 31556926;
	app.set('port',4500||process.env.PORT)
	app.use(express.cookieParser());
	app.use(express.bodyParser())
	app.use(express.methodOverride())
	app.use(express.static(__dirname+'/public'),{maxAge:oneYear})
	app.use(express.static(__dirname+'/views'))
	app.use(express.session({secret: 'mi secreto'}));
	
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
	app.get('*',function(req,res){
		//res.sendfile(__dirname+"/views/page_404_error1.html");
		res.redirect('/');
	});
server.listen(app.get('port'),function(){
	l("Server runing in port: "+app.get('port'));
})
