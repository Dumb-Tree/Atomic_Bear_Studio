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
function search(obj) {
  var search = obj.value.toLowerCase();
  var game = document.getElementsByClassName("gameItem")

  // Đặt lại màu nền cho tất cả sản phẩm về "aqua"
  for (var j = 0; j < game.length; j++) {
    game[j].style.display = "none";
  }

  if (search != "") {
    for (var i = 0; i < game.length; i++) {
      var gameName = game[i].querySelector("h1").innerText
      gameName = gameName.toLowerCase();
      if (gameName.includes(search)) {

        game[i].style.display = "block";

      }
    }
  } if (search == "") {
    for (var i = 0; i < game.length; i++) {
      var gameName = game[i].querySelector("h1").innerText
      gameName = gameName.toLowerCase();
      if (gameName.includes(search)) {

        game[i].style.display = "block";
      }
    }
  }
}

function next() {

  // Thay đổi phần banner
  var carousel = document.querySelector(".carousel"); // Lấy phần tử carousel
  var listItem = document.querySelectorAll(".carousel >.item");
  var item0 = listItem[0];
  carousel.removeChild(listItem[0]); // Xóa item đầu tiên khỏi carousel
  carousel.appendChild(item0); // Thêm item đầu tiên vào cuối carousel

  // Thay đổi phần thumbnail
  var thumbnail = document.querySelector(".thumbnail")
  var listItemThumbnail = document.querySelectorAll(".thumbnail > div")
  var item0Thumbnail = listItemThumbnail[0];
  thumbnail.removeChild(listItemThumbnail[0]);
  thumbnail.appendChild(item0Thumbnail);
}

function previous() {
  // Thay đổi phần banner
  var carousel = document.querySelector(".carousel"); // Lấy phần tử carousel
  var listItem = document.querySelectorAll(".carousel >.item");
  var itemLast = listItem[listItem.length - 1];
  carousel.removeChild(itemLast); // Xóa item cuối khỏi carousel
  carousel.insertBefore(itemLast, listItem[0]); // Thêm item đầu tiên vào dầu carousel

  // Thay đổi phần thumbnail
  var thumbnail = document.querySelector(".thumbnail")
  var listItemThumbnail = document.querySelectorAll(".thumbnail > div")
  var itemLastThumbnail = listItemThumbnail[listItemThumbnail.length - 1];
  thumbnail.removeChild(itemLastThumbnail);
  thumbnail.insertBefore(itemLastThumbnail, listItemThumbnail[0]);
}


document.addEventListener("DOMContentLoaded", function() {
    // Lấy mọi nút thêm vào mục yêu thích
    const addToFavBtn = document.querySelectorAll(".addFav");
  
    // Tạo array để chứa thông tin
    let gameDataArray = JSON.parse(localStorage.getItem("gameItemsList")) || [];
  
    // Loop qua mỗi nút và cho nó sự kiện click chuột để lưu
    addToFavBtn.forEach((button) => {
      button.addEventListener("click", function() {
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
//đưa ra danh sách các tên và ảnh game đã lưu vào trong danh sách game trong giỏ hàng
const storedGameData = JSON.parse(localStorage.getItem("gameItemsList")) || [];
console.log(storedGameData);
window.onload = function () {
  //Điền vào tên user
  const Username = localStorage.getItem('Username');
  document.getElementById('Username').textContent = Username;
  document.getElementById('Username2').textContent = Username;
}