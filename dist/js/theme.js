gsap.registerPlugin(ScrollTrigger);

const tl_header = gsap.timeline();
const tl_right = gsap.timeline();
const tl_left = gsap.timeline();

tl_header.to(".header h1",{
    duration: 1.5,
    y: 0,
    opacity: 1, 
}).to(".header label",{
    duration: 1.5,
    y:0,
    opacity:1
});



ScrollTrigger.defaults({
    toggleActions: "play none none none",
    scroller: ".container",
});


tl_right.to(".second .left", {
    x: 0,
    duration: 1.5,
    opacity: 1,
}).to(".second .card-content",{
    y: 0,
    duration: .5,
    opacity: 1,
}, .4);

tl_left.to(".second .right", {
    x: 0,
    duration: 1.5,
    opacity: 1,
}).to(".second .card-content",{
    y: 0,
    duration: .5,
    opacity: 1,
}, .4);

ScrollTrigger.create({
    animation: tl_right,
    trigger: ".second"
});

ScrollTrigger.create({
    animation: tl_left,
    trigger: ".second"
});



