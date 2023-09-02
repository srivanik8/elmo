let recognition;
let isRecognizing = false;
let recognizedText = ''; // Variable to store recognized text
const output = document.getElementById('output');
const startButton = document.getElementById('startButton');
const endButton = document.getElementById('endButton');
const historyList = document.getElementById('historyList'); // Add an element for displaying the history

const recordings = []; // Array to store recordings and their corresponding text

// Check if the browser supports the Web Speech API
if ('SpeechRecognition' in window || 'webkitSpeechRecognition' in window) {
    // Create a new SpeechRecognition instance
    recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();

    // Configure recognition settings (optional)
    recognition.continuous = true; // Keep listening after each speech recognition
    recognition.interimResults = true; // Get interim results

    startButton.addEventListener('click', () => {
        if (!isRecognizing) {
            // Start speech recognition
            recognition.start();
            output.innerHTML = 'Listening...';
            isRecognizing = true;
        }
    });

    endButton.addEventListener('click', () => {
        if (isRecognizing) {
            // End speech recognition
            recognition.stop();
            output.innerHTML = 'Speech recognition ended.';

            // Display the recognized text
            output.innerHTML += '<br>' + recognizedText;

            // Add the recording and recognized text to the history list
            if (recognizedText.trim() !== '') {
                const listItem = document.createElement('li');
                listItem.textContent = recognizedText;
                historyList.appendChild(listItem);

                // Store the recording and recognized text in the recordings array
                recordings.push({ recording: recognizedText, text: recognizedText });
            }

            recognizedText = ''; // Reset recognizedText
            isRecognizing = false;
        }
    });

    recognition.onresult = (event) => {
        const result = event.results[event.results.length - 1];
        const text = result[0].transcript;

        // Check if the result is final (not interim)
        if (result.isFinal) {
            // Append recognized text to the variable
            recognizedText += text + ' ';
        }

        // Display the recognized text in real-time
        output.innerHTML = `You said: ${text}`;
    };

    recognition.onend = () => {
        if (isRecognizing) {
            output.innerHTML += '<br>Speech recognition ended.';
            isRecognizing = false;
        }
    };
} else {
    alert('Web Speech API is not supported in this browser.');
}
