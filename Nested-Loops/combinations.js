function combinations(n) {
    let combinationCounter = 0;

    for (let x1 = 0; x1 <= n; x1++) {
        for (let x2 = 0; x2 <= n; x2++) {
            let x3 = n - (x1 + x2);
            if (x3 >= 0) {
                combinationCounter++;
            }
        }
    }

    console.log(combinationCounter);
}

combinations(25);
