function graduation (array) {
    index = 0;
    let name = array[index];
    index++
    let sumGrade = 0;
    let badGradeCount = 0;
    let isExcluded = false; // с тази булиева променлива отбелязваме, че не е изключен
    let gradeNum = 1; // броя на класовете
    while(gradeNum <= 12){
        let grade = Number(array[index]);
        index++
        if (grade < 4) {
            badGradeCount++; // отбелязваме, че сме получили +1 лоша оценка.
            if (badGradeCount === 2) { // лошите оценки трябва да са 2 броя
                isExcluded = true; // тук променяме булиевата стойност и приемаме , че ако е изключен отпечатваме на конзолата
                console.log(`${name} has been excluded at ${gradeNum} grade`);
                break;


            }
            continue; //  използваме този оператор, защото искаме да продължи да брои лошите оценки(badGradeCount);

        }
        sumGrade += grade;
        gradeNum++;


        
    }
    if(!isExcluded) { // булиевата променлива е false (isExcluded === false);
        console.log(`${name} graduated. Average grade: ${(sumGrade / 12).toFixed(2)}`)
    }

}
graduation(["Gosho", 
    "5",
    "5.5",
    "6",
    "5.43",
    "5.5",
    "6",
    "5.55",
    "5",
    "6",
    "6",
    "5.43",
    "5"])
    