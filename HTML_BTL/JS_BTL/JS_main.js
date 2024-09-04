//Submenu
document.addEventListener("DOMContentLoaded", function () { //Đợi đến khi web đã load hết mọi thứ rồi mới chạy để đảm bảo không bị lỗi null
    let menu = document.querySelector(".playermenu");
    let userInfor = document.querySelector(".userIMG");
    userInfor.addEventListener("click", function () {
        menu.classList.toggle("show");
    });
});
//friendlist
document.addEventListener("DOMContentLoaded", e => {
    const friendbtn = document.querySelector(".friendbtn");
    const friendlist = document.querySelector(".friendList");
    friendbtn.addEventListener("click", e => {
        friendlist.classList.toggle("showfriend");
    });
});
window.onload = function () {
    
    // Lưu tên game vào localStorage cho trang gameDefault
    // name | img name | price | trailer link

    let dragon = ["Dragon Chronicles: Black Tears", "dragon", "599,000", "https://www.youtube.com/embed/LZxq6VG3G7g"];
    let deathbound = ["Deathbound", "deathbound", "320,000", "https://www.youtube.com/embed/SbW3exPtr7k"];
    let awayout = ["A Way Out", "awayout", "690,000", "https://www.youtube.com/embed/yGZGSdgJVPM"];
    let returnalive = ["Return Alive", "returnalive", "Free", "https://www.youtube.com/embed/3tKWoH3VjJA"];
    let thewatch = ["The Watch", "thewatch", "299,000", "https://www.youtube.com/embed/pj0cAPsvzNI"];

    localStorage.setItem('dragon', JSON.stringify(dragon));
    localStorage.setItem('deathbound', JSON.stringify(deathbound));
    localStorage.setItem('awayout', JSON.stringify(awayout));
    localStorage.setItem('returnalive', JSON.stringify(returnalive));
    localStorage.setItem('thewatch', JSON.stringify(thewatch));

    var hotGames = document.querySelectorAll(".hotgames>.hotgame");
    // sử dụng let i là vì let i lưu trữ vị trí i hiện tại, còn var i thì không
    for (let i = 0; i < hotGames.length; i++) {
        hotGames[i].addEventListener('click', function () {
            var hotgame = hotGames[i];
            var rel = hotgame.getAttribute('rel');
            localStorage.setItem("gameData", rel);
            window.location.href = "gameDefault.html";
        })
    }

    const Username = localStorage.getItem('Username')
    document.getElementById('Username').textContent = Username;
    document.getElementById('Username2').textContent = Username;
    var bannerlist = document.querySelector('.bannerlist')
    var img = document.querySelectorAll('.bannerlist img')
    var slAnh = img.length
    img = img[0].offsetWidth;
    var current = 0
    setInterval(function () {
        current = current + img * -1;
        if (current <= -(img * slAnh)) {
            current = 0;
        }
        bannerlist.style.transform = `translateX(${current}px)`
    }, 4000)


    var d = document.getElementById('Denbar');
    var count = 0;
    //Set
    setInterval(function () { // sau mỗi 16 giây, thanh trượt về vị trí ban đầu 
        d.style.top = 7.9 + 'rem';
        count = 0;
    }, 15997)
    setInterval(function () {// sau mỗi 4 giây, thanh trượt di chuyển xuống
        count = ++count;
        console.log(count);
        if (count < 2)
            d.style.top = count * 7.9 + 9 + 'rem';
        else
            d.style.top = count * 8.9 + 8 + 'rem';
    }, 3999);
    /*JS cho game list*/
    let slideIndex = [1, 1];
    let slideId = ["gameSlides1", "gameSlides2"]
    showSlides(1, 0);
    showSlides(1, 1);

    function plusSlides(n, no) {
        showSlides(slideIndex[no] += n, no);
    }

    function showSlides(n, no) {
        let i;
        let x = document.getElementsByClassName(slideId[no]);
        if (n > x.length) { slideIndex[no] = 1 }
        if (n < 1) { slideIndex[no] = x.length }
        for (i = 0; i < x.length; i++) {
            x[i].style.display = "none";
        }
        x[slideIndex[no] - 1].style.display = "block";
    }
}