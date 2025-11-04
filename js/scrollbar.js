document.addEventListener("DOMContentLoaded",()=>{

    // 슬라이드 컨테이너 요소 선택
    const slider = document.querySelectorAll('.slider-container');
    slider.forEach(slider=>{
        // 드래그 상태 추적용 변수들
    let isDown = false;    // 마우스 버튼이 눌린 상태인지 여부
    let startX;            // 드래그 시작 시 마우스 X 좌표
    let scrollLeft;        // 드래그 시작 시의 컨테이너의 스크롤 위치
    
    // 마우스를 누르면 드래그 시작
    slider.addEventListener('mousedown', (e) => {
        isDown = true; // 드래그 상태 시작
        slider.classList.add('active'); // (선택) 드래그 중인 스타일 클래스 추가
        startX = e.pageX - slider.offsetLeft; // 마우스 클릭 위치를 컨테이너 기준으로 계산
        scrollLeft = slider.scrollLeft; // 시작 시점의 가로 스크롤 위치 저장
    });
    
    // 마우스가 컨테이너를 벗어나면 드래그 중단
    slider.addEventListener('mouseleave', () => {
        isDown = false; // 드래그 상태 종료
        slider.classList.remove('active');
        // (선택) 드래그 스타일 제거
    });
    
    // 마우스 버튼을 떼면 드래그 중단
    slider.addEventListener('mouseup', () => {
        isDown = false; // 드래그 상태 종료
        slider.classList.remove('active'); // (선택) 드래그 스타일 제거
    });
    
    // 마우스를 움직이는 동안 드래그 상태면 스크롤 위치 이동
    slider.addEventListener('mousemove', (e) => {
        if (!isDown) return; // 드래그 상태가 아니면 무시
        e.preventDefault(); // 텍스트 선택 등 기본 동작 방지
    
        // 현재 마우스 위치를 컨테이너 기준으로 계산
        const x = e.pageX - slider.offsetLeft;
    
        // 드래그 이동 거리 계산 (오른쪽으로 움직이면 양수, 왼쪽은 음수)
        const walk = (x - startX) * 1; // 곱하기로 스크롤 속도 조절
    
        // 시작 시점에서 드래그 방향에 따라 스크롤 이동
        slider.scrollLeft = scrollLeft - walk;
    });
    })
    
    

})