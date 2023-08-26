hljs.highlightAll();


// const cards = document.querySelectorAll('.shiny')

// for (let i = 0; i < cards.length; i++) {
//   cards[i].addEventListener('mousemove', (e) => {
//     const { x, y } = cards[i].getBoundingClientRect()
//     cards[i].style.setProperty("--x", e.clientX - x)
//     cards[i].style.setProperty("--y", e.clientY - y)
//   });
// }

// VanillaTilt.init(document.querySelectorAll(".grid-slot"), {
//   max: 5,
//   speed: 400,
//   glare: true,
//   "max-glare": 0.4,
//   gyroscope: true,
//   gyroscopeMinAngleX: -45,
//   gyroscopeMaxAngleX: 45,
//   gyroscopeMinAngleY: -45,
//   gyroscopeMaxAngleY: 45
// });

let shuffleText = document.querySelectorAll('.shuffle');
for (var i = 0; i < shuffleText.length; i++) {
  shuffleText[i].hidden = false;
}

shuffleLetters(shuffleText);


// let container = document.querySelector("#grid-container");
// let html = '';

// if (container) {
//   fetch('https://api.dribbble.com/v2/user/shots?access_token=627b0fac077b5b6f3dcafec723409a4eb98a2b09456afee83b804d54655f2967')
//   .then(response => response.json())
//   .then(data => {
//     data.forEach(shot => {
//       let shotHtml = `
//         <div class="slot">
//           <a href="${shot.html_url}" target="_blank" title="${shot.title}">
//             <figure>
//               <img src="${shot.images.normal}" alt="${shot.title}" width="400" height="300" data-id="${shot.id}">
//             </figure>
//           </a>
//         </div>
//       `;

//       html += shotHtml;
//     });

//     container.innerHTML = html;
//   });
// }


// themes

// let darkTheme = window.matchMedia("(prefers-color-scheme: dark)").matches;
// let switcher = document.querySelector(".sw");
// let root = document.getElementsByTagName('html')[0];
// let metaColor = document.querySelector('meta[name="theme-color"]');

// if (localStorage.getItem("theme") == 'dark') {
//   root.classList.add("dark-theme");
//   metaColor.setAttribute("content", "#161616")
// } else {
//   root.classList.add("dark-theme");
//   metaColor.setAttribute("content", "#e3e3e3")
// }

// switcher.addEventListener("click", function () {
//   if (root.classList.contains('dark-theme')) {
//     root.classList.remove("dark-theme");
//     root.classList.add("light-theme");
//     metaColor.setAttribute("content", "#E8E9EC")
//     localStorage.setItem("theme", "light");
//   } else {
//     root.classList.remove("light-theme");
//     root.classList.add("dark-theme");
//     localStorage.setItem("theme", "dark");
//     metaColor.setAttribute("content", "#161821")
//   }
// });

// register service work

if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/sw.js').then(function(reg) {
    console.log('Yey!', reg);
  }).catch(function(err) {
    console.log('Boo!', err);
  });
}

let menu = document.querySelector('.navigation'),
    open = document.getElementById("open-menu");

    open.onclick = function() {
        menu.classList.toggle("openned");
    };

// Fancybox
let linkImage = document.querySelector("a[data-fancybox]");

if (linkImage) {
  Fancybox.bind("[data-fancybox]", {
  // Your custom options
  });
}

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
            el.classList.add('makeMeAppear')
        }
    }
}


const apply = () => {
    showVisible()
}

window.addEventListener('scroll', apply)
apply()