
const navToggle = document.querySelector(".navbar_toggle");
const links = document.querySelector(".main_nav");

navToggle.addEventListener('click', function(){
    links.classList.toggle("show_nav");
})

// const mediaquery = matchmedia('(min-width: 675px)')


// document.querySelector('#andiNext').addEventListener('click', andiNext)


   function toggleImageDisplay() {
   
      var imageSlider = document.getElementById('image-slider');
      var singleImage = document.getElementById('single-image');

      if (window.innerWidth <= 675) {
        
         imageSlider.style.display = 'none';
         singleImage.style.display = 'block';
      } else {
        
         imageSlider.style.display = 'block';
         singleImage.style.display = 'none';
      }
   }

   
   toggleImageDisplay();

   
   window.addEventListener('resize', toggleImageDisplay);

//   Im sure there is an easier way to write out the above javascript. I will change it later when I learn more. For now this works.