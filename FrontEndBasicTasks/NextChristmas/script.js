const leftDaysToChristmas = () => {
    const now = new Date();
    const xmasDay = new Date(now.getFullYear(), 11, 25);
    const oneDay = 1000 * 60 * 60 * 24;

    if (now.getMonth() === 11 && now.getDate() > 25) {
        xmasDay.setFullYear(xmasDay.getFullYear() + 1);
    }
    return Math.floor((xmasDay.getTime() - now.getTime()) / oneDay);
}

console.log(leftDaysToChristmas());