let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides((slideIndex += n));
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}

// Initialize slideshows for each project
document.addEventListener('DOMContentLoaded', function() {
  const slideshowContainers = document.querySelectorAll('.slideshow-container');
  
  slideshowContainers.forEach((container) => {
    const slides = container.querySelectorAll('.mySlides');
    const dotsContainer = container.parentElement.querySelector('.dots-container');
    const dots = dotsContainer ? dotsContainer.querySelectorAll('.dot') : [];
    let currentSlide = 0;
    
    function showSlide(index) {
      slides.forEach((slide, i) => {
        slide.style.display = i === index ? 'block' : 'none';
      });
      
      dots.forEach((dot, i) => {
        dot.classList.toggle('active', i === index);
      });
    }
    
    function nextSlide() {
      currentSlide = (currentSlide + 1) % slides.length;
      showSlide(currentSlide);
    }
    
    function prevSlide() {
      currentSlide = currentSlide === 0 ? slides.length - 1 : currentSlide - 1;
      showSlide(currentSlide);
    }
    
    if (slides.length > 0) {
      showSlide(0);
    }
    
    const prevBtn = container.querySelector('.prev');
    const nextBtn = container.querySelector('.next');
    
    if (prevBtn) {
      prevBtn.addEventListener('click', prevSlide);
    }
    
    if (nextBtn) {
      nextBtn.addEventListener('click', nextSlide);
    }
    
    dots.forEach((dot, index) => {
      dot.addEventListener('click', () => {
        currentSlide = index;
        showSlide(currentSlide);
      });
    });
  });

  const hamburger = document.querySelector('.hamburger');
  const navUl = document.querySelector('nav ul');
  
  if (hamburger) {
    hamburger.addEventListener('click', () => {
      hamburger.classList.toggle('active');
      navUl.classList.toggle('active');
    });
  }
  
  const navLinks = document.querySelectorAll('nav a');
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      hamburger.classList.remove('active');
      navUl.classList.remove('active');
    });
  });
});
