// Select popup overlay, popup box, and popup button
var popupoverlay = document.querySelector(".popup-overlay");
var popupbox = document.querySelector(".popup-box");
var addpopupbutton = document.getElementById("add-popup-button");

addpopupbutton.addEventListener("click", function () {
    popupoverlay.style.display = "block";
    popupbox.style.display = "block";
});

// Select cancel button
var cancelbutton = document.getElementById("cancel-popup");
cancelbutton.addEventListener("click", function (event) {
    event.preventDefault();
    popupoverlay.style.display = "none";
    popupbox.style.display = "none";
});

// Select container, add-book button, and input fields
var container = document.querySelector(".continer");
var addbook = document.getElementById("add-book");
var booktitleinput = document.getElementById("book-title-input");
var bookauthorinput = document.getElementById("book-author-input");
var bookdiscriptioninput = document.getElementById("book-discription-input");

addbook.addEventListener("click", function (event) {
    event.preventDefault();

    // Create a new book container
    var div = document.createElement("div");
    div.setAttribute("class", "book-continer");
    div.innerHTML = `
        <h2>${booktitleinput.value}</h2>
        <h5>${bookauthorinput.value}</h5>
        <p>${bookdiscriptioninput.value}</p>
        <button class="delete-book">Delete</button>
    `;

    // Append the new book container to the main container
    container.append(div);

    // Add functionality to delete the book
    div.querySelector(".delete-book").addEventListener("click", function () {
        div.remove();
    });

    // Clear input fields and close the popup
    booktitleinput.value = "";
    bookauthorinput.value = "";
    bookdiscriptioninput.value = "";
    popupoverlay.style.display = "none";
    popupbox.style.display = "none";
});
