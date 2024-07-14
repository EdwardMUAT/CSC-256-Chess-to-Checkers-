// Create a 2D array to manage the layout of the pieces on the checkers board
var arrPieces = [
    [null, 'w', null, 'w', null, 'w', null, 'w'],
    ['w', null, 'w', null, 'w', null, 'w', null],
    [null, 'w', null, 'w', null, 'w', null, 'w'],
    [null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null],
    ['b', null, 'b', null, 'b', null, 'b', null],
    [null, 'b', null, 'b', null, 'b', null, 'b'],
    ['b', null, 'b', null, 'b', null, 'b', null]
];

// Set up the nickname/shortcut to the div where the checkers board should go
var checkersBoard = document.getElementById("divCheckers");

// This function will create a checkers board
function createCheckersBoard(checkersBoard) {
    // A typical checkers board has 8 rows and 8 columns
    // We will build those with nested loops
    for (var i = 0; i < 8; i++) {
        // Loop to build the columns
        for (var j = 0; j < 8; j++) {
            // Build the checkers squares
            // Create a new div
            var checkersSquare = document.createElement("div");

            // Assign a CSS class to each square
            checkersSquare.className = "checkersSquare";
            // Add an id, so we know where to move the pieces to and from
            checkersSquare.setAttribute("id", "div" + i + j);

            // Check to see if this is a "black" square
            if ((i + j) % 2 == 0) {
                // this will add a css class that changes the background color
                checkersSquare.classList.add("grey");
                // Add an event listener for the click on the square event, then call the movePiece function
                checkersSquare.addEventListener("click", movePiece);
            }

            // Add the checkers square to the checkers board div
            checkersBoard.appendChild(checkersSquare);

            // If the corresponding element in the array is not null, add a checkers piece to the square
            if (arrPieces[i][j]) {
                // Pass in 3 arguments - piece#, the css class to set the correct piece color, the div where the piece should be added
                createPiece("piece" + i + j, "checkerPiece-" + arrPieces[i][j], checkersSquare);
            }
        }
    }
}

// Function to create the checkers piece
function createPiece(id, pieceClass, theSquare) {
    // Create a new div
    var newPiece = document.createElement("div");
    // Set the id, so we can know what square/piece we are working with later
    newPiece.setAttribute("id", id);
    // Apply the standard checker piece class to the piece
    newPiece.classList.add("checkerPiece");
    // Use the value passed in to create a white or black piece
    newPiece.classList.add(pieceClass);
    // Add an onclick event handler to handle when the piece is clicked
    newPiece.addEventListener("click", savePieceId);
    // Add our new piece to the square
    theSquare.appendChild(newPiece);
}

// Function to handle the moving of the piece
function movePiece(event) {
    console.log("movePiece function called");
}

// Function to save the piece id in our secret span
function savePieceId(event) {
    console.log("savePieceId function called");
}

// Call the function to create the checkers board
createCheckersBoard(checkersBoard);
