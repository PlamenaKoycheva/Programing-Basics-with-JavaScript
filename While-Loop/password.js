function password(input) {
    index = 0;
    let username = input[index];
    index++;
    let pass = input[index];
    index++;
    let temporaryPassword = input[index];
    index++;
    while (temporaryPassword !== pass) {
        temporaryPassword = input[index];
        index++ ;



    }
    console.log(`Welcome ${username}!`)

}
password(["Nakov",
    "1234",
    "Pass",
    "1324",
    "1234"])
    