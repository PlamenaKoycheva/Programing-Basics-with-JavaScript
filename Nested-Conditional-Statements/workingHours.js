

// Да се напише функция, която получава час от денонощието(цяло число) и ден от седмицата(текст) и проверява дали офисът на фирма е отворен, като работното време на офисът е от 10-18 часа, от понеделник до събота включително.
// Примерен вход и изход
// вход	изход		вход	изход	 	вход	изход
// 11,
// "Monday"	open		19,
// "Friday"	closed		11,
// "Sunday"	closed




function workingHours(hour, day) {
    if (hour >= 10 && hour <= 18 && day !== "Sunday") {
            console.log("open")
        } else {
            console.log ("closed")
        

        }

    

}
workingHours(15, "Monday")