// transparência da nav
window.onscroll = scroll;

function scroll() {
  let scrollTop = window.pageYOffset;
  if (scrollTop > 30) {
    try {
      document.getElementById('antes').id = 'depois'
    } catch (e) { 
      false 
    }
  } else {
    try {
      document.getElementById('depois').id = 'antes'
    } catch (e) { 
      false
    }
  }
}

// scroll

$('nav a').click(function(e){
  var id = $(this).attr('href'),
      targetOffset = $(id).offset().top,
      menuHeight = $('nav').innerHeight();
  $('html, body').animate({
      scrollTop: targetOffset - menuHeight
  }, 500);
});