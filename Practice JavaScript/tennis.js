function tennis (priceForRocket, rocketsSum, sneakersSum) {
    let rocketPrice = priceForRocket * rocketsSum;
    let priceForSneakers = priceForRocket / 6;
    let sneakersPrice = sneakersSum * priceForSneakers;
    let price = rocketPrice + sneakersPrice;
    let priceForEquipment = price * 0.2;
    let totalPrice = price + priceForEquipment;
    console.log(`Price to be paid by Djokovic ${Math.floor(totalPrice / 8)}`);
    console.log(`Price to be paid by sponsors ${Math.ceil(totalPrice * 7/8)}`)

}
tennis(850,
    4,
    2
    )