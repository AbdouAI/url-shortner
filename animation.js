let heroTextEls=document.querySelectorAll(".hero-text>*")
let heroImg=document.querySelector(".hero-img")

let innerLinkShortner=document.querySelector(".inner-link-shortner")

let titleEls=document.querySelectorAll(".title>*")

let cards=document.querySelectorAll(".card")
let line=document.querySelector(".line")

let lastCaH1=document.querySelector("#lastCallAction h1")
let lastCaBtn=document.querySelector("#lastCallAction a")



const observerHero= new IntersectionObserver((entries)=>{
    entries.forEach((entry)=>{
        if(entry.isIntersecting){
            heroTextEls.forEach(e=>{e.classList.add("animate-hero-text")})
            heroImg.classList.add("animate-hero-img")
        }
    })
})

const observerLinkShortner= new IntersectionObserver((entries)=>{
    entries.forEach((entry)=>{
        if(entry.isIntersecting){
            innerLinkShortner.classList.add("animate-inner-link-shortner")
        }
    })
})

const observerTitle= new IntersectionObserver((entries)=>{
    entries.forEach((entry)=>{
        if(entry.isIntersecting){
            titleEls.forEach(e=>{e.classList.add("animate-hero-text")})
        }
    })
})

const observerStatsWide= new IntersectionObserver((entries)=>{
    entries.forEach((entry)=>{
        if(entry.isIntersecting){
            cards.item(0).classList.add("card1-anim")
            cards.item(1).classList.add("card2-anim")
            cards.item(2).classList.add("card3-anim")
            line.classList.add("line-anim")
        }
    })
})

const observerStatsSmall= new IntersectionObserver((entries)=>{
    entries.forEach((entry)=>{
        if(entry.isIntersecting && window.innerWidth<=1000){
            entry.target.classList.add("card-anim")
        }
    })
})

const observerLastCa= new IntersectionObserver((entries)=>{
    entries.forEach((entry)=>{
        if(entry.isIntersecting){
            lastCaH1.classList.add("animate-hero-text")
            lastCaBtn.classList.add("animate-hero-text")
        }
    })
})

observerHero.observe(document.getElementById("hero"))
observerTitle.observe(document.querySelector(".title p"))
observerLinkShortner.observe(document.getElementById("linkShortner"))
observerStatsWide.observe(line)
observerStatsSmall.observe(cards.item(0))
observerStatsSmall.observe(cards.item(1))
observerStatsSmall.observe(cards.item(2))
observerLastCa.observe(lastCaH1)




