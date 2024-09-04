   //submenu
   document.addEventListener("DOMContentLoaded", e => { //Đợi đến khi web đã load hết mọi thứ rồi mới chạy để đảm bảo không bị lỗi null
    let menu = document.querySelector(".playermenu");
    let userInfor = document.querySelector(".userIMG");
    userInfor.addEventListener("click", e=>{
        menu.classList.toggle("show");
    });
});
    //friendlist
document.addEventListener("DOMContentLoaded", e => { 
    const friendbtn = document.querySelector(".friendbtn");
    const friendlist = document.querySelector(".friendList");
    friendbtn.addEventListener("click", e=>{
        friendlist.classList.toggle("showfriend");
    });
});
document.addEventListener("DOMContentLoaded", function () {
    // Lấy mọi nút thêm vào mục yêu thích
    const addToFavBtn = document.querySelectorAll(".addFav");

    // Tạo array để chứa thông tin
    let gameDataArray = JSON.parse(localStorage.getItem("gameDefault")) || [];

    // Loop qua mỗi nút và cho nó sự kiện click chuột để lưu
    addToFavBtn.forEach((button) => {
        button.addEventListener("click", function () {
            // Lấy game gần nhất với button (game mình muốn lưu vào yêu thích)
            const gameItem = button.closest('.gameItem');

            // Lấy ảnh và tên của game
            const imgSrc = gameItem.querySelector("img").src;
            const gameName = gameItem.querySelector(".name").innerText;

            // Biến dữ liệu thành 1 phần tử để bỏ array (na ná struct nhưng để lưu vào array)
            const gameData = {
                imageUrl: imgSrc,
                name: gameName,
            };

            // kiểm nếu danh sách đã có game đó
            const existingItem = gameDataArray.find(item => item.name === gameName);

            // Nếu danh sách chưa có thì bỏ vào array
            if (!existingItem) {
                gameDataArray.push(gameData);

                // cập nhật dữ liệu vào array
                localStorage.setItem("gameItemsList", JSON.stringify(gameDataArray));

                // Phản hồi kết quả cho người dùng
                alert("Đã thêm vào mục yêu thích!");
            } else {
                alert("Bạn đã bỏ game này vào mục yêu thích rồi mà!");
            }
        });
    });
});
window.onload = function () {
    const Username = localStorage.getItem('Username')
    document.getElementById('Username').textContent = Username;
    document.getElementById('Username2').textContent = Username;
    // Lấy dữ liệu từ localStorage
    var rel = localStorage.getItem("gameData");

    if (rel) {
        // Lấy dữ liệu game từ localStorage dựa trên giá trị của rel
        var gameData = JSON.parse(localStorage.getItem(rel));
        console.log(gameData);
    } else {
        console.log('Không có dữ liệu với khóa "gameData" trong localStorage.');
    }

    var tenGame = gameData[0];
    var imgName = gameData[1];
    var price = gameData[2];
    var trailer = gameData[3];

    // Thay đổi nội dung trang web
    var tenGameMoi = document.querySelector(".trailer > h1");
    var priceMoi = document.querySelector(".gameInfor > div > span");
    var trailerMoi = document.querySelector(".trailerVideo >.bannerList > iframe");

    tenGameMoi.innerText = tenGame;
    priceMoi.innerText = `đ${price}`;
    trailerMoi.setAttribute("src", trailer);


    // Đổi ảnh lớn bằng ảnh thumbnail
    var imgs = document.querySelectorAll(".trailer >.thumbnail > div");
    var bannerList = document.querySelector(".gameDefault>.trailer>.trailerVideo>.bannerList");
    var temp
    for (let i = 0; i < imgs.length; i++) {
        imgs[i].onclick = function () {
            temp = i;
            donVi = (i) * 100;
            bannerList.style.transform = `translateX(-${donVi}%)`
        }
    }


    // Thay đổi ảnh thumbnail
    var thumbnails = document.querySelectorAll(".thumbnail>div>img");
    thumbnails[0].src = `../Images_Btl/gameDefault/${rel}/video.avif`
    for (var i = 1; i < thumbnails.length; i++) {
        thumbnails[i].src = `../Images_Btl/gameDefault/${rel}/anh${i}.png`
    }

    // Thay đổi ảnh trong trailerScreen
    var trailerScreens = document.querySelectorAll(".bannerList>div>img")
    for (var i = 0; i < trailerScreens.length; i++) {
        trailerScreens[i].src = `../Images_Btl/gameDefault/${rel}/anh${i + 1}.png`;
    }

    // Thay đổi ảnh logo
    var anhNen = document.querySelector(".gameInfor>.logo>img")
    anhNen.src = `../Images_Btl/gameDefault/${rel}/logo.avif`

    // Hiện popup
    var popUp = document.querySelector(".gameDefault > .popUp");
    var popUpImg = popUp.querySelector("div > img");
    var overlay = document.querySelector(".overlay");

    var turnOnButton
    var trailerScreen = document.querySelector(".trailerVideo");
    trailerScreen.onclick = function () {
        var trailerScreenImg = trailerScreen.querySelector(`.bannerList>.img:nth-child(${temp + 1})>img`).src;
        popUpImg.src = trailerScreenImg
        popUp.classList.add("show");
        overlay.classList.add("show");
    }

    // tắt popup
    var closeButton = document.querySelector(".popUp > button");
    closeButton.onclick = function () {
        popUp.classList.remove("show");
        overlay.classList.remove("show");
    }
}