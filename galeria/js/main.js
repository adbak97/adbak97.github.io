
        
var imgCounts = 16; //Liczba Zdjec


        for ( var i=1;i<=imgCounts;i++){
          let img = document.createElement('div');
          img.classList.add("grid-item");
          document.getElementById('main').appendChild(img);
           
      }
         var array = document.querySelectorAll('.grid-item');
      
        for ( var i=1; i<=imgCounts; i++){
         var a = document.createElement('a');
        let y;
          
       if(i<10){
            y = "img/00"+i+".jpg";
        } else if(i<=99){
             y = "img/00"+i+".jpg";
        } else{
            y = "img/"+i+".jpg";
        };
         a.setAttribute("href",y);
         a.setAttribute('class','img-link')    
         array[i-1].appendChild(a);
        };
    var links = document.querySelectorAll('.img-link');
        
         for ( var i=1; i<=imgCounts; i++){
         var s = document.createElement('img');
            
          
        if(i<10){
            y = "img/00"+i+".jpg";
        } else if(i<=99){
             y = "img/00"+i+".jpg";
        } else{
            y = "img/"+i+".jpg";
        };
         s.setAttribute("src", y);
         links[i-1].appendChild(s);
        }
 var $grid = $('.grid').masonry({
  itemSelector: '.grid-item',
  percentPosition: true,
  columnWidth: '.grid-sizer'
});
$grid.imagesLoaded().progress( function() {
  $grid.masonry();
});  
       $('.img-wrapper').magnificPopup({
              delegate: 'a',
              type: 'image',
              mainClass: 'mfp-img-mobile',
              gallery: {
                enabled: true,
                navigateByImgClick: true,
                preload: [0,1],
              },
            });
     window.onload = function() {

     $("#loader-wrapper").fadeOut();
}; 