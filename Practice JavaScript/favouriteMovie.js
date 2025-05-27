// Петък вечер е и се чудите кой филм да си пуснете да гледате. Решавате да напишете програма, която да избере това вместо вас. 
// До команда "STOP" получавате заглавия на любими ваши филми. Най-добрият филм за вас ще бъде този, който има най-много точки. 
// Точките се изчисляват като сбор от ASCII стойностите на символите в заглавието на филма. (няма да има случай, в който имаме 
// два филма с равен брой точки)
// При изчислението на точките трябва да се има предвид следното:
// •	За всяка малка буква в заглавието, от сумата трябва да се извади два пъти дължината на заглавието на филма.
// •	За всяка главна буква в заглавието, от сумата трябва да се извади дължината на заглавието на филма.
// Може да имате максимум 7 заглавия на филми.
// Вход
// От конзолата се четат редове до команда "STOP" или до достигането на лимита от 7 филма:
// •	Заглавие на филм  – текст;
// Изход
// На конзолата да се отпечата:
// •	Ако сте достигнали лимита от 7 филма трябва да отпечатате:
// "The limit is reached."
// Да се отпечата най-добрият филм за вас:
// "The best movie for you is {заглавие на филм} with {сума на символите} ASCII sum."
  
function bestMovie(input) {
    let bestMovieTitle = "";
    let bestScore = Number.MIN_SAFE_INTEGER;
    let movieCount = 0;
    
    for (let index = 0; index < input.length; index++) {
        let movieTitle = input[index];

        if (movieTitle === "STOP") {
            break;
        }

        movieCount++;
        if (movieCount >= 7) {
            console.log("The limit is reached.");
            
        }

        let currentScore = 0;
        let titleLength = movieTitle.length;

        for (let i = 0; i < titleLength; i++) {
            let char = movieTitle[i];
            let charValue = char.charCodeAt(0);
            currentScore += charValue;

            if (char >= 'a' && char <= 'z') {
                currentScore -= 2 * titleLength;
            } else if (char >= 'A' && char <= 'Z') {
                currentScore -= titleLength;
            }
        }

        if (currentScore > bestScore) {
            bestScore = currentScore;
            bestMovieTitle = movieTitle;
        }
    }

    console.log(`The best movie for you is ${bestMovieTitle} with ${bestScore} ASCII sum.`);
}

bestMovie (["Wrong turn",
"The maze",
"Area 51",
"Night Club",
"Ice age",
"Harry Potter",
"Wizards"])
