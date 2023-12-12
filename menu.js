const menuBox=document.getElementById("menuBox")
const menuIcon=document.getElementById("menuIcon")
const menuLinks=document.querySelectorAll(".menu-links")

menuIcon.addEventListener("click",function(){
    if(!menuBox.classList.contains("none")){
        menuBox.classList.add("anim-menu-out")
        setTimeout(() => {
            menuBox.classList.add("none")
            menuBox.classList.remove("anim-menu-out")
        }, 350);
    }else{
        menuBox.classList.remove("none")
    }
})

menuLinks.forEach(l=>l.addEventListener("click",function(){
    menuBox.classList.add("anim-menu-out")
    setTimeout(() => {
        menuBox.classList.add("none")
        menuBox.classList.remove("anim-menu-out")
    }, 350);
}))