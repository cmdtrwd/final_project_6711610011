// Sticky Navbar logic (Hide on scroll down, show on scroll up)
let lastScrollY = window.scrollY;
const navbar = document.getElementById('navbar');

window.addEventListener('scroll', () => {
  if (window.scrollY > lastScrollY && window.scrollY > 100) {
    // Scroll down & past hero top
    navbar.classList.add('hidden-nav');
  } else {
    // Scroll up
    navbar.classList.remove('hidden-nav');
  }
  lastScrollY = window.scrollY;
});

// Mobile menu toggle
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

if(hamburger) {
  hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
  });
}

// Close mobile menu on click
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('active');
  });
});

// Scroll Reveal Animations using Intersection Observer
const observerOptions = {
  root: null,
  rootMargin: '0px',
  threshold: 0.15
};

const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
      observer.unobserve(entry.target);
    }
  });
}, observerOptions);

document.querySelectorAll('.hidden').forEach((element) => {
  observer.observe(element);
});

// // ===== DRAG TO SCROLL =====
// const wrapper = document.getElementById('scrollWrapper');
// let isDown = false;
// let startX;
// let scrollLeft;
//
// wrapper.addEventListener('mousedown', (e) => {
//   isDown = true;
//   wrapper.classList.add('grabbing');
//   startX = e.pageX - wrapper.offsetLeft;
//   scrollLeft = wrapper.scrollLeft;
// });
//
// wrapper.addEventListener('mouseleave', () => {
//   isDown = false;
//   wrapper.classList.remove('grabbing');
// });
//
// wrapper.addEventListener('mouseup', () => {
//   isDown = false;
//   wrapper.classList.remove('grabbing');
// });
//
// wrapper.addEventListener('mousemove', (e) => {
//   if (!isDown) return;
//   e.preventDefault();
//   const x = e.pageX - wrapper.offsetLeft;
//   wrapper.scrollLeft = scrollLeft - (x - startX) * 1.5;
// });
//
// // ===== TOUCH SUPPORT (สำหรับ horizontal scroll) =====
// let touchStartX = 0;
//
// wrapper.addEventListener('touchstart', (e) => {
//   touchStartX = e.touches[0].clientX;
// }, { passive: true });
//
// wrapper.addEventListener('touchmove', (e) => {
//   const dx = touchStartX - e.touches[0].clientX;
//   wrapper.scrollLeft += dx * 0.8;
//   touchStartX = e.touches[0].clientX;
// }, { passive: true });
//
// // ===== ARROW BUTTONS =====
// document.getElementById('scrollLeft').addEventListener('click', () => {
//   wrapper.scrollBy({ left: -300, behavior: 'smooth' });
// });
//
// document.getElementById('scrollRight').addEventListener('click', () => {
//   wrapper.scrollBy({ left: 300, behavior: 'smooth' });
// });
//
// // ===== VIDEO MODAL =====
// const overlay = document.getElementById('modalOverlay');
// const iframe = document.getElementById('modalIframe');
// const modalTitle = document.getElementById('modalTitle');
// const modalArtist = document.getElementById('modalArtist');
//
// // Open modal on card click
// document.querySelectorAll('.song-card').forEach((card) => {
//   card.addEventListener('click', () => {
//     iframe.src = card.dataset.video + '?autoplay=1';
//     modalTitle.textContent = card.dataset.title;
//     modalArtist.textContent = card.dataset.artist;
//     overlay.classList.add('open');
//     document.body.style.overflow = 'hidden';
//   });
// });
//
// // Close modal
// function closeModal() {
//   overlay.classList.remove('open');
//   iframe.src = '';
//   document.body.style.overflow = '';
// }
//
// document.getElementById('modalClose').addEventListener('click', closeModal);
//
// // Click outside modal box to close
// overlay.addEventListener('click', (e) => {
//   if (e.target === overlay) closeModal();
// });
//
// // ESC key to close
// document.addEventListener('keydown', (e) => {
//   if (e.key === 'Escape') closeModal();
// });
