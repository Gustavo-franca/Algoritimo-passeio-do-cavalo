import readline from 'readline';
import createChessBoad  from './chessBoard.js';
import createHorse from './Horse.js'

const board = createChessBoad();
const reader = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

reader.question("Qual a Posição Inicial do Cavalo?\n", function(answer) {

    const [horizontalLetter,vertical,rest] = answer.slice('');
    reader.pause();
     const horse = createHorse(board);
     const valid = board.addHorse(horse,parseInt(vertical),horizontalLetter);
    if(!valid){
      console.log("Finalizando Aplicação...");
      return;
    }
    board.walkTheHorse();
 
});
