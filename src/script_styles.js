import $ from "jquery";

$(function(){
  const $navBar = $('.navbar-toggle');
  const $navLinks = $('.nav-links');

  const navActive = () => $navBar.addClass('navbar-toggle-active');
  const navUnactive = () => $navBar.removeClass('navbar-toggle-active')
  const activateNav = () => $navLinks.toggle('nav-links-active')

 $navBar.hover(
   () =>  navActive(),
   () => navUnactive()
  )

  $navBar.on('click',() => activateNav() )

})

function isElementInViewport(elem) {
    var $elem = $('.initial-summary-line-1');
    var scrollElem = ((navigator.userAgent.toLowerCase().indexOf('webkit') != -1) ? 'body' : 'html');
    var viewportTop = $(scrollElem).scrollTop();
    var viewportBottom = viewportTop + $(window).height();


    var elemTop = Math.round( $elem.offset().top );
    var elemBottom = elemTop + $elem.height();

    return ((elemTop < viewportBottom) && (elemBottom > viewportTop));
}

// Check if it's time to start the animation.
function checkAnimation() {
    var $elem = $('.initial-summary-line-1');
    // If the animation has already been started
    if ($elem.hasClass('start-line-3')) return;
    if (isElementInViewport($elem)) {
        // Start the animation
        $elem.addClass('start-line-3')
    }
}

function checkAnimation2() {
    var $elem2 = $('.initial-summary-line-2');
    // If the animation has already been started
    if ($elem2.hasClass('start-line-4')) return;
    if (isElementInViewport($elem2)) {
        // Start the animation
        $elem2.addClass('start-line-4')
    }
}



// Capture scroll events
$(window).scroll(function(){
    checkAnimation();
    checkAnimation2();
});
