import $ from "jquery";

$(document).ready(function()
{
  $('a').bind("click", jump);

  if (location.hash){
    setTimeout(function(){
      $('html, body').scrollTop(0).show()
      jump()
    }, 0);
  }else{
    $('html, body').show()
  }
});

$(function(){
  const $navBar = $('.navbar-toggle');
  const $navLinks = $('.nav-links');
  const navActive = () => $navBar.addClass('navbar-toggle-active');
  const navUnactive = () => $navBar.removeClass('navbar-toggle-active')
  const activateNav = () => {
    $navLinks.toggle('nav-links-active');
     $('#greeting-line-animation-1').toggle();
     $('#greeting-line-animation-2').toggle();
}

 $navBar.hover(
   () =>  navActive(),
   () => navUnactive()
  )

 $navBar.on('click',() => activateNav())
 $('.side-nav-link').hover(function(){
    $(this).children('.side-nav-text').toggle()
    $(this).children('.side-nav-dot').toggleClass('side-nav-dot-active')
  },function(){
    $(this).children('.side-nav-text').toggle()
    $(this).children('.side-nav-dot').toggleClass('side-nav-dot-active')
     }
   )
})

function isElementInViewport(elem,type) {
    const $elem = $('.initial-summary-line-1');
    const scrollElem = ((navigator.userAgent.toLowerCase().indexOf('webkit') != -1) ? 'body' : 'html');
    const viewportTop = $(scrollElem).scrollTop();
    const viewportBottom = type===1||3?
        viewportTop + $(window).height()-50
          :
        viewportTop + $(window).height()-300;

    const elemTop = Math.round( $elem.offset().top );
    const elemBottom = type===3?
    elemTop + $elem.height()+300
      :
    elemTop + $elem.height();

    return ((elemTop < viewportBottom) && (elemBottom > viewportTop));
}

const checkAnimation = () => {
    const $elem = $('.initial-summary-line-1');
    if ($elem.hasClass('start-line-3')) return;
    if (isElementInViewport($elem,1)) {
        $elem.addClass('start-line-3')
    }
}

const checkAnimation2 = () => {
    const $elem2 = $('.initial-summary-line-2');
    if ($elem2.hasClass('start-line-4')) return;
    if (isElementInViewport($elem2,2)) {
        $elem2.addClass('start-line-4')
    }
}

const checkSideBar = () => {
  const $sideBar = $('.side-nav-links')
  // if($sideBar.hasClass('show-side-nav'))return
  if (isElementInViewport($sideBar,3)) {
      $sideBar.addClass('show-side-nav')
  }else{
     $sideBar.removeClass('show-side-nav')

  }
}


$(window).scroll(function(){
    checkAnimation();
    checkAnimation2();
    checkSideBar()
});

const jump = function(e){
   if (e){
       e.preventDefault();
       const target = $(this).attr("href");
   }else{
       const target = location.hash;
   }

   $('html,body').animate({
       scrollTop: $(target).offset().top - 200
   },1500,function(){});
}
