const getArea = (AB, BC, AC) => {
    const sp = (AB + BC + AC) / 2;

    return Math.sqrt(sp*(sp-AB)*(sp-BC)*(sp-AC));
}

console.log(getArea(5, 6, 7));