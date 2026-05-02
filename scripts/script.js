// modal.js (starter template)
// Goal: Clicking a project card opens a modal and loads data from projects[index].

// TODO 1: Create an array of project objects.
// Each object should have: title, details, link_text, href
const projects = [
  // Example object:
  // { title: "Project 1", details: "Details here", link_text: "View in GitHub", href: "https://example.com" },
  {title: "Rubik's Cube:", details: "This is a digital version of the classic Rubik's Cube puzzle that we all grew up playing. It will allow you to move it in different ways. The algorithm also keeps track of of your moves and prints them back to you in reverse order as a way to solve the cube.", link_text: "View in GitHub", href: "https://example.com" },
  {title: "Go Board:", details: "A version of the class game of Go. You are able to play against another person. You take turn placing stones and then the algorithm allows you to score your game and keeps track of captures.", link_text: "View in GitHub", href: "https://example.com" },
  {title: "Blackjack Game:", details: "A fully functional blackjack game. It allows you to play against the computer and choose if you want to hit or stand. It also allows you to put in bets and will keep track of what your total amount of money is and will automatically end the game if you run out of money.", link_text: "View in GitHub", href: "https://example.com" },
  {title: "Chess Game:", details: "An interactive chess game with a user-friendly interface and it allows you play against your opponent. The pieces move realistically and the computer will tell you when you are in check and when there is a checkmate and somenoe wins.", link_text: "View in GitHub", href: "https://example.com" },
  {title: "Photo Filter:", details: "A simple photo editing app that allows users to apply various filters and effects to their images. You are able to layer images over one another and also add filters to each of these images in the process. You can then save the final image you make.", link_text: "View in GitHub", href: "https://example.com" },
  {title: "Weather App:", details: "A weather application that provides real-time weather updates and forecasts for your location. Utilizing the National Weather Service API, it delivers accurate and timely weather information.", link_text: "View in GitHub", href: "https://example.com" }

];

// TODO 2: Select your modal elements from the DOM and store them in variables
// Required variables: modal, modal_title, modal_details, modal_link, modal_close
const modal = document.getElementById("project-modal");
const modal_title = document.getElementById("modal-title");
const modal_details = document.getElementById("modal-details");
const modal_link = document.getElementById("modal-link");
const modal_close = document.getElementById("modal-close");


// TODO 3: Select all project card buttons
// Reminder: Each card button should have a shared class (e.g., .project-card) and a data-index attribute
const card_buttons = document.querySelectorAll(".project-card");


// TODO 4: Complete this function so it loads the correct project data and opens the modal
function openModalByIndex(index) {
  const project = projects[index];
  if (!project) return;

  modal_title.textContent = project.title;
  modal_details.textContent = project.details;
  modal_link.textContent = project.link_text;
  modal_link.href = project.href;

  console.log(project.title);

  modal.showModal();

  // TODO 4a: Update your modal content here
  // Hint: modal_title.textContent = ?

  // TODO 4b: Open the modal with modal.showModal()

  // Disables background scrolling while the modal is open.
  document.body.style.overflow = "hidden";

  // Optional Enhancement: Focus the modal when it opens (requires tabindex="-1" on the dialog)
  modal.focus();
}

// This is what you should call in your click event handler for cards
// It contains some things we haven't talked about yet, so it is provided for you
function onCardClicked(event) {
  const clicked_card = event.currentTarget;
  const index = Number(clicked_card.dataset.index);
  openModalByIndex(index);
}
    
// TODO 5: Use a for loop to add a click event listener to each card in card_buttons
// and use onCardClicked as the click event's function
for (let i = 0; i < card_buttons.length; i++) {
  card_buttons[i].addEventListener("click", onCardClicked);
}

// TODO 6: Add a click event listener to the modal close button that uses the built-in modal.close() method
modal_close.addEventListener("click", function () {
  modal.close();
});

// Always restore body scroll when the modal is closed (no matter how it closes)
// NOTE: This line requires that you define the modal variable above.
modal.addEventListener("close", function () {
  document.body.style.overflow = "";
});