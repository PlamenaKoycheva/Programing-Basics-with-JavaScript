// Фирма дава следните комисионни на търговците си според града, в който работят и обема на продажбите:

// Град	0 ≤ s ≤ 500:	500 < s ≤ 1 000	; 1 000 < s ≤ 10 000;	s > 10 000
// Sofia	5%	7%	8%	12%
// Varna	4.5%	7.5%	10%	13%
// Plovdiv	5.5%	8%	12%	14.5%

// Напишете функция, която  получава име на град (стринг) и обем на продажби (число) и изчислява и извежда размера на търговската 
// комисионна според горната таблица. Резултатът да се изведе форматиран до 2 цифри след десетичната точка. При невалиден град или обем 
// на продажбите (отрицателно число) да се отпечата "error". 


function tradeCommissions(city, sales) {
    let comision = 0;
   
    switch (city) {
        case "Sofia" :
            if(sales <= 500 && sales > 0) {
                comision = sales * 0.05;
            } else if (sales <= 1000 && sales > 0) {
                comision = sales * 0.07;
            } else if (sales <= 10000 && sales > 0) {
                comision = sales * 0.08;
            } else if (sales > 10000 && sales > 0) {
                comision = sales * 0.12
            } else {
                console.log ("error"); break;
            }
            console.log(comision.toFixed(2)); break;
           
            case "Varna" :
                if(sales <= 500 && sales > 0) {
                    comision = sales * (4.5 / 100);
                } else if (sales <= 1000 && sales > 0) {
                    comision = sales * (7.5 / 100);
                } else if (sales <= 10000 && sales > 0) {
                    comision = sales * 0.1;
                } else if (sales > 10000 && sales > 0) {
                    comision = sales * 0.13;
                }
             else {
                console.log ("error"); break;
            }
    
                console.log(comision.toFixed(2)); break;
                    case "Plovdiv" :
                    if(sales <= 500 && sales > 0) {
                        comision = sales * 0.055;
                    } else if (sales <= 1000 && sales > 0) {
                        comision = sales * 0.08;
                    } else if (sales <= 10000 && sales > 0) {
                        comision = sales * 0.12;
                    } else if (sales > 10000 && sales > 0) {
                        comision = sales * 0.145;
                    } else {
                        console.log ("error"); break;
                    }
                    console.log(comision.toFixed(2)); break;
                    default: console.log ("error")
                    
                
                    


    
  
}

}
  tradeCommissions("Sofia",
    - 90




)