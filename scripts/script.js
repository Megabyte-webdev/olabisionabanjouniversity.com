window.onload = () => {
    const nav = document.querySelector(".nav");
    const slideContainer = (container, offset) => {
        document.querySelector(`${container} .slider ul`).style.transform = `translateX(${offset}%)`;
    }
    let prevBtn = null;
    let nextPrev = null;
    let dots = null;
    let faculties = null;
    let slideCounter = 0;
    let slide = 0;
    const components = (container) => {
        prevBtn = document.querySelector(`${container} .slider .prev-btn`)
        nextBtn = document.querySelector(`${container} .slider .next-btn`);
        dots = document.querySelectorAll(`${container} .slider .dot`)
        faculties = document.querySelectorAll(`${container} ul li`)
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
    }

    const news = document.querySelectorAll(".news-section .slider ul li");
    const communities = document.querySelectorAll("#communities .slider ul li");

    let lastScrollPos = 0;
    let slideOffset = 25;
    window.addEventListener('scroll', () => {
        let currentScroollPos = document.body.scrollTop || document.documentElement.scrollTop;
        window.scrollY > 50 ? nav.classList.add("sticky") : nav.classList.remove("sticky");
        currentScroollPos > lastScrollPos ? nav.classList.add("hidden") : nav.classList.remove("hidden");

        window.addEventListener('scrollend', () => {
            lastScrollPos = currentScroollPos;
        })
    })


    // Marketing bar slide show function //
    let briefCounter = 0;
    function notice() {
        var notification = [
            'Check out our newly accredited Departments, <a href="#">Click Here</a>',
            'Post Utme form is out, <a href="#">Click Here</a>',
            'Inauguration program coming up on 13th of december 2024.',
            'Admission list is out, <a href="#">check it here</a>'
        ];

        var display_notice = document.querySelector(".nav .briefs");

        briefCounter = [briefCounter + 1] % notification.length;

        display_notice.innerHTML = `<p>${notification[briefCounter]}</p>`;


    }

    var briefs_section = setInterval(notice, 4000);






    components("#faculties");
    /// sliders  ////
    function GoToSlide(n) {

        dots[slideCounter].classList.remove('active');
        slideCounter = n;
        slide = slideCounter * -slideOffset;
        dots[n].classList.add('active');
        slideContainer("#faculties", slide)
        slideCounter === 0 ? prevBtn.classList.add('hide') : prevBtn.classList.remove('hide');
        slideCounter === dots.length - 1 ? nextBtn.classList.add('hide') : nextBtn.classList.remove('hide');

    }


    GoToSlide(1)

    function ReadMore(e, len) {
        let fullText = e.textContent;
        let truncate = e.textContent.slice(0, len) + '...';
        e.textContent = truncate;
        e.onclick = function () {
            this.textContent = (this.textContent.length > len + 5) ? truncate : fullText;
        }
    }
    faculties.forEach((item) => {
        ReadMore(item.querySelector('p'), 160);
    })
    news.forEach((item) => {
        ReadMore(item.querySelector('p'), 100);
    })
    communities.forEach((item) => {
        ReadMore(item.querySelector('p'), 100);
    })
}