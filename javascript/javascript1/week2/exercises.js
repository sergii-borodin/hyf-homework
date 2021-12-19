// STEP 2 @sergii-borodin

// Step 3: Smart-ease - Goes Global!

// Flight booking fullname function

function getFullName(firstname, surname) {
  const fullName = `${firstname} ${surname}`;
  return fullName;
}

const fullname1 = getFullName("Benjamin", "Hughes");
const fullname2 = getFullName("Richard", "Chaplin");

console.log(fullname1);
console.log(fullname2);
// Formal fullname

function getFullname(firstname, surname, useFormalName, gender) {
  const fullName = `${firstname} ${surname}`;

  if (useFormalName && gender === "male") {
    const formalMaleName = `Lord ${fullName}`;
    console.log(formalMaleName);
    return formalMaleName;
  } else if (useFormalName && gender === "female") {
    const formalFemaleName = `Lady ${fullName}`;
    console.log(formalFemaleName);
    return formalFemaleName;
  } else if (!useFormalName && gender === "male") {
    const formalMaleName = `Lord ${fullName}`;
    console.log(formalMaleName);
    return formalMaleName;
  } else if (!useFormalName && gender === "female") {
    const formalFemaleName = `Lady ${fullName}`;
    console.log(formalFemaleName);
    return formalFemaleName;
  } else if (
    useFormalName === null ||
    gender !== "male" ||
    gender !== "female"
  ) {
    const wrongInputWarning =
      "To choose gender and a way, how you want to be addressed(formally or not) is required!";
    return wrongInputWarning;
  }
}

getFullname("Benjamin", "Hughes", true, "male");
getFullname("Barbara", "Hughes", true, "female");
getFullname("Benjamin", "Hughes", false, "male");
getFullname("Jenifer", "Hughes", false, "female");
console.log(getFullname("Benjamin", "Hughes", "male"));
console.log(getFullname("Benjamin", "Hughes", true));

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
  const reminderMessage = `A message from calendar: 'Remember that you have an event on ${dayOfEventHeld}'`;
  return reminderMessage;
}

console.log(getEventWeekday(9));
console.log(getEventWeekday(2));

// Weather wear

function chooseClothesToWear(temperature) {
  if (temperature < 0) {
    return "coat and a warm pants";
  } else if (temperature > 15) {
    return "shorts and a t-shirt";
  } else return "jacket and pants";
}

const clothesToWear = chooseClothesToWear(18);
console.log(clothesToWear);

// Student manager

const class07Students = [];
function addStudentToClass(studentName) {
  const isInclude = class07Students.includes(studentName);
  if (studentName === "") {
    return "Please enter your name!";
  } else if (isInclude) {
    return "Student with this name is already exist in our study group";
  } else {
    if (class07Students.length < 6 || studentName === "Margrethe 2") {
      class07Students.push(studentName);
      return class07Students;
    } else {
      return "Cannot add more students to class 07";
    }
  }
}

function getNumberOfStudents() {
  const numberOfstudents = class07Students.length;
  const numberOfstudentsMessage = `Number of students in class 07 is ${numberOfstudents}`;
  return numberOfstudentsMessage;
}

console.log(addStudentToClass("Jhon"));
console.log(addStudentToClass(""));
console.log(addStudentToClass("Emma"));
console.log(addStudentToClass("Emma"));
console.log(addStudentToClass("Elton"));
console.log(addStudentToClass("Christina"));
console.log(addStudentToClass("Daniel"));
console.log(addStudentToClass("Sunny"));
console.log(addStudentToClass("Sully"));
console.log(addStudentToClass("Margrethe 2"));
console.log(addStudentToClass("Margrethe 2"));
console.log(addStudentToClass("Rick"));

console.log(getNumberOfStudents(class07Students));
