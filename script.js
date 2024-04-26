document.addEventListener("DOMContentLoaded", function() {
    const root = document.getElementById("root"); // Gets the root element

    // Create the textarea and the submit button
    const textarea = document.createElement("textarea");
    const submitButton = document.createElement("button");
    submitButton.textContent = "Submit"; // Set button text to "Submit"

    root.appendChild(textarea); // Add the textarea to root element
    root.appendChild(submitButton); // Add the submit button to root elementt

    const frequency = {}; // Object to store word counts

    // Handler for  the submit button click
    submitButton.addEventListener("click", function() {
        const text = textarea.value.trim(); // Get and trim text
        const words = text.split(" "); // Split into words

        // Count frequencies
        words.forEach((word) => {
            const cleanWord = word.toLowerCase(); // Normalize  so  all words are lowercase
            if (cleanWord) {
                frequency[cleanWord] = (frequency[cleanWord] || 0) + 1; // Increase the count by 1
            }
        });

        // Get the top 5 words by frequency
        const sortedWords = Object.entries(frequency).sort((a, b) => b[1] - a[1]);

        // Clear previous results and radd textarea and submit button
        root.innerHTML = "";
        root.appendChild(textarea);
        root.appendChild(submitButton);

        // Display the top 5 most frequent words
        const results = document.createElement("div");
        sortedWords.slice(0, 5).forEach(([word, count]) => {
            const result = document.createElement("p");
            result.textContent = `${word}: ${count}`; // Display word and count
            results.appendChild(result); // Add to results div
        });

        root.appendChild(results); // Add the results to the root
        console.log("Word Frequency:", frequency); // Log the frequency object
    });
});
