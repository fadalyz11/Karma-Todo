function itemTemplate() {
  return `Hello The Function`;
}

let createField = document.getElementById("create-field");

// Create Feature
document.getElementById("create-form").addEventListener("submit", function(e) {
  e.preventDefault();
  axios
    .post("/create-item", {
      text: createField.value
    })
    .then(function() {
      document
        .getElementById("item-list")
        .insertAdjacentHTML("beforeend", itemTemplate());
    })
    .catch(function() {
      console.log("try again");
    });
});

document.addEventListener("click", function(e) {
  // Delete Feature
  if (e.target.classList.contains("delete-me")) {
    if (confirm("Do you really want to delete this item")) {
      axios
        .post("/delete-item", {
          id: e.target.getAttribute("data-id")
        })
        .then(function() {
          e.target.parentElement.parentElement.remove();
        })
        .catch(function() {
          console.log("try again");
        });
    }
  }

  // Update Feature
  if (e.target.classList.contains("edit-me")) {
    let userInput = prompt(
      "Enter you desired new text",
      e.target.parentElement.parentElement.querySelector(".item-text").innerHTML
    );
    if (userInput) {
      axios
        .post("/update-item", {
          text: userInput,
          id: e.target.getAttribute("data-id")
        })
        .then(function() {
          e.target.parentElement.parentElement.querySelector(
            ".item-text"
          ).innerHTML = userInput;
        })
        .catch(function() {
          console.log("try again");
        });
    }
  }
});
