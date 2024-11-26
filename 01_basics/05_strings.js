const name = "soljier"
const repoCount = 50

// console.log(name + repoCount + " value");

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('seenu-&-soljier')

console.log(gameName[0]);
console.log(gameName.__proto__);

console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(9));
console.log(gameName.indexOf('i'));

const newString = gameName.substring(0, 8)
console.log(newString);

const anotherString = gameName.slice(-13, 4)
console.log(anotherString);

const newStringOne = "    ramustart    "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://soljier.com/soljier%22rajput"

console.log(url.replace('%22', '-'))

console.log(url.includes('soljier'))
console.log(url.includes('seenu'))

console.log(gameName.split('-'))