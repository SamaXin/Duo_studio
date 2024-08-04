function inti(){
    gsap.registerPlugin(ScrollTrigger);
    const locoScroll = new LocomotiveScroll({
    el: document.querySelector(".main"),
    smooth: true
    });
    locoScroll.on("scroll", ScrollTrigger.update);

    ScrollTrigger.scrollerProxy(".main", {
    scrollTop(value) {
        return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
    }, 
    getBoundingClientRect() {
        return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
    },
    pinType: document.querySelector(".main").style.transform ? "transform" : "fixed"
    });
    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
    ScrollTrigger.refresh();
}
inti();

var tl=gsap.timeline({
    scrollTrigger:{
        trigger:".page1 #text1",
        scroller:".main",
        // markers:true,
        start:"top 10%",
        end:"top 0",
        scrub:3
    }
});
tl.to(".page1 #text2",{
    x:100, 
},"Anime1")
tl.to(".page1 #text1",{
    x:-100,
},"Anime1")
tl.to(".page1 video",{
    width:"70%",
},"Anime1")
var tl2=gsap.timeline({
    scrollTrigger:{
        trigger:".page2",
        scroller:".main",
        // markers:true,
        start:"top 50%",
        end:"top -20%",
        scrub:3
    }
});
tl2.to(".main",{
    backgroundColor:"#fff",
})

var tl3=gsap.timeline({
    scrollTrigger:{
        trigger:".page3",
        scroller:".main",
        markers:true,
        start:"top -200%",
        end:"top -210%",
        scrub:3
    }
});
tl3.to(".main",{
    backgroundColor:"black",
})
tl3.to(".page3",{
    color:"white",
    borderBottom:"solid white 2px",
})
tl3.to(".page3 #circle",{
    color:"white",
})

document.querySelector(".page3 #circle",(cc)=>{
    cc.addEventListener("mouseover",function(){
        cc.style.boxShadow="0px 10px 10px white";
    })
    cc.addEventListener("mouseleave",function(){
        cc.style.boxShadow="0px 0px 0px black";
    })
});


const crsr=document.querySelector(".cursor");
var boxes=document.querySelectorAll(".page5 .box");

document.addEventListener("mousemove",function(dets){
    crsr.style.left = dets.x + 1+"px"
    crsr.style.top = dets.y + 1+"px"
})

boxes.forEach(function(elem){
    elem.addEventListener("mouseenter",function(){
        var att=elem.getAttribute('data');
        crsr.style.width="250px";
        crsr.style.height="250px";
        crsr.style.backgroundImage=`url(${att})`;
        crsr.style.backgroundSize='cover';
        crsr.style.backgroundPosition='center';
    })
    elem.addEventListener("mouseleave",function(){
        crsr.style.width="20px";
        crsr.style.height="20px";
        crsr.style.backgroundImage=`none`;
    })
})

