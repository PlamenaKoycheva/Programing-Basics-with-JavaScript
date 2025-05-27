function trainTheTrainers (array) {
    let judgeCount = Number(array[0]);
    let gradeSum = 0;
    let presentationCount = 0;
    



    let index = 1;
    let command = array[index];
    while (command !== "Finish") {
        let presentationName = command;

        let presentationGradeSum = 0;
        for( let judgeGrade = 1; judgeGrade <= judgeCount; judgeGrade++) {
            index++
            let grade = Number(array[index]);
            presentationGradeSum += grade;

        }
        let avgPresentationGrade = presentationGradeSum / judgeCount;
        console.log(`${presentationName} - ${avgPresentationGrade.toFixed(2)}.`);


        gradeSum += avgPresentationGrade;
        presentationCount++

          
         index++ ;
         command = array[index];
    }
    let finalAvgGrade = gradeSum / presentationCount;
    console.log(`Student's final assessment is ${finalAvgGrade.toFixed(2)}.`)

}
trainTheTrainers (["3",
    "Arrays",
    "4.53",
    "5.23",
    "5.00",
    "Lists",
    "5.83",
    "6.00",
    "5.42",
    "Finish"])
    