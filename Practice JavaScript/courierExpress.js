// Куриерска фирма доставя пратки в цялата страна. 
// За услуга тип "standard", срокът за доставка е 3 работни дни и фирмата калкулира цените при следните условия:
// •	За пратки по - леки от 1 кг – 3 стотинки на километър.
// •	От 1 кг до 10 кг – 5 стотинки на километър.
// •	От 10 кг вкл. до 40 кг – 10 стотинки на километър.
// •	От 40 кг вкл. до 90  кг – 15 стотинки на километър.
// •	От 90 кг вкл. до 150 кг – 20 стотинки на километър.
// За услуга тип "express", фирмата извършва услугата в рамките на 24 часа, като начислява надценка за всеки километър както следва: 
// •	За пратки по - леки от 1 кг – на килограм по 80 % от съответната цена на километър
// •	От 1 кг до 10  кг – на килограм по 40 % от съответната цена на километър
// •	От 10 кг вкл. до 40 кг – на килограм по 5 % от съответната цена на километър
// •	От 40 кг вкл. до 90  кг – на килограм по 2 % от съответната цена на километър
// •	От 90 кг вкл. до 150 кг – на килограм по 1 % от съответната цена на километър
// Напишете програма, която да пресмята при зададено разстояние в км. , тегло на пратката и вида услуга, каква ще бъде стойността за
//  доставка на дадена пратка.
// Вход
// Входът се чете от конзолата и съдържа 3 реда:
// 1.	Тегло на пратката в килограми – реално число в интервала [0.01 ... 150.00]
// 2.	Тип услуга –  текст със следните възможности: "standard" или "express"
// 3.	Разстояние в километри – цяло число в интервала [1 ... 1000]
// Изход
// Да се отпечата на конзолата един ред:
// "The delivery of your shipment with weight of {тегло} kg. would cost {цена} lv."

// •	Теглото да бъде закръглено до третия знак след десетичната запетая
// •	Цената да бъде закръглена до втория знак след десетичната запетая

function courierExpress (packageInKg, typeOfService, distenceInKm) {
    let price = 0;
    let premiumKg = 0;
    let premiumKm = 0;
    let totalPremium = 0;
    switch (typeOfService) {
        case "standard" :
            if (packageInKg < 1) {
                price = distenceInKm * 0.03

            } else if ( packageInKg >= 1 && packageInKg < 10) {
                price = distenceInKm * 0.05
            } else if (packageInKg >= 10 && packageInKg <= 40) {
                price = distenceInKm * 0.10;
            } else if (packageInKg > 40 && packageInKg <= 90) {
                price = distenceInKm * 0.15
            } else if (packageInKg > 90 && packageInKg <= 150) {
                price = distenceInKm * 0.20;
            } break;
            case "express" :
                if (packageInKg  < 1 ) {
                    premiumKg = 0.8 * 0.03;
                    premiumKm = packageInKg * premiumKg;
                    totalPremium = distenceInKm * premiumKm;
                    price = distenceInKm * 0.03 + totalPremium
                } else if ( packageInKg >= 1 && packageInKg < 10) {
                    premiumKg = 0.4 * 0.05;
                    premiumKm = packageInKg * premiumKg;
                    totalPremium = distenceInKm * premiumKm;
                    price = distenceInKm * 0.05 + totalPremium
                } else if (packageInKg > 10 && packageInKg <= 40) {
                    premiumKg = 0.05 * 0.10;
                    premiumKm = packageInKg * premiumKg;
                    totalPremium = distenceInKm * premiumKm;
                    price = distenceInKm * 0.10 + totalPremium;
                } else if (packageInKg > 40 && packageInKg <= 90) {
                    premiumKg = 0.02 * 0.15;
                    premiumKm = packageInKg * premiumKg;
                    totalPremium = distenceInKm * premiumKm;
                    price = distenceInKm * 0.15 + totalPremium

                } else if (packageInKg > 90 && packageInKg <= 150) {
                    premiumKg = 0.01 * 0.20;
                    premiumKm = packageInKg * premiumKg;
                    totalPremium = distenceInKm * premiumKm;
                    price = distenceInKm * 0.20 + totalPremium;

                } break;

    }
    console.log(`The delivery of your shipment with weight of ${packageInKg.toFixed(3)} kg. would cost ${price.toFixed(2)} lv.`)
}
courierExpress(20,
    "standard",
    349
    
    )