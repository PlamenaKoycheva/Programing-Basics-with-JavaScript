


// Магазин за плодове през работните дни работи на следните цени:
// плод	banana	apple	orange	grapefruit	kiwi	pineapple	grapes
// цена	2.50	1.20	0.85	1.45	2.70	5.50	3.85
// Събота и неделя магазинът работи на по-високи цени:
// плод	banana	apple	orange	grapefruit	kiwi	pineapple	grapes
// цена	2.70	1.25	0.90	1.60	3.00	5.60	4.20
// Напишете функция, която получава аргументи: плод (banana / apple / orange / grapefruit / kiwi / pineapple / grapes), ден от седмицата
//  (Monday / Tuesday / Wednesday / Thursday / Friday / Saturday / Sunday) и количество (число) и пресмята цената според цените от таблиците
//  по-горе. Резултатът да се отпечата закръглен с 2 цифри след десетичната точка. При невалиден ден от седмицата или невалидно име на плод
//  да се отпечата "error". 


function calculatePrice(fruit, day, quantity) {
    let price = 0;
    switch (day) {
        case "Monday" :
        case "Tuesday" :
        case "Wednesday" :
        case "Thursday" :
        case "Friday" :
            if (fruit === "banana") {
                price = 2.50 * quantity;
            } else if (fruit === "apple") {
                price = quantity * 1.20
            } else if ( fruit === "orange") {
                price = quantity * 0.85
            } else if ( fruit === "grapefruit") {
                price = 1.45 * quantity;
            } else if ( fruit === "kiwi") {
                price = 2.70 * quantity;
            } else if (fruit === "pineapple") {
                price = 5.50 * quantity
            } else if (fruit === "grapes") {
                price = 3.85 * quantity;
            } else {
                console.log("error");
                break;
            }
            console.log(price.toFixed(2))
            break;
            case "Saturday" :
            case "Sunday" :
                if (fruit === "banana") {
                    price = 2.70 * quantity;
                } else if (fruit === "apple") {
                    price = quantity * 1.25
                } else if ( fruit === "orange") {
                    price = quantity * 0.90
                } else if ( fruit === "grapefruit") {
                    price = 1.60 * quantity;
                } else if ( fruit === "kiwi") {
                    price = 3 * quantity;
                } else if (fruit === "pineapple") {
                    price = 5.60 * quantity
                } else if (fruit === "grapes") {
                    price = 4.20 * quantity;
                } else {
                    console.log("error");
                    break;
                }
                console.log(price.toFixed(2))
                break;

            default : console.log ("error"); break;

    }
    

}
calculatePrice("apple",
"Workday",
2


)