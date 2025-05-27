function basketballEquipment(annualFee) {
let sneekersPrice = 0.6 * annualFee;
let outfitPrice = sneekersPrice * 0.8;
let ballPrice = (1 / 4) * outfitPrice;
let accesories = (1 / 5) * ballPrice;
let totalPrice = annualFee + sneekersPrice + outfitPrice + ballPrice + accesories;
console.log(totalPrice)
}
basketballEquipment(365)