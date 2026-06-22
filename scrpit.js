const btn=document.getElementById("showBtn");
const menu=document.getElementById("navLinks");
const downloadCv=document.getElementById("download-cv");
const fr = document.querySelector(".menu")

window.addEventListener("load", () => {
    const loader = document.getElementById("loader");
    loader.classList.add("loader-hidden");

    setTimeout(() => {
        loader.remove();
    }, 500);
});
btn.addEventListener("click",()=>{
    
    
    if(menu.classList.contains("active")){
        btn.innerHTML="&#9776;";
        
    }    else{
        btn.innerHTML="&#10006;";
        
    }
    fr.classList.toggle("open")
    menu.classList.toggle("active");
    downloadCv.classList.toggle("active");
    
});





const skillItems = document.querySelectorAll(".skill-content-a");

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add("active-e");
        } else {
            entry.target.classList.remove("active-e"); // optional
        }
    });
}, {
    threshold: 0.5
});

skillItems.forEach((item) => {
    observer.observe(item);
});

// const nav = document.querySelector(".navbar");

// // 👉 Listen for scroll event on the window
// window.addEventListener("scroll", fixNav);

// // 👉 Function to handle navbar behavior on scroll
// function fixNav() {
//   // 👉 Check if user scrolled more than nav height + 150px
//   if (window.scrollY > nav.offsetHeight + 150) {
//     // 👉 Add 'active' class when condition is true
//     // This usually makes navbar fixed / changes style
//     nav.classList.add("nav-fix");
//   } else {
//     // 👉 Remove 'active' class when scroll is less
//     // Navbar returns to normal state
//     nav.classList.remove("nav-fix");
//   }
// }


// moving skill
 const body = document.querySelector(".Skill-section");
        const container = document.getElementById('workspace');

        body.addEventListener('mousemove', (e) => {
            // Calculate mouse position relative to center of screen
            const x = e.clientX - (window.innerWidth / 2);
            const y = e.clientY - (window.innerHeight / 2);
            
            // Map movement coordinates to subtle 3D tilt angles
            const rotateX = -(y / window.innerHeight) * 25; 
            const rotateY = (x / window.innerWidth) * 25;

            container.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
        });

        // Smoothly snap back to center when the mouse stops tracking/leaves
        body.addEventListener('mouseleave', () => {
            container.style.transform = 'rotateX(0deg) rotateY(0deg)';
        });





      $(document).ready(function () {
  $('.slider').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
     variableWidth: true,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: true,
    dots: true,
    infinite: true,

    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1
        }
      }
    ]
  });
});



const password = document.getElementById("password");
const background = document.getElementById("background");
 password.addEventListener("input", (e) => {
   const input = e.target.value;
   const length = input.length;
   const blurValue = 20 - length * 2;
   background.style.filter = `blur(${blurValue}px)`;
 });const card = document.querySelector(".card");

document.addEventListener("mousemove", (e) => {

    const x = (window.innerWidth / 2 - e.pageX) / 25;
    const y = (window.innerHeight / 2 - e.pageY) / 25;

    card.style.transform =
        `rotateY(${x}deg) rotateX(${-y}deg)`;
});

document.addEventListener("mouseleave", () => {
    card.style.transform =
        "rotateY(0deg) rotateX(0deg)";
});

/* <div class="portfolio-links">
                  <a href="assets/img/portfolio/portfolio-1.jpg" data-gallery="portfolioGallery" class="portfolio-lightbox" title="App 1"<iframe src="https://www.behance.net/embed/project/250880401?ilo0=1" height="316" width="404" allowfullscreen lazyload frameborder="0" allow="clipboard-write" refererPolicy="strict-origin-when-cross-origin"></iframe></a>
                  <a href="https://www.behance.net/gallery/250880401/portfolio" class="portfolio-details-lightbox" data-glightbox="type: external" title="Portfolio Details"><i class="bx bx-link"></i></a>
                </div> */