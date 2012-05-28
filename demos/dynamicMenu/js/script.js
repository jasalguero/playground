$(document).ready(function(){

    $('#menuContainer li a').click(function(){
    
        //var toLoad = $(this).attr('href') + ' #content';
		
		var menuOption =  $(this).attr('href');
		var toLoad = $(this).attr('href') + 'Content';
        $('.menuContent').hide('fast');
		loadContent();
		
        //$('#load').remove();
        //$('#wrapper').append('<span id="load">LOADING...</span>');
        //$('#load').fadeIn('normal');
        function loadContent(){
            $('#'+toLoad+'').load(menuOption+'.html', '', showNewContent())
        }
        function showNewContent(){
            $('#'+toLoad+'').show('normal', hideLoader());
        }
        function hideLoader(){
            $('#load').fadeOut('normal');
        }
        return false;
        
    });
});


