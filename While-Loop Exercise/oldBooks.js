function oldBooks (array) {
//     Ани отива до родния си град след много дълъг период извън страната. Прибирайки се вкъщи тя вижда старата библиотека на баба си и си спомня за 
// любимата си книга. Помогнете на Ани, като напишете функция в която тя въвежда търсената от нея книга(текст). Докато Ани не намери любимата си книга 
// или не провери всички в библиотеката, програмата трябва да чете всеки път на нов ред името на всяка следваща книга (текст). Книгите в библиотеката са
//  свършили щом получите текст "No More Books".
// •	Ако не открие книгата да се отпечата на два реда: 
// o	"The book you search is not here!"
// o	"You checked {брой} books."
// •	Ако открие книгата си се отпечатва един ред:
// o	"You checked {брой} books and found it."  
  let searchedBook = array[0];

  let index = 1;
  let command = array[index];
  index++;
  let incorrectBooksCheked = 0;
  while(command !== "No More Books") {
    if (command === searchedBook) {
        console.log(`You checked ${incorrectBooksCheked} books and found it.`);
        break;
    }
    incorrectBooksCheked++
    command = array[index];
    index++
  }
  if (command === "No More Books") {
  console.log("The book you search is not here!")
  console.log(`You checked ${incorrectBooksCheked} books.`)
  }

}
oldBooks(["The Spot",
    "Hunger Games",
    "Harry Potter",
    "Torronto",
    "Spotify",
    "No More Books"])
    