function repainting (plasticRequired, dyeRequired, concentrateRequired, hours) {
let priceForPlastic = (plasticRequired + 2) * 1.5;
let priceForDye = (dyeRequired + (dyeRequired * 0.1)) * 14.5;
let priceForConcentrate = concentrateRequired * 5;
let totalMaterialsPrice = priceForPlastic + priceForDye + priceForConcentrate + 0.4;
let workingHoursPrice = (totalMaterialsPrice * 0.3) * hours;
let priceForRepainting = totalMaterialsPrice + workingHoursPrice;
console.log(priceForRepainting)
}
repainting(10, 11, 4, 8)