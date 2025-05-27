// Да се напише програма, която генерира трицифрени PIN кодове, като цифрите на всеки PIN код са в определен интервал. За да бъде валиден 
// един PIN код той трябва да отговаря на следните условия:
// •	Първата и третата цифра трябва да бъдат четни
// •	Втората цифра трябва да бъде просто число в диапазона [2...7]
// Вход:
// От конзолата се четат 3 реда:
// •	Горната граница на първото число - цяло число в диапазона [1...9]
// •	Горната граница на второто число - цяло число в диапазона [1...9]
// •	Горната граница на третото число - цяло число в диапазона [1...9]
// Изход:
// Да се отпечатат на конзолата всички валидни трицифрени PIN кодове, чиито цифри отговарят на съответните интервали.


function uniquePINCodes(arg1, arg2, arg3) {
    let firstNumber = Number(arg1);
    let secondNumber = Number(arg2);
    let thirdNumber = Number(arg3);

    for (let a = 1; a <= firstNumber; a++) {
        if (a % 2 !== 0) continue; 
        for (let b = 2; b <= secondNumber; b++) {
            let isPrime = true;

            for (let divisor = 2; divisor < b; divisor++) {
                if (b % divisor === 0) {
                    isPrime = false;
                    break;
                }
            }

            if (!isPrime) continue; 

            for (let c = 1; c <= thirdNumber; c++) {
                if (c % 2 !== 0) continue;

                console.log(`${a} ${b} ${c}`);
            }
        }
    }
}

uniquePINCodes(3, 5, 5)

