let piece = 'kNIGHT';
piece = piece.toLowerCase();

switch (piece){
    case 'bishop':
        console.log(piece + ' -> ' + 'diagonals.');
        break;
    case 'king':
        console.log(piece + ' -> ' + 'moves exactly one vacant square in any direction.');
        break;
    case 'queen':
        console.log(piece + ' -> ' + 'moves any number of vacant squares in any direction.');
        break;
    case 'knight':   
        console.log(piece + ' -> ' + 'moves on an extended diagonal from one corner of any 2×3 rectangle of squares to the furthest opposite corner.');
        break;
    case 'pawn':
        console.log(piece + ' -> ' + 'moves forward exactly one square, or optionally, two squares when on its starting square.');
        break;
    default:
        console.log(piece + ' is not a chess piece.');
        break;
}