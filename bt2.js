//khai báo mảng
let playerIds = ["P001", "P002", "P003", "P004", "P005"];
let playerNames = [
    "Nguyễn Văn A",
    "Trần Thị B",
    "Lê Văn C",
    "Phạm Văn D",
    "Hoàng Thị E",
];
let playerJerseyNumbers = [10, 7, 8, 9, 11];

//in danh sách
function printTeamRoster(){
    console.log("---Danh sách đội bóng----");
    for(let i = 0; i <  playerIds.length; i++ ){
        console.log(`${i+1}. ID: ${playerIds[i]} - Tên: ${playerNames[i]} - Số áo: ${playerJerseyNumbers[i]}`);
    }
};

//cập nhật 
function updatePlayerNameAndJersey(playerId, updateName, updateJerseyNumber){
    //tìm vị trí của  mã cầu thủ trong mảng
    let index = playerIds.indexOf(playerId);

    if(index !== -1) {//vị trí hợp lệ
    playerNames[index] = updateName;
    playerJerseyNumbers[index] = updateJerseyNumber;
    return true;
    }else {
        return false;
    }
}


let ask = (prompt("Nhập mã cầu thủ cần cập nhật: "));
if(!playerIds.includes(ask) ){
    alert("mã càu thủ không tồn tại.Nhập lại")
} else {
    console.log("hop[ự lệ.Bắt đầu cập nhập")
    let nameinput = prompt("Nhập tên mới cho cầu thủ: ");
    let jerseyInput = Number(prompt("Nhập số áo mới : "));

    //kiểm tra áo
    if(jerseyInput >=1 && jerseyInput <=99 ){
        let success = updatePlayerNameAndJersey(ask , nameinput, jerseyInput);
        
        //in ra thành công
        if(success){
            alert("cập nhật thành công");
            printTeamRoster();//in ra danh sacxsh sau khi sửa
        }

    }else{
        alert(`mã số áo không hợp lệ. Nhập lại`);
    }


    
}