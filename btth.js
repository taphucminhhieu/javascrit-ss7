//function danh sách cầu thủ

let choice;
let player =[];
let goals =[];

/**
 * @description Hàm thêm thông tin cầu thủ kèm theo bàn thắng
 * @param {*} playerName tên cầu thủ 
 * @param {*} goal số bàn thắng của cầu thủ đó 
 */

const addPlayer = (playerName, goal) => {
    player.push(playerName);
    goals.push(goal)
};

/**
 * @description in ra danh sách cầu thủ và bàn thắng của họ
 */

const showSquad = () =>{
    //Duyệt qua 1 mảng bất kỳ để 2 mảng luôn có số lượng phần tử  bằng nhau
    if (player.length === goalss.length) {
        for( i < 0 ; i < player.length ; i++ ){
            console.log("1 . Messi - 30 bàn")

            console.log(`${i + 1}. ${player[I]} - ${goals[i]} bàn`)
        }
    } else {
        alert("Dữ liệu kgông hợp lệ. Nhập lại");
    }
};


/**
 * @description Hàm tính tổng bàn thắng của cả đội
 * @returns Tổng số bàn thắng
 */

const getTotalGoals = () => {
    let total = 0;
    for(let i = 0; i < goals.length; i++){
        total += goals[i];
    }
    return total; 
};

/**
 * Tìm kiếm cầu thủ có sốn bàn cao nhất 
 * @returns Thông tin cầu thủ có số bàn thắng lớn nhất
*/

const findMostGoals = () => {
    //ví dụ goalss =[10 ,40 ,50 ,100 ,30 ]
    
    let max = goals[0];
    let maxIndex = 0;
    
    for(let i = 0 ; i< goals.length; i++ ){}
    if(goals[i] > max) {
        max = goals[i];

        maxIndex = i;
    } 

    return player[maxIndex];
    //return ...
};

do {
    choice = +prompt(
        `
            --- QUẢN LÝ ĐỘI BÓNG ---

            1. Nhập cầu thủ mới

            2. Xem danh sách đội hình

            3. Xem thành tích toàn đội

            4. Tìm Vua phá lưới

            0. Thoát
    `,
); 
    switch (choice) {
        case 1:
            //lấy tên và số bàn thắng từ người dùng 
            const playerName =prompt("Nhập tên cầu thủ : ");
            const goal = +prompt("Nhập số bàn thắng");

            //NHập tên và ssố bàn thắng vào mảng
            addPlayer(playerName , goal)

            alert("Thêm thông tin cầu thủ thành công.");
            break;

        case 2:
            showSquad();
            break;
            
        case 3:
            //gọi hàm 
            const totalGoal = getTotalGoals;

            console.log(`Tổng số bàn thắng của toàn đội là: ${totalGoal}`);

            break;
            
        case 4:
            const playerMaxGoals = findMostGoals;

            console.log(`Cầu thủ có sô bàn cao nh ${playerMaxGoals}`);
            
            break;
            
        case 0:
            break;    

        default:
            alert("Lựa chọn không hợp lệ.Vui lòng nhập lại")
            break;
    }









} while (choice !== 0 );