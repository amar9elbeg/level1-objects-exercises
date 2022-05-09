///////////////Menu Items (MVP)///////////////////
// const user = {
//   Name: "Odmaral",
//   Age: 15,
//   Location: "Seattle",
//   Nationality: "Mongolian",
// };
// console.log(user);
// user.married = false;
// console.log(user)
//  user.Age = 50
//  console.log(user)
//  delete user.Location;
// console.log(user)

const latte = { name: "Cafe Latte", price: 4, category: "Drinks" };
const burger = {
  name: "Burger",
  price: 18,
  category: "Lunch",
  discount: function (person) {
    if (person === "teacher" || person === "student") {
      burger.price = (burger.price * 75) / 100;
      return burger.price;
    } else {
      burger.price = (burger.price * 90) / 100;
      return burger.price;
    }
  },
};
console.log(burger.discount("public"));

const breakfastBurrito = {
  name: "Breakfast Burrito",
  price: 16,
  category: "Breakfast",
};

/* Task 1a: write a function to return more menu items with the same format as the items above. */

function createMenuItem(name, price, category) {
  const item = {
    name: name,
    price: price,
    category: category,
  };
  return item;
}
console.log(createMenuItem("Pizza", "14", "Lunch"));
console.log(createMenuItem("Cheeseburger", "16", "Lunch"));
console.log(createMenuItem("Sandwich", "12", "Lunch"));
/* Task 1b: use your function to create 3 more menu items. You may add any items to the menu that you'd like */

/* Task 2: You're having a lunch special! 25% off for teachers and students, 10% off for everyone else. 
Add a method to your burger object that automatically calculates price given a string as a parameter. 
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
for (let index = 0; index < reviews.length; index++) {
  if (reviews[index].name === "Julius") {
    console.log(reviews[index].feedback);
  }
}
/* Task 3: Console.log just Julius' feedback */

/* Task 4: Add a new rating with your (fictitious) opinions of the restaurant in the same format as the reviews above. */

const myReview = {
  name: "Marlaa",
  rating: 4,
  feedback: "Food was delicious. Service was okay.",
};
reviews.push(myReview);
console.log(reviews);

for (let index = 0; index < reviews.length; index++) {
  if (reviews[index].name === "Reyna") {
    console.log(
      (reviews[index].feedback =
        "this place is chill with really cool people, great for getting work done on weekdays")
    );
  }
}
/* Task 5: Add the following feedback to Reyna's rating - "this place is chill with really cool people, great for getting work done on weekdays"

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
  for (let test = 0; test < reviews.length; test++) {
    if (test === index) {
      return `${reviews[index].name} gave the restaurant a ${reviews[index].rating} star review and their feedback was: ${reviews[index].feedback}`;
    }
  }
}
console.log(getReviewByIndex(reviews, 2));
/* Exercise 12

Create the use object and the object should have following key 
firstName
lastName
currentLocation
favoriteSongs
age

1. console log 'hello user's firstname and Lastname'
2.How's the weather in 'currentLocation'
3. console log user's favorite songs



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
function greeting(firstName, lastName, currentLocation, favoriteSongs, age) {
  const user = {
    firstName: firstName,
    lastName: lastName,
    currentLocation: currentLocation,
    favoriteSongs: favoriteSongs,
    age: age,
  };
  return `Hello ${user.firstName} ${user.lastName}! How's the weather in ${currentLocation}? ${user.favoriteSongs} is playing now.`;
}
console.log(greeting("Marlaa", "Tumenjargal", "Seattle", "First Class", "15"));

function carMaker(odometer) {
  const drive = {
    odometer: odometer,
    distance: function (distance) {
      drive.odometer = odometer + distance;
    },
  };
  drive.distance(100);
  return drive.odometer;
}
console.log(carMaker(500000));

// Exercise 13

const animals = [
  {
    name: "Chad",
    species: "Chimpanzee",
    mass: 9,
    age: 6,
    astronautID: 1,
    move: move(),
  },
  {
    name: "Lacey",
    species: "Axolotl Salamander",
    mass: 0.1,
    age: 5,
    astronautID: 10,
    move: move(),
  },
  {
    name: "Brad",
    species: "Chimpanzee",
    mass: 11,
    age: 6,
    astronautID: 5,
    move: move(),
  },
  {
    name: "Leroy",
    species: "Beagle",
    mass: 14,
    age: 5,
    astronautID: 7,
    move: move(),
  },
  {
    name: "Almina",
    species: "Tardigrade",
    mass: 0.0000000001,
    age: 1,
    astronautID: 3,
    move: move(),
  },
];
function move() {
  return Math.round(Math.random() * 10);
}
// After you have created the other object literals, add the astronautID property to each one.
//Create an array to hold the animal objects.

// Print out the relevant information about each animal.
// return `${name} is a ${species}. They are ${age} years old and ${mass} kilograms. Their ID is ${astronautID}.`;
function crewReports(animals) {
  for (let test = 0; test < animals.length; test++) {
    console.log(
      `${animals[test].name} is a ${animals[test].species}. They are ${animals[test].age} years old and ${animals[test].mass} kilograms. Their ID is ${animals[test].astronautID}.`
    );
  }
}
crewReports(animals);

// Exercise 14

var movieDatabase = {
  title: "Pulp Fiction",
  duration: 120,
  stars: ["Bruce Willis", "Uma Thurman"],
};

function aboutMovie(title, duration, stars) {
  const movie = {
    title: title,
    duration: duration,
    stars: stars,
  };
  return movie;
}
console.log(aboutMovie("Titanic", 194, ["Leonardo Decaprio", "Kate Winslet"]));
// console.log(movieDatabase.title, movieDatabase.duration, movieDatabase.stars);
// write the function to return Movie name and duration and start
