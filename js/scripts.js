window.onload = function () {
  const form = document.querySelector("form");
  form.onsubmit = function(event) {
    event.preventDefault();
    checkAge();
  }
 }

//     let drinkMenu = document.getElementById("drinks");
//     drinkMenu.setAttribute("class", "hidden");
//     let under21Message = document.getElementById("under-21");
//     under21Message.setAttribute("class", "hidden");



function checkAge() {
  const age = parseInt(document.querySelector("input#age").value);
  if (age>=18) {
    document.querySelector("div#votingPage").removeAttribute("class");
  } else {
    document.querySelector("div#noVote").removeAttribute("class");
  } 
}







//The page should prompt the user to enter their current age.
//If the user is too young to vote, they should see different information than if the user is old enough to legally vote.
//Minors should be offered links to websites where they may learn about the voting process and age requirements.
//Those old enough to vote should be offered links to websites to register to vote, locate their nearest polling location/ballot drop box is, or list when upcoming elections will take place.
