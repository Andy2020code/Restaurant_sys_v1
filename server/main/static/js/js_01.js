//Get all clickable divs
var ShowOptionsDIV = document.querySelectorAll('.option');

//Set click event for each div found
ShowOptionsDIV.forEach(function(div) {
    div.addEventListener('click', FavoritehandleClick);
});

//define the function to be called when a .option div is clicked
function FavoritehandleClick() {
    console.log("Div clicked!");

    // Get the floating div element
    var floatingDiv = document.getElementById('floatingDiv');

    //Get the name of the menu item clicked
    var itemName = document.querySelector('.option-item').innerHTML;
    console.log(itemName);

    // Function to handle click event
    function handleClick(clickedDiv) {
        // Get the index of the clicked div among its siblings
        var index = Array.prototype.indexOf.call(clickedDiv.parentNode.children, clickedDiv);

        // Select the corresponding menu item element
        var menuItemElement = document.querySelector('.menu-item');

        // Set the innerHTML of the menu item to the text content of the clicked option item
        menuItemElement.innerHTML = clickedDiv.querySelector('.option-item').innerHTML;
    }

    handleClick(this);

    // Show the floating div
    floatingDiv.style.display = 'block';

    //add smooth transition effect
    setTimeout(function() {
        floatingDiv.style.opacity = '1';
    }, 10);
}

///////////////////////////////////////////////////////////////////////

// Get the close button element
var closeButton = document.getElementById('closeButton');

// Add event listener to the close button
closeButton.addEventListener('click', HideOptionsDIV);

//define the function to be called when a .option div is clicked
function HideOptionsDIV() {
    console.log("Div clicked!");

    // Get the floating div element
    var floatingDiv = document.getElementById('floatingDiv');

    //add closing transition effect
    floatingDiv.style.opacity = '0';

    setTimeout(function() {
        floatingDiv.style.display = 'none';
    }, 300);
}

///////////////////////////////////////////////////////////////////////

//get the information of the selected option

