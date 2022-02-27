const student = { name: 'Sakib AL Hasan', job: 'cricketer' };

const person = new Object();
// console.log(person);

// const human = Object.create(null);
const human = Object.create(student);
// console.log(human.job); 

class People {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}
const peop = new People('Manus', 12);
const peopl = new People('Manus', 11);
console.log(peop);


function Manus(name) {
    this.name = name;
}
const man = new Manus('kader');
console.log(man);