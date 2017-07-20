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
