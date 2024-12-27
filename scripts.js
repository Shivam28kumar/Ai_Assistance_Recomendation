const API_KEY = "sb-f915fc31d83eed93780402d2eec45787";

function openPopup(id) {
// Close all other popups and open the target popup
document.querySelectorAll('.popup').forEach(popup => popup.classList.remove('active'));
document.getElementById('overlay').classList.add('active');
document.getElementById(id).classList.add('active');

// Ensure all inputs in the popup are interactable
const inputs = document.querySelectorAll(`#${id} input`);
inputs.forEach(input => {
input.disabled = false;  // Enable inputs explicitly
input.style.pointerEvents = 'auto'; // Allow interaction
input.style.opacity = '1'; // Make sure inputs are not visually disabled
});
}

function closePopup() {
// Close all popups and disable the overlay
document.querySelectorAll('.popup').forEach(popup => popup.classList.remove('active'));
document.getElementById('overlay').classList.remove('active');

// Disable all inputs (optional)
const inputs = document.querySelectorAll('.popup input');
inputs.forEach(input => {
input.disabled = true; // Disable inputs again
input.style.pointerEvents = 'none'; // Prevent interaction
input.style.opacity = '0.6'; // Make inputs look visually disabled (not the whole popup)
});
}

async function submitMovie() {
    const style = document.getElementById('movie-style').value;
    const topic = document.getElementById('movie-topic').value;
    const url = "https://flow-api.mira.network/v1/flows/flows/shivam/Movie Recommendation System?version=0.0.3";

    try {
        const response = await fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "miraauthorization": API_KEY,
            },
            body: JSON.stringify({
                input: { style, topic }
            })
        });
        const result = await response.json();

        // Format result with line separation
        const formattedResult = result.result
            .replace(/\n\n/g, "<hr>") // Replace double line breaks with horizontal rule
            .replace(/\n/g, "<br>");  // Replace single line breaks with <br>

        // Display formatted result in the movie-result div
        document.getElementById('movie-result').innerHTML = formattedResult;
    } catch (error) {
        document.getElementById('movie-result').innerText = `Error: ${error.message}`;
    }
}


async function submitBook() {
    const genre = document.getElementById('book-genre').value;
    const style = document.getElementById('book-style').value;
    const author = document.getElementById('book-author').value;
    const length = document.getElementById('book-length').value;
    const previous_book = document.getElementById('book-previous').value;
    const url = "https://flow-api.mira.network/v1/flows/flows/shivam/ReadNext (Book Recommendation System)?version=0.0.1";

    try {
        const response = await fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "miraauthorization": API_KEY,
            },
            body: JSON.stringify({
                input: { genre, style, author, length, previous_book }
            })
        });
        
        const result = await response.json();
        let formattedResult = "No result available.";

        // Ensure result.result exists and is a string
        if (result.result && typeof result.result === "string") {
            formattedResult = result.result
                .replace(/\n\n/g, "<hr>") // Replace double line breaks with horizontal rule
                .replace(/\n/g, "<br>");  // Replace single line breaks with <br>
        }

        document.getElementById('book-result').innerHTML = formattedResult;
    } catch (error) {
        document.getElementById('book-result').innerText = `Error: ${error.message}`;
    }
}


async function submitClothing() {
    const age = document.getElementById('clothing-age').value;
    const height = document.getElementById('clothing-height').value;
    const skin_tone = document.getElementById('clothing-skin').value;
    const color_preferences = document.getElementById('clothing-color').value;
    const url = "https://flow-api.mira.network/v1/flows/flows/anand/clothing-suggestion-generator?version=1.0.0";

    try {
        const response = await fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "miraauthorization": API_KEY,
            },
            body: JSON.stringify({
                input: { age, height, skin_tone, color_preferences }
            })
        });

        const result = await response.json();
        let formattedResult = "No result available.";

        // Ensure result.result exists and is a string
        if (result.result && typeof result.result === "string") {
            formattedResult = result.result
                .replace(/\n\n/g, "<hr>") // Replace double line breaks with horizontal rule
                .replace(/\n/g, "<br>");  // Replace single line breaks with <br>
        }

        document.getElementById('clothing-result').innerHTML = formattedResult;
    } catch (error) {
        document.getElementById('clothing-result').innerText = `Error: ${error.message}`;
    }
}

async function submitMedical() {
    const location = document.getElementById('medical-location').value;
    const symptoms = document.getElementById('medical-symptoms').value;
    const url = "https://flow-api.mira.network/v1/flows/flows/shivam/medical-assistance-ai-flow?version=0.1.0";

    try {
        const response = await fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "miraauthorization": API_KEY,
            },
            body: JSON.stringify({
                input: { location, symptoms }
            })
        });

        const result = await response.json();
        let formattedResult = "No result available.";

        // Ensure result.result exists and is a string
        if (result.result && typeof result.result === "string") {
            formattedResult = result.result
                .replace(/\n\n/g, "<hr>") // Replace double line breaks with horizontal rule
                .replace(/\n/g, "<br>");  // Replace single line breaks with <br>
        }

        document.getElementById('medical-result').innerHTML = formattedResult;
    } catch (error) {
        document.getElementById('medical-result').innerText = `Error: ${error.message}`;
    }
}