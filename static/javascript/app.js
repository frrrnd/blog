hljs.initHighlightingOnLoad();

let container = document.querySelector("#grid-container");

if (container) {

  jribbble.shots({token: "627b0fac077b5b6f3dcafec723409a4eb98a2b09456afee83b804d54655f2967", per_page: 11}, 
  function(shots) {
    const filteredShots = shots.filter(shot => shot.tags.includes('ui') && shot.animated !== true);

      const reducedShots = filteredShots.reduce((html, shot, item) => html + '<div class="slot"><a href="'+  shot.html_url + '" target="_blank"><figure><img data-id="' + item + '" src="' + shot.images.hidpi + '"><div class="overlay"><h4>'+ shot.title +'</h4></div></figure></a></div>', "");

      // put on html
      container.innerHTML = reducedShots;
});
}


var btn = $('#button');


$(window).scroll(function() {
  // go to top
  if ($(window).scrollTop() > 500) {
    btn.addClass('show');
  } else {
    btn.removeClass('show');
  }
});

btn.on('click', function(e) {
  e.preventDefault();
  $('html, body').animate({scrollTop:0}, '300');
});

// cursors delay
let cursors = $('.notes__time:odd');
cursors.addClass('cursor-delay');

// smooth scroll anchor
$(document).on('click', 'a[href^="#"]', function (event) {
  event.preventDefault();

  $('html, body').animate({
      scrollTop: $($.attr(this, 'href')).offset().top
  }, 500);
});



// boo

let els = document.querySelectorAll('[data-appear]')

const isVisible = (elem) => {
    let coords = elem.getBoundingClientRect()
    let windowHeight = document.documentElement.clientHeight
    let topVisible = coords.top + elem.clientHeight > 0 && coords.top < windowHeight

    return topVisible
}

const showVisible = () => {
    for (const el of els) {
        if (isVisible(el)) {
            el.classList.add('space-animation')
        }
    }
}

const apply = () => {
  showVisible()
}

window.addEventListener('scroll', apply)
apply()

$('.marquee').marquee({
  duration: 20000,
  gap: 10,
  delayBeforeStart: 0,
  direction: 'left',
  duplicated: true,
  startVisible: true
});

$('.marquee-2').marquee({
  duration: 20000,
  gap: 10,
  delayBeforeStart: 0,
  direction: 'right',
  duplicated: true,
  startVisible: true
});

$(".fancybox").fancybox();