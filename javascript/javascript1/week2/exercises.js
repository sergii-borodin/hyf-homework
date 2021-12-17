// STEP 2 @sergii-borodin

// Step 3: Smart-ease - Goes Global!

// Flight booking fullname function

// Even for a startup as successful as Smart - ease there needs to be money in the bank.
//  A customer from a flight booking website has asked for our help creating a specific part of their application:

// When a user books a flight they write their firstname and surname,
//     but when the ticket is printed a fullname should be displayed.It is our responsibility to create that.

// Create a function called getFullname that returns a fullname.
// It should have two parameters: firstname and surname.

// getFullname("Benjamin", "Hughes"); // returns "Benjamin Hughes"
// Now try to create two variables fullname1 and fullname2 these two variables should be assigned
//  to calling the getFullname function.

// Log out the two fullname variables.

function getFullName(firstname, surname) {
  const fullName = firstname + " " + surname;
  return console.log(fullName);
}

const fullname1 = getFullName("Benjamin", "Hughes");
const fullname2 = getFullName("Richard", "Chaplin");

// Formal fullname
// On the flight website the user has the possibility to check a checkbox
// that indicates if the user wants to be adressed formally.
// Lets also change getFullname to include support for formal name.

// Create an extra parameter useFormalName that is a boolean.
//  If it is true the function should add a Lord in front of the name.

// getFullname("Benjamin", "Hughes", true); // returns "Lord Benjamin Hughes"`
// getFullname("Benjamin", "Hughes", false); // returns "Benjamin Hughes"
// What do we do if useFormalName is not given as an argument?

//     Remember to consider someone calling the function with an empty string
//  as firstname and lastname.

// Try out your code by pasting your getFullname function in the javascript part
//  of this codepen: https://codepen.io/hackyourfuture-cph/pen/jJWwbN

// But what if the person is a woman ? Describe how you would fix the getFullname
//  so it also works for women

function getFullname(firstname, surname, useFormalName, gender) {
  const fullName = firstname + " " + surname;

  if (useFormalName && gender === "male") {
    const formalMaleName = "Lord " + fullName;
    console.log(formalMaleName);
    return formalMaleName;
  } else if (useFormalName && gender === "female") {
    const formalFemaleName = "Lady " + fullName;
    console.log(formalFemaleName);
    return formalFemaleName;
  } else if (!useFormalName && gender === "male") {
    const formalMaleName = "Lord " + fullName;
    console.log(formalMaleName);
    return formalMaleName;
  } else if (!useFormalName && gender === "female") {
    const formalFemaleName = "Lady " + fullName;
    console.log(formalFemaleName);
    return formalFemaleName;
  } else if (
    useFormalName === null ||
    gender !== "male" ||
    gender !== "female"
  ) {
    return console.log(
      "To choose gender and a way, how you want to be addressed(formally or not) is required!"
    );
  }
}

getFullname("Benjamin", "Hughes", true, "male");
getFullname("Barbara", "Hughes", true, "female");
getFullname("Benjamin", "Hughes", false, "male");
getFullname("Jenifer", "Hughes", false, "female");
getFullname("Benjamin", "Hughes", "male");
getFullname("Benjamin", "Hughes", true);

// Event application

function getEventWeekday(daysToEvent) {
  const currentDate = new Date();
  const currentDay = currentDate.getDay();
  const numerDayOfWeek = (currentDay + daysToEvent) % 7;
  const daysOfWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const dayOfEventHeld = daysOfWeek[numerDayOfWeek];
  console.log(currentDate);
  console.log(currentDay);
  console.log(numerDayOfWeek);
  console.log(
    `A message from calendar: 'Remember that you have an event on ${dayOfEventHeld}'`
  );
}

// With todays weekday a tuesday
console.log(getEventWeekday(9)); // Logs out "Thursday"

// With todays weekday a Friday
console.log(getEventWeekday(2)); // Logs out "Sunday"

// Weather wear

function chooseClothesToWear(temperature) {
  if (temperature < 0) {
    console.log("coat and a warm pants");
  } else if (temperature > 15) {
    console.log("shorts and a t-shirt");
  } else console.log("jacket and pants");
}

const clothesToWear = chooseClothesToWear(18);
console.log(clothesToWear);

// Student manager

const class07Students = [];
function addStudentToClass(studentName) {
  for (let i = 0; i < class07Students.length - 1; i++) {
    const currentStudent = array[i];
    console.log(currentStudent);
    if (currentStudent !== studentName) {
      if (class07Students.length < 6 || studentName === "Margrethe 2") {
        class07Students.push(studentName);
        console.log(class07Students);
      } else if (studentName === "Margrethe 2") {
      } else {
        return console.log("Cannot add more students to class 07");
      }
    } else {
      return console.log("This student is allready exist in the group");
    }
  }
}

function getNumberOfStudents() {
  // You write code here
}

addStudentToClass("Jhon");
addStudentToClass("Justin");
addStudentToClass("Emma");
addStudentToClass("Elton");
addStudentToClass("Christina");
addStudentToClass("Daniel");
addStudentToClass("Sunny");
addStudentToClass("Sully");
addStudentToClass("Margrethe 2");
