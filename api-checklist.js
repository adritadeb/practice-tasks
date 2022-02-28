const chips = {
    myFav: 'mr.twist',
    price: 15,
    shops: {
        catagory: 'grocery shops',
        mainProduct: 'groceries',
        sideProduct: 'chips'
    },
    ingredients: ['tomato', 'potato', 'spices', 'onion', 'oil', 'food color'],
    moneyAfterBuyTwist: function (money) {
        const remaining = money - this.price;
        return remaining;
    }
};
const remaining = chips.moneyAfterBuyTwist(20);
// console.log(remaining);

const myFavFoods = `One of my favourite food is: ${chips.myFav}. It's shop catagory is ${chips.shops.catagory}. It's main ingredient is ${chips.ingredients[1]}.`
// console.log(myFavFoods);

const number = () => 89;
// console.log(number());
const division = number => number / 7;
// console.log(division(14));
const calculation = (num1, num2) => (num1 + num2) / 2;
// console.log(calculation(6, 2));
const add = (num1, num2) => {
    const first = num1 + 7;
    const second = num2 + 7;
    const result = first + second;
    return result;
};
// console.log(add(3, 2));

const numbers = [14, 7, 28, 35, 0, 7, 21, 56];
const divisionby7 = numbers.map(num => num / 7);
// console.log(divisionby7);
// const array2 = numbers.forEach(num => console.log(num));
// console.log(array2);
const array3 = numbers.filter(num => num < 2);
// console.log(array3);
const array4 = numbers.find(num => num > 2);
// console.log(array4);

const { myFav } = chips;
// console.log(myFav);
const [balance] = [numbers[1]];
// console.log(balance);



const loadPhotos = () => {
    fetch('https://jsonplaceholder.typicode.com/photos')
        .then(res => res.json())
        .then(data => displayPhotos(data))
};
loadPhotos();
const displayPhotos = photos => {
    const photoContainer = document.getElementById('photos');
    photos.forEach(photo => {
        const div = document.createElement('div');
        div.innerHTML = `<div onclick="loadDetails(${photo.id})" class="card">
        <img src="${photo.url}" class="card-img-top" alt="...">
        <div class="card-body">
            <h5 class="card-title">${photo.title}</h5>
            <p class="card-text">This is a longer card with supporting text below as a natural lead-in to
                additional content. This content is a little bit longer.</p>
        </div>
    </div>`;
        photoContainer.appendChild(div);
    });
    console.log(photos.id);
};
const loadDetails = photoId => {
    console.log(photoId);
    fetch(`https://jsonplaceholder.typicode.com/photos/${photoId}`)
        .then(res => res.json())
        .then(data => console.log(data));
};