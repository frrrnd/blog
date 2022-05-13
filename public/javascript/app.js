//hljs.initHighlightingOnLoad();

hljs.highlightAll();

let container = document.querySelector("#grid-container");

if (container) {

  jribbble.shots({token: "627b0fac077b5b6f3dcafec723409a4eb98a2b09456afee83b804d54655f2967", per_page: 12}, 
  function(shots) {
    const filteredShots = shots.filter(shot => shot.tags.includes('ui') && shot.animated !== true);

    const reducedShots = filteredShots.reduce((html, shot, item) => html + '<div class="slot"><a href="'+  shot.html_url + '" target="_blank"><figure><img width="400" height="300" loading="lazy" alt="'+ shot.title +'" data-id="' + item + '" src="' + shot.images.normal + '"></figure></a></div>', "");

    console.log(filteredShots)
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


// themes

let darkTheme = window.matchMedia("(prefers-color-scheme: dark)").matches;
let switcher = document.querySelector(".sw");
let root = document.getElementsByTagName('html')[0];

if (localStorage.getItem("theme") == 'dark') {
  root.classList.add("dark-theme");
} else {
  root.classList.add("light-theme");
}

switcher.addEventListener("click", function () {
  if (root.classList.contains('dark-theme')) {
    root.classList.remove("dark-theme");
    root.classList.add("light-theme");
    localStorage.setItem("theme", "light");
  } else {
    root.classList.remove("light-theme");
    root.classList.add("dark-theme");
    localStorage.setItem("theme", "dark");
  }
});