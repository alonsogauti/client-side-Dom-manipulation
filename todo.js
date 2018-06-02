	// if($(this).css("color") === "rgb(128, 128, 128)"){
	// 	$(this).css({ color :"black",
 //                   textDecoration :"none"});
	// }else{
	// 	$(this).css({ color :"gray",
 //                   textDecoration :"line-through"});$("li").click(function(){


// $("input[type = 'text']").on("keypress",function(event){
// 	if(event.which === 13){
//      var todotext = $(this).val();
//      $(this).val("");
//      $("ul").append("<li> <span> <i class='fas fa-trash-alt'></i> </span>" + todotext + "</li>");
	 
// 	}
// })


$("ul").on("click", "li" , function(){

	$(this).toggleClass("completed");
   
	});


  $("ul").on("click","span",function(event){

	$(this).parent().fadeOut(500,function(){
		localStorage.clear();
		$(this).remove();
	});
     event.stopPropagation();
	
	});

  $(".fa-plus").click(function(){
  	$("input[type='text']").fadeToggle(500,function(){});
  });
  
