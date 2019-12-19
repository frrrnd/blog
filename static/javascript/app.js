hljs.initHighlightingOnLoad();

let container = document.querySelector("#grid-container");

if (container) {

  jribbble.shots({
    token: "627b0fac077b5b6f3dcafec723409a4eb98a2b09456afee83b804d54655f2967",
    per_page: 30
    }, function(shots) {
      const filteredShots = shots.filter(shot => shot.tags.includes('ui') && shot.animated !== true);

      const reducedShots = filteredShots.reduce((html, shot, item) => html + '<div class="slot"><a href="'+  shot.html_url + '" target="_blank"><figure><img data-id="' + item + '" src="' + shot.images.hidpi + '"><div class="overlay"><h3>'+ shot.title +'</h3></div></figure></a></div>', "");

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
