//$('.equipment').change(function () {
//        alert("s");
//    });


//$('[style="opacity: 0"]');
$(function() {
  
    var flag = false;

    if (flag==false){
        changeEQ();
        flag = true;
    }
    
//    $('.pricing-toogle').change(function () {
//        $(document.activeElement,this).addClass("aaa");
//        
////        if($($btn[0] + ".filt-monthly.toggler--is-active")){
////            console.log($($btn[0] + ".filt-monthly.toggler--is-active"));
////        }
////        console.log($btn);
//    });
//  
  
      $('.check').click(function() {
       var $curr = $(this).parent().parent().parent();
       $curr.toggleClass('obj-active');
        changeEQ();
    });
     $('.toggler').click(function() {
       var $curr = $(this).parent().parent();
       $curr.toggleClass('obj-active');
        changeEQ();
    });
    
    
    
    
    
  function changeEQ() {
     var isSet=0;
     var sum=0;
//     var nameBisinesses = $('.tablinks.active').data('name');
//      console.log(nameBisinesses);
//      
//      var isSet= $('#'+nameBisinesses + " .toggler--is-active").html();
//      
//      if(isSet != "Есть"){
//          
//          
//          $('#'+nameBisinesses + " .toggler--is-active").parent().addClass('classname');
//          
//   
//      }
//      
//      
      
      
      
     var allPrice = $(" .equipment.obj-active .swiper-slide-active .price_min ");
//     console.log(sum);
      
    for (var i=0; i<allPrice.length; i++){
        
//         console.log(allPrice[i].offsetParent.classList.value); 
         sum += Number.parseInt(allPrice[i].innerHTML);
    }
        $("#sum").text(sum);
//        console.log(sum);
      
    }
  
    
    
    
   
    
    
    
    
    
    
    $('.swiper-pagination').click(function () {
       changeEQ();
    });
    $('.swiper-slide').mouseover(function () {
       changeEQ();
    });
  
});