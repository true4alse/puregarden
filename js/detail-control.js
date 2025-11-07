document.addEventListener("DOMContentLoaded",()=>{

    let productId = getQueryParam("cid")
    const result = product.find(item=>item.pid == productId)
    let thumbSmallListContents = ""
    result.pthumbArray.forEach((thumb,index)=>{
        thumbSmallListContents+=`<li><img src="./img/${thumb}" alt="${result.pnameKo} ${index+1}번 사진"></li>`
    })

    const detail1 = document.querySelector(".detail-1")
    detail1.innerHTML = ` <section class="detail-thumb">
        <figure class="thumb-big">
            <img src="./img/${result.pthumb}" alt="${result.pnameEn} 사진">
        </figure>
        <div class="thumb-slider slider-container">
            <ul class="thumb-small-list">
                ${thumbSmallListContents}
            </ul>
        </div>
    </section>
    <section class="detail-desc">
        <h3>${result.pnameKo}</h3>
        <h4><em>${result.pnameEn}</em></h4>
        <p class="desc">${result.pdesc}</p>
        <p class="sale"><span class="per-sale">${result.salePer}%</span>
        <span class="price-origin">${result.pprice.toLocaleString("ko-KR")}원</span></p>
        <p class="price">${(Math.round(result.pprice*(1-(result.salePer*0.01)))).toLocaleString("ko-KR")}원</p>
        <div class="buy">
            <a href="#">장바구니</a>
            <a href="#" class="btn-buy">구매하기</a>
        </div>
    </section>`

    const smallThumbImgs = document.querySelectorAll(".thumb-small-list img")
    const thumbBig = document.querySelector(".thumb-big img")

    smallThumbImgs.forEach(imgtag=>{
        imgtag.addEventListener("click",()=>{
            let src = imgtag.getAttribute("src")
            let alt = imgtag.getAttribute("alt")
            thumbBig.setAttribute("src",src)
            thumbBig.setAttribute("alt",alt)
        })
    })


    
})