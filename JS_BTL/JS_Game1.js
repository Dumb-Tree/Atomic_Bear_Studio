document.addEventListener("DOMContentLoaded", e => { 
  let likebtn = document.getElementById("green");
  let dislikebtn = document.getElementById("red");
  likebtn.addEventListener("click", e=>{
      if(dislikebtn.classList.contains("red")){
          dislikebtn.classList.toggle("red");
      }
      likebtn.classList.toggle("green");
  });
  dislikebtn.addEventListener("click", e=>{
      if(likebtn.classList.contains("green")){
          likebtn.classList.toggle("green");
      }
      dislikebtn.classList.toggle("red");
  });
});
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
window.onload= function(){
  //Điền vào tên user
  const Username = localStorage.getItem('Username');
  document.getElementById('Username').textContent  = Username;
  document.getElementById('Username2').textContent  = Username;
  //Các elem của game
  const cells = Array.from(document.querySelectorAll(".cell"));
  const enemyarea = cells.slice(0,40); // Định nghĩa vùng của chướng ngại vật
  const playercell = cells.slice(40);
  const scoreDisplay = document.querySelector(".score");
  const startscreen = document.querySelector(".startScreen");
  const restartscrn = document.querySelector(".restartgame");
  let dropCount, speed, score; //định nghĩa biến
  reset();
  document.addEventListener("keydown", e => {      // nhận phím bấm
      if(!dropCount){
        startGame();
        restartscrn.classList.remove("show");
      }
    const player = document.querySelector(".player");

    if(e.key === "ArrowRight" && playercell.includes(player.parentElement.nextElementSibling)|| e.key === "d" && playercell.includes(player.parentElement.nextElementSibling)){ //Khi người chơi bấm phím d hoặc mũi tên phải và nằm trong vị trí cho phép đi
      player.parentElement.nextElementSibling.appendChild(player); // Tìm cell chứa người chơi => chuyển qua cell tiếp theo => thêm / di chuyển người dùng vào vị trí đó
    }
    else if(e.key === "ArrowLeft" && playercell.includes(player.parentElement.previousElementSibling) || e.key === "a" && playercell.includes(player.parentElement.previousElementSibling)){ //Khi người chơi bấm phím d hoặc mũi tên phải
      player.parentElement.previousElementSibling.appendChild(player);
    }
  });
  function reset(){ //Reset lại game
    dropCount = 0;
    speed = 1000;
    score = 0;
    scoreDisplay.innerHTML = "0";
    startscreen.classList.toggle("show");

    cells.forEach(cell => cell.innerHTML = "");
    playercell[0].innerHTML = '<div class="player"></div>';
  }
  function startGame(){
    reset();
    enemymove()
    console.log("Starting new game!");
  }
  function enemymove(){
    let collide = false;
    for(let i = enemyarea.length-1; i >= 0; i--){ //di chuyển đối thủ xuống
      const cell = enemyarea[i];
      const nextCell = cells[i+4];
      const enemy = cell.children[0];
      if(!enemy){ //nếu ko có đối thủ thì không cần di chuyển
        continue;
      }
      nextCell.appendChild(enemy);
      //Đụng độ
      if(playercell.includes(nextCell)){
        if(nextCell.querySelector(".player")){
          collide = true;
        } else{
          score++;
          speed = Math.max(100, speed -25); //mỗi lần tăng điểm thì đối thủ sẽ nhanh hơn cho đến khi tốc độ đạt 100 mili giây
          scoreDisplay.innerHTML = score;
          enemy.remove();
        }
      }
    } 

    // chỉ thả đối thủ mỗi lần kia
    if(dropCount % 2 === 0){
      const position = Math.floor(Math.random()*4); // trả về những số từ 1-4, là số index của những vị trí đối thủ có thể rơi từ
      
      enemyarea[position].innerHTML='<div class="enemy"></div>';
    }

    if(collide){
      restartscrn.innerHTML=`<p> Your score was: ${score}</p>`;
      restartscrn.classList.add("show");
      reset();
    }
    else{
      dropCount++;
      setTimeout(enemymove, speed);
    }
  }
  document.addEventListener("DOMContentLoaded", e => { 
    let likebtn = document.getElementById("green");
    let dislikebtn = document.getElementById("red");
    likebtn.addEventListener("click", e=>{
        if(dislikebtn.classList.contains("red")){
            dislikebtn.classList.toggle("red");
        }
        likebtn.classList.toggle("green");
    });
    dislikebtn.addEventListener("click", e=>{
        if(likebtn.classList.contains("green")){
            likebtn.classList.toggle("green");
        }
        dislikebtn.classList.toggle("red");
    });
});
     //submenu
     document.addEventListener("DOMContentLoaded", e => { //Đợi đến khi web đã load hết mọi thứ rồi mới chạy để đảm bảo không bị lỗi null
        let menu = document.querySelector(".playermenu");
        let userInfor = document.querySelector(".userIMG");
        userInfor.addEventListener("click", e=>{
            menu.classList.toggle("show");
        });
    });
}