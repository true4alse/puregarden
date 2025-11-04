// header, footer 불러오기
function loadHTML(tag, file) {
    const el = document.querySelector(tag);
    if (!el) return;

    fetch(file)
        .then(res => {
            console.log(res.status)
            return res.text();
        })
        .then(data => el.innerHTML = data)
        .catch(err => console.error(err));
}

loadHTML(".header", "/header.html");
// loadHTML("footer", "footer.html");

// 공통 head 불러오기
function loadHead(file) {
    fetch(file)
        .then(res => res.text())
        .then(data => {
            const temp = document.createElement("div");
            temp.innerHTML = data;
            Array.from(temp.children).forEach(node => document.head.appendChild(node));
        })
        .catch(err => console.error(err));
}

// 현재 페이지 이름에 따라 페이지별 head 추가
// const page = window.location.pathname.split("/").pop(); // 예: index.html
// loadHead("head-common.html");

// if (page === "index.html") {
//     loadHead("head-index.html");
// } else if (page === "about.html") {
//     loadHead("head-about.html");
// }
