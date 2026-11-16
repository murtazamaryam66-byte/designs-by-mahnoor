/* ==========================================================================
   DBM – Designs by Mahnoor | Portfolio JavaScript (Vanilla JS)
   ========================================================================== */

/* 1. EASY-TO-UPDATE CONTACT DETAILS */
const SITE_CONTACT = {
  email: 'noorayy384@gmail.com',
  emailSubject: 'New Graphic Design Inquiry – DBM',
  whatsappNumber: '923712376637',
  instagramUrl: 'https://www.instagram.com/designbymahnoor_official/'
};

/* 2. PORTFOLIO ITEMS (Update titles, categories, or image filenames here) */
const portfolioItems = [
  {
    id: 1,
    number: '01',
    title: 'Deazur — Statement Pieces Pearl Editorial',
    category: 'fashion-beauty',
    categoryLabel: 'Fashion & Beauty',
    image: 'assets/images/design-01.jpg'
  },
  {
    id: 2,
    number: '02',
    title: 'Nohra Fine Jewellery — Made to Captivate',
    category: 'fashion-beauty',
    categoryLabel: 'Fashion & Beauty',
    image: 'assets/images/design-02.jpg'
  },
  {
    id: 3,
    number: '03',
    title: 'Deazur — Timeless Elegance Emerald Edition',
    category: 'fashion-beauty',
    categoryLabel: 'Fashion & Beauty',
    image: 'assets/images/design-03.jpg'
  },
  {
    id: 4,
    number: '04',
    title: 'Vogue Vol. 01 — Modern Beauty & Sunglasses',
    category: 'fashion-beauty',
    categoryLabel: 'Fashion & Beauty',
    image: 'assets/images/design-04.jpg'
  },
  {
    id: 5,
    number: '05',
    title: 'Vogue Couture — Untamed Elegance',
    category: 'fashion-beauty',
    categoryLabel: 'Fashion & Beauty',
    image: 'assets/images/design-05.jpg'
  },
  {
    id: 6,
    number: '06',
    title: 'Fashion Week — Special Collection Poster',
    category: 'fashion-beauty',
    categoryLabel: 'Fashion & Beauty',
    image: 'assets/images/design-06.jpg'
  },
  {
    id: 7,
    number: '07',
    title: 'Vogue — Essence & Elegance Cover',
    category: 'fashion-beauty',
    categoryLabel: 'Fashion & Beauty',
    image: 'assets/images/design-07.jpg'
  },
  {
    id: 8,
    number: '08',
    title: 'Fashion Collection — Split Editorial Poster',
    category: 'fashion-beauty',
    categoryLabel: 'Fashion & Beauty',
    image: 'assets/images/design-08.jpg'
  },
  {
    id: 9,
    number: '09',
    title: 'Glamour — A Touch of Elegance',
    category: 'fashion-beauty',
    categoryLabel: 'Fashion & Beauty',
    image: 'assets/images/design-09.jpg'
  },
  {
    id: 10,
    number: '10',
    title: 'Fashion Diaries — Less Perfection, More Authenticity',
    category: 'fashion-beauty',
    categoryLabel: 'Fashion & Beauty',
    image: 'assets/images/design-10.jpg'
  },
  {
    id: 11,
    number: '11',
    title: 'Vogue Vol. 19 — Fashion Special Cover',
    category: 'fashion-beauty',
    categoryLabel: 'Fashion & Beauty',
    image: 'assets/images/design-11.jpg'
  },
  {
    id: 12,
    number: '12',
    title: 'Vogue 2026 — Style Speaks Louder',
    category: 'fashion-beauty',
    categoryLabel: 'Fashion & Beauty',
    image: 'assets/images/design-12.jpg'
  },
  {
    id: 13,
    number: '13',
    title: 'Bold & Tasty Burger — 20% Off Promo',
    category: 'food-restaurants',
    categoryLabel: 'Food & Restaurants',
    image: 'assets/images/design-13.jpg'
  },
  {
    id: 14,
    number: '14',
    title: 'Iced Milk Trio — Weekly 50% Deal',
    category: 'food-restaurants',
    categoryLabel: 'Food & Restaurants',
    image: 'assets/images/design-14.jpg'
  },
  {
    id: 15,
    number: '15',
    title: 'Noor Cafe — Special Coffee & Hours Banner',
    category: 'food-restaurants',
    categoryLabel: 'Food & Restaurants',
    image: 'assets/images/design-15.jpg'
  },
  {
    id: 16,
    number: '16',
    title: 'Crispy Fries — Too Hot To Handle',
    category: 'food-restaurants',
    categoryLabel: 'Food & Restaurants',
    image: 'assets/images/design-16.jpg'
  },
  {
    id: 17,
    number: '17',
    title: 'AlphaH Vitamin E Serum — Winter Skincare Sale',
    category: 'products-advertising',
    categoryLabel: 'Products & Advertising',
    image: 'assets/images/design-17.jpg'
  },
  {
    id: 18,
    number: '18',
    title: 'Luxe Noir Cosmetics — New Product Launch',
    category: 'products-advertising',
    categoryLabel: 'Products & Advertising',
    image: 'assets/images/design-18.jpg'
  },
  {
    id: 19,
    number: '19',
    title: 'New Year Dream Destinations — Multi-Country Flyer',
    category: 'travel-lifestyle',
    categoryLabel: 'Travel & Lifestyle',
    image: 'assets/images/design-19.jpg'
  },
  {
    id: 20,
    number: '20',
    title: 'Make The World Your Home — Traveler Romania Spread',
    category: 'travel-lifestyle',
    categoryLabel: 'Travel & Lifestyle',
    image: 'assets/images/design-20.jpg'
  },
  {
    id: 21,
    number: '21',
    title: 'Discover Romania — Rasnov Tour Package Spread',
    category: 'travel-lifestyle',
    categoryLabel: 'Travel & Lifestyle',
    image: 'assets/images/design-21.jpg'
  },
  {
    id: 22,
    number: '22',
    title: 'Discover Turkey — 35% Off Tour Flyer',
    category: 'travel-lifestyle',
    categoryLabel: 'Travel & Lifestyle',
    image: 'assets/images/design-22.jpg'
  },
  {
    id: 23,
    number: '23',
    title: 'Complete E-Commerce Course With Shopify',
    category: 'educational-business',
    categoryLabel: 'Educational & Business',
    image: 'assets/images/design-23.jpg'
  },
  {
    id: 24,
    number: '24',
    title: 'Digital Marketing — Grow Your Business With Us',
    category: 'educational-business',
    categoryLabel: 'Educational & Business',
    image: 'assets/images/design-24.jpg'
  }
];

