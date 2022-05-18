///////////////Menu Items (MVP)///////////////////
//const the variable latte then that equals curly braclet name: cafe latte price is 4 category is drinks curly braclet
const latte = { name: "Cafe Latte", price: 4, category: "Drinks" };
//const burger equals curly bracket, name is burger, price 18 category is lunch, after that put discount: function takes string
// curly braclet if string equals teacher or string equals student return burger price minus burger price times 0.25
//else return burger price minus burger price times 0.1
const burger = {
  name: "Burger",
  price: 18,
  category: "Lunch",
  discount: function (string) {
    if (string === "teacher" || string === "student") {
      return burger.price - burger.price * 0.25;
    } else {
      return burger.price - burger.price * 0.1;
    }
  },
};
//const breakfast burrito equals curly bracket name: breakfast burrito price 16 category breakfast
const breakfastBurrito = {
  name: "Breakfast Burrito",
  price: 16,
  category: "Breakfast",
};

/* Task 1a: write a function to return more menu items 
with the same format as the items above. */
//function creat menu item takes name cost category curly bracket, const item equals curly bracket name: name
//cost: cost do the same thing for category then return item, also out of the function console log
// create menu item backpack, 30, bag
function createMenuItem(name, cost, category) {
  /* Code here */
  const item = {
    name: name,
    cost: cost,
    category: category,
  };
  return item;
}

console.log(createMenuItem("backpack", 30, "bag"));

/* Task 1b: use your function to 
create 3 more menu items. You may 
add any items to the menu that you'd like */

// just do the console log but different items from the one above. make sure to do 3 of them
console.log(createMenuItem("steak", 15, "dinner"));
console.log(createMenuItem("Yogurt", 4, "desert"));
console.log(createMenuItem("chicken", 2, "dinner"));
/* Task 2: You're having a lunch special! 25% off for teachers and students, 
10% off for everyone else. Add a method to your burger object that automatically 
calculates price given a string as a parameter. 
Your method should accept: 
(1) A string (teacher, student, or public)
console.log(burger.price)
and should return a number. 
For example, burger.discount("teacher") would return 13.5 and burger.discount("public") would return 16.2*/

///////////////Reviews (MVP)///////////////////
//console log burger discount student
console.log(burger.discount("student"));

const reviews = [
  {
    name: "Daniela",
    rating: 5,
    feedback: "Beautiful atmosphere and wonderful vegan options!",
  },
  {
    name: "Jack",
    rating: 3,
    feedback:
      "A little too hipster for my taste, but the burger was decent, if overpriced",
  },
  { name: "Miranda", rating: 4, feedback: "fun trivia and cool vibes" },
  {
    name: "Wen",
    rating: 4.5,
    feedback:
      "I don't leave my house often, but when I do, it's for this place. Highly reccomend.",
  },
  {
    name: "Brett",
    rating: 3,
    feedback:
      "great selection of snacks and a nice cafe area to get work done during the day.",
  },
  {
    name: "Julius",
    rating: 2,
    feedback:
      "I was largely unimpressed by this venue. Nothing special on the menu and too expensive. The atmosphere is polarizing, and not for me, but I think some would like it.",
  },
  {
    name: "Lauren",
    rating: 4,
    feedback:
      "Absolutely love that they have karaoke Fridays! Food and drink selection is okay.",
  },
  { name: "Reyna", rating: 3.5, feedback: "" },
];

/* Task 3: Console.log just Julius' feedback */
// console log reviews square bracket 4 dot feedback
console.log(reviews[4].feedback);

/* Task 4: Add a new rating with your (fictitious) opinions of the restaurant in the
 same format as the reviews above. */
 // const new review equals curly bracket name tyler rating any number you want, feedback anything
 //out of the const do reviews.push new review then console log reviews
const newReview = {
  name: "tyler",
  rating: 3,
  feedback: "Im hungry",
};
reviews.push(newReview);
console.log(reviews);

//  Task 5: Add the following
//  feedback to Reyna's rating - "this place is chill
//   with really cool people, great for getting work done on weekdays"
// const reyna equals reviews square bracket 7 then reyna dot feedback equals "this place is chill  with really cool people, great for getting work done on weekdays"
// then console log reviews
const reyna = reviews[7];
reyna.feedback =
  "this place is chill  with really cool people, great for getting work done on weekdays";
console.log(reviews);

