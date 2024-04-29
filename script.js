function executeCommand() {
    // Get the input value
    var command = document.getElementById('command-input').value;
    
    // Call a function to process the command and display the output
    processCommand(command);

    //Clear the input field after executing the command
    document.getElementById('command-input').value = '';
}

function processCommand(command) {
    // Log the command to the console
    console.log('Command entered:', command);

    // Display the command in the console output
    var consoleOutput = document.getElementById('console-output');
    
    switch (command.toUpperCase()) {
        case 'HELP':
            consoleOutput.innerHTML += "<p>Available commands:</p>";
            consoleOutput.innerHTML += "<ul>";
            consoleOutput.innerHTML += "<li>HELP - Display available commands</li>";
            // Add more commands here as needed
            consoleOutput.innerHTML += "</ul>";
            break;
        // Add more cases to handle additional commands
        default:
            consoleOutput.innerHTML += `<li>Command not recognized: ${command}</li>`;
            break;
    }

        // Scroll to the bottom of the console output
        consoleOutput.scrollTop = consoleOutput.scrollHeight;
        
}