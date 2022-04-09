"use strict"



//################################## Rating related functions ####################################
// highlight selected element

let currentRatingId = 4;
function ratingActivater(itemId) {
    document.getElementById(currentRatingId).classList.remove('selected-rating');
    document.getElementById(itemId).classList.add('selected-rating');
    currentRatingId = itemId;
}

// Submit handler function
function submitter(itemid) {
    document.getElementById('container').innerHTML = `
     <div class="thankyou-container">
    <div class="thankyou-img-container">
        <img src="./images/illustration-thank-you.svg" alt="thankyou img">
    </div>
    <div class="selected-rating-info">
        <h1>You selected ${Number(itemid) + 1} out of 5</h1>
    </div>
    <h1 class="thank-you">Thank you!</h1>
    <div class="thankyou-message">
        <p>We appreciate you taking the time to give a rating. If you ever need more support,
            don’t hesitate to get in touch!</p>
    </div>`
}
// Get rating elements html collection
const ratingSelectorCollection = document.getElementsByClassName('rating-selector');
// convert rating elements html collection into array
const ratingSelectorArray = Array.from(ratingSelectorCollection);
// add click event on rating element 
ratingSelectorArray.forEach((ratingElement) => {
    document.getElementById(ratingElement.id).addEventListener('click', (event) => ratingActivater(event.target.id));
});

// Get submit button
const submitBtn = document.getElementById('submit-btn');
// Add click event listener on submit button
submitBtn.addEventListener('click', () => submitter(currentRatingId));
