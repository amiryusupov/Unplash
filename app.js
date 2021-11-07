    let tl = gsap.timeline()
    tl.to('.refresh-item1', 1.5,{
        y:"-100vh",
        ease:Expo.easeOut
    })
    tl.to('.refresh-item2', 1.5,{
        y:"-100vh",
        ease:Expo.easeOut
    },"-=1.2")
    tl.to('.refresh-item3', 1.5,{
        y:"-100vh",
        ease:Expo.easeOut
    },"-=1.2")
    tl.from('.text-item1', .5, {
        y:40,
        opacity:0
    },"-=1.2")
    tl.from('.text-item3', .5, {
        y:40,
        opacity:0
    },"-=1.1")
    tl.from('.text-item4', .5, {
        y:40,
        opacity:0
    },"-=1")
    tl.from('.right__text-items', .5, {
        y:20,
        opacity:0
    },"-=0.9")
    tl.from('.down__text', .5, {
        y:40,
        opacity:0
    },"-=0.8")
    tl.from('.navbar div', .5, {
        y:40,
        stagger:0.3,
        opacity:0
    },"-=0.7")
    tl.from('.left__text-item1, .left__text-item2, .left__text-item3', .5, {
        x:-20,
        stagger:0.3,
        opacity:0
    },"-=0.7")
    tl.from('.text-item2', .7, {
        x:-700,
    },"-=0.6")
    tl.from('.img', 1, {
        y:40,
        opacity:0,
    },"-=0.6")
