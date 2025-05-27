function fishTank(lenghtInCentimeters, widhtInCentimeters, heightInCentimeters, percentCapacity) {

    let fishTankVolume = lenghtInCentimeters * widhtInCentimeters * heightInCentimeters;
    let volumeInLitters = fishTankVolume / 1000;
    let capacityDecimal = percentCapacity / 100;
    let waterInLitters = volumeInLitters * (1 - capacityDecimal);
    console.log(waterInLitters);


}
fishTank(85, 75, 47, 17)