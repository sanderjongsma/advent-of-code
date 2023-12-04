let mapping = {
    "one": "1",
    "two": "2",
    "three": "3",
    "four": "4",
    "five": "5",
    "six": "6",
    "seven": "7",
    "eight": "8",
    "nine": "9",
    "eno": "1",
    "owt": "2",
    "eerht": "3",
    "ruof": "4",
    "evif": "5",
    "xis": "6",
    "neves": "7",
    "thgie": "8",
    "enin": "9"
}

let firstCharacters = document.body.firstChild.innerText.split('\n')
    .filter(v=>v)
    .map((v) => v.replace(/one|two|three|four|five|six|seven|eight|nine/gi, (m) => mapping[m]))
    .map((v) => v.replace(/\D/g, ''))
    .map((v) => v[0])

document.body.firstChild.innerText.split('\n')
    .filter(v=>v)
    .map((v) => v.split('').reverse().join(''))
    .map((v) => v.replace(/eno|owt|eerht|ruof|evif|xis|neves|thgie|enin/gi, (m) => mapping[m]))
    .map((v) => v.replace(/\D/g, ''))
    .map((v, i) => firstCharacters[i] + v[0])
    .reduce((c, v) => c + +v, 0)