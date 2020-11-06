import gsap from "gsap";
import  {TweenMax,TweenLite,TimelineLite,Power1} from "gsap/gsap-core.js";
import MotionPathPlugin  from "gsap/src/MotionPathPlugin.js";
import ScrollTrigger from "gsap/src/ScrollTrigger.js";

gsap.registerPlugin(MotionPathPlugin,ScrollTrigger);
var t1=new TimelineLite();
t1.add(
gsap.to(".hero-plane", {
    duration: 2, 
    repeat: 0,
    yoyo: false,
    ease: "power1.inOut",
    motionPath:{
      path: "M50,300 C250,200 400,200 520,100 ",
      autoRotate: false,
      alignOrigin: [0, 0]
    },
  })
);
t1.add(
TweenMax.fromTo(".header-text", 1, 
   {opacity: 0, y: 100}, {opacity: 1, y: 0},{delay:"0.1"})
);
let t2=gsap.timeline({
  scrollTrigger:{
    trigger:"scroll"
  }
});
t2.from(".scroll",{y:200,opacity:0,duration:1})
.from(".module-card-left",{x:-50,opacity:0,ease: "power4.out",duration:0.7})
.from(".module-card-right",{x:200,opacity:0,ease: "power4.out",duration:0.7})
.from(".module-card-left-2",{x:-50,opacity:0,ease: "power4.out",duration:0.7})
.from(".module-card-right-2",{x:200,opacity:0,ease: "power4.out",duration:0.7})

