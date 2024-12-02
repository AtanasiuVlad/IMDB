
  // Dropdown for 'All' categories
const dropdownBtn = document.getElementById("btn");
const dropdownMenu = document.getElementById("dropdown");
const toggleArrow = document.getElementById("arrow");

const toggleDropdown = function () {
    dropdownMenu.classList.toggle("show");
    toggleArrow.classList.toggle("arrow");
  };

  dropdownBtn.addEventListener("click", function (e) {
    e.stopPropagation();
    toggleDropdown();
  });


// Hide QR Code when the max screen width is 630px
const hiddenElement = document.getElementById('hiddenElement');

    function checkScreenSize() {
      const isSmallScreen = window.matchMedia('(max-width: 630px)').matches;

      if (isSmallScreen) {
        hiddenElement.classList.add('hidden');
      } else {
        hiddenElement.classList.remove('hidden');
      }
    }

    checkScreenSize();
    window.addEventListener('resize', checkScreenSize); 
 

// Hide elements with class 'hide-elements-on-large-screens'
  const hideElements = document.getElementsByClassName('hide-elements-on-1030px-screens');
  const hide_at_730px = document.getElementsByClassName('hide-elements-on-730px-screens');
  const show_at_730px = document.getElementsByClassName('show-on-730px-screens');
  const hideOnSmall = document.getElementsByClassName('hide-on-small-screens');
  const invisibleOnSmall = document.getElementsByClassName('invisible-on-small-screens');
  const resizeGap = document.getElementsByClassName('hide-gap'); 

    function ScreenSize() {
      const SmallScreen = window.matchMedia('(max-width: 1030px)').matches;
      const Size_730px = window.matchMedia('(max-width: 730px)').matches;
      let counter;
      let counter_730px;
    
      for(const element of invisibleOnSmall)
      {
        if(Size_730px)
        {
          element.style.visibility = 'hidden';
        } else
        {
          element.style.visibility = 'visible';
        }
      }

      for(const element of resizeGap)
      {
        if(Size_730px)
        {
          element.classList.remove('gap-9');
        } else
        {
          element.classList.add('gap-9')
        }
      }

      for(const element of hide_at_730px)
      {
        if(Size_730px)
        {
          element.classList.add('hidden');
          counter_730px = true;
        } else
        {
          element.classList.remove('hidden');
          counter_730px = false;
        }
      }

        for(const element of show_at_730px)
        {
          if(counter_730px)
          {
            element.classList.remove('hidden')
          } else
          {
            element.classList.add('hidden');
          }
        }
      


      // Loop through elements in the collection not just one item 
      for (const element of hideElements) {
        if (SmallScreen) {
          element.classList.remove('hidden');
          counter = true;
        } else {
          element.classList.add('hidden');
          counter = false;
        }
      }

      
      // for small screens
      for (const element of hideOnSmall) {
        if (counter === true) {
          element.classList.add('hidden');
        } else {
          element.classList.remove('hidden');
        }
      }
    }
    
    ScreenSize();
    window.addEventListener('resize', ScreenSize);


// 'Sign In' button redirect
document.querySelector('.sign-in-redirect').addEventListener('click', function() {
  location.href = "https://www.imdb.com/registration/signin/?ref=nv_generic_lgin&u=%2F";
});

let slideIndex = 1;
    showSlides(slideIndex);

    function plusSlides(n) {
        showSlides(slideIndex += n);
    }

    function currentSlide(n) {
        showSlides(slideIndex = n);
    }

    function showSlides(n) {
        let i;
        const slides = document.getElementsByClassName("mySlides");
        const dots = document.getElementsByClassName("dot");

        if (n > slides.length) { slideIndex = 1; }
        if (n < 1) { slideIndex = slides.length; }

        // Hide all slides
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none"; // No type assertion needed
        }

        // Remove active class from all dots
        for (i = 0; i < dots.length; i++) {
            dots[i].className = dots[i].className.replace(" active", "");
        }

        // Show the current slide
        slides[slideIndex - 1].style.display = "block"; // No type assertion needed

        // Set the current dot as active
        dots[slideIndex - 1].className += " active";
    }

    // Add event listeners for dots
    document.querySelectorAll('.dot').forEach((dot, index) => {
        dot.addEventListener('click', () => currentSlide(index + 1));
    });

    document.querySelector('.prev').addEventListener('click', () => plusSlides(-1));
    document.querySelector('.next').addEventListener('click', () => plusSlides(1));