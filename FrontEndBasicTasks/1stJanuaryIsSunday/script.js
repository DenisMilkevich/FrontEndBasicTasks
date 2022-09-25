const checkFirstSunday = (startYear, endYear) => {
    let time = new Date();
    time.setMonth(0);
    time.setDate(1);

    for (let year = startYear; year <= endYear; year++) {
        time.setFullYear(year);
        if (time.getDay() === 6) {
            console.log(`Yeah, 1st Jan ${year} is Saturday`)
        } else {
            console.log(`Nope, 1st Jan ${year} isn't Saturday`);
        }
    }
}

checkFirstSunday(2014, 2050);
