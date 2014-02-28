module.exports = function(app,jade,fs,path){
	app.get('/',function(req,res,next){
			res.sendfile(path+'/views/index.html');
	})
}