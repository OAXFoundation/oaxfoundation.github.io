//TODO Wayland come back and clean out unused code

$(document).ready(function(){

	$("#portfolio-contant-active").mixItUp();

	$( '#navbar-header .navbar-nav a' ).on( 'click', function () {
		console.log('nav clicked');
		$( '#navbar-header .navbar-nav' ).find( 'li.active' ).removeClass( 'active' );
		$( this ).parent( 'li' ).addClass( 'active' );
	});

	/* OpenMinds Customization Starts */

	

	/* OpenMinds Customization Ends */

});




