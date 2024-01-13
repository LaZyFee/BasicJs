function woodCalculator(chairQuantity, tableQuantity, bedQuantity) {
    const perChairWood = 4;
    const perTableWood = 8;
    const perBedWood = 50;

    const chairWood = chairQuantity * perChairWood;
    const tableWood = tableQuantity * perTableWood;
    const bedWood = bedQuantity * perBedWood;

    const totalWood = chairWood + tableWood + bedWood;
    return totalWood
}

const totalWood = woodCalculator(8, 2, 1);
console.log(totalWood);