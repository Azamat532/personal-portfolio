$(function () {
    'use strict'
    const lenis = new Lenis({
        duration: 1.5,
        // infinite: true,
    })

    function raf(time) {
        lenis.raf(time)
        requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)

    lenis.on('scroll', ScrollTrigger.update)

        gsap.ticker.add((time)=>{
        lenis.raf(time * 1000)
    })

    function scrollTrig() {
        gsap.registerPlugin(ScrollTrigger);
        gsap.registerPlugin(TextPlugin);

        let gsapAnim = gsap.utils.toArray('.gsap__anim');
        gsapAnim.forEach(section => {
            gsap.to(section, {
                scrollTrigger: {
                    trigger: section,
                    start: 'bottom bottom',
                    end: 'bottom top',
                    scrub: true
                },
                yPercent: 100,
                ease: 'none'
            })
        })

        let parallaxWrapp = gsap.utils.toArray('.parallax__wrapp');
        parallaxWrapp.forEach(parallax => {
            gsap.to(parallax, {
                scrollTrigger: {
                    trigger: parallax,
                    start: 'top top',
                    end: 'bottom top',
                    scrub: true,
                    snap: true
                },
                yPercent: -20,
                ease: 'none'
            })
        })

        let titles = gsap.utils.toArray('.title')
        titles.forEach(title => {
            gsap.fromTo(title, {
                scrollTrigger: {
                    trigger: title,
                    start: 'bottom bottom',
                    end: 'bottom top',
                    scrub: true
                },
                xPercent: 50,
            }, {
                scrollTrigger: {
                    trigger: title,
                    start: 'top bottom',
                    end: 'bottom top',
                    scrub: true
                },
                xPercent: 0
            })
        })
        gsap.from("#element3",{
            scrollTrigger: '.about-me',
            // snap: true,
            duration: 3,
            text: ""
        })

        let items = gsap.utils.toArray('.about-me__content-item');
        items.forEach(item => {
            gsap.from(item, {
                scrollTrigger: item,
                duration: 3,
            text: ""
            })
        })

        let skillsItems = $('.skills__content-card')
        gsap.from(skillsItems, {
            scrollTrigger: {
                    trigger: '.skills',
                    start: 'top bottom',
                    end: 'bottom bottom',
                    scrub: true
                },
            xPercent: -300,
            duration: 2,
            stagger : {
                each: .2
            }
        })
        // gsap.to('.title__img img', {
        //     scrollTrigger: {
        //         trigger: '.serv',
        //         start: 'top bottom',
        //         end: 'bottom top',
        //         scrub: true,
        //     },
        //     rotate: 360,
        //     ease: 'none'
        // })

        // gsap.to('.title__t', {
        //     scrollTrigger: {
        //         trigger: '.serv',
        //         start: 'top top',
        //         end: 'bottom top',
        //         scrub: true
        //     },
        //     xPercent: -10,
        //     ease: 'none'
        // })

        // gsap.to('.serv .stroke', {
        //     scrollTrigger: {
        //         trigger: '.serv',
        //         start: 'top top',
        //         end: 'bottom top',
        //         scrub: true,
        //     },
        //     xPercent: 10,
        //     ease: 'none'
        // })

        // gsap.to('.serv__item:nth-child(1)', {
        //     scrollTrigger: {
        //         trigger: '.serv',
        //         start: 'top top',
        //         end: 'bottom top',
        //         scrub: true,
        //     },
        //     xPercent: -10,
        //     ease: 'none'
        // })

        // gsap.to('.serv__item:nth-child(3)', {
        //     scrollTrigger: {
        //         trigger: '.serv',
        //         start: 'top top',
        //         end: 'bottom top',
        //         scrub: true,
        //     },
        //     xPercent: 10,
        //     ease: 'none'
        // })

        // gsap.to('.portfolio__item-img img', {
        //     scrollTrigger: {
        //         trigger: '.portfolio',
        //         start: 'top top',
        //         end: 'bottom top',
        //         scrub: true,
        //     },
        //     scale: 1.2,
        //     ease: 'none'
        // })

        // gsap.to('.approve__star', {
        //     scrollTrigger: {
        //         trigger: '.approve',
        //         start: 'top bottom',
        //         end: 'bottom top',
        //         scrub: true,
        //     },
        //     rotate: 360,
        //     ease: 'none'
        // })
    }

    scrollTrig()

    

    // const debouncedResize = _.debounce(onWindowResize, 500)

    // function onWindowResize(){
    //     console.log('Window resized');
    //     location.replace()
    // }
    // $(window).on('resize', debouncedResize)
    // console.log(window.innerWidth);

    let typed = new Typed('#element', {
        strings: ['ismim Azamat,\n Frontend dasturchiman.'],
        typeSpeed: 50,
      });

    //   let typed2 = new Typed('#element2', {
    //     strings: ['ismim Azamat,\n Frontend dasturchiman.'],
    //     typeSpeed: 50,
    //   });

      var swiper = new Swiper(".mySwiper", {
        spaceBetween: 30,
        centeredSlides: true,
        autoplay: {
          delay: 10000,
          disableOnInteraction: false,
        },
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      });

      const activePage = window.location.hash
      console.log(activePage);
      
      

      $(window).on('beforeunload', () => {
        window.location.hash = '#home'
        console.log(window.location.hash);
      })

      $('.contact__form').on('submit', (event) => {
        event.preventDefault();
        const inputs = document.querySelectorAll('.contact__form-input')
        inputs.forEach(input => {
            input.value = ""
        })
      })
      
})