
//submenu
document.addEventListener("DOMContentLoaded", e => { //Đợi đến khi web đã load hết mọi thứ rồi mới chạy để đảm bảo không bị lỗi null
  let menu = document.querySelector(".playermenu");
  let userInfor = document.querySelector(".userIMG");
  userInfor.addEventListener("click", e => {
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
document.addEventListener("DOMContentLoaded", function () {
  const storedGameData = JSON.parse(localStorage.getItem("gameItemsList")) || [];//Lấy dữ liệu từ local storage

  const displayContainer = document.querySelector(".favGames"); //để dữ liệu vào các container


  let displayHTML = ''; // tạo string trống để chèn dữ liệu vào
  // Vòng lặp tạo cho mỗi game
  if (storedGameData == "") {
    displayHTML = `<div class="emptyFav">
            <p> Trống rỗng...Thèm chơi game quá..... _(:Ⅰ」∠)_</p>
            </div>`
  }
  storedGameData.forEach(item => {
    displayHTML += `
            <div class="gameItem">
              <div class="img">
                <img src="${item.imageUrl}" alt="Game Image">
              </div>
              <div class="infor">
                <h1 class="name">${item.name}</h1>
              </div>
              <div>
                <button class="removeFav">Xóa khỏi yêu thích</button>
              </div>
            </div>
          `;
  });
  // Trình bày ra HTML
  displayContainer.innerHTML = displayHTML;
  // Query selector PHẢI chạy chỉ khi sau innerHTML đã được chèn hết
  const gameItem = displayContainer.querySelectorAll(".gameItem");
  gameItem.forEach(item => {
    const removeButtons = displayContainer.querySelectorAll(".removeFav");
    if (storedGameData.length < 2) {
      displayHTML = `<p class="emptyFav"> Không có cái gì hết chơn vậy nè</p>`
    }
    removeButtons.forEach(button => {
      button.addEventListener("click", function () {
        let storedGameData = JSON.parse(localStorage.getItem("gameItemsList")) || [];
        const gameItem = this.closest(".gameItem");
        const index = gameItem.dataset.index;
        //Xóa khỏi local storage
        removeItemFromLocalStorage(index);
        gameItem.remove(); // Xóa khỏi DOM HTML
      });
    });
  });
  function removeItemFromLocalStorage(index) {
    let storedGameData = JSON.parse(localStorage.getItem("gameItemsList")) || [];
    storedGameData.splice(index, 1); // Bỏ ra khỏi array trong local storage
    localStorage.setItem("gameItemsList", JSON.stringify(storedGameData)); // Cập nhật local storage
  }
  const Username = localStorage.getItem('Username')
  document.getElementById('Username').textContent = Username;
  document.getElementById('Username2').textContent = Username;
});
