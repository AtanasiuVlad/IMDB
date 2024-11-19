document.addEventListener("DOMContentLoaded", () => {
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
  const hideElements = document.getElementsByClassName('hide-elements-on-large-screens');
  const hideOnSmall = document.getElementsByClassName('hide-on-small-screens');

    function ScreenSize() {
      const SmallScreen = window.matchMedia('(max-width: 630px)').matches;
      let counter;
    
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
function myFunction() {
  location.href="https://www.imdb.com/registration/signin/?ref=nv_generic_lgin&u=%2F";
}
});