document.addEventListener('DOMContentLoaded', function(){
    let tl = gsap.timeline()
    tl.to(".right", 2.5, {
        width:"50%",
        ease:"Expo.easeInOut"
    })

    tl.to(".left", 2.5, {
        width:"50%",
        ease:"Expo.easeInOut"
    },"-=2")

    tl.from(".text h1", 2, {
        x:"100%",
        ease:"Expo.easeInOut"
    },"-=1.2")

    tl.from(".text p", 2, {
        x:"100%",
        stagger:0.1,
        ease:"Expo.easeInOut"
    },"-=1.2")

    tl.from(".bottom_nav ul li", 2, {
        x:"200%",
        stagger:0.2,
        ease:"Expo.easeInOut"
    },"-=1.5")

    tl.from(".info", 2, {
        y:"200%",
        ease:"Expo.easeInOut"
    },"-=1.5")
    tl.from(".main__nav", 2, {
        y:"-200%",
        ease:"Expo.easeInOut"
    },"-=1.5")
    tl.from(".name", 2, {
        x:"-200%",
        ease:"Expo.easeInOut"
    },"-=1.5")
})