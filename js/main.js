// JavaScript
document.addEventListener('DOMContentLoaded', function() {
  // Navbar scroll effect
  const navbar = document.querySelector('.navbar');
  
  window.addEventListener('scroll', function() {
    if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });

  // Video fallback for mobile devices
  const videoBg = document.querySelector('.video-background video');
  if (videoBg) {
    // Check if mobile device
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    
    // If mobile, replace video with poster image
    if (isMobile) {
      const fallbackImg = videoBg.querySelector('img');
      if (fallbackImg) {
        videoBg.parentElement.innerHTML = `<div class="fallback-image" style="background-image: url(${fallbackImg.src});"></div>`;
      }
    } else {
      // For desktop, ensure video plays
      videoBg.play().catch(e => {
        console.log("Video autoplay prevented, showing fallback");
        const fallbackImg = videoBg.querySelector('img');
        if (fallbackImg) {
          videoBg.parentElement.innerHTML = `<div class="fallback-image" style="background-image: url(${fallbackImg.src});"></div>`;
        }
      });
    }
  }

  // Smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        window.scrollTo({
          top: target.offsetTop - 80,
          behavior: 'smooth'
        });
      }
    });
  });
});

// trips

document.addEventListener("DOMContentLoaded", () => {
  const title = document.querySelector(".title-reveal");
  const subtitle = document.querySelector(".subtitle-reveal");

  const observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        title.classList.add("fade-up");
        subtitle.classList.add("fade-up");
      }
    },
    { threshold: 0.3 }
  );

  observer.observe(title);
});


// buss rental
// JavaScript
document.addEventListener('DOMContentLoaded', function() {
  // Animate elements when they come into view
  const animateRentalSection = () => {
    const section = document.querySelector('.rental-section');
    if (!section) return;

    const sectionPosition = section.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    if (sectionPosition < windowHeight - 100) {
      // Animate header
      document.querySelector('.title-reveal').style.animation = 'fadeInUp 1s ease forwards';
      document.querySelector('.subtitle-reveal').style.animation = 'fadeInUp 1s ease forwards 0.3s';
      document.querySelector('.header-decoration').style.animation = 'scaleIn 0.8s ease forwards 0.6s';

      // Animate option cards
      const optionCards = document.querySelectorAll('.option-card');
      optionCards.forEach((card, index) => {
        card.style.animation = `fadeInUp 1s ease forwards ${0.3 + index * 0.2}s`;
      });

      // Animate feature items
      const featureItems = document.querySelectorAll('.feature-item');
      featureItems.forEach((item, index) => {
        item.style.animation = `fadeIn 1s ease forwards ${0.5 + index * 0.2}s`;
        if (item.classList.contains('slide-in-left')) {
          item.style.animationName = 'slideInLeft';
        } else {
          item.style.animationName = 'slideInRight';
        }
      });
    }
  };

  // Form submission
  const rentalForm = document.querySelector('.rental-form');
  if (rentalForm) {
    rentalForm.addEventListener('submit', function(e) {
      e.preventDefault();
      
      // Get form values
      const formData = new FormData(rentalForm);
      const data = Object.fromEntries(formData);
      
      // Here you would typically send the data to a server
      console.log('Form submitted:', data);
      
      // Show success message
      const submitBtn = rentalForm.querySelector('.submit-btn');
      submitBtn.innerHTML = '<i class="fas fa-check"></i> Anfrage erfolgreich!';
      submitBtn.style.background = '#28a745';
      
      // Reset form after 3 seconds
      setTimeout(() => {
        rentalForm.reset();
        submitBtn.innerHTML = '<span class="btn-text">Anfrage senden</span><i class="fas fa-paper-plane btn-icon"></i>';
        submitBtn.style.background = 'linear-gradient(135deg, #b21f1f, #fd5e5e)';
      }, 3000);
    });
  }

  // Initialize animations on load and scroll
  animateRentalSection();
  window.addEventListener('scroll', animateRentalSection);
});

