const changeString = character => {
    const test = "JavaScript";
    const changes = test.split('');
    changes.splice(character - 1, 1);
    return changes.join('');
}

console.log(changeString(2));
