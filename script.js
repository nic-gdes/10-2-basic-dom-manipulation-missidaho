// DOM Manipulation Practice - Lighten up, T. Rex, geez.

// 1. Link your javascript in the HTML above the closing </body> tag.

// 2. Use querySelector to create a variable that contains the page's h1 title, and change the title using textContent into something a bit nicer.
var title = document.getElementById("page-title");
title.textContent = "Meet The Nice T. Rex!";

// 3. Use querySelector to create a variable that contains the dinosaur image, and change the src to "./images/cute-dino.jpeg" so he doesn't look so mean. You can change an item's src by just calling the src method (item.src = "new_src";)

const linkElement = document.querySelector('#dino-img');
// location.href.replace = "./images/cute-dino.jpeg";
//location.replace("./image/cute-dino.jpeg")
// img.scr = "./images/cute-dino.jpeg";
linkElement.src = "./images/cute-dino.jpeg";


// 4. Use querySelector to create a variable for the document body, and change the background color to something less harsh and intense.
var background = document.body
background.style.backgroundColor = 'lightgreen';

// 5. Modify the following array to add at least 3 facts about the T. Rex that aren't so frightening. They don't need to be real facts.

let dinoFacts = [
    "Fact 1",
    "Fact 2",
    "Fact 3"
]
dinoFacts[0] = 'T Rex lived in Florida 50 million years ago.';
dinoFacts[1] = 'T Rex means the nice giant lizard.';
dinoFacts[2] = 'T Rex likes to eat salad instead of people.';

// console.log(dinoFacts)

// let dinoFacts = (variable.innerHTML = "");

// 6. Replace the facts on the page with our new array of facts:



// 6.1 First, use querySelector to create a variable for the list.
// var info = document.querySelector('facts');

const list = document.querySelector("#facts");


// 6.2 Then, remove all of the current content by setting your list variable's innerHTML to a blank string (variable.innerHTML = "")
// info.innerHTML = ("");
list.innerHTML = "";

function removeContent() {
    // Step 1: Select the HTML element by its ID
  
    // Step 2: Get the content as a string
  
    // Step 3: Use JavaScript string manipulation to remove content
    // For example, let's say we want to remove "with content"

  
    // Step 4: Set the modified string back to the innerHTML property

  }

// 6.3 Then loop through the dinoFacts array, and appendChild each fact to the list variable. Remember you can loop through an array by using array.length to get the total number of items in the array to end the loop;

for (let i = 0; i < dinoFacts.length; i++) {
  const currentFacts = dinoFacts[i];
  console.log(currentFacts);
  const newListItem = document.createElement('li');
  newListItem.textContent = currentFacts;
  list.appendChild(newListItem)

}
