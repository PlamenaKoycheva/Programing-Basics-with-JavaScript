function time15Minutes (hour, minute) {
    let time = minute + hour * 60 + 15;
    let hours = Math.trunc(time / 60);
    let minutes = time % 60;
    if (hours === 24) {
        hours = 0;
    }
    if (minutes < 10) {
        console.log(`${hours}:0${minutes}`);

    } else {
        console.log(`${hours}:${minutes}`);
    }



}
time15Minutes(1, 46)