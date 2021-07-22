const inner= document.querySelector(".inner");

const tl= new TimelineMax();

tl.fromTo(inner, 1, {height:"0%"}, {height:"80%", ease: Power2.easeInOut })
.fromTo(inner, 1.2, {width:"100%"}, {width:"90%", ease: Power2.easeInOut})
.fromTo(slider, 1.2, {x:"-100%"}, {x:"0%", ease: Power2.easeInOut}, "-=1")
.fromTo(head, 0.5, {opacity: 0, x: 30}, {opacity: 1, x:0}, "-=0.5")
.fromTo(line, 0.5, {opacity: 0, x: 30}, {opacity: 1, x:0}, "-=0.5")
.fromTo(button, 1.2, {x:"-100%"}, {x:"0%", ease: Power2.easeInOut}, "-=1")