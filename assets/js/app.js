jQuery(document).ready(function($) {

    

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

        hideContentBody();

        $(this).toggleClass('gradient4');
        $(this).toggleClass('gradient5');

        $(this).next().toggleClass('d-none');
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
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
    header.classList.add("bg-white");
  } else {
    header.classList.remove("sticky");
    header.classList.remove("bg-white");
  }
}