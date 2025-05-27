
// След престоя, оценката на Атанас за услугите на хотела може да е позитивна (positive) или негативна (negative) . Ако оценката му е 
// позитивна, към цената с вече приспаднатото намаление Атанас добавя 25% от нея. Ако оценката му е негативна приспада от цената 10%.
// Вход
// Входът се чете от конзолата и се състои от три реда:
// •	Първи ред - дни за престой - цяло число в интервала [0...365]
// •	Втори ред - вид помещение - "room for one person", "apartment" или "president apartment"
// •	Трети ред - оценка - "positive"  или "negative"
// Изход
// На конзолата трябва да се отпечата един ред:
// •	Цената за престоят му в хотела, форматирана до втория знак след десетичната запетая.

function skiTrip (stay, roomType, valuation) {
    let nights = stay - 1;
 let roomPrice = 0;
  switch(roomType) {
    case "room for one person" :
        roomPrice = 18 * nights;
        break;
    case "apartment" :
        roomPrice = 25 * nights;
        if (nights < 10) {
            roomPrice *= 0.7;
        } else if(nights <= 15) {
            roomPrice *= 0.65;
        } else {
            roomPrice *= 0.5;
        }
        break;
    case "president apartment" :
        roomPrice = 35 * nights;
        if (nights < 1) {
            roomPrice *= 0.9;
        } else if(nights <= 15) {
            roomPrice *= 0.85;
        } else {
            roomPrice *= 0.8;
        }
        break;
  }
  if (valuation === "positive") {
    roomPrice *= 1.25;
  } else if (valuation === "negative") {
    roomPrice *= 0.9;
  }
  console.log(roomPrice.toFixed(2))

}
skiTrip (14,
    "apartment",
    "positive"
    )