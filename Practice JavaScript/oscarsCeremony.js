function oscarsCeremony (rent) {
    let oscarPrise = rent * 0.7;
    let catering = oscarPrise * 0.85;
    let sound = catering / 2;
    let total = rent + oscarPrise + catering + sound;
    console.log(total.toFixed(2))

} oscarsCeremony (3500)