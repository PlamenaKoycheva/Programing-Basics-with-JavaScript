// За Лора думите притежават голяма сила. Тя те моли да измислиш алгоритъм, с който да откриеш коя е "най-силната" дума. До получаване на 
// команда "End of words" ще се четат от конзолата думи. За да се открие силата на всяка една, трябва да се намери сборът от ASCII 
// стойностите на символите, от които се състои думата. Ако започва с гласна буква - 'a', 'e', 'i', 'o', 'u', 'y' 
// (или техните еквивалентни главни букви), полученият сбор трябва да се умножи по дължината на думата, в противен случай, да се раздели на
//  дължината и да се закръгли до най-близкото цяло число надолу.
// Вход
// До получаване на команда "End of words" се чете по един ред от конзолата:
// •	дума – текст 
// Изход
// След приключване на програмата се печата на един ред думата с "най-голяма сила":
// •	"The most powerful word is {думата с най-голяма сила} - {силата на думата}" 


function theMostPowerfullWord(input) {
    let index = 0;
    let mostPowerfulWord = "";
    let maxPower = 0;

    let vowels = ["a", "e", "i", "o", "u", "y", "A", "E", "I", "O", "U", "Y"];
    let command = input[index] ;
    index++

    while (command !== "End of words") {
        let word = command;

        let sumASCII = 0;
        for (let i = 0; i < word.length; i++) {
            sumASCII += word.charCodeAt(i);
        }

        // Проверка дали първата буква е гласна
        if (vowels.includes(word[0])) {
            sumASCII *= word.length;
        } else {
            sumASCII = Math.floor(sumASCII / word.length);
        }

        
        // Проверка дали текущата дума е най-силната
        if (sumASCII > maxPower) {
            maxPower = sumASCII;
            mostPowerfulWord = word;
        }
        command = input[index];
        index++
       
    }

    console.log(`The most powerful word is ${mostPowerfulWord} - ${maxPower}`);
}
theMostPowerfullWord(["The",
    "Most",
    "Powerful",
    "Word",
    "Is",
    "Experience",
    "End of words"])
    
