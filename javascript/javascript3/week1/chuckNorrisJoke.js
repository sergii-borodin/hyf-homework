// Declared asynchronous function.
async function getChuckNorrisJokes() {
  //Assigned result of the fetch() in the variabale named "response".
  //And the keyword "await" allowed to do it asynchronously
  const response = await fetch("http://api.icndb.com/jokes/random");
  //Then wo do the same with "content".
  //And using method json() we parse object from json - format to object in JS - format
  const content = await response.json();
  // So we assign a comming joke to the dom-element
  document.getElementById("para").textContent = content.value.joke;
}
// Her we call that function with two opportunities. In case if we gonna get "a response" and "an error"
getChuckNorrisJokes()
  .then((response) => {
    console.log("Yes");
  })
  .catch((error) => {
    console.log("error");
  });
