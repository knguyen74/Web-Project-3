var tile = [1, 2, 3, 4];

function getTile(i) {
    var tileNumber = tile.indexOf(i);
    
    // This is for the tile that is clicked.
    // Up, Right, Down, Left
    var move = [0, 0, 0, 0];
    switch (tileNumber) {
        case 6:
        case 7:
        case 10:
        case 11:
            // Up, Right, Down, Left
            move[0]++;
            move[1]++;
            move[2]++;
            move[3]++;
            break;
        case 5:
        case 9:
            // Up, Right, Down
            move[0]++;
            move[1]++;
            move[2]++;
            break;
        case 1:
            // Right, Down
            move[1]++;
            move[2]++;
            break;
        case 4:
            // Left, Down
            move[2]++;
            move[3]++;
            break;
        case 13:
            // Up, Right
            move[0]++;
            move[1]++;
            break;
        case 16:
            // Up, Left
            move[0]++;
            move[3]++;
            break;
        case 2:
        case 3:
            // Right, Down, Left
            move[1]++;
            move[2]++;
            move[3]++;
            break;
        case 14:
        case 15:
            // Up, Right, Left
            move[0]++;
            move[1]++;
            move[3]++;
            break;
        case 8:
        case 12:
            // Up, Down, Left
            move[0]++;
            move[2]++;
            move[3]++;
            break;
    }
    return move;
}

function checkMoves(){
    
}