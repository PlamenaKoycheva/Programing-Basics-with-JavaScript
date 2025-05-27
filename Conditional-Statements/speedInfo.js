function speedInfo(speed) {
if (Number(speed) <= 10) {
    console.log("slow");
}
if (Number(speed) > 10 && Number(speed) <= 50) {
    console.log("average");
}
if (Number(speed) > 50 && Number(speed) <= 150) {
    console.log("fast");

}
if (Number(speed) > 150 && Number(speed) <= 1000) {
    console.log("ultra fast");

} 
if (Number(speed) > 1000) {
    console.log("extremely fast")
}
    
}
speedInfo(1234)