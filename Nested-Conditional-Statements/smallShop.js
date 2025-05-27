// град 	coffee	water	beer	sweets	peanuts
// Sofia	0.50	0.80	1.20	1.45	1.60
// Plovdiv	0.40	0.70	1.15	1.30	1.50
// Varna	0.45	0.70	1.10	1.35	1.55







function smallShop(product, town, quantity) {
    let money = 0;
    switch (town) {
        case "Sofia" :
            if (product === "coffee") {
                money = quantity * 0.5;
            } else if (product === "water") {
                money = quantity * 0.8;
            } else if (product === "beer") {
                money = quantity * 1.20; 
            } else if (product === "sweets") {
                money = quantity * 1.45;
            } else if (product === "peanuts") {
                money = quantity * 1.60;
            }
            break;
        case "Plovdiv" :
            if (product === "coffee") {
                money = quantity * 0.40;
            } else if (product === "water") {
                money = quantity * 0.70;
            } else if (product === "beer") {
                money = quantity * 1.15; 
            } else if (product === "sweets") {
                money = quantity * 1.30;
            } else if (product === "peanuts") {
                money = quantity * 1.50;
            }   
            break; 
        case "Varna" : 
        if (product === "coffee") {
            money = quantity * 0.45;
        } else if (product === "water") {
            money = quantity * 0.70;
        } else if (product === "beer") {
            money = quantity * 1.10; 
        } else if (product === "sweets") {
            money = quantity * 1.35;
        } else if (product === "peanuts") {
            money = quantity * 1.55;
        }
        break;
        

    }
    console.log(money)
        
    
}
smallShop("coffee",
"Varna",
2)
