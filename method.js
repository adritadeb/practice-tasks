const student = {
    id: 101,
    money: 5000,
    name: 'RJ kibria',
    major: 'mathematics',
    isRich: false,
    subjects: ['english', 'economics', 'math 101', 'calculas'],
    bestFriend: {
        name: 'kundu',
        major: 'mathematics'
    },
    takeExam: function () {
        console.log(this.name, 'taking exam');
    },
    treatDey: function (expense) {
        this.money = this.money - expense;
        return this.money;
    }
};

student.takeExam();
const remaining1 = student.treatDey(900);
const remaining2 = student.treatDey(500);
console.log(remaining2);