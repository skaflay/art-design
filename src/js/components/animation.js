import gsap from "gsap";
import  {TweenMax,TweenLite,TimelineLite,Power1} from "gsap/gsap-core.js";
import MotionPathPlugin  from "gsap/src/MotionPathPlugin.js";
gsap.registerPlugin(MotionPathPlugin);
var t1=new TimelineLite();
t1.add(
gsap.to(".hero-plane", {
    duration: 3, 
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
   {opacity: 0, y: 100}, {opacity: 1, y: 0},{delay:"6"})
);

  