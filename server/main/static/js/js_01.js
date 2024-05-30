///////////////////////////////////////////////////////////////////////
//switch views with side buttons
var home_button = document.getElementById('home-btn');
var home_div = document.getElementById('viewport-div');
home_button.addEventListener('click', home_view);

function home_view() {
    console.log("Home button clicked!");

    home_div.style.display = 'block';
    menu_div.style.display = 'none';
    lunch_div.style.display = 'none';
    drinks_div.style.display = 'none';
}

var menu_button = document.getElementById('menu-btn');
var menu_div = document.getElementById('viewport-div-01');
menu_button.addEventListener('click', menu_view);

function menu_view() {
    console.log("Menu button clicked!");

    home_div.style.display = 'none';
    menu_div.style.display = 'block';
    lunch_div.style.display = 'none';
    drinks_div.style.display = 'none';
}

var lunch_button = document.getElementById('lunch-btn');
var lunch_div = document.getElementById('viewport-div-02');
lunch_button.addEventListener('click', lunch_view);

function lunch_view() {
    console.log("Lunch button clicked!");

    home_div.style.display = 'none';
    menu_div.style.display = 'none';
    lunch_div.style.display = 'block';
    drinks_div.style.display = 'none';
}

var drinks_button = document.getElementById('drinks-btn');
var drinks_div = document.getElementById('viewport-div-03');
drinks_button.addEventListener('click', drinks_view);

function drinks_view() {
    console.log("Drinks button clicked!");

    home_div.style.display = 'none';
    menu_div.style.display = 'none';
    lunch_div.style.display = 'none';
    drinks_div.style.display = 'block';
}







///////////////////////////////////////////////////////////////////////
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

var GetPrice_01 = document.querySelectorAll('.option');

//Set click event for each div found
GetPrice_01.forEach(function(div) {
    div.addEventListener('click', sendData);
});

function sendData(event) {
    // Get the item name from the clicked div
    const itemName = event.currentTarget.querySelector('.option-item').innerText.trim();
    console.log(itemName);
    const url = `/get_item_info/?input_value=${encodeURIComponent(itemName)}`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            console.log(data);
            appendItemPrices(data);
        })
        .catch((error) => {
            console.error('Error:', error);
        });
}

///////////////////////////////////////////////////////////////////////

function appendItemPrices(data) {
    // Get the item elements
    var weekday_price_p = document.querySelector('.weekday-price');
    var weekend_price_p = document.querySelector('.weekend-price');

    // Set the inner text of the elements to the corresponding prices
    weekday_price_p.innerText = data.weekday_price;
    weekend_price_p.innerText = data.weekend_price;
}

///////////////////////////////////////////////////////////////////////

var AddToCartButtons = document.querySelectorAll('.menu-option button');

//add event listener to each button
AddToCartButtons.forEach(button => {
    button.addEventListener('click', appendItemToCart);
});


function appendItemToCart(event) {
    // Prevent the default button behavior
    event.preventDefault();

    // Find the menu-option div that contains the clicked button
    const menuOption = event.target.closest('.menu-option');
 
    // Clone the menu-option div
    const clonedItem = menuOption.cloneNode(true);
 
    // Remove the button from the cloned item
    clonedItem.querySelector('button').remove();6
 
    // Append the cloned item to the cart-items div
    document.querySelector('.order-contents').appendChild(clonedItem);
}