/*  Task 6: Write a function to return a review based on the index of the review in the array.
 Your function should take
  two arguments:
(1) an array which holds all of the reviews
(2) a number which is the 
desired index in the array.
and should return a string
 in the format `{name} gave the
  restaurant a {rating}, and their feedback was: {feedback}`
 * 
 * For example, if getReviewByIndex
 *  is invoked with reviews and the number 0
 * it will return `Daniela gave the 
 * restaurant a 5 star review and their
 *  feedback was: Beautiful atmosphere and wonderful vegan options!`
*/
//function name getReviewByIndex, function takes reviews and index
//const object equals reviews square bracket index
// return the ${} inside of that put object.name "gave the restaurant a ${} (inside of that put object. rating) star 
//rating and their
 //feedback was ${} put object.feedback inside of there"
 // then out of function console log getReviewByIndex and in parenthises reviews, 5
function getReviewByIndex(reviews, index) {
  /* code here */
  const object = reviews[index];
  return `${object.name} gave the restaurant a ${object.rating} star raiting and their 
  feedback was 
  ${object.feedback}`;
}
console.log(getReviewByIndex(reviews, 5));

//  Exercise 12

// Create the user object and the object should have following key
// firstName
// lastName
// currentLocation
// favoriteSongs
// age
// ??
// 1. console log 'hello user's firstname and Lastname'
// 2.How's the weather in 'currentLocation'
// 3. console log user's favorite songs

const user = {
  firstName: "tyler",
  lastName: "qijfoij",
  currentLocation: "seattle",
  favorateSongs: 908488,
  age: 84,
};
console.log(`hello ${user.firstName} ${user.lastName}`);
console.log(`How's the weather in ${user.currentLocation}`);
console.log(`${user.firstName}'s favorite song is ${user.favorateSongs}`);

/* STRETCH 3:  This challenge is not related to the data above! 
Write a function called carMarker 
Your function should accept:
(1) a single odometer argument (a number) 
and return an object.
The returned object should have the following characteristics:
     it has an `odometer` property that contains the argument passed in.
     it has a `drive` method that takes a distance as its argument, and
         (1) causes the odometer in the object to be increased by the distance,
         (2) returns the updated value of the `odometer`.
*/
// inside the carMaker, takes number
// const num equals curly bracket, odometer : number, drive : function takes distance, inside the function 
//num dot odometere equals num.odometer plus distance
//outside drive function, num.drive parenthesi 2 
// then return num.odometer, outside all function console log carmaker (2)
function carMaker(number) {
  /* code here */
  const num = {
    odometer: number,
    drive: function (distance) {
      num.odometer = num.odometer + distance;
    },
  };
  num.drive(2);
  return num.odometer;
}
console.log(carMaker(2));

/*
  To get started:
  1. Remove the lines involving the removeThisToStart variable, so that the
     program doesn't exit early.
  2. Implement userCanAffordSofa
*/

// Exercise 13

let superChimpOne = {
  name: "Chad",
  species: "Chimpanzee",
  mass: 9,
  age: 6,
  astronautID: 1,
  move: move(),
};
let salamander = {
  name: "Lacey",
  species: "Axolotl Salamander",
  mass: 0.1,
  age: 5,
  astronautID: 10,
  move: move(),
};
let animal1 = {
  name: "Brad",
  species: "Chimpanzee",
  mass: 11,
  age: 6,
  astronautID: 5,
  move: move(),
};
let animal2 = {
  name: "Leroy",
  species: "Beagle",
  mass: 14,
  age: 5,
  astronautID: 7,
  move: move(),
};
let animal3 = {
  name: "Almina",
  species: "Tardigrade",
  mass: 0.0000000001,
  age: 1,
  astronautID: 3,
  move: move(),
};
function move() {
  return Math.round(Math.random() * 10);
}
// After you have created the other object literals, add the astronautID property to each one.
//Create an array to hold the animal objects.

// Print out the relevant information about each animal.
// return `${name} is a ${species}. They are ${age} years old and ${mass} kilograms. Their ID is ${astronautID}.`;
function crewReports(animal) {}

// Exercise 14

var movieDatabase = {
  title: "Pulp Fiction",
  duration: 120,
  stars: ["Bruce Willis", "Uma Thurman"],
};
// const test equals curly bracket 
//title test
// duration 120
// stars [Bruce WIllis, Uma thurman]
const test = {
  title: "test",
  duration: 120,
  stars: ["Bruce Willis", "Uma Thurman"],
};
// write the function to return Movie name and duration and stars
//make function name movie, function takes object
// return movie name is ${}object.title "the duration is ${"object.duration
//then outside function console log movie(test) and console log movie(movieDatabase)
function movie(object) {
  return `the movie name is ${object.title} 
  the duration is ${object.duration}. `;
}
// console.log(movie(movieDatabase));
console.log(movie(test));
console.log(movie(movieDatabase))