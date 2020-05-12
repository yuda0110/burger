$(function() {
  $(".create-form").on("submit", function(event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();

    const newBurger = {
      name: $("#burger-name").val().trim()
    };

    // Send the POST request.
    $.ajax("/", {
      type: "POST",
      data: newBurger
    }).then(() => {
        console.log("Created new burger");
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });
});