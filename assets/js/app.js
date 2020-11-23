jQuery(document).ready(function($) {
    
    $('.animated1').css({
        visibility: 'visible',
        right: ''
    });
    
    //---------------------------
    // Page: Team
    //---------------------------
    
    function hideDescription() {
        $('.member--description:not(.d-none)').addClass('d-none');
    }
    
    $('body').on('click', hideDescription);
    
    $('.expand-button').click(function($event) {
        $event.preventDefault();
        $event.stopPropagation();
        
        hideDescription();
        
        $(this).parent().next().toggleClass('d-none');
        
        if($(this).offset().left > window.outerWidth/2) {
            $(this).parent().next().addClass('left');
        }
    });
    
    
    //----------------------------------------
    // Page: Resources
    //----------------------------------------
    function hideContentBody() {
        $('.content--title.gradient5').toggleClass('gradient5').toggleClass('gradient4').next().addClass('d-none');
    }
    
    $('body').on('click', hideContentBody);
    
    $('.content--title').click(function($event) {
        $event.preventDefault();
        $event.stopPropagation();
        
        let alreadyExpanded = $(this).hasClass('gradient5');
        
        hideContentBody();
        
        if( !alreadyExpanded ) {
            
            $(this).toggleClass('gradient4')
            .toggleClass('gradient5')
            .next().toggleClass('d-none');
            
        }
        
    });
    
    $('.go-to-anchor').click(function($event) {
        $event.preventDefault();
        $event.stopPropagation();
        
        let elem = $(
            $(this).attr('href')
            )[0];
            
        if(!elem) {
            return;
        }
        
        elem.scrollIntoView({
            behavior: 'auto',
            block: 'center',
            inline: 'center'
        });
    });


    $('#example').horizontalTimeline({
        scrollLeft_iconClass: "fa-caret-left",
        scrollRight_iconClass: "fa-caret-right",
        prev_iconClass: "fa-caret-left",
        next_iconClass: "fa-caret-right",

        animation_baseClass: "animationSpeed", // Space separated class names
        enter_animationClass: {
            "left": "",
            "right": ""
        },
        exit_animationClass: {
            "left": "",
            "right": ""
        },
    });

    $('.events a').click(function() {
        if (window.outerWidth < 768) return;
        
        const targetLeft = parseInt(
            $(this).css('left')
        );

        const adjustLeft = 100;

        if (targetLeft === 0) {
            $('.events-content').removeClass('next-event');
        } else {
            $('.events-content').addClass('next-event');
        }

        $('.events-content').css({
            left: (targetLeft - adjustLeft) + 'px'
        });
    });
});
    
gototopbtnContainer = document.getElementById("gototopbtn_container");

function scrollFunction() {
    if (document.body.scrollTop > 60 || document.documentElement.scrollTop > 60) {
        gototopbtnContainer.classList.remove('d-none');
    } else {
        gototopbtnContainer.classList.add('d-none');
    }
}

// When the user clicks on the button, scroll to the top of the document
function goToTop() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

// When the user scrolls the page, execute stickyHeaderHandler
window.onscroll = function() {
    stickyHeaderHandler();
    scrollFunction();
};

// Get the header
var header = document.getElementById("main_header");

// Get the offset position of the navbar
var sticky = header.offsetTop;

// Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
function stickyHeaderHandler() {
    if (window.outerWidth < 768) return;
    
    if (window.pageYOffset > sticky) {
        header.classList.add("sticky");
        header.classList.add("bg-white");
    } else {
        header.classList.remove("sticky");
        header.classList.remove("bg-white");
    }
}