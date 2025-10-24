document.addEventListener("DOMContentLoaded",()=>{

    let btnAllMenu = document.querySelector(".btn-all-menu")
    let hiddenGnb = document.querySelector(".hidden-gnb")
    let btnClose = document.querySelector(".btn-close")

    // 전체메뉴 열기
    btnAllMenu.addEventListener("click",()=>{
        hiddenGnb.classList.add("on")
    })

    // 전체메뉴 닫기
    btnClose.addEventListener("click",()=>{
        hiddenGnb.classList.remove("on")
    })

    let mobileGnbLi = document.querySelectorAll(".gnb-smart>li")
    mobileGnbLi.forEach(li=>{
        li.addEventListener("click",()=>{
            li.classList.toggle("on")
        })
    })


})

