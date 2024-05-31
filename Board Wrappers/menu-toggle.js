$('.button-action').click(function () {
  var navbarHeight = $('#mobilenav').outerHeight();
  var dropdownMenu = $('.dropdown-menu');
  dropdownMenu.css('top', `${navbarHeight + 10}px`);

  $('#mobile-userlinks').toggleClass('display-menu');
  $('.rotate').toggleClass('down');
});

$('.fa-arrow-up').click(function (event) {
  event.preventDefault();
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

$('.fa-arrow-down').click(function (event) {
  event.preventDefault();
  $('#copyright').scrollIntoView({ behavior: 'smooth' });
});

/* Light Mode Toggle, from CodePen
 * https://codepen.io/ananyaneogi/pen/zXZyMP
 * heavily modified by Luna */
$(document).ready(function () {
  const currentTheme = localStorage.getItem('theme');

  if (currentTheme) {
    $('html').attr('data-theme', currentTheme);
  } else {
    $('html').attr('data-theme', 'dark');
  }

  $('a[title="Toggle Theme"]').click(function (e) {
    e.preventDefault();
    const theme = $('html').attr('data-theme') === 'dark' ? 'light' : 'dark';

    $('html').attr('data-theme', theme);
    localStorage.theme = theme;
  });
});
