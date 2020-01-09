$(document).ready(function () {
    var educationText = $('#education-content');
    
    $('#navbar').load('includes/navbar.html');
    $('#education-content').load('includes/csub.html');
    $('#project').load('includes/projects.html');

    $('.dual-button-left').focus();

    $('.dual-button-left, .dual-button-right').click(function(e) { 
        var id = $(this).attr('id');
        educationText.load('includes/'+id+'.html');

        var button = $(this);
        button.removeClass('active');

        //educationText.addClass('animated bounceInRight fast');

        educationText.on('animationend', function(e) { 
            //educationText.removeClass('animated bounceInRight fast'); 
            // button.removeClass('active');
        });
    });   
    
    // $('*').click(function (e) { 
    //     $('#project').load('projects/vct.html');    
    // });
});