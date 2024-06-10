window.onload = () => {
    const nav = document.querySelector(".nav");
    const slideContainer = document.querySelector(".slider ul");
    const slides = document.querySelectorAll(".slider ul li");
    const prevBtn = document.querySelector(".slider .prev-btn");
    const nextBtn = document.querySelector(".slider .next-btn");
    const dots = document.querySelectorAll(".slider .dot");
    const faculties= document.querySelectorAll('#faculties ul li')
    let slideCounter = 0;
    let slide = 0;
    let lastScrollPos=0;

    window.addEventListener('scroll', ()=>{
       let currentScroollPos= document.body.scrollTop || document.documentElement.scrollTop;
        window.scrollY > 50 ? nav.classList.add("sticky"): nav.classList.remove("sticky");
       currentScroollPos > lastScrollPos ? nav.classList.add("hidden"): nav.classList.remove("hidden");
        
        window.addEventListener('scrollend', ()=>{
            lastScrollPos=currentScroollPos;
        })
    })
    
    
    // Marketing bar slide show function //
let briefCounter=0;
function notice(){
	var notification=[
          'Check out our newly accredited Departments, <a href="#">Click Here</a>',
          'Post Utme form is out, <a href="#">Click Here</a>',
             'Inauguration program coming up on 13th of december 2024.',
            'Admission list is out, <a href="#">check it here</a>'
];
 
   var display_notice = document.querySelector(".nav .briefs");

   briefCounter=[briefCounter + 1]%notification.length;
 
    display_notice.innerHTML=  `<p>${notification[briefCounter]}</p>`;


}

var briefs_section=setInterval(notice,4000);

    
    
    
    
/// sliders  ////
    function GoToSlide(n) {
        dots[slideCounter].classList.remove('active');
        slideCounter = n;
        slide = slideCounter * -25;
        dots[n].classList.add('active');
        slideContainer.style.transform = `translateX(${slide}%)`;
        slideCounter === 0 ? prevBtn.classList.add('hide'): prevBtn.classList.remove('hide');
        slideCounter === slides.length-1 ? nextBtn.classList.add('hide'): nextBtn.classList.remove('hide');
    }
    dots.forEach((e, index) => {
        e.onclick = () => {
            GoToSlide(index);
        }
    })
    function NextSlide() {
        slideCounter === dots.length - 1 ? GoToSlide(dots.length - 1) : GoToSlide(slideCounter + 1);

    }
    function PrevSlide() {
        slideCounter === 0 ? GoToSlide(0) : GoToSlide(slideCounter - 1);

    }

    nextBtn.addEventListener('click', () => {
        NextSlide()
    })
    prevBtn.addEventListener('click', () => {
        PrevSlide()
    })
    GoToSlide(0) ;
    
    function ReadMore(e){
      let fullText= e.textContent;
      let truncate=e.textContent.slice(0, 160)+'...';
      e.textContent=truncate;
      e.onclick=function(){
       this.textContent=(this.textContent.length > 165) ? truncate : fullText;
      }
    }
    faculties.forEach((item)=>{
      ReadMore(item.querySelector('p'));
    })
}