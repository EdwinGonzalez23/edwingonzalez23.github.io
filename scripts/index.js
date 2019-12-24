$(document).ready(function () {
    //By Default Load Home
    $("#index").load("includes/home.html"); 
    $("#home").click(function (e) { 
        $("#index").load("includes/home.html");
        $(".prjects").hide();
        $(".home-page").show();
    });
    $("#projects").click(function (e) { 
        $("#index").load("includes/projects.html");
    });
});