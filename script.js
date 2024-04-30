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
            consoleOutput.innerHTML += "<p>✝✝✝✝✝✝✝✝✝✝✝✝✝✝✝✝✝✝✝✝✝✝✝✝✝✝✝✝✝✝✝✝✝✝✝✝✝✝✝✝✝✝✝✝</p>";
            consoleOutput.innerHTML += "<p>Available commands:</p>";
            consoleOutput.innerHTML += "<ul>";
            consoleOutput.innerHTML += "<li>DIAGNOSTICS</li>";
            consoleOutput.innerHTML += "<li>FLIGHT PLAN</li>";
            consoleOutput.innerHTML += "<li>CONTROLS</li>";
            consoleOutput.innerHTML += "<li>COMMS</li>";
            break;
        case 'DIAGNOSTICS':
            consoleOutput.innerHTML += "<p>✝✝✝✝✝✝✝✝✝✝✝✝✝✝✝✝✝✝✝✝✝✝✝✝✝✝✝✝✝✝✝✝✝✝✝✝✝✝✝✝✝✝✝✝</p>";
            consoleOutput.innerHTML += "<p>ALL SYSTEMS NOMINAL</p>";
            consoleOutput.innerHTML += "<p>AIR FILTRATION SYSTEM REPLACED (10) DAYS AGO...(255 DAYS UNTIL REPLACEMENT NEEDED)</p>";
            consoleOutput.innerHTML += "<p>ENGINE SHUNTING WITHIN SPECIFIED PARAMETERS</p>";
            consoleOutput.innerHTML += "<p>LIFE SUPPORT OPERATING NOMINALLY</p>";
            break;
        case 'FLIGHT PLAN':
            consoleOutput.innerHTML += "<p>✝✝✝✝✝✝✝✝✝✝✝✝✝✝✝✝✝✝✝✝✝✝✝✝✝✝✝✝✝✝✝✝✝✝✝✝✝✝✝✝✝✝✝✝</p>";
            consoleOutput.innerHTML += "<p>OURIQUE ESTATES NW DEP. DECLINATION 68 IFR CLEARANCE GRANTED STEEP ASCENT AT 5500’ PREPARE FOR 7000’ AT 3 MINUTES. ABORT WAYPOINT “KLAUS” RIGHT DOWNWIND ARRIVAL. CONTACT OURIQUE ORBITAL DEPARTURES AT 121.58</p>";
            consoleOutput.innerHTML += "<p>OURIQUE ESTATES OUTBOUND WAYPOINT “HAZEL” LEFT DECLINATION 32 AT 11000’</p>";
            consoleOutput.innerHTML += "<p>ORBIT PAN DECLINATION 22 HOUR 4 WAYPOINT “LUCAS” AT 70000’</p>";
            consoleOutput.innerHTML += "<p>CONTACT ASTERIA PRIME SUBLIGHT DEPARTURES AT 789.5</p>";
            consoleOutput.innerHTML += "<p>THRUSTER ACCELERATION MAX 79 MINUTES</p>";
            consoleOutput.innerHTML += "<p>EST SUBLIGHT TRAVEL TIME TO DESTINATION 303D 13H 43M 2S</p>";
            consoleOutput.innerHTML += "<p>NULL ZONE SECURITY CLEARANCE CODE: ckc8quzQ!@^K!OFV£dr5c7v9^?QilYiqm7528pL.5</p>";
            consoleOutput.innerHTML += "<p>YPSILON BELT DECLINATION ASCENT -75 HOUR 11</p>";
            consoleOutput.innerHTML += "<p>LEFT 32 DEGREE WAYPOINT “YPSILON-MABEL”</p>";
            consoleOutput.innerHTML += "<p>RIGHT 45 DEGREE WAYPOINT “YPSILON-DOC”</p>";
            consoleOutput.innerHTML += "<p>LANDING SEQUENCE CODE: E9873D79C6D87DC0FB6A5778633389453213303DA61F20BD67FC233AA33262</p>";
            consoleOutput.innerHTML += "<p>AUTO LANDING SEQUENCE KEYLOCK AND VFR REQUIRED. VOID TRAFFIC CONTROL SERVICE UNAVAILABLE AT DESTINATION</p>";
            consoleOutput.innerHTML += "<p>ARRIVE DOCKING BAY 2</p>";
            break;
        case 'CONTROLS':
            consoleOutput.innerHTML += "<p>✝✝✝✝✝✝✝✝✝✝✝✝✝✝✝✝✝✝✝✝✝✝✝✝✝✝✝✝✝✝✝✝✝✝✝✝✝✝✝✝✝✝✝✝</p>";
            consoleOutput.innerHTML += "<p>[ACCESS DENIED. ADMIN REQUIRED]</p>";
            break;
        case 'COMMS':
            consoleOutput.innerHTML += "<p>✝✝✝✝✝✝✝✝✝✝✝✝✝✝✝✝✝✝✝✝✝✝✝✝✝✝✝✝✝✝✝✝✝✝✝✝✝✝✝✝✝✝✝✝</p>";
            consoleOutput.innerHTML += "<p>[NO SIGNALS WITHIN RANGE]</p>";
            break;
        // Add more cases to handle additional commands
        default:
            consoleOutput.innerHTML += "<p>✝✝✝✝✝✝✝✝✝✝✝✝✝✝✝✝✝✝✝✝✝✝✝✝✝✝✝✝✝✝✝✝✝✝✝✝✝✝✝✝✝✝✝✝</p>";
            consoleOutput.innerHTML += `<p>Command not recognized: ${command}<p>`
            break;
    }

        // Scroll to the bottom of the console output
        consoleOutput.scrollTop = consoleOutput.scrollHeight;
        
}