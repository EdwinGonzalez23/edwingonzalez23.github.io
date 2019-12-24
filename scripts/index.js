$("#index").load("b.html"); 
$(document).ready(function () {
    //By Default Load Home
   // $(function(){
        $("#index").html("sadfsdafsa");
      //});
    $("#projects").click(function (e) { 
        $(".home-page").hide();
        $(".projects").show();
    });
    $("#home").click(function (e) { 
        $(".prjects").hide();
        $(".home-page").show();
    });
});