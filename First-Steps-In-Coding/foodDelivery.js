function foodDelivery(chickenMenuCount, fishMenuCount , veganMenuCount) {
let totalMenuPrice = chickenMenuCount * 10.35 + fishMenuCount * 12.40 + veganMenuCount * 8.15;
let dessert = totalMenuPrice * 0.2
let totalPrice = totalMenuPrice + dessert + 2.50;
console.log(totalPrice)
}
foodDelivery(2, 4, 3)