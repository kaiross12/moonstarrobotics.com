let slides = document.querySelectorAll('.slide');
let currentSlide = 0;

document.querySelector('.next').addEventListener('click', () => {
  clearInterval(intervalId);
  currentSlide = (currentSlide + 1) % slides.length;
  updateSlide();
  intervalId = setInterval(() => {
    currentSlide = (currentSlide + 1) % slides.length;
    updateSlide();
  }, 15000);
});

document.querySelector('.prev').addEventListener('click', () => {
  clearInterval(intervalId);
  currentSlide--;
  if (currentSlide < 0) {
    currentSlide = slides.length - 1;
  }
  updateSlide();
  intervalId = setInterval(() => {
    currentSlide = (currentSlide + 1) % slides.length;
    updateSlide();
  }, 15000);
});

function updateSlide() {
  slides.forEach((slide, index) => {
    slide.classList.remove('active');
    if (index === currentSlide) {
      slide.classList.add('active');
    }
  });
  updateDots();
}

function updateDots() {
  const dots = document.querySelector('.dots');
  dots.innerHTML = '';
  for (let i = 0; i < slides.length; i++) {
    const dot = document.createElement('span');
    dot.classList.add('dot');
    if (i === currentSlide) {
      dot.classList.add('active');
    }
    dots.appendChild(dot);
  }
}

let intervalId = setInterval(() => {
  currentSlide = (currentSlide + 1) % slides.length;
  updateSlide();
}, 10000);

document.addEventListener("DOMContentLoaded", function() {
  document.querySelector('.slide').classList.add('active');
  updateDots();
  // Close the dropdown menu when the page loads
  var dropdowns = document.getElementsByClassName("dropdown-content");
  for (var i = 0; i < dropdowns.length; i++) {
    var openDropdown = dropdowns[i];
    openDropdown.style.display = 'none';
  }
});

// İlk slaytı göster
updateSlide();

// Show the loading screen
document.querySelector('.loading-screen').style.display = 'flex'

// Hide the loading screen after 3 seconds
setTimeout(function() {
  document.querySelector('.loading-screen').style.display = 'none';
}, 3000);

document.getElementById('menu-toggle').onclick = function() {
  var dropdown = document.getElementById('dropdown-menu');
  if (dropdown.style.display === 'block') {
    dropdown.style.display = 'none';
  } else {
    dropdown.style.display = 'block';
  }
};

document.getElementById('menu-toggle').onclick = function() {
  var dropdown = document.getElementById('dropdown-menu');
  if (dropdown.style.display === 'block') {
    dropdown.style.display = 'none';
  } else {
    dropdown.style.display = 'block';
  }
};

// Sayfa dışına tıkladığınızda dropdown menüyü kapatmak için
window.onclick = function(event) {
  if (!event.target.matches('#menu-toggle') && !event.target.closest('#menu-toggle')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    for (var i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.style.display === 'block') {
        openDropdown.style.display = 'none';
      }
    }
  }
};

// Lang Menü Etkileşimleri
document.getElementById('lang-button').onclick = function() {
  var dropdown = document.getElementById('lang-menu');
  if (dropdown.style.display === 'block') {
    dropdown.style.display = 'none';
  } else {
    dropdown.style.display = 'block';
  }
};

// Sayfa dışına tıkladığınızda dropdown menüyü kapatmak için
window.onclick = function(event) {
  if (!event.target.matches('#lang-button') && !event.target.closest('#lang-button')) {
    var dropdowns = document.getElementsByClassName("lang-content");
    for (var i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.style.display === 'block') {
        openDropdown.style.display = 'none';
      }
    }
  }
};