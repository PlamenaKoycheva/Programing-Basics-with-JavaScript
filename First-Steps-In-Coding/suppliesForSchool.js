function suppliesForSchool(penPacketCount, markerPacketCount, detergentLitters, discountPercent) {
let totalPenPrice = penPacketCount * 5.80;
let totalMarkerPrice = markerPacketCount * 7.20;
let totalDetergentPrice = detergentLitters * 1.20;
let totalMaterialsPrice = totalPenPrice + totalMarkerPrice + totalDetergentPrice;
let discountDecimal = discountPercent / 100;
let discount =  discountDecimal * totalMaterialsPrice;
let finalPrice = totalMaterialsPrice - discount;

console.log(finalPrice);
}
suppliesForSchool(2, 3, 4, 25)