/* Wait until the HTML page is fully loaded */
document.addEventListener('DOMContentLoaded', function () {
  // Page Elements
  const portfolioGrid = document.getElementById('portfolioGrid');
  const portfolioCount = document.getElementById('portfolioCount');
  const filterButtons = document.querySelectorAll('.filter-btn');

  // Lightbox Elements
  const lightboxModal = document.getElementById('lightboxModal');
  const lightboxImage = document.getElementById('lightboxImage');
  const lightboxTitle = document.getElementById('lightboxTitle');
  const lightboxCategory = document.getElementById('lightboxCategory');
  const lightboxCounter = document.getElementById('lightboxCounter');
  const lightboxFileNote = document.getElementById('lightboxFileNote');
  const lightboxCloseBtn = document.getElementById('lightboxCloseBtn');
  const lightboxPrevBtn = document.getElementById('lightboxPrevBtn');
  const lightboxNextBtn = document.getElementById('lightboxNextBtn');
  const lightboxInquireBtn = document.getElementById('lightboxInquireBtn');

  // Contact Form Elements
  const contactForm = document.getElementById('contactForm');
  const contactName = document.getElementById('contactName');
  const contactEmail = document.getElementById('contactEmail');
  const contactDetails = document.getElementById('contactDetails');
  const mailtoNotice = document.getElementById('mailtoNotice');
  const mailtoFallbackLink = document.getElementById('mailtoFallbackLink');

  // Navigation & Footer Elements
  const backToTopBtn = document.getElementById('backToTopBtn');
  const currentYearEl = document.getElementById('currentYear');
  const navbarCollapseEl = document.getElementById('primaryNavbar');

  // State Variables
  let currentCategory = 'all';
  let activeLightboxList = portfolioItems;
  let activeLightboxIndex = 0;
  let lastClickedButton = null;

  /* ------------------------------------------------------------------------
     A. Dynamic Copyright Year
  ------------------------------------------------------------------------ */
  if (currentYearEl) {
    currentYearEl.textContent = String(new Date().getFullYear());
  }

  /* ------------------------------------------------------------------------
     B. Render Portfolio Gallery & Category Filtering
  ------------------------------------------------------------------------ */
  function renderPortfolio(selectedCategory) {
    if (!portfolioGrid) return;

    // Filter items based on selected category button
    const visibleItems =
      selectedCategory === 'all'
        ? portfolioItems
        : portfolioItems.filter(function (item) {
            return item.category === selectedCategory;
          });

    // Clear existing cards and adjust column count for smaller groups
    portfolioGrid.innerHTML = '';
    portfolioGrid.classList.toggle('is-compact', visibleItems.length <= 4);

    if (portfolioCount) {
      portfolioCount.textContent =
        'Showing ' + visibleItems.length + ' of ' + portfolioItems.length + ' designs';
    }

    // Build and insert each portfolio card
    visibleItems.forEach(function (item, index) {
      const card = document.createElement('article');
      card.className = 'portfolio-card';

      card.innerHTML =
        '<button type="button" class="portfolio-trigger" aria-label="Open ' +
        item.title +
        ' in lightbox">' +
        '  <div class="portfolio-media">' +
        '    <img src="' +
        item.image +
        '" alt="' +
        item.title +
        ' — ' +
        item.categoryLabel +
        ' graphic design by Mahnoor" loading="lazy">' +
        '    <div class="portfolio-hover-overlay">' +
        '      <span class="portfolio-zoom-hint"><i class="bi bi-arrows-angle-expand" aria-hidden="true"></i> Inspect</span>' +
        '    </div>' +
        '  </div>' +
        '  <div class="portfolio-caption">' +
        '    <div class="portfolio-meta">' +
        '      <span>' +
        item.number +
        '</span>' +
        '      <span class="portfolio-meta-sep" aria-hidden="true">&middot;</span>' +
        '      <span>' +
        item.categoryLabel +
        '</span>' +
        '    </div>' +
        '    <h3 class="portfolio-title">' +
        item.title +
        '</h3>' +
        '  </div>' +
        '</button>';

      const triggerBtn = card.querySelector('.portfolio-trigger');
      if (triggerBtn) {
        triggerBtn.addEventListener('click', function () {
          openLightbox(visibleItems, index, triggerBtn);
        });
      }

      portfolioGrid.appendChild(card);
    });
  }

  // Handle category filter clicks
  filterButtons.forEach(function (button) {
    button.addEventListener('click', function () {
      const chosenCategory = button.getAttribute('data-filter') || 'all';
      if (chosenCategory === currentCategory) return;

      currentCategory = chosenCategory;

      filterButtons.forEach(function (otherBtn) {
        const isSelected = otherBtn === button;
        otherBtn.classList.toggle('active', isSelected);
        otherBtn.setAttribute('aria-pressed', isSelected ? 'true' : 'false');
      });

      renderPortfolio(currentCategory);
    });
  });

  // Load all designs on first page load
  renderPortfolio('all');

  /* ------------------------------------------------------------------------
     C. Image Lightbox Modal
  ------------------------------------------------------------------------ */
  function updateLightboxContent() {
    const item = activeLightboxList[activeLightboxIndex];
    if (!item || !lightboxImage) return;

    if (lightboxImage instanceof HTMLImageElement) {
      lightboxImage.src = item.image;
      lightboxImage.alt = item.title + ' — ' + item.categoryLabel + ' graphic design by Mahnoor';
    }

    if (lightboxTitle) lightboxTitle.textContent = item.title;
    if (lightboxCategory) lightboxCategory.textContent = item.categoryLabel;
    if (lightboxFileNote) {
      lightboxFileNote.textContent = 'DBM – Designs by Mahnoor · ' + item.categoryLabel;
    }

    if (lightboxCounter) {
      const currentNum = String(activeLightboxIndex + 1).padStart(2, '0');
      const totalNum = String(activeLightboxList.length).padStart(2, '0');
      lightboxCounter.textContent = currentNum + ' / ' + totalNum;
    }
  }

  function openLightbox(itemsList, index, clickedButton) {
    if (!lightboxModal) return;

    activeLightboxList = itemsList;
    activeLightboxIndex = index;
    lastClickedButton = clickedButton || null;

    updateLightboxContent();

    lightboxModal.hidden = false;
    document.body.style.overflow = 'hidden';

    window.requestAnimationFrame(function () {
      lightboxModal.classList.add('is-open');
      if (lightboxCloseBtn) lightboxCloseBtn.focus();
    });
  }

  function closeLightbox() {
    if (!lightboxModal || lightboxModal.hidden) return;

    lightboxModal.classList.remove('is-open');
    document.body.style.overflow = '';

    window.setTimeout(function () {
      lightboxModal.hidden = true;
      if (lastClickedButton && typeof lastClickedButton.focus === 'function') {
        lastClickedButton.focus();
      }
    }, 180);
  }

  function showPreviousDesign() {
    if (activeLightboxList.length <= 1) return;
    activeLightboxIndex =
      (activeLightboxIndex - 1 + activeLightboxList.length) % activeLightboxList.length;
    updateLightboxContent();
  }

  function showNextDesign() {
    if (activeLightboxList.length <= 1) return;
    activeLightboxIndex = (activeLightboxIndex + 1) % activeLightboxList.length;
    updateLightboxContent();
  }

  // Lightbox button & keyboard controls
  document.querySelectorAll('[data-lightbox-close]').forEach(function (el) {
    el.addEventListener('click', closeLightbox);
  });

  if (lightboxPrevBtn) lightboxPrevBtn.addEventListener('click', showPreviousDesign);
  if (lightboxNextBtn) lightboxNextBtn.addEventListener('click', showNextDesign);

  // Open lightbox when clicking Hero showcase cards
  document.querySelectorAll('[data-design-id]').forEach(function (heroBtn) {
    heroBtn.addEventListener('click', function () {
      const designId = Number(heroBtn.getAttribute('data-design-id'));
      const foundIndex = portfolioItems.findIndex(function (item) {
        return item.id === designId;
      });
      openLightbox(portfolioItems, foundIndex >= 0 ? foundIndex : 0, heroBtn);
    });
  });

  // Inquire about a design from inside the Lightbox
  if (lightboxInquireBtn) {
    lightboxInquireBtn.addEventListener('click', function () {
      const currentItem = activeLightboxList[activeLightboxIndex];
      closeLightbox();

      if (currentItem && contactDetails instanceof HTMLTextAreaElement) {
        contactDetails.value =
          'Hello Mahnoor, I would like to inquire about a design similar to "' +
          currentItem.title +
          '" (' +
          currentItem.categoryLabel +
          ').';
        contactDetails.classList.remove('is-invalid');
      }

      scrollToSection('#contact');
      window.setTimeout(function () {
        if (contactName) contactName.focus();
      }, 450);
    });
  }

  document.addEventListener('keydown', function (event) {
    if (!lightboxModal || lightboxModal.hidden) return;
    if (event.key === 'Escape') closeLightbox();
    if (event.key === 'ArrowLeft') showPreviousDesign();
    if (event.key === 'ArrowRight') showNextDesign();
  });

  /* ------------------------------------------------------------------------
     D. Smooth Scrolling, Mobile Menu Close & Service Links
  ------------------------------------------------------------------------ */
  function scrollToSection(selector) {
    const targetSection = document.querySelector(selector);
    if (!targetSection) return;

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    targetSection.scrollIntoView({
      behavior: reduceMotion ? 'auto' : 'smooth',
      block: 'start'
    });
  }

  function closeMobileMenu() {
    if (!navbarCollapseEl || !navbarCollapseEl.classList.contains('show')) return;
    const bootstrapLib = window['bootstrap'];
    if (bootstrapLib && bootstrapLib.Collapse) {
      bootstrapLib.Collapse.getOrCreateInstance(navbarCollapseEl).hide();
    }
  }

  document.querySelectorAll('a[href^="#"]').forEach(function (link) {
    link.addEventListener('click', function (event) {
      const href = link.getAttribute('href');
      if (!href || href === '#') return;

      const target = document.querySelector(href);
      if (!target) return;

      event.preventDefault();
      closeMobileMenu();

      // If user clicked "Contact Me" inside a Service card, prefill Project Details
      const serviceName = link.getAttribute('data-service');
      if (serviceName && contactDetails instanceof HTMLTextAreaElement) {
        contactDetails.value =
          'Hello Mahnoor, I am interested in "' +
          serviceName +
          '" for my project. Here are a few details: ';
        contactDetails.classList.remove('is-invalid');
      }

      scrollToSection(href);

      if (serviceName && contactName) {
        window.setTimeout(function () {
          contactName.focus();
        }, 450);
      }
    });
  });

  /* ------------------------------------------------------------------------
     E. Active Nav Highlight & Back-to-Top Button
  ------------------------------------------------------------------------ */
  const navLinks = document.querySelectorAll('.site-header .nav-link');
  const pageSections = ['home', 'about', 'portfolio', 'services', 'contact']
    .map(function (id) {
      return document.getElementById(id);
    })
    .filter(Boolean);

  function handleScroll() {
    const scrollPosition = window.scrollY || window.pageYOffset;

    if (backToTopBtn) {
      backToTopBtn.classList.toggle('is-visible', scrollPosition > 380);
    }

    let activeSectionId = 'home';
    const triggerPoint = scrollPosition + 140;

    pageSections.forEach(function (section) {
      if (section && triggerPoint >= section.offsetTop) {
        activeSectionId = section.id;
      }
    });

    navLinks.forEach(function (navLink) {
      const linkHref = navLink.getAttribute('href');
      navLink.classList.toggle('active', linkHref === '#' + activeSectionId);
    });
  }

  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll();

  if (backToTopBtn) {
    backToTopBtn.addEventListener('click', function () {
      const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      window.scrollTo({
        top: 0,
        behavior: reduceMotion ? 'auto' : 'smooth'
      });
    });
  }

  /* ------------------------------------------------------------------------
     F. Scroll Reveal Animations
  ------------------------------------------------------------------------ */
  const revealItems = document.querySelectorAll('.reveal-on-scroll');
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if ('IntersectionObserver' in window && !reduceMotion) {
    document.documentElement.classList.add('js-reveal-ready');

    const observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-revealed');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.08 }
    );

    revealItems.forEach(function (el) {
      observer.observe(el);
    });
  } else {
    revealItems.forEach(function (el) {
      el.classList.add('is-revealed');
    });
  }

  /* ------------------------------------------------------------------------
     G. Contact Form Validation & Mailto Email Launcher
  ------------------------------------------------------------------------ */
  function isValidEmail(emailText) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(emailText);
  }

  if (contactForm) {
    contactForm.addEventListener('submit', function (event) {
      event.preventDefault();

      const nameInput = contactName instanceof HTMLInputElement ? contactName : null;
      const emailInput = contactEmail instanceof HTMLInputElement ? contactEmail : null;
      const detailsInput = contactDetails instanceof HTMLTextAreaElement ? contactDetails : null;

      const nameValue = nameInput ? nameInput.value.trim() : '';
      const emailValue = emailInput ? emailInput.value.trim() : '';
      const detailsValue = detailsInput ? detailsInput.value.trim() : '';

      const nameValid = nameValue.length >= 2;
      const emailValid = isValidEmail(emailValue);
      const detailsValid = detailsValue.length >= 10;

      if (nameInput) nameInput.classList.toggle('is-invalid', !nameValid);
      if (emailInput) emailInput.classList.toggle('is-invalid', !emailValid);
      if (detailsInput) detailsInput.classList.toggle('is-invalid', !detailsValid);

      if (!nameValid || !emailValid || !detailsValid) {
        if (!nameValid && nameInput) nameInput.focus();
        else if (!emailValid && emailInput) emailInput.focus();
        else if (!detailsValid && detailsInput) detailsInput.focus();
        return;
      }

      // Build email body for visitor's default email app
      const emailBody =
        'Hello Mahnoor,\n\n' +
        'You have received a new graphic design inquiry from the DBM portfolio website:\n\n' +
        'Full Name: ' + nameValue + '\n' +
        'Email Address: ' + emailValue + '\n\n' +
        'Project Details:\n' + detailsValue;

      // const mailtoUrl =
      //   'mailto:' +
      //   encodeURIComponent(SITE_CONTACT.email) +
      //   '?subject=' +
      //   encodeURIComponent(SITE_CONTACT.emailSubject) +
      //   '&body=' +
      //   encodeURIComponent(emailBody);

      // if (mailtoFallbackLink instanceof HTMLAnchorElement) {
      //   mailtoFallbackLink.href = mailtoUrl;
      // }
      // if (mailtoNotice) {
      //   mailtoNotice.classList.remove('d-none');
      // }

      // window.location.href = mailtoUrl;
      const gmailUrl =
        'https://mail.google.com/mail/?view=cm&fs=1' +
        '&to=' + encodeURIComponent('noorayy384@gmail.com') +
        '&su=' + encodeURIComponent(SITE_CONTACT.emailSubject) +
        '&body=' + encodeURIComponent(emailBody);

      if (mailtoFallbackLink instanceof HTMLAnchorElement) {
        mailtoFallbackLink.href = gmailUrl;
        mailtoFallbackLink.target = '_blank';
        mailtoFallbackLink.rel = 'noopener noreferrer';
      }
      if (mailtoNotice) {
        mailtoNotice.classList.remove('d-none');
      }

      window.open(gmailUrl, '_blank', 'noopener,noreferrer');
    });
  }
});
