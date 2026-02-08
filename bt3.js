//khai báo mảng
let player = [];
let position_list =["","Thủ môn", "Hậu vệ", "Tiền Vệ", "Tiền Đạo" ]

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

       //in ra 
    let lisk_player = (`${id_player} - ${name_player} - ${choice_position}`);
    //đẩy vào danh sách
    player.push(lisk_player);
    console.log(`${lisk_player}`);

  

}
  console.log("----Danh sách đội bóng----");
    printTeamRoster();

    //tách chuỗi
function printTeamRoster() {
    
    for(let i = 0; i < player.length; i++ ){
        //tách chuỗi " - "
        let chain = player[i].split(" - ");

        id_player = chain[0];
        name_player = chain[1];
        choice_position = chain[2];

        console.log(`Mã: ${id_player} | Tên: ${name_player} | Vị trí: ${choice_position} `)
    }
}
//thêm cầu thủ vào quản lý đội bóng
function pushPlayer(name , position){
    let posName = position_list[Number(positionNum)] || "Không xác định";
    let info = `${id} - ${name} - ${posName}`;
    player.push(info);
}