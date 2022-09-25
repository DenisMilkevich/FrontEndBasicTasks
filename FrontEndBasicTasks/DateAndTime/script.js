const getTime = () => {
    const now = new Date();
    const dayslist = ["Sunday","Monday","Tuesday","Wednesday ","Thursday","Friday","Saturday"];
    return `Current time is : ${now.getHours()}:${now.getMinutes()}:${now.getSeconds()} \nToday is : ${dayslist[now.getDay()]}`;

}

console.log(getTime());
