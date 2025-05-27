function numberPyramid(n) {
    let current = 1;
    let isBigger = false;

    for (let rows = 1; rows <= n; rows++) {
        let result = ""; 
        for (let colls = 1; colls <= rows; colls++) {
            if (current > n) {
                isBigger = true;
                break;
            }
            result += current + " ";
            current++;
        }

        console.log(result); 

        if (isBigger) {
            break;
        }
    }
}
numberPyramid(7)