const randomiser = randomUserNum => {
    let programNum = Math.floor(Math.random() * 10);
    if (randomUserNum === programNum) {
        alert(`You win!!!`);
    } else {
        alert(`You lose!!! Right number - ${programNum}!`);
    }
}

randomiser(Number(prompt(`Type your random number from 0 to 10!`)));
