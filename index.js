import readline from 'readline';
import createChessBoad  from './chessBoard.js';
import createHorse from './Horse.js'

const reader = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


reader.question("Qual a Posição Inicial do Cavalo?\n", function(answer) {

    const [horizontalLetter,vertical,rest] = answer.slice('');
     const horse = createHorse(board);
     const valid = board.addHorse(horse,horizontalLetter,parseInt(vertical));
    if(!valid){
      console.log("Finalizando Aplicação...");
      return;
    }
    reader.close();
});

