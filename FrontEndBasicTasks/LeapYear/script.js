const checkLeapYear = () => {
    const currentTime = new Date();
    if (currentTime.getFullYear() % 2 === 0) {
        return `Leap year!!!`;
    } else {
        return `Not leap Year`;
    }
}

console.log(checkLeapYear());
