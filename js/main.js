/**
 * ==========================================================================
 * PORTAFOLIO PROFESIONAL - SANTIAGO DONCEL GALVIS
 * Script Principal: Navegación, Animaciones Suaves y Visor Lightbox
 * ==========================================================================
 */

document.addEventListener('DOMContentLoaded', () => {
  initNavbar();
  initActiveLinks();
  initScrollAnimations();
  initLightbox();
});

/**
 * 1. Barra de Navegación Sticky & Menú Móvil
 */
function initNavbar() {
  const header = document.querySelector('.main-header');
  const toggleBtn = document.querySelector('.mobile-nav-toggle');
  const navMenu = document.querySelector('.nav-menu');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 25) {
      header?.classList.add('scrolled');
    } else {
      header?.classList.remove('scrolled');
    }
  });

  if (toggleBtn && navMenu) {
    toggleBtn.addEventListener('click', () => {
      const isOpen = navMenu.classList.toggle('open');
      toggleBtn.setAttribute('aria-expanded', isOpen);
      toggleBtn.innerHTML = isOpen 
        ? '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>'
        : '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>';
    });

    navMenu.querySelectorAll('.nav-link').forEach(link => {
      link.addEventListener('click', () => {
        navMenu.classList.remove('open');
        toggleBtn.setAttribute('aria-expanded', 'false');
      });
    });
  }
}

/**
 * 2. Detección de Página Activa
 */
function initActiveLinks() {
  const currentPath = window.location.pathname.split('/').pop() || 'index.html';
  const navLinks = document.querySelectorAll('.nav-link');

  navLinks.forEach(link => {
    const linkPath = link.getAttribute('href');
    if (linkPath === currentPath || (currentPath === '' && linkPath === 'index.html')) {
      link.classList.add('active');
    } else if (linkPath && currentPath.endsWith(linkPath)) {
      link.classList.add('active');
    }
  });
}

/**
 * 3. Animaciones al Scroll (Intersection Observer)
 */
function initScrollAnimations() {
  const animatedElements = document.querySelectorAll('.animate-on-scroll');

  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-up');
          obs.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.12,
      rootMargin: '0px 0px -30px 0px'
    });

    animatedElements.forEach(el => observer.observe(el));
  } else {
    animatedElements.forEach(el => el.classList.add('animate-fade-up'));
  }
}

/**
 * 4. Lightbox Modal para Fotografías y Certificados
 */
function initLightbox() {
  const modal = document.getElementById('imageLightbox');
  const modalImg = document.getElementById('lightboxImg');
  const modalCaption = document.getElementById('lightboxCaption');
  const closeBtn = document.querySelector('.lightbox-close');
  const triggers = document.querySelectorAll('[data-lightbox]');

  if (!modal || !modalImg) return;

  triggers.forEach(trigger => {
    trigger.addEventListener('click', (e) => {
      // Si el trigger es un enlace o tiene data-lightbox-src
      const imgSrc = trigger.getAttribute('data-lightbox-src') || trigger.querySelector('img')?.src;
      const captionText = trigger.getAttribute('data-lightbox-caption') || trigger.querySelector('figcaption')?.innerText || '';

      if (imgSrc) {
        modalImg.src = imgSrc;
        if (modalCaption) modalCaption.textContent = captionText;
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
      }
    });
  });

  const closeModal = () => {
    modal.classList.remove('active');
    document.body.style.overflow = '';
  };

  closeBtn?.addEventListener('click', closeModal);
  modal.addEventListener('click', (e) => {
    if (e.target === modal) closeModal();
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('active')) {
      closeModal();
    }
  });
}
