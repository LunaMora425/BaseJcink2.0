/*------------------------------------*\
    CUSTOM NAVIGATION BAR SCRIPTS
    Created by Luna of Free Codes
    https://freecodes.jcink.net
    Designed for use on Jcink Forums
    with the Custom Navigation Bar
\*------------------------------------*/

$(document).ready(function () {
  /* Toggle Dropdown Menu */
  $('.button-action').click(function () {
    // sets the dropdown menu to be 10px below the navbar on all devices
    // no matter the screen size
    const navbarHeight = $('#navigation-wrapper').outerHeight();
    const dropdownMenu = $('.dropdown-menu');
    dropdownMenu.css('top', `${navbarHeight + 10}px`);

    // toggles the dropdown menu to appear on click
    $('#nav__userlinks').toggleClass('display-menu');
    $('.rotate').toggleClass('down');
  });

  /* Scroll to Top/Bottom Buttons */
  $('#click-up').click(function (event) {
    event.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  $('#click-down').click(function (event) {
    event.preventDefault();
    $('#copyright').get(0).scrollIntoView({ behavior: 'smooth' });
  });

  /* Light/Dark Mode Toggle, from CodePen
   * https://codepen.io/ananyaneogi/pen/zXZyMP
   * heavily modified by Luna */
  $('a[title="Toggle Theme"]').click(function (event) {
    event.preventDefault();
    const theme = $('html').attr('data-theme') === 'dark' ? 'light' : 'dark';

    $('html').attr('data-theme', theme);
    localStorage.theme = theme;
  });
});
