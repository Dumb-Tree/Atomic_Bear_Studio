window.onload = function(){
    localStorage.clear()
    const form = document.getElementById('loginInfo'); //Gắn giá trị được nhập vào của người đung
    const Username = document.getElementById('Username');
    const Password = document.getElementById('Password');

    form.addEventListener("submit",function(e){ //addEventListener() giúp quản lý các sự kiện mà sẽ được gọi mỗi khi sự kiện cho trước được gửi đến mục tiêu
        e.preventDefault(); //preventdefault() sẽ hủy sự kiện nếu nó có thể hủy được để ngăn cản trang tải lại
        const UsernameValue = Username.value;
        const PasswordValue = Password.value;
        localStorage.setItem('Username',UsernameValue); // Lưu dữ liệu vào Localstorage | Localstorage sẽ lưu thông tin được nhập vào và sẽ không bao giờ hết hạn, phù hợp cho lưu giữ lâu dài. Trong khi đó sessionstorage sẽ bị xóa đi khi trang bị tắt
        localStorage.setItem('Password',PasswordValue);
        let userLength = UsernameValue.length;
        if(UsernameValue === '' || PasswordValue === '' ){
        alert("Xin hãy nhập vào username hoặc password đầy đủ");
        return;
        }
        else if(userLength > 16){
            alert("Tên người dùng quá dài!");
            return;
        }
        else if(userLength < 8){
            alert("Tên người dùng quá ngắn!");
            return;
        }
        else if(UsernameValue.includes(' ') === true || PasswordValue.includes(' ') === true){
            alert("Tên và mật khẩu người dùng không được để dấu cách");
            return;
        }
        window.location.href="BTL_Game_Main.html";
    })
}