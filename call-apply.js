const kibria = {
    id: 101,
    money: 5000,
    name: 'RJ kibria',
    treatDey: function (expense) {
        this.money = this.money - expense;
        console.log(this);
        return this.money;
    }
};

const heroBalam = {
    id: 102,
    money: 6000,
    name: 'Hero Balam'
}
// kibria.treatDey.call(heroBalam, 500);
// kibria.treatDey.call(heroBalam, 500);

kibria.treatDey.apply(heroBalam, [500])
kibria.treatDey.apply(heroBalam, [1000])