document.addEventListener("DOMContentLoaded", e => {
    let likebtn = document.getElementById("green");
    let dislikebtn = document.getElementById("red");
    likebtn.addEventListener("click", e => {
        if (dislikebtn.classList.contains("red")) {
            dislikebtn.classList.toggle("red");
        }
        likebtn.classList.toggle("green");
    });
    dislikebtn.addEventListener("click", e => {
        if (likebtn.classList.contains("green")) {
            likebtn.classList.toggle("green");
        }
        dislikebtn.classList.toggle("red");
    });
});
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
window.onload = function () {
    const Username = localStorage.getItem('Username')
    document.getElementById('Username').textContent = Username;
    document.getElementById('Username2').textContent = Username;
    var character = document.getElementById("character");
    var game = document.getElementById("game");
    var interval;
    var both = 0;
    var counter = 0;
    var currentBlocks = [];
    function moveLeft() {
        var left = parseInt(window.getComputedStyle(character).getPropertyValue("left"));
        if (left > 0) {
            character.style.left = left - 2 + "px";
        }
    }
    function moveRight() {
        var left = parseInt(window.getComputedStyle(character).getPropertyValue("left"));
        if (left < 380) {
            character.style.left = left + 2 + "px";
        }
    }
    document.addEventListener("keydown", event => {
        if (both == 0) {
            both++;
            if (event.key === "a") {
                interval = setInterval(moveLeft, 1);
            }
            if (event.key === "d") {
                interval = setInterval(moveRight, 1);
            }
        }
    });
    document.addEventListener("keyup", event => {
        clearInterval(interval);
        both = 0;
    });

    var blocks = setInterval(function () {
        var blockLast = document.getElementById("block" + (counter - 1));
        var holeLast = document.getElementById("hole" + (counter - 1));
        if (counter > 0) {
            var blockLastTop = parseInt(window.getComputedStyle(blockLast).getPropertyValue("top"));
            var holeLastTop = parseInt(window.getComputedStyle(holeLast).getPropertyValue("top"));
        }
        if (blockLastTop < 400 || counter == 0) {
            var block = document.createElement("div");
            var hole = document.createElement("div");
            block.setAttribute("class", "block");
            hole.setAttribute("class", "hole");
            block.setAttribute("id", "block" + counter);
            hole.setAttribute("id", "hole" + counter);
            block.style.top = blockLastTop + 100 + "px";
            hole.style.top = holeLastTop + 100 + "px";
            var random = Math.floor(Math.random() * 360);
            hole.style.left = random + "px";
            game.appendChild(block);
            game.appendChild(hole);
            currentBlocks.push(counter);
            counter++;
        }
        var characterTop = parseInt(window.getComputedStyle(character).getPropertyValue("top"));
        var characterLeft = parseInt(window.getComputedStyle(character).getPropertyValue("left"));
        var drop = 0;
        if (characterTop <= 0) {
            alert("Game over. Score: " + (counter - 9));
            clearInterval(blocks);
        }
        for (var i = 0; i < currentBlocks.length; i++) {
            let current = currentBlocks[i];
            let iblock = document.getElementById("block" + current);
            let ihole = document.getElementById("hole" + current);
            let iblockTop = parseFloat(window.getComputedStyle(iblock).getPropertyValue("top"));
            let iholeLeft = parseFloat(window.getComputedStyle(ihole).getPropertyValue("left"));
            iblock.style.top = iblockTop - 0.5 + "px";
            ihole.style.top = iblockTop - 0.5 + "px";
            if (iblockTop < -2) {
                currentBlocks.shift();
                iblock.remove();
                ihole.remove();
            }
            if (iblockTop - 20 < characterTop && iblockTop > characterTop) {
                drop++;
                if (iholeLeft <= characterLeft && iholeLeft + 20 >= characterLeft) {
                    drop = 0;
                }
            }
        }
        if (drop == 0) {
            if (characterTop < 480) {
                character.style.top = characterTop + 2 + "px";
            }
        } else {
            character.style.top = characterTop - 0.5 + "px";
        }
    }, 1);
    const retrybtn = document.querySelector(".retryBtn");
    retrybtn.addEventListener("click", e => {
        location.reload();
    });
};