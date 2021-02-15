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


//eq2


$(function() {
  
    var flag = false;

    if (flag==false){
        changeEQ2();
        flag = true;
    }
    
    
    
    
  function changeEQ2() {
     var isSet=0;
     var sum=0;
      
      
     var allPrice = $(".equipment2 .owl-item.active .price_min ");
     console.log(allPrice);
      
    for (var i=0; i<allPrice.length; i++){
        
        console.log(allPrice[i].offsetParent.classList.value); 
         sum += Number.parseInt(allPrice[i].innerHTML);
    }
        $("#sum2").text(sum);
      console.log(sum);
      
    }
    
    $('.owl-prev').click(function () {
       changeEQ2();
    });
    $('.owl-next').click(function () {
       changeEQ2();
    });
    $('.owl-dot').click(function () {
       changeEQ2();
    });
  
});

//eq3
$(function() {
  
    var flag = false;

    if (flag==false){
        changeEQ3();
        flag = true;
    }
    
    
    
    
  function changeEQ3() {
     var isSet=0;
     var sum=0;
      
      
     var allPrice = $(".equipment3 .owl-item.active .price_min ");
     console.log(allPrice);
      
    for (var i=0; i<allPrice.length; i++){
        
        console.log(allPrice[i].offsetParent.classList.value); 
         sum += Number.parseInt(allPrice[i].innerHTML);
    }
        $("#sum3").text(sum);
      console.log(sum);
      
    }
    
    $('.owl-prev').click(function () {
       changeEQ3();
    });
    $('.owl-next').click(function () {
       changeEQ3();
    });
    $('.owl-dot').click(function () {
       changeEQ3();
    });
  
});