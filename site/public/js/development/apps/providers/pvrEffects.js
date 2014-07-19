/*
function Effects () {}
Effects.prototype.startFullpageEffects = function(){
  $(function(){
   $('#fullpage').fullpage({
    anchors: ['1','2','3'],
    scrollingSpeed: 1000,
    autoScrolling:true,
    resize:false,
    navigation:false
   });
  })
}
Effects.prototype.startTemplateEffects = function(){
  $(function(){
    App.init();
    App.initSliders();
    App.initBxSlider();
    Index.initLayerSlider();
  })
}
*/

myApp.provider('efx', [function () {
  
    this.startFullpageEffects = function(){
      $('#fullpage').fullpage({
        anchors: ['1','2','3'],
        scrollingSpeed: 1000,
        autoScrolling:true,
        resize:false,
        navigation:false
      });
    };
    this.startTemplateEffects = function(){
     App.init();
     App.initSliders();
     App.initBxSlider();
     Index.initLayerSlider();
    };

    var self = this
    this.$get = [function() {

      return {
          startFullpageEffects:self.startFullpageEffects,
          startTemplateEffects:self.startTemplateEffects
      };

    }];

}])