// about us
// JavaScript
document.addEventListener('DOMContentLoaded', function() {
  // Animate elements when they come into view
  const animateAboutSection = () => {
    const section = document.querySelector('.about-section');
    if (!section) return;

    const sectionPosition = section.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    if (sectionPosition < windowHeight - 100) {
      // Animate timeline items
      const timelineItems = document.querySelectorAll('.timeline-item');
      timelineItems.forEach((item, index) => {
        setTimeout(() => {
          item.style.opacity = '1';
          item.style.transform = 'translateX(0)';
        }, index * 300);
      });

      // Animate experience box
      document.querySelector('.experience-box').style.animation = 'zoomIn 1s ease forwards';

      // Animate personalized service
      document.querySelector('.personalized-service').style.animation = 'fadeInUp 1s ease forwards 0.5s';

      // Animate testimonial slider
      document.querySelector('.testimonial-slider').style.animation = 'fadeIn 1s ease forwards 0.8s';
    }
  };

  // Testimonial slider functionality
  const testimonialSlider = () => {
    const testimonials = document.querySelectorAll('.testimonial');
    const prevBtn = document.querySelector('.testimonial-nav.prev');
    const nextBtn = document.querySelector('.testimonial-nav.next');
    let currentIndex = 0;

    function showTestimonial(index) {
      testimonials.forEach(testimonial => testimonial.classList.remove('active'));
      testimonials[index].classList.add('active');
      currentIndex = index;
    }

    prevBtn.addEventListener('click', () => {
      let newIndex = currentIndex - 1;
      if (newIndex < 0) newIndex = testimonials.length - 1;
      showTestimonial(newIndex);
    });

    nextBtn.addEventListener('click', () => {
      let newIndex = currentIndex + 1;
      if (newIndex >= testimonials.length) newIndex = 0;
      showTestimonial(newIndex);
    });

    // Auto-rotate testimonials every 5 seconds
    setInterval(() => {
      let newIndex = currentIndex + 1;
      if (newIndex >= testimonials.length) newIndex = 0;
      showTestimonial(newIndex);
    }, 5000);
  };

  // Initialize animations and slider
  animateAboutSection();
  window.addEventListener('scroll', animateAboutSection);
  testimonialSlider();
});

// team gallry
// JavaScript
document.addEventListener('DOMContentLoaded', function() {
  // Initialize gallery cards
  const galleryCards = document.querySelectorAll('.gallery-card');
  
  galleryCards.forEach(card => {
    const expandBtn = card.querySelector('.expand-btn');
    const closeBtn = card.querySelector('.close-btn');
    
    expandBtn.addEventListener('click', () => {
      card.classList.add('active');
      document.body.style.overflow = 'hidden';
    });
    
    closeBtn.addEventListener('click', () => {
      card.classList.remove('active');
      document.body.style.overflow = '';
    });
  });
  
  // Animate when section comes into view
  const gallerySection = document.querySelector('.gallery-section');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('section-in-view');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });
  
  if (gallerySection) {
    observer.observe(gallerySection);
  }
  
  // Close modal when clicking outside content
  document.addEventListener('click', (e) => {
    const activeCard = document.querySelector('.gallery-card.active');
    if (activeCard && !activeCard.contains(e.target) && !e.target.closest('.expand-btn')) {
      activeCard.classList.remove('active');
      document.body.style.overflow = '';
    }
  });
});

// footer
// JavaScript
document.addEventListener('DOMContentLoaded', function() {
  // Back to Top Button
  const backToTopBtn = document.querySelector('.back-to-top');
  
  window.addEventListener('scroll', function() {
    if (window.pageYOffset > 300) {
      backToTopBtn.classList.add('visible');
    } else {
      backToTopBtn.classList.remove('visible');
    }
  });
  
  backToTopBtn.addEventListener('click', function(e) {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
  
  // Newsletter Form Submission
  const newsletterForm = document.querySelector('.newsletter-form');
  if (newsletterForm) {
    newsletterForm.addEventListener('submit', function(e) {
      e.preventDefault();
      const emailInput = this.querySelector('input[type="email"]');
      
      // Here you would typically send the email to your server
      console.log('Newsletter subscription:', emailInput.value);
      
      // Show success message
      const submitBtn = this.querySelector('button');
      const originalHtml = submitBtn.innerHTML;
      submitBtn.innerHTML = '<i class="fas fa-check"></i>';
      submitBtn.style.background = '#28a745';
      
      // Reset after 3 seconds
      setTimeout(() => {
        emailInput.value = '';
        submitBtn.innerHTML = originalHtml;
        submitBtn.style.background = 'linear-gradient(135deg, #fdbb2d, #b21f1f)';
      }, 3000);
    });
  }
  
  // Animate footer elements when in view
  const footer = document.querySelector('.site-footer');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const cols = entry.target.querySelectorAll('.footer-col');
        cols.forEach((col, index) => {
          col.classList.add('slide-up');
          col.style.animationDelay = `${index * 0.2}s`;
        });
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });
  
  if (footer) {
    observer.observe(footer);
  }
});