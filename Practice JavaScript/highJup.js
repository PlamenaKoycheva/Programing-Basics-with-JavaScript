
function highJump(array) {
    let index = 0;
    let highWanted = Number(array[index]); // Желаната височина
    index++;

    let trainingHigh = highWanted - 30; // Започваме 30 см по-ниско
    let jumpsCount = 0;
    let failedJumps = 0;

    while (index < highWanted) {
        let jumpHeight = Number(array[index]);
        index++;
        jumpsCount++;

        if (jumpHeight > trainingHigh) {
            // Успешен скок
            if (trainingHigh >= highWanted) {
                console.log(`Tihomir succeeded, he jumped over ${trainingHigh}cm after ${jumpsCount} jumps.`);
                break;
            }
            trainingHigh += 5; // Вдигаме летвата с 5 см
            failedJumps = 0; // Нулираме неуспешните опити
        } else {
            // Неуспешен скок
            failedJumps++;
            if (failedJumps === 3) {
                console.log(`Tihomir failed at ${trainingHigh}cm after ${jumpsCount} jumps.`);
                break;
            }
        }
    }
}

highJump(["231", "205", "212", "213", "228", "229", "230", "235"]);
    