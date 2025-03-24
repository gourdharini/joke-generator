// Get references to the HTML elements
const jokeTextElement = document.getElementById('joke-text');
const jokeButton = document.getElementById('new-joke-button');

// Function to fetch a random joke
async function getJoke() {
    try {
        // Fetch the joke from the API
        const response = await fetch('https://v2.jokeapi.dev/joke/Any?type=single');
        
        // Parse the JSON response
        const data = await response.json();
        
        // Check if the joke is of the "single" type (simple joke without setup)
        if (data.joke) {
            jokeTextElement.textContent = data.joke;
        } else {
            jokeTextElement.textContent = "Oops! Something went wrong. Try again!";
        }
    } catch (error) {
        jokeTextElement.textContent = "Error fetching joke. Please try again later.";
        console.error(error);
    }
}

// Event listener for the button
jokeButton.addEventListener('click', getJoke);

// Load a joke when the page is loaded
getJoke();
