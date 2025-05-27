// На световно първенство по художествена гимнастика три от държавите се изявяват като лидери в класирането (Русия, България, Италия).  
// Вашата задача е да изчислите каква е оценката дадена от журито за конкретно съчетание, като знаете държавата, която е играла и с кой 
// уред е играла - лента, обръч или въже. За съчетанието си, отбора е получил две оценки: оценка за трудност и оценка за изпълнение на с
// ъчетанието, като крайната оценка е сбор на двете оценки. В таблицата са показани какви оценки за трудност и изпълнение са получили 
// ансамблите за всеки един уред.
// 
// Напишете програма, която изчислява каква е оценката на дадена държава за определен уред и колко процента не им достигат, за да имат 
// максималната оценка, която е 20.
// Вход
// Входът се чете от конзолата и се състои от два реда:
// •	Първи ред – държава – текст ("Russia", "Bulgaria" или "Italy")
// •	Втори ред – уред - текст ("ribbon", "hoop" или "rope")
// Изход
// На конзолата трябва да се отпечатат два реда:
// •	Първи ред: "The team of {държава} get {обща оценка} on {уред}."
// •	Втори ред:  "{процентът, който не им достига до максималния брой точки}%"
// Общата оценка да бъде форматирана до третата цифра след десетичния знак, а процентът да бъде форматиран до втората цифра след
//  десетичния знак.
 function gymnastcs (country, tool) { 
    let mode = 0;
    let performance = 0;
    let valuation = 0
    switch (country) {
        case ("Bulgaria") :
            if (tool === "ribbon") {
            mode = 9.600;
            performance =  9.400;
            }else if (tool == "hoop") {
                mode = 9.550;
                performance = 9.750;
            } else if (tool === "rope"){
                mode = 9.500;
                performance = 9.400;

            }
            valuation = mode + performance;
            pointsNeeded =(20 - valuation);
            break;
        case ("Russia") :
            if (tool === "ribbon") {
                mode = 9.100;
                performance =  9.400;
                }else if (tool == "hoop") {
                    mode = 9.300;
                    performance = 9.800;
                } else if (tool === "rope"){
                    mode = 9.600;
                    performance = 9.000;
    
                }
                valuation = mode + performance;
                pointsNeeded = (20 - valuation);
                break;
                case ("Italy") :
                    if (tool === "ribbon") {
                        mode = 9.200;
                        performance =  9.500;
                        }else if (tool == "hoop") {
                            mode = 94550;
                            performance = 9.350;
                        } else if (tool === "rope"){
                            mode = 9.700;
                            performance = 9.150;
            
                        }
                        valuation = mode + performance;
                        pointsNeeded =(20 - valuation);
                        
                        break;
                     


    }
    console.log(`The team of ${country} get ${valuation.toFixed(3)} on ${tool}.`);
    console.log(`${(pointsNeeded/ 20 * 100).toFixed(2)}%`)




 }
 gymnastcs("Russia",
    "rope"
    )