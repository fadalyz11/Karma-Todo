document.addEventListener("click", function(e) {
  if (e.target.classList.contains("edit-me")) {
    let userInput = prompt("Enter you desired new text");
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
});
