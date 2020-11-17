import gsap from "gsap";
import {
  TweenMax,
  TweenLite,
  TimelineMax,
  TimelineLite,
  Power1
} from "gsap/gsap-core.js";
import MotionPathPlugin from "gsap/src/MotionPathPlugin.js";
import ScrollTrigger from "gsap/src/ScrollTrigger.js";


gsap.registerPlugin(MotionPathPlugin, ScrollTrigger);
var t1 = new TimelineLite();
t1.add(
  gsap.to(".hero-plane", {
    duration: 2,
    repeat: 0,
    yoyo: false,
    ease: "power1.inOut",
    motionPath: {
      path: "M50,300 C250,200 400,200 560,200 ",
      autoRotate: false,
      alignOrigin: [0, 0]
    },
  })
);
t1.add(
  TweenMax.fromTo(".header-text", 1, {
    opacity: 0,
    y: 100
  }, {
    opacity: 1,
    y: 0
  }, {
    delay: "0.1"
  })
);
let t2 = gsap.timeline({
  scrollTrigger: {
    trigger: "scroll"
  }
});
t2.from(".scroll", {
    y: 200,
    opacity: 0,
    duration: 1
  })
  .from(".module-card-left", {
    x: -50,
    opacity: 0,
    ease: "power4.out",
    duration: 0.7
  })
  .from(".module-card-right", {
    x: 200,
    opacity: 0,
    ease: "power4.out",
    duration: 0.7
  })
  .from(".module-card-left-2", {
    x: -50,
    opacity: 0,
    ease: "power4.out",
    duration: 0.7
  })
  .from(".module-card-right-2", {
    x: 200,
    opacity: 0,
    ease: "power4.out",
    duration: 0.7
  })

let t3 = gsap.timeline({
  scrollTrigger: {
    trigger: ".main-section-text"
  }
});
t3.from(".main-section-text", {
    y: 500,
    opacity: 0,
    duration: 1,

  })
  .from(".main-quote", {
    y: 500,
    opacity: 0,
    duration: 1,
  })
  .from(".blockquote", {
    y: 500,
    opacity: 0,
    duration: 1,
    delay:0
  });
  const delSections = document.querySelectorAll(".delayed-section");

delSections.forEach(section => {
  const containerAnim = gsap.to(section.querySelector(".innerContainer"), {
    y: "50vh",
    ease: "none"
  });
  
  const imageAnim = gsap.to(section.querySelector("img"), {
    y: "-80vh",
    ease: "none",
    paused: true
  });
  
  const scrub = gsap.to(imageAnim, {
    progress: 1,
    paused: true,
    ease: "power3",
    duration: parseFloat(section.dataset.scrub) || 0.1,
    overwrite: true
  });
  
  ScrollTrigger.create({
    animation: containerAnim,
    scrub: true,
    trigger: section,
    start: "top bottom",
    end: "bottom top",
    onUpdate: self => {
      scrub.vars.progress = self.progress;
      scrub.invalidate().restart();
    }
  });
});
var plane = document.querySelector('.flying-plane')
var height=plane.height;
console.log(height);

gsap.to(plane, {
  duration: 5,
  repeat: -1,
  yoyo: false,
  ease: "power1.inOut",
  motionPath: {
    path: "M -3 300 Q 700 420 1350 420",
    autoRotate: false,
  
  },
})