// Футболен отбор участва в благотворителен турнир. На този турнир отборът играе три мача като домакин. Да се напише програма, която 
// изчислява колко победи, равенства и загуби има отборът по време на турнира, спрямо резултатите от мачовете.
// *Забележка: Отборът винаги е домакин, следователно първата цифра от резултата съответства на головете вкарани от него.
// Вход
// От конзолата се четат 3 реда:
// 1.	Резултат от първия мач – текст 
// 2.	Резултат от втория мач – текст 
// 3.	Резултат от третия мач – текст 

// /броят голове винаги ще бъде едноцифрено число/
// Изход
// На конзолата да се отпечатат три реда:
// •	"Team won {брой спечелени мачове} games."
// •	"Team lost {брой загубени мачове} games."
// •	" Drawn games: {брой равни мачове}"


function footballResults (game1, game2, game3) {
    let homeGoals = Number(game1[0]);
    let opponentGoals = Number(game1[2]);
    let wins = 0;
    let looses = 0;
    let draw = 0;
    if (homeGoals > opponentGoals) {
        wins++
    } else if (homeGoals < opponentGoals ) {
        looses++;
    } else if (homeGoals = opponentGoals){
        draw++

    }
        
    let homeGoals2 = Number(game2[0]);
    let opponentGoals2 = Number(game2[2]);
    if (homeGoals2 > opponentGoals2) {
        wins++
    } else if (homeGoals2 < opponentGoals2 ) {
        looses++;
    } else if (homeGoals2 = opponentGoals2) {
        draw++
    }
    let homeGoals3 = Number(game3[0]);
    let opponentGoals3 = Number(game3[2]);
    if (homeGoals3 > opponentGoals3) {
        wins++
    } else if (homeGoals3 < opponentGoals3) {
        looses++;
    } else if (homeGoals3 = opponentGoals3) {
        draw++
    }
    console.log(`Team won ${wins} games.`)
    console.log(`Team lost ${looses} games.`)
    console.log(`Drawn games: ${draw}`)





    







}
footballResults("3:1",
    "0:2",
    "0:0"
    )