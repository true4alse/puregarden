document.addEventListener("DOMContentLoaded",()=>{

    // 전체 슬라이드를 감싸는 부모 요소 (예: body나 특정 래퍼)
    const wrapper = document.body;

    let isDown = false;
    let startX;
    let scrollLeft;
    let currentSlider = null;

    wrapper.addEventListener('mousedown', (e) => {
    const slider = e.target.closest('.slider-container');
    if (!slider) return; // 클릭한 곳이 슬라이더가 아니면 무시

    isDown = true;
    currentSlider = slider;
    slider.classList.add('active');
    startX = e.pageX - slider.offsetLeft;
    scrollLeft = slider.scrollLeft;
    });

    wrapper.addEventListener('mouseleave', () => {
    if (!isDown || !currentSlider) return;
    isDown = false;
    currentSlider.classList.remove('active');
    });

    wrapper.addEventListener('mouseup', () => {
    if (!isDown || !currentSlider) return;
    isDown = false;
    currentSlider.classList.remove('active');
    currentSlider = null;
    });

    wrapper.addEventListener('mousemove', (e) => {
    if (!isDown || !currentSlider) return;
    e.preventDefault();

    const x = e.pageX - currentSlider.offsetLeft;
    const walk = (x - startX) * 1;
    currentSlider.scrollLeft = scrollLeft - walk;
    });

        
    

})