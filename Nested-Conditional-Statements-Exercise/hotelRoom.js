
// Изход
// Да се отпечатат на конзолата 2 реда:
// •	На първия ред: “Apartment: {цена за целият престой} lv.”
// •	На втория ред: “Studio: {цена за целият престой} lv.”
// Цената за целия престой форматирана с точност до два знака след десетичната запетая.

function hotelRoom (month, nightSum) {
    let studioPrice = 0;
    let apartmentPrice = 0;
    switch (month) {
        case "May":
        case "October":
            studioPrice = nightSum * 50;
            apartmentPrice = nightSum * 65;

            if (nightSum > 7 && nightSum <= 14) {
                studioPrice *= 0.95;
            } else if (nightSum > 14) {
                studioPrice *= 0.7;
            }
            break;
        case "June" :
        case "September" :
            studioPrice = nightSum * 75.20;
            apartmentPrice = nightSum * 68.70;
            if (nightSum > 14 ) {
                studioPrice *= 0.80;
           
            }
            break;
        case "July" :
        case "August" :
            studioPrice = nightSum * 76;
            apartmentPrice = nightSum * 77;
          break;
         
    }

       if (nightSum > 14) {
    apartmentPrice *= 0.9;
       }
    console.log(`Apartment: ${apartmentPrice.toFixed(2)} lv.`);
    console.log(`Studio: ${studioPrice.toFixed(2)} lv.`);

    


}
hotelRoom("May",
15
)