// Предстои Великден и Деси е решила да изпече домашни козунаци за колегите си. Главните продукти, които ще трябват на Деси са: брашно и 
// захар. Един пакет захар е 950 грама, а един пакет брашно е 750 грама. Напишете програма, която изчислява колко пакета захар и брашно 
// трябва да купи Деси, за да й стигнат за направата на козунаците, като знаете за всеки един козунак по колко грама захар и брашно са 
// изразходени. Също намерете кое е най-голямото количество захар и брашно, които са използвани.
// Вход
// От конзолата се чете 1 ред:
// •	 Броят на козунаците – цяло число в интервала [1 ... 100]
// За всеки козунак се чете:
// o	Количество изразходвана захар (грамове) – цяло число в интервала [1 … 10000]
// o	Количество изразходвано брашно (грамове) – цяло число в интервала [1 … 10000]
// Изход
// Да се отпечатат на конзолата 3 реда:
// •	"Sugar: {брой нужни пакети захар}"
// •	"Flour: {брой нужни пакет брашно}"
// •	"Max used flour is {максимално количество грамове брашно, използвани за правенето на козунак} grams, max used sugar is 
// {максимално количество грамове захар, използвани за правенето на козунак} grams."
// Пакетите захар и брашно да бъдат закръглени към най-близкото цяло число нагоре.
function easterBake(input) {
    let panetoneCount = Number(input[0]);
    let totalSugar = 0;
    let totalFlour = 0;
    let maxSugarUsed = 0;
    let maxFlourUsed = 0;

    let index = 1;
    
    for (let i = 0; i < panetoneCount; i++) {
        let sugarUsed = Number(input[index]);
        index++;
        let flourUsed = Number(input[index]);
        index++;

        totalSugar += sugarUsed;
        totalFlour += flourUsed;

        if (sugarUsed > maxSugarUsed) {
            maxSugarUsed = sugarUsed;
        }
        if (flourUsed > maxFlourUsed) {
            maxFlourUsed = flourUsed;
        }
    }

    let packageSugar = Math.ceil(totalSugar / 950);
    let packageFlour = Math.ceil(totalFlour / 750);

    console.log(`Sugar: ${packageSugar}`);
    console.log(`Flour: ${packageFlour}`);
    console.log(`Max used flour is ${maxFlourUsed} grams, max used sugar is ${maxSugarUsed} grams.`);
}
easterBake (["4",
"500",
"350",
"560",
"430",
"600",
"345",
"578",
"543"])
