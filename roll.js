  $(function(){

   

        $( "#slider-range" ).slider({
        range: true,
        min: 0,
        max: 9999,
        values: [ 0, 9999 ],
        slide: function( event, ui ) {
          var sliderVal= ui.values[0];
          var sliderEnd= ui.values[1];
            var input= sliderVal.toString();
         inputVal=input.split("");

         
         var length=inputVal.length;
         
          numbCheck(inputVal,length);
          $('#textBox').val(sliderVal);
   
        }
      });
   
   
   
   
      function numbCheck(inputVal,length){

   
        
     

   switch(length)
   {
     case 1:
             $('p#fourth').css({"background-position":"0px "+"-"+inputVal[0]+"00px"});
              $("p:not(#fourth)").css({"background-position":"0px 0px"});
            break;
     case 2:
     $("p:not(#third,#fourth)").css({"background-position":"0px 0px"});
       $('p#fourth').css({"background-position":"0px "+"-"+inputVal[1]+"00px"});
       $('p#third').css({"background-position":"0px "+"-"+inputVal[0]+"00px"});
   


         
           break;
  break;
     case 3:
     $("p#first").css({"background-position":"0px 0px"});
          
       $('p#fourth').css({"background-position":"0px "+"-"+inputVal[2]+"00px"});
       $('p#third').css({"background-position":"0px "+"-"+inputVal[1]+"00px"});
       $('p#second').css({"background-position":"0px "+"-"+inputVal[0]+"00px"});
          
   break;
     case 4:
          $('p#fourth').css({"background-position":"0px "+"-"+inputVal[3]+"00px"});
       $('p#third').css({"background-position":"0px "+"-"+inputVal[2]+"00px"});
       $('p#second').css({"background-position":"0px "+"-"+inputVal[1]+"00px"});
       $('p#first').css({"background-position":"0px "+"-"+inputVal[0]+"00px"});
           
         
          
   break;

   default:
       $('p').css({"background-position":"0px 0px"});
   break;
   
      
     
   }
   }
      $('input:text').keyup(function(){

         // var inputVal=$(this).val();
         // var input= inputVal.toString();
         // inputVal=input.split("");

         
         // var length=inputVal.length;
         
         //  numbCheck(inputVal,length);



   
         
         
         
    });
      
  });