// making modules and importing them to another files.

console.log("This is module.");

function average(array) {
    let sum = 0
    array.forEach(element => {
        sum += element;
    });
    return sum/array.length
}

module.exports = {
    avg: average,
    name: "Anchal",
    repo: "GitHub"
}

