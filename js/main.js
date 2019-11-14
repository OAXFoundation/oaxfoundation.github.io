//TODO Wayland come back and clean out unused code

$(document).ready(function(){

	$("#portfolio-contant-active").mixItUp();

	$( '#navbar-header .navbar-nav a' ).on( 'click', function () {
		console.log('nav clicked');
		$( '#navbar-header .navbar-nav' ).find( 'li.active' ).removeClass( 'active' );
		$( this ).parent( 'li' ).addClass( 'active' );
	});

	/* OpenMinds Customization Starts */

	// Homepage Timeline
	$('#home-timeline').horizontalTimeline({
		
		desktopDateIntervals: 200, 
		tabletDateIntervals: 150, 
		mobileDateIntervals: 120, 
		minimalFirstDateInterval: false,  
		dateDisplay: "monthYear", // dateTime, date, time, dayMonth, monthYear, year 
		dateOrder: "normal", // normal, reverse  
		autoplay: false, 
		autoplaySpeed: 8, 
		autoplayPause_onHover: false,   
		useScrollWheel: false, 
		useTouchSwipe: true, 
		useKeyboardKeys: false, 
		addRequiredFile: true, 
		useFontAwesomeIcons: true, 
		useNavBtns: true, 
		useScrollBtns: false,  
		iconBaseClass: "fas fa-3x", 
		scrollLeft_iconClass: "", 
		scrollRight_iconClass: "", 
		prev_iconClass: "fa-chevron-left", 
		next_iconClass: "fa-chevron-right", 
		pause_iconClass: "fa-pause-circle", 
		play_iconClass: "fa-play-circle" 
	});
	

	/* OpenMinds Customization Ends */

});




