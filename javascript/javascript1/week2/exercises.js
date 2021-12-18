// STEP 2 @sergii-borodin

// Step 3: Smart-ease - Goes Global!

// Flight booking fullname function

function getFullName(firstname, surname) {
  const fullName = firstname + " " + surname;
  return console.log(fullName);
}

const fullname1 = getFullName("Benjamin", "Hughes");
const fullname2 = getFullName("Richard", "Chaplin");

// Formal fullname

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
  const isInclude = class07Students.includes(studentName);
  if (studentName === "") {
    console.log("Please enter your name!");
  } else if (isInclude) {
    console.log("Student with this name is already exist in our study group");
  } else {
    if (class07Students.length < 6 || studentName === "Margrethe 2") {
      class07Students.push(studentName);
      console.log(class07Students);
    } else {
      console.log("Cannot add more students to class 07");
    }
  }
}

function getNumberOfStudents() {
  const numberOfstudents = class07Students.length;
  console.log(`Number of students in class 07 is ${numberOfstudents}`);
  return numberOfstudents;
}

addStudentToClass("Jhon");
addStudentToClass("");
addStudentToClass("Emma");
addStudentToClass("Emma");
addStudentToClass("Elton");
addStudentToClass("Christina");
addStudentToClass("Daniel");
addStudentToClass("Sunny");
addStudentToClass("Margrethe 2");
addStudentToClass("Sully");
addStudentToClass("Margrethe 2");
addStudentToClass("Rick");

getNumberOfStudents(class07Students);
