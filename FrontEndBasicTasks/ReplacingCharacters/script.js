const replacingPlaces = (userString) => {
    const changes = userString.split('');
    changes.splice(0, 1, userString[userString.length - 1]);
    changes.splice(userString.length - 1, 1, userString[0]);
    return changes.join('');
}

console.log(replacingPlaces(prompt(`Type your word...`)));