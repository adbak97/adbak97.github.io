$(document).ready (function(){
    
$('button').on('click',function(){   
    
    var data;
    
    $.get('https://akademia108.pl/kurs-front-end/ajax/1-pobierz-dane-programisty.php',function(data,status){
        /*console.log(status);
        console.log(typeof(status));*/
     if(status === 'success'){ 
         data = $.parseJSON(data);
          $('body').append($("<div><p></p></div>").attr('id','dane-programisty').text(data.firma + ' | ' + data.imie + ' | ' + data.nazwisko + ' | ' + data.zawod));
         
         
         
         
         
     }else if(status === 'error') {
             $('body').append($("<p></p>").text("BŁĄDZIK"));
        }
    });
    
   
        
    
   });
    
  

    
});
    
 


