

$(document).ready(function () { //Aparecer la barra al bajar el scroll, vulve a quitarse al llegar al top

  'use strict';
  $(window).scroll(function () {
    'use strict';
    if ($(window).scrollTop() < 80) {

      $('#navbar').css({
        'margin-top': '-100px',
        'opacity': '0'
      });
    } else {

      $('#navbar').css({
        'margin-top': '0px',
        'opacity': '1'
      });
    }

  });
});


$(document).ready(function () {//scroll en los enlaces de la barra de navegación y del boton del footers
  'use strict';
  $('.nav-item, #scroll-to-top').click(function () {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name = ' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});


$(document).ready(function () {//agregar/quitar la clase active (se agrega conforme se va llegando a la sección con el scroll)
  'use strict';
  $(window).scroll(function () {
    'use strict';
    $("section").each(function () {
      'use strict';
      var add = $(this).attr("id");
      var heightt = $(this).outerHeight();
      var grttop = $(this).offset().top - 120;
      if ($(window).scrollTop() > grttop && $(window).scrollTop() < grttop + heightt) {
        $(".navbar-nav li a[href='#" + add + "']").parent().addClass("active");
      } else {
        $(".navbar-nav li a[href='#" + add + "']").parent().removeClass("active");
      }
    });
  });
});


$(document).ready(function () { //agregar padding al header dependiendo de la altura de la pantalla
  'use strict';
  setInterval(function () {
    var windowHeight = $(window).height();
    var containerHeight = $(".header-container").height();
    var paddingTop = windowHeight - containerHeight;

    $(".header-container").css({
      'padding-top': Math.round(paddingTop / 2) + 'px',
      'padding-bottom': Math.round(paddingTop / 2) + 'px'
    });
  }, 10);
});

$(document).ready(function () { //ocultar menu desplegable al elegir una opcion del menu

  $('.nav-item').click(function () {

    var $target = $('.navbar-collapse');

    if ($target.hasClass('in')) {

      $target.removeClass('in').height(0).css('overflow', 'hidden');
    }

  });
});


$(document).ready(function () { //slider 
  $('.slider').bxSlider({
    auto: true,
    slideWidth: 300,
    minSlides: 1,
    maxSlides: 3,
    controls: false
  });
});

$(document).ready(function () { //contador 
  $('.counter').counterUp({
    delay: 10,
    time: 1000
  });
});

$(document).ready(function () {
  'use strict';
  new WOW().init();
});