import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const section2TL = gsap.timeline();

section2TL.from("#section-2-first img", {duration: 0.5, alpha:0, rotation:270})
    .from("#section-2-first h1", {duration: 0.5, alpha:0, x: -300})
    .from("#section-2-first h4", {duration: 0.5, alpha:0})
    .from("#section-2-middle", {duration: 0.5, alpha:0})
    .from("#section-2-last", {duration: 0.5, alpha:0});



export function section2Animation(){
    ScrollTrigger.create({
        markers: true,
        animation:section2TL,
        toggleActions: "play none none none",
        trigger: "#section2",
        start:"top, 25%",
        end: "bottom 75%"
    });
}