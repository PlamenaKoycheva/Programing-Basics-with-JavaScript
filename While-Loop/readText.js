function readText( input) {
    let index = 0;
    let text = input[index];
    index++;
    while (text !== "Stop") {
       
        console.log(text);
        text = input[index];
        index++;
    }

}
readText (["Nakov",
    "SoftUni",
    "Sofia",
    "Bulgaria",
    "SomeText",
    "Stop",
    "AfterStop",
    "Europe",
    "HelloWorld"])
    