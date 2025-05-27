function building(floor, rooms) {
    for (x = floor; x > 0; x--) {
        let buff = "";
        for (y = 0; y < rooms; y++) {
            if (x === floor) {
                buff += `L${x}${y} `;
            } else if (x % 2 === 0) {
                buff += `O${x}${y} `;
            } else {
                buff += `A${x}${y} `;
            }

        }
        console.log(buff)
    }

}
building(6, 4)