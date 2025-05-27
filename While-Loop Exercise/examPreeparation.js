function examPreparation (array) {
    let maxBadGradeCount = Number(array[0]);
    let currentBadGradeCount = 0;
    let gradeCount = 0;
    let gradeSum = 0;
    let problemName = "";
    let index = 1
    let command = array[index];
    index++;
    while (command !== "Enough") {
        problemName = command;
        let grade = Number(array[index]);
        index++

        if (grade <= 4) {
            currentBadGradeCount++

            if (currentBadGradeCount === maxBadGradeCount) {
                console.log(`You need a break, ${currentBadGradeCount} poor grades.`);
                break;
                
            }
        }
        gradeCount++;
        gradeSum += grade;

        command = array[index];
        index++;
    }
    if (command === "Enough") {
        let avgGrade = gradeSum / gradeCount;
        console.log(`Average score: ${avgGrade.toFixed(2)}`)
        console.log(`Number of problems: ${gradeCount}`)
        console.log(`Last problem: ${problemName}`)

    }
}
examPreparation (["3",
    "Money",
    "6",
    "Story",
    "4",
    "Spring Time",
    "5",
    "Bus",
    "6",
    "Enough"])
    