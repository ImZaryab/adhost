//gsap animations
gsap.registerPlugin(ScrollTrigger);

let textTl = gsap.timeline({
  defaults: { ease: "power4.inOut", duration: 1.5 },
});

gsap.from("nav", { y: -100, ease: "power4.inOut", duration: 1 });

textTl
  .to(".hero-heading1", {
    "clip-path": "polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)",
    opacity: 1,
    y: 0,
    delay: 0.2,
  })
  .to(
    ".hero-heading2",
    {
      "clip-path": "polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)",
      opacity: 1,
      y: 0,
    },
    "-=1.2"
  )
  .to(
    ".hero-heading3",
    {
      "clip-path": "polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)",
      opacity: 1,
      y: 0,
    },
    "-=1.2"
  )
  .to(
    ".hero-heading",
    {
      "clip-path": "polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)",
      opacity: 1,
      y: 0,
    },
    "-=0.6"
  )
  .from(".partner-brands-section", { y: 100, opacity: 0 }, "-=1.5")
  .from(".hero-subtitle", { opacity: 0, y: 50 }, "-=1.5")
  .from(".hero-cta-btn", { opacity: 0 }, "-=1.2")
  .to(".hero-img-overlay1", { height: "100%", duration: 1 }, "-=1.5")
  .to(".hero-img-overlay2", { height: "100%", duration: 1 }, "-=1.5")
  .to(".hero-img-overlay3", { height: "100%", duration: 1 }, "-=1.5")
  .to(".hero-img", { opacity: 1, duration: 1 }, "-=1.2")
  .to(".hero-img-overlay1", { scaleX: 0, transformOrigin: "right center", duration: 1 }, "-=0.5")
  .to(".hero-img-overlay2", { scaleX: 0, transformOrigin: "left center", duration: 1 }, "-=1")
  .to(".hero-img-overlay3", { scaleX: 0, transformOrigin: "right center", duration: 1 }, "-=1")
  // .to(
  //   ".hero-img-overlay",
  //   { scaleY: 0, transformOrigin: "top center", duration: 1 },
  //   "-=0.5"
  // );
/**  "-=0.6" deducts 0.6s from the start time of the animation which in the case of timeline is the end time of any 
previously occurring animations **/

gsap.to(".services-info-container-overlay", {
  scrollTrigger: ".services-heading",
  scaleX: 0,
  transformOrigin: "left center",
  ease: "power4.inOut",
  duration: 1,
});

gsap.from(".service-card-1", {
  scrollTrigger: ".service-card-3",
  opacity: 0,
  y: -150,
  ease: "power4.inOut",
  duration: 1,
});

gsap.from(".service-card-2", {
  scrollTrigger: ".service-card-3",
  opacity: 0,
  x: 150,
  ease: "power4.inOut",
  duration: 1,
});

gsap.from(".service-card-3", {
  scrollTrigger: ".service-card-3",
  opacity: 0,
  x: -150,
  ease: "power4.inOut",
  duration: 1,
});

gsap.from(".service-card-4", {
  scrollTrigger: ".service-card-3",
  opacity: 0,
  y: 150,
  ease: "power4.inOut",
  duration: 1,
});

gsap.from(".contact-content-container", {
  scrollTrigger: ".contact-content-container",
  opacity: 0,
  x: -150,
  ease: "power4.inOut",
  duration: 1,
});

gsap.from(".contact-img-container", {
  scrollTrigger: ".contact-img-container",
  opacity: 0,
  x: 150,
  ease: "power4.inOut",
  duration: 1,
});

gsap.to(".case-study-info-overlay", {
  scrollTrigger: ".case-study-info-overlay",
  scaleX: 0,
  transformOrigin: "left center",
  ease: "power4.inOut",
  duration: 1,
});

gsap.from(".case-studies-container", {
  scrollTrigger: ".case-studies-container",
  scaleY: 0,
  transformOrigin: "bottom center",
  ease: "power4.inOut",
  duration: 1,
});

const scrollTl = gsap.timeline({
    scrollTrigger: {
        trigger: ".services-info-container",
        start: 'top bottom',
        end: 'bottom center',
        scrub: true,
    }
})

scrollTl.to('.hero-img', {
    rotate: 45
})

//infinte-scroll marquee
const scroller = document.querySelector(".scroller");

const scrollerInner = scroller.querySelector(".scroller__inner");
const scrollerInnerContent = Array.from(scrollerInner.children);

scrollerInnerContent.forEach(item => {
    //grab each child in the scroller__inner and clone it
    const duplicatedItem = item.cloneNode(true);
    //hide duplicated items from screen reader
    duplicatedItem.setAttribute('aria-hidden', true);
    //append the duplicated nodes to the scroller__inner to fill empty space
    scrollerInner.appendChild(duplicatedItem);
});



//Lenis smooth scroll
const lenis = new Lenis()

lenis.on('scroll', (e) => {
  console.log(e)
})

function raf(time) {
  lenis.raf(time)
  requestAnimationFrame(raf)
}

requestAnimationFrame(raf)