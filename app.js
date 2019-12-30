// https://teamtreehouse.com/whoismikeo.json
// access the json from Treehouse api and print

// Require https
const username = 'whoismikeo'
var https = require("https");
// Function to print message to console
function printMessage(username, badgeCount, point) {
    const message = `${username} has ${badgeCount} badges ${points} points in JavaScript.`
    console.log(message)
}

// API request
const request = https.get(`https://teamtreehouse.com/${username}.json`, response => {
    // Read the data
    console.dir(response)
    // Parse the data

    // Print the data

});

