var typed = new Typed(".multiple-text",{
    strings: ["Web Developer" ,"Mobile Developer" ,"Full-Stack-Developer"],
    typeSpeed:50,
    backSpeed:50,
    backDelay:1000,
    loop:true
})

let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onescroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height){
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');

            });


        };

    });
};


document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();

      const targetSection = document.querySelector(this.getAttribute('href'));
      if (targetSection) {
        targetSection.scrollIntoView({
          behavior: 'smooth'
        });
      }
    });
  })










