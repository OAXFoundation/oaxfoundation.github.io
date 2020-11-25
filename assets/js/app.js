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

    setTimeout(() => {
        activateTimelineitem(
            $('.events a:last-child')
        );

        $('#example').horizontalTimeline('goTo',
            $('.events a:last-child').data('horizontal-timeline').date
        );
    }, 750);

    $('.events a').click(function() {
        if (window.outerWidth < 768) return;
        
        activateTimelineitem($(this));
    });
});

function activateTimelineitem(timelineItem) {
    const sourceLeft = parseInt(
        timelineItem.css('left')
    );

    let adjustLeft = 100;

    const finalLeft = (sourceLeft - adjustLeft);

    const timelineWidth = parseInt(
        jQuery('.horizontal-timeline').width()
    );

    const currentEventContentLeft = parseInt(
        jQuery('.events-content').css('left')
    );

    const dx = (parseInt(
        timelineItem.css('left')
    ) - parseInt(
        timelineItem.prev().css('left')
    ));

    const middleStateLeft = ((timelineWidth/2) - adjustLeft);

    let reduce = 0;

    if (window.outerWidth > 425 && window.outerWidth < 1024) {
        reduce = -120;
    }

    if (timelineItem.hasClass('selected')) {
        return;
    }

    if (timelineItem.hasClass('last') && !timelineItem.hasClass('selected')) {
        console.log('last')

        jQuery('.events-content').css({
            left: middleStateLeft + dx + dx + reduce + 'px'
        });

    } else if (timelineItem.next().hasClass('last') && timelineItem.next().hasClass('selected')) {
        console.log(`2nd last`);

        jQuery('.events-content').css({
            left: middleStateLeft + dx + reduce + 'px'
        });

    } else if (timelineItem.next().hasClass('last') || (timelineItem.hasClass('last'))) {
        console.log(`2nd last (2)`);

        jQuery('.events-content').css({
            left: (currentEventContentLeft + dx) + 'px'
        });
        
    } else if (finalLeft > (timelineWidth/2) 
        || (timelineItem.index() > 3 && currentEventContentLeft === 0)) {
        console.log(`move than half  ${middleStateLeft}px`);

        jQuery('.events-content').css({
            left: middleStateLeft + 'px'
        });

    }  else if (currentEventContentLeft < (timelineWidth/2)) {
        console.log('move');

        jQuery('.events-content').css({
            left: (sourceLeft - adjustLeft) + 'px'
        });
    }

    if (sourceLeft === 0) {
        jQuery('.events-content').removeClass('next-event');
    } else {
        jQuery('.events-content').addClass('next-event');
    }
}
    
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