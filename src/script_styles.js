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

   let randomColor = Math.ceil(Math.random()*9)

   const runClear = (that)=> {
   for(let i =1; i <10;i++){
     $(that).removeClass(`skill-animate-${i}`)
   }
 }

 $('.skill-flex-item').hover(

   function(){
     randomColor = Math.ceil(Math.random()*9)
     $(this).addClass(`skill-animate-${randomColor}`);

 },function(){
   let that = this
   setTimeout(function(){ runClear(that)},3000)

 })
})

function isElementInViewport(elem,type) {
    const $elem = $('.initial-summary-line-1');
    const scrollElem = ((navigator.userAgent.toLowerCase().indexOf('webkit') != -1) ? 'body' : 'html');
    const viewportTop = $(scrollElem).scrollTop();
    const viewportBottom = type===1||3?
        viewportTop + $(window).height()-50
          :
        viewportTop + $(window).height();

    const elemTop = Math.round( $elem.offset().top );
    const elemBottom = type===3?
    elemTop + $elem.height()+1000
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
      var target = $(this).parents('.side-nav-link').prevObject[0].getAttribute('href')
   }else{
      var target = location.hash;
   }
   if(target.indexOf("http")==0)return
  //  e.preventDefault();
   $('html,body').animate({
       scrollTop: $(target).offset().top
   },1500,function(){});
}
