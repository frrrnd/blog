//hljs.initHighlightingOnLoad();

hljs.highlightAll();

let container = document.querySelector("#grid-container");
let html = '';

fetch('https://api.dribbble.com/v2/user/shots?access_token=627b0fac077b5b6f3dcafec723409a4eb98a2b09456afee83b804d54655f2967')
.then(response => response.json())
.then(data => {
  data.forEach(shot => {
    console.log(shot)
    let shotHtml = `
      <div class="slot">
        <a href="${shot.html_url}" target="_blank" title="${shot.title}">
          <figure>
            <img src="${shot.images.normal}" alt="${shot.title}" loading="lazy" width="400" height="300" data-id="">
          </figure>
        </a>
      </div>
    `;

    html += shotHtml;
  });

  container.innerHTML = html;
});

/*
if (container) {

  jribbble.shots({token: "627b0fac077b5b6f3dcafec723409a4eb98a2b09456afee83b804d54655f2967", per_page: 12}, 
  function(shots) {
    const filteredShots = shots.filter(shot => shot.tags.includes('ui') && shot.animated !== true);

    const reducedShots = filteredShots.reduce((html, shot, item) => html + '<div class="slot"><a href="'+  shot.html_url + '" target="_blank"><figure><img width="400" height="300" loading="lazy" alt="'+ shot.title +'" data-id="' + item + '" src="' + shot.images.normal + '"></figure></a></div>', "");

    // put on html
    container.innerHTML = reducedShots;
  });
}*/

// themes

let darkTheme = window.matchMedia("(prefers-color-scheme: dark)").matches;
let switcher = document.querySelector(".sw");
let root = document.getElementsByTagName('html')[0];
let metaColor = document.querySelector('meta[name="theme-color"]');

if (localStorage.getItem("theme") == 'dark') {
  root.classList.add("dark-theme");
  metaColor.setAttribute("content", "#161821")
} else {
  root.classList.add("light-theme");
  metaColor.setAttribute("content", "#E8E9EC")
}

switcher.addEventListener("click", function () {
  if (root.classList.contains('dark-theme')) {
    root.classList.remove("dark-theme");
    root.classList.add("light-theme");
    metaColor.setAttribute("content", "#E8E9EC")
    localStorage.setItem("theme", "light");
  } else {
    root.classList.remove("light-theme");
    root.classList.add("dark-theme");
    localStorage.setItem("theme", "dark");
    metaColor.setAttribute("content", "#161821")
  }
});