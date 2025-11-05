document.addEventListener("DOMContentLoaded",()=>{

    const list = document.querySelector(".list-product")
    let res = ""
    product.forEach(item=>{
        res+=`
        <li>
            <a href="./detail.html?cid=${item.pid}">
                <figure>
                    <img src="./img/${item.pthumb}" alt="${item.pnameKo}">
                    <span class="heart"><img src="./img/heart-empty.svg" alt="좋아요 선택안함"></span>
                </figure>
                <h3>${item.pnameKo}</h3>
                <h4><em>${item.pnameEn}</em></h4>
                <p class="ln3">${item.pdesc}</p>
                <p class="price">${item.pprice}원</p>
            </a>
        </li>
        `
    })
    list.innerHTML = res

    // 하트 아이콘 클릭 이벤트
    list.querySelectorAll(".heart").forEach(heart=>{
        heart.addEventListener("click",(e)=>{
            e.preventDefault()
            e.stopPropagation()
            const heartImg = heart.querySelector("img")
            if(heartImg.src.includes("heart-empty")){
                heartImg.src = "./img/heart-full.svg"
                heartImg.alt = "좋아요 선택함"
            }else{
                heartImg.src = "./img/heart-empty.svg"
                heartImg.alt = "좋아요 선택안함"
            }
        })
    })

})