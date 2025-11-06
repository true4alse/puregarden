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
        <p class="desc">고급스러운 얼그레이 향이 가득 담긴 부드러운 시폰.  한입마다 은은한 향과 촉촉한 식감을 느낄 수 있습니다. 고급스러운 얼그레이 향이 가득 담긴 부드러운 시폰.  한입마다 은은한 향과 촉촉한 식감을 느낄 수 있습니다.</p>
        <p class="sale"><span class="per-sale">30%</span> <span class="price-origin">6,800원</span></p>
        <p class="price">4,800원</p>
        <div class="buy">
            <a href="#">장바구니</a>
            <a href="#" class="btn-buy">구매하기</a>
        </div>
    </section>`



    
})