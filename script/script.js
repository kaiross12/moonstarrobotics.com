document.addEventListener('DOMContentLoaded', function() {
  // Elemanları seç
  const myElement = document.getElementById('myElementId');
  const loadingScreen = document.querySelector('.loading-screen');
  const menuToggle = document.getElementById('menu-toggle');
  const dropdownMenu = document.getElementById('dropdown-menu');
  const langButton = document.getElementById('lang-button');
  const langMenu = document.getElementById('lang-menu');

  // Elemanların varlığını kontrol et
  if (myElement) {
      myElement.onclick = function() {
          // Tıklama işlemleri
      };
  } else {
      console.error('Element not found');
  }

  // Show the loading screen
  if (loadingScreen) {
      loadingScreen.style.display = 'flex';

      // Hide the loading screen after 1 second
      setTimeout(function() {
          loadingScreen.style.display = 'none';
      }, 1000);
  }

  if (menuToggle) {
      menuToggle.onclick = function(event) {
          event.stopPropagation(); // Tıklama olayını durdur
          if (dropdownMenu) {
              dropdownMenu.style.display = (dropdownMenu.style.display === 'block') ? 'none' : 'block';
          }
      };
  }

  // Dropdown menüyü başlangıçta gizle
  if (dropdownMenu) {
      dropdownMenu.style.display = 'none';
  }

  // Lang Menü Etkileşimleri
  if (langButton) {
      langButton.onclick = function(event) {
          event.stopPropagation(); // Tıklama olayını durdur
          if (langMenu) {
              langMenu.style.display = (langMenu.style.display === 'block') ? 'none' : 'block';
          }
      };
  }

  // Sayfa dışına tıkladığınızda dropdown menüyü kapatmak için
  window.onclick = function(event) {
      // Eğer tıklanan element menu-toggle veya dropdown menüsü değilse
      if (!event.target.matches('#menu-toggle') && !event.target.closest('#dropdown-menu')) {
          const dropdowns = document.getElementsByClassName("dropdown-content");
          for (let i = 0; i < dropdowns.length; i++) {
              const openDropdown = dropdowns[i];
              if (openDropdown.style.display === 'block') {
                  openDropdown.style.display = 'none';
              }
          }
      }

      // Eğer tıklanan element lang-button veya lang-menu değilse
      if (!event.target.matches('#lang-button') && !event.target.closest('#lang-menu')) {
          if (langMenu) {
              langMenu.style.display = 'none';
          }
      }
  };
});

window.addEventListener('scroll', function() {
  const header = document.querySelector('.header');
  if (window.scrollY > 50) { // 50px'den fazla kaydırıldığında
      header.classList.add('scrolled');
  } else {
      header.classList.remove('scrolled');
  }
});

document.addEventListener('DOMContentLoaded', function() {
  const sections = document.querySelectorAll('section'); // 'section' class'ı ile seçiyoruz
  const navLinks = document.querySelectorAll('.navbar a'); // '.navbar a' ile navigasyon bağlantılarını seçiyoruz

  window.addEventListener('scroll', () => {
      let scrollPosition = document.documentElement.scrollTop || document.body.scrollTop;
      const offset = 400; // Aktifliğin başlaması için kullanılacak offset

      sections.forEach((section, index) => {
          const sectionTop = section.offsetTop;

          // Section'un üst kısmından belirli bir offset kadar yukarıda aktif olmasını sağlamak için
          if (scrollPosition >= sectionTop - offset && scrollPosition < sectionTop + section.clientHeight) {
              navLinks.forEach(link => link.classList.remove('active')); // Tüm bağlantılardan 'active' sınıfını kaldır
              navLinks[index].classList.add('active'); // Görüntüdeki section'a karşılık gelen bağlantıya 'active' sınıfını ekle
          }
      });
  });
});