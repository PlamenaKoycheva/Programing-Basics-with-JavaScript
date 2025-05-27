// Джеси е решила да събира пари за екскурзия и иска от вас да ѝ помогнете да разбере дали ще успее да събере необходимата сума. 
// Тя спестява или харчи част от парите си всеки ден. Ако иска да похарчи повече от наличните си пари, то тя ще похарчи всичко, 
// което има и ще ѝ останат 0 лева.
// Вход
// От масива се четат:
// •	Пари нужни за екскурзията - реално число в интервала [1.00.. .25000.00]
// •	Налични пари - реално число в интервала [0.00... 25000.00]
// След това многократно се четат по два реда:
// •	Вид действие – текст с възможности "spend" и "save".
// •	Сумата, която ще спести/похарчи - реално число в интервала [0.01… 25000.00]
// Изход
// Функцията трябва да приключи при следните случаи:
// •	Ако 5 последователни дни Джеси само харчи, на конзолата да се изпише:
// o	"You can't save the money."
// o	"{Общ брой изминали дни}"
// •	Ако Джеси събере парите за почивката на конзолата се изписва:
// o	"You saved the money for {общ брой изминали дни} days."

function vacation (array) { 
    let index = 0;
    let moneyForVacation = Number(array[index]);
    index++;
    let wallet = Number(array[index]);
    index++;
   
    let daysForSpending = 0;
    let daysPassed = 0;
    
    while (wallet < moneyForVacation) {
        let interaction = array[index];
        index++;
        let money = Number(array[index]);
        index++;
        if (interaction === `save`) {
            wallet += money;
            daysForSpending = 0;
           
        } else if (interaction === `spend`) {
            if (money > wallet) {
                wallet = 0;
                
            } else {
                wallet -= money;

            }
            daysForSpending++;
            
        }
        daysPassed++; 

        if (daysForSpending === 5) {
            console.log("You can't save the money.")
            console.log(daysPassed);
            break; 

        }
        
        
        
    }
    if(wallet >= moneyForVacation){
    console.log(`You saved the money for ${daysPassed} days.`); 
        
    }
    
    
}
vacation(["2000",
    "1000",
    "spend",
    "1200",
    "save",
    "2000"])
    
    
    