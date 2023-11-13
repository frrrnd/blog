hljs.highlightAll();

let shuffleText = document.querySelectorAll('.shuffle');
for (var i = 0; i < shuffleText.length; i++) {
  shuffleText[i].hidden = false;
}

shuffleLetters(shuffleText);

// themes
let darkTheme = window.matchMedia("(prefers-color-scheme: dark)").matches;
let switcher = document.querySelector(".sw");
let root = document.getElementsByTagName('html')[0];
let metaColor = document.querySelector('meta[name="theme-color"]');
let themeIcon = document.querySelector('.theme-icon svg');

if (localStorage.getItem("theme") == 'dark') {
  root.classList.add("dark-theme");
  metaColor.setAttribute("content", "#101010");
  themeIcon.style.transform = "translateY(0)";
} else {
  root.classList.add("light-theme");
  metaColor.setAttribute("content", "#f3f3f3");
  themeIcon.style.transform = "translateY(-32px)";
}

switcher.addEventListener("click", function () {
  if (root.classList.contains('dark-theme')) {
    root.classList.remove("dark-theme");
    root.classList.add("light-theme");
    metaColor.setAttribute("content", "#E8E9EC");
    localStorage.setItem("theme", "light");
    themeIcon.style.transform = "translateY(-32px)";
  } else {
    root.classList.remove("light-theme");
    root.classList.add("dark-theme");
    localStorage.setItem("theme", "dark");
    metaColor.setAttribute("content", "#161821");
    themeIcon.style.transform = "translateY(0)";
  }
});

// register service work
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/sw.js').then(function(reg) {
    console.log('Yey!', reg);
  }).catch(function(err) {
    console.log('Boo!', err);
  });
}

// Fancybox
let linkImage = document.querySelector("a[data-fancybox]");
if (linkImage) {
  Fancybox.bind("[data-fancybox]", {
  // Your custom options
  });
}

// Gallery

let galleryImage = document.querySelector('[data-fancybox="gallery"]');
if (galleryImage) {
  Fancybox.bind('[data-fancybox="gallery"]', {
    Thumbs: {
      type: "modern"
    }
  });
}

// Carousel
let carouselComponent = document.querySelector('#carousel');
const carouselOptions = { axis: "y"};

if (carouselComponent) {
  new Carousel(carouselComponent);
}

// GSAP

// let portfolioItems = gsap.utils.toArray('.portfolio__item:not(:last-child)');

// portfolioItems.forEach((portfolioItem) => {
//   gsap.to(portfolioItem, { autoAlpha: 0,
//   scrollTrigger: {
//     trigger: portfolioItem,
//     start: 'top top+=80',
//     scrub: true,
//     end: '+=500',
//     markers: false,
//     pin: false
//   }
//   });
// })