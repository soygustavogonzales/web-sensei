/*
*/
myApp.provider('efx', [function () {
  this.oEfx = new Effects();  
  console.log(this.oEfx)
  var self = this
  this.$get = [function() {
    return self.oEfx;
  }];
}])

function Effects () {
  /*atributos - no metodos*/
}

Effects.prototype.startFullpageEffects = function(){
    //console.log()
   $('#fullpage').fullpage({
    anchors: ['1','2','3'],
    scrollingSpeed: 800,
    autoScrolling:false,
    resize:false,
    navigation:false,
    keyboardScrolling:false,//para que no se pueda hacer scroll con el teclado

    /*
      afterSlideLoad:function( anchorLink, index, slideAnchor, slideIndex){
              //first slide of the second section
      },
    */
    onLeave: function(index, direction){
      console.log("estamos en : %d venimos de %a ",direction,index)
      if(direction==2){
        $('#cajasVideos').mixItUp('filter','.cat-1')
        $('#cajasTeachers').mixItUp('filter','.cat-1')
      }
      /*
      else{
        $('#cajasVideos').mixItUp('filter','')
        $('#cajasTeachers').mixItUp('filter','') 
      }
      */
    },
      
    onSlideLeave: function(link,index,slideIndex,direction){
      switch(true){
        case (index==2 && slideIndex == 0):
          console.log("estamos en videos")
          $('#cajasVideos').mixItUp('filter','.cat-1')
          //$('#cajasTeachers').mixItUp('filter','')
        break
        case (index==2 && slideIndex == 1):
          //$('#cajasVideos').mixItUp('filter','')
          $('#cajasTeachers').mixItUp('filter','.cat-1')
          console.log("estamos en profesores")
        break
      }
    }
   });
}

Effects.prototype.startMixiupVideos = function(){

  $('#cajasVideos').mixItUp({
    animation:{
      duration:1000
    }
  })

}

Effects.prototype.startMixiupTeachers = function(){
  $('#cajasTeachers').mixItUp({
    animation:{
      duration:1000
    }
  })

}

Effects.prototype.startTemplateEffects = function(){
    App.init();
    App.initSliders();
    App.initBxSlider();
    Index.initLayerSlider();
}
