///////////////Menu Items (MVP)///////////////////

const burger = {
  name: "Burger",
  price: 18,
  category: "Lunch",
  discount: function (string) {
    let discountedPrice;
    if (string === "teacher" || "student") {
      discountedPrice = burger.price * 0.25;
    }
    if (string === "public") {
      discountedPrice = burger.price * 0.1;
    }
    return burger.price - discountedPrice;
  },
};
console.log(burger.discount("public"));

const latte = { name: "Cafe Latte", price: 4, category: "Drinks" };
const breakfastBurrito = {
  name: "Breakfast Burrito",
  price: 16,
  category: "Breakfast",
};

/* Task 1a: write a function to return more menu items with the same format as the items above. */

function createMenuItem(name, cost, category) {
  /* Code here */
  const item = { name: name, cost: cost, category: category };
  return item;
}
console.log(createMenuItem("Cafe Soda", 1.99, "Drinks"));
console.log(createMenuItem("Water", 0.99, "Drinks"));
console.log(createMenuItem("Salad", 1.99, "Food"));

/* Task 1b: use your function to create 3 more menu items. You may add any items to the menu that you'd like */

/* Task 2: You're having a lunch special! 25% off for teachers and students, 10% off for everyone else. Add a method to your burger object that automatically calculates price given a string as a parameter. 
Your method should accept: 
(1) A string (teacher, student, or public)
and should return a number. 
For example, burger.discount("teacher") would return 13.5 and burger.discount("public") would return 16.2*/

///////////////Reviews (MVP)///////////////////

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
let Julius = Object.values(reviews[5]);
console.log(Julius[2]);
for (let i = 0; i < reviews.length; i++) {
  if (reviews[i].name === "Julius") {
    console.log(reviews[i].feedback);
  }
}
/* Task 4: Add a new rating with your (fictitious) opinions of the restaurant in the same format as the reviews above. */
reviews.push({
  name: "Vanitas",
  rating: "1.5",
  feedback:
    "Took extraordinarily long for a simple dish, food was mediocre to say the least.",
});
console.log(reviews);

/* Task 5: Add the following feedback to Reyna's rating - "this place is chill with really cool people, great for getting work done on weekdays" */
let Lauren = Object.values(
  (reviews[7].feedback =
    "this place is chill with really cool people, great for getting work done on weekdays")
);

/*  Task 6: Write a function to return a review based on the index of the review in the array.
 Your function should take two arguments:
(1) an array which holds all of the reviews
(2) a number which is the desired index in the array.
and should return a string in the format `{name} gave the restaurant a {rating}, and their feedback was: {feedback}`
 * 
 * For example, if getReviewByIndex is invoked with reviews and the number 0
 * it will return `Daniela gave the restaurant a 5 star review and their feedback was: Beautiful atmosphere and wonderful vegan options!`
*/
function getReviewByIndex(reviews, index) {
  const review = reviews[index];
  const { name, rating, feedback } = review;
  return `${name} gave the restaurant a ${rating} star review and their feedback was: ${feedback}`;
}
console.log(getReviewByIndex(reviews, 4));
/* Exercise 12

Create the use object and the object should have following key 
firstName
lastName
currentLocation
favoriteSongs
age
*/
const userObject = {
  firstName: "Ruthven",
  lastName: "Oriflamme",
  currentLocation: "DownTown CC",
  favoriteSongs: "Just Disappear, You Got Jokes, chinatown!, Let Me Know",
  age: 25,
};
/*
1. console log 'hello user's firstname and Lastname'
2.How's the weather in 'currentLocation'
3. console log user's favorite songs
*/
console.log(
  `hello user ${userObject.firstName} ${userObject.lastName}. How's the weather in ${userObject.currentLocation}?`
);
console.log(userObject.favoriteSongs);
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

function carMaker(odometer) {
  const object = {
    odometer: odometer,
    drive: function (distance) {
      return (object.odometer = object.odometer + distance);
    },
  };
}

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
function crewReports(animal) {
  let name = animal.name;
  let species = animal.species;
  let age = animal.age;
  let mass = animal.mass;
  let astronautID = animal.astronautID;
  return `${name} is a ${species}. They are ${age} years old and ${mass} kilograms. Their ID is ${astronautID}.`;
}
console.log(crewReports(superChimpOne));

// Exercise 14

var movieDatabase = {
  title: "Pulp Fiction",
  duration: 120,
  stars: ["Bruce Willis", "Uma Thurman"],
};
// write the function to return Movie name and duration and start
function movieData(movie) {
  const { title, duration, stars } = movie;
  // ?
  return title + duration + stars;
}
console.log(movieData(movieDatabase));
