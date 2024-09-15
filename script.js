const lenis = new Lenis({
   infinite:true
})

lenis.on('scroll', (e) => {
  console.log(e)
})

function raf(time) {
  lenis.raf(time)
  requestAnimationFrame(raf)
}

requestAnimationFrame(raf)



document.querySelectorAll(".elem").forEach(elem => {
    let image = elem.querySelector("img")
    let tl = gsap.timeline();
    let xtransform = gsap.utils.random(-200 , 200);

    tl
    .set(image , {
        transformOrigin : `${xtransform < 0 ? 0 : '100%'}`
    } , "start")
    .to(image , {
        scale:0,
        ease:"none",
        scrollTrigger:{
            trigger: image,
            start:"top top",
            end:"bottom top", 
            scrub:true,

        }
    } , "start ")
    .to(elem , {
        x:xtransform,
        ease:"none",
        scrollTrigger:{
            trigger: image,
            start:"top bottom",
            end:"bottom top", 

            scrub:true,

        }
    } , "start")
})