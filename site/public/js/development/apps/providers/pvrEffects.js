/*
*/
function Effects () {
  /*atributos que no son metodos*/
}
Effects.prototype.startFullpageEffects = function(){
   $('#fullpage').fullpage({
    anchors: ['1','2','3'],
    scrollingSpeed: 1000,
    autoScrolling:true,
    resize:false,
    navigation:false
   });
}

Effects.prototype.startTemplateEffects = function(){
    App.init();
    App.initSliders();
    App.initBxSlider();
    Index.initLayerSlider();
}

myApp.provider('efx', [function () {
  this.oEfx = new Effects();  
  console.log(this.oEfx)
  var self = this
  this.$get = [function() {
    return self.oEfx;
  }];
}])