try{
    let type=new Typed('#changing-text',{
        strings:['Front-end Developer','Programmer','Dedicated Professional'],
        typeSpeed:50,
        backSpeed:50,
        loop: true,
    });
    function toggleMenu()
    {
        const menu=document.querySelector(".navi");
    }
}
catch(e)
{
    console.log(e);
}

// project
const slides = document.querySelector('.slides');
const slideWidth = document.querySelector('.slide').clientWidth;
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');
let slideIndex = 0;

prevBtn.addEventListener('click', () => {
    if (slideIndex === 0) {
        slideIndex = slides.children.length - 1;
    } else {
        slideIndex--;
    }
    updateSlide();
});

nextBtn.addEventListener('click', () => {
    if (slideIndex === slides.children.length - 1) {
        slideIndex = 0;
    } else {
        slideIndex++;
    }
    updateSlide();
});

function updateSlide() {
    slides.style.transform = `translateX(${-slideIndex * slideWidth}px)`;
}

// education

  $(document).ready(function(){
    $("#voicebtn").click(function(){
      $("#content1").toggle();
      $(this).toggleClass('green');
      if ($(this).text() === 'Click Me') {
           $(this).text('SSLC Mark');
         } else {
           $(this).text('SSLC Mark');
         }
     
    });
   $("#expensebtn").click(function(){
      $("#content2").toggle();
      if ($(this).text() === 'View Me') {
           $(this).text('HSC Mark');
         } else {
           $(this).text('HSC Mark');
         }
    
    });
    $("#healthbtn").click(function(){
      $("#content3").toggle();
      if ($(this).text() === 'View Me') {
           $(this).text('BE-ECE CGPA');
         } else {
           $(this).text('BE-ECE CGPA');
         }
  });}
  )


  //toggle button
  const modeToggle = document.getElementById('modeToggle');
  const body = document.body;

  modeToggle.addEventListener('click', () => {
    if (body.style.backgroundColor === 'black') {
      // Switch to white mode
      body.style.backgroundColor = 'white';
      body.style.color = 'black'; // Change text color if needed
    } else {
      // Switch to black mode
      body.style.backgroundColor = 'black';
      body.style.color = '#fff'; // Change text color if needed
    }
  });

  
