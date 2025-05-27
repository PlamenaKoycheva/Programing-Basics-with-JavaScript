// Пешо решава, че иска да направи ремонт вкъщи. Неговата задача е да боядиса стените в хола, като знаете височината и ширината на една 
// стена. Холът на Пешо има 4 стени с еднакви размери, определен процент от които се заемат от прозорци и врати, които няма да бъдат 
// боядисвани. Той не е сигурен дали ще успее наведнъж, затова моли Вас да му помогнете да изчисли дали ще му остава още работа за 
// следващия ден и, ако да, колко кв. м. има да довърши, а в случай, че успее да боядиса хола, колко боя му е останала (трябва да се има 
// предвид, че с един литър боя се боядисва един квадратен метър от стената). 
// Вход
// От конзолата се четат следните редове:
// 1.	Височина на стената - цяло число [0… 100]
// 2.	Ширина на стената - цяло число [0… 100]
// 3.	Процент от общата площ на стените, който няма да бъде боядисан - цяло число [5… 95]
// На следващите редове до получаване на командата "Tired!" или докато не бъдат боядисани всички стени, се чете по едно число:
// •	Литри боя – цяло число [0…100]:
// Забележка: Площта за боядисване да бъде закръглена нагоре до най-близкото цяло число.
// Изход
// Да се отпечата на конзолата един от следните редове:
// •	При получаване на командата "Tired!":
// "{квадратни метри} quadratic m left." 
// {квадратни метри} е повърхнината, която му остава да боядисана.
// •	Aко е останала боя в излишък:
// "All walls are painted and you have {литри боя} l
//  paint left!" 
// •	Aко след боядисването на всички стени, не е останала боя:
// "All walls are painted! Great job, Pesho!" 


function renovation (input) {
    let hight = Number(input[0]);
    
    let width = Number(input[1]);
    
    let wallsToPaint = hight * width * 4;
    let percentDoorsAndWindows = Number(input[2]);
    let index = 3;
    let totalPaintingZone = Math.ceil(wallsToPaint - (wallsToPaint * percentDoorsAndWindows / 100));
    let command = input[index];
    index++;
    let wallsPainted = 0;

    while (command !== "Tired!") {
        let paintInLitters = Number(command);
        wallsPainted += paintInLitters;
        totalPaintingZone -= paintInLitters;
        if (totalPaintingZone <= 0) {
            break;
           
            
        }
        command = input[index];
        index++;
        
    }
     if (totalPaintingZone > 0 && command === "Tired!") {
        console.log(`${totalPaintingZone} quadratic m left.`);
     } else if (totalPaintingZone === 0) {
        console.log("All walls are painted! Great job, Pesho!");
        
     } else if (totalPaintingZone < 0) {
        console.log(`All walls are painted and you have ${Math.abs(totalPaintingZone)} l paint left!`);
        
     }
        
    
        
        




}
renovation (["3",
    "5",
    "10",
    "2",
    "3",
    "4",
    "Tired!"])
    