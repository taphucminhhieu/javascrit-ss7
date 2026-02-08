//lập mảng 
const playerIds = [];
const playerPositión = [];

const jond_the_team = Number(prompt("Cầu thủ cần nhập vào đội bóng: "));
while(jond_the_team < 0){
    alert("Vui lòng nhập số nguyên dương.");
    break;
};

const lisk = ["Thủ môn", "Hậu vệ", "Tiền vệ", "Tiền đạo"];

for(let i = 1; i <= jond_the_team; i++ ){
        //nhập cầu thủ
        //const number_player =[];
        //console.log(`nhập cầu thủ: ${i+1}`);


        //đẩy mã cauà thủ vào danh sách
        const id = Number(prompt('Nhập mã cầu thủ '))

        playerIds.push(id);

        //khai báo vị trí và cho người dùng chọn
        const choice_position = prompt(`Vị trí(1: Thủ môn 2: Hậu vệ 3: Tiền vệ 4: Tiền đạo): `)
        //đã chọn đc vị trí
        const position = lisk[choice_position - 1]

        //đẩy vị trí cầu thủ vào danh sách
        playerPositión.push(position);
       
        console.log(`${i} .${id} - ${position}`);
    }; 
    const result = playerPositión.filter((p) => p === "Hậu vệ").length; 

    console.log(`Số cầu thủ ở vị trí hậu vệ : ${result}`)