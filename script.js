$(document).ready(function(){
  $(".on").click(function(){
   
    $("div").addClass("active");
    
  });
  
});
//ok



$(document).ready(function(){
  $(".cercle").click(function(){
   
    if ($(this).hasClass("active"))
    {
      $(this).removeClass("active");
    }
    else
    {
      $(this).addClass("active");
    }
  });
  
});
//ok

$(document).ready(function(){
  $(".off").click(function(){
   
   $("div").removeClass("active");
    
  });
  
});
//ok
//activer/desactiver le carée 
$(document).ready(function(){

 $(".carre1").click(function(){
   
    if ($(this).hasClass("active") && $(".ligne1").hasClass("active"))
    {
      $(this).removeClass("active") &&  $(".ligne1").removeClass("active") ;
    }
    else
    {
      $(this).addClass("active") && $(".ligne1").addClass("active");
    }
  });


});

$(document).ready(function(){

 $(".carre2").click(function(){
   
    if ($(this).hasClass("active") && $(".ligne2").hasClass("active"))
    {
      $(this).removeClass("active") &&  $(".ligne2").removeClass("active");
    }
    else
    {
      $(this).addClass("active") && $(".ligne2").addClass("active");
    }
  });



});

$(document).ready(function(){

 $(".losange").click(function(){
   
    if ($(this).hasClass("active") && $(".ligne3").hasClass("active")&& $(".colone3").hasClass("active"))
    {
      $(this).removeClass("active") &&  $(".ligne3").removeClass("active") && $(".colone3").removeClass("active");
    }
    else
    {
      $(this).addClass("active") && $(".ligne3").addClass("active") && $(".colone3").addClass("active");
    }
  });


});
$(document).ready(function(){

 $(".carre3").click(function(){
   
    if ($(this).hasClass("active") && $(".ligne4").hasClass("active"))
    {
      $(this).removeClass("active") &&  $(".ligne4").removeClass("active") ;
    }
    else
    {
      $(this).addClass("active") && $(".ligne4").addClass("active");
    }
  });


});
$(document).ready(function(){

 $(".carre5").click(function(){
   
    if ($(this).hasClass("active") && $(".ligne5").hasClass("active"))
    {
      $(this).removeClass("active") &&  $(".ligne5").removeClass("active") ;
    }
    else
    {
      $(this).addClass("active") && $(".ligne5").addClass("active");
    }
  });


});
