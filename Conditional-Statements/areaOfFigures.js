function areaOfFigures(arg1, arg2, arg3) {
    let type = arg1;
    if(type === "square") {
        let sideA = Number(arg2);
        let result = sideA * sideA;
        console.log(result.toFixed(3));
    } else if (type === "rectangle") {
        let sideA = Number(arg2);
        let sideB = Number(arg3);
        let result = sideA * sideB;
        console.log(result.toFixed(3));

    } else if (type === "circle") {
        let r = Number(arg2);
        let result = Math.PI * Math.pow(r, 2);
        console.log(result.toFixed(3));
    } else {
        
        let sideA = Number(arg2);
        let h = Number(arg3);
        let result = sideA * h / 2;
        console.log(result.toFixed(3));
    }
} areaOfFigures("triangle",
4.5,
20
)
