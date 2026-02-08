//dữ liệu
let players = [
    "P001-Nguyễn Văn A-Thủ môn",
    "P002-Trần Thị B-Hậu vệ",
    "P003-Lê Văn C-Hậu vệ",
    "P004-Phạm Văn D-Tiền vệ",
    "P005-Hoàng Thị E-Tiền đạo",
    "P006-Vũ Minh F-Tiền đạo",
    "P007-Đặng Văn G-Thủ môn",
]
let position_list =["","Thủ môn", "Hậu vệ", "Tiền Vệ", "Tiền Đạo" ]
let name_player;
let number_player;//số lượng người

//tách chuỗi dấu -
function printTeamRoster(){
    //Tạo mảng trống để chúa các cầu thủ đã tách dùng cho hàm 2 
    let result =[];
        for (let i = 0; i < players.length ; i++){
            //tách chuỗi dấu -
            let chain = players[i].split("-");

            id_player = chain[0];
            name_player = chain[1];
            choice_position = chain[2];//mục 2

            console.log(`Mã: ${id_player} | Tên: ${name_player} | Vị trí: ${choice_position} `)
            
            result.push([id_player, name_player, choice_position]);
        }
        return result;//trả dữ liệu cho hàm 2 còn dùng được
}

//kiểm tra số lượng
function countPlayerByPostion(players) {
    //gọi hàm 1 và lưu kết quả tạm 1 biến
    let list = printTeamRoster();

 thuMon = 0;
    let hauVe = 0;
    let tienVe = 0;
    let tienDao = 0;

    for(let i= 0; i < list.length ; i++){
        //lấy ra mảng thông tin của 1 cầu thủ
        let thongTinMotNguoi = list[i];
        //từ mảng đó lááy vị trí phần tử ở vị trí số 2
        let position = thongTinMotNguoi[2].trim();
        
        //kiểm tra để tăng biến đếm tương ứng
        if (position === "Thủ môn") {
            thuMon = thuMon + 1;
        } else if (position === "Hậu vệ") {
            hauVe = hauVe + 1;
        } else if (position === "Tiền vệ") {
            tienVe = tienVe + 1;
        } else if (position === "Tiền đạo") {
            tienDao = tienDao + 1;
        }
    }
    // In kết quả thống kê
        console.log("--- Kết quả thống kê ---");
        console.log(`Thủ môn: ${thuMon}, Hậu vệ: ${hauVe}, Tiền vệ: ${tienVe}, Tiền đạo: ${tienDao}`);
}

//kiểm tra thủ môn
function hasGoalkeeper() {
    // Giả sử bạn đã chạy hàm đếm và có biến thuMon
    if (thuMon > 0) {
        return true;
    } else {
        return false;
    }
}

//hỏi người dùng
let ask = Number(prompt("Có bao nhiều cầu thủ cần nhập vào đội bóng: "));
console.log(`có ${ask} cầu thủ trong nhóm`);
    while (ask < 0){
        alert(`Vui lòng nhập đúng số nguyên dương`);
    break;//cưỡng chế out
    };

//nhập thông tin cầu thủ 
for( let i =0; i < ask ; i++  ){
    //Đẩy thông tin cầu thủ vào trong danh sách
    //số lượng cầu thủ 
    let number_player = i+1;
    console.log(`cầu thủ thứ ${number_player}`);
   
    //Nhập mã cầu thủ 
    let id_player = prompt("Nhập mã cầu thủ : ");
            
    //Nhập tên cầu thủ 
    let name_player = prompt("Nhập tên cầu thủ: ");
    
    if(name_player === null || name_player === "" ){
        alert(`vui lòng không để trống tên cầu thủ `)
    }
   
    //Nhập vị trí 
    let choice = prompt("chọn số: 1=Thủ môn, 2=Hậu vệ, 3=Tiền vệ, 4=Tiền đạo ");
    let choice_position = position_list[Number(choice)];

    //nếu nhập ngoài số 4
    if(!choice_position){
        alert(`Không xác định `)
    }

    
  

}
  console.log("----Danh sách đội bóng----");
  printTeamRoster();
  countPlayerByPostion();
  hasGoalkeeper();