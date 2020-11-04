import gsap from "gsap";
import  {TweenLite,TimelineLite,Power1} from "gsap/gsap-core.js";
import MotionPathPlugin  from "gsap/src/MotionPathPlugin.js";
gsap.registerPlugin(MotionPathPlugin);

gsap.to(".hero-plane", {
    duration: 5, 
    repeat: 12,
    repeatDelay: 3,
    yoyo: true,
    ease: "power1.inOut",
    motionPath:{
      path: "M9,100c0,0,18-41,49-65",
      autoRotate: true,
      alignOrigin: [0.5, 0.5]
    }
  });
  