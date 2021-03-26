import readline from 'readline';
import createChessBoad  from './chessBoard.js';

const board = createChessBoad();
const reader = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


reader.question("Qual a Posição Inicial do Cavalo?\n", async function(answer) {
    const [horizontalLetter,vertical,rest] = answer.slice('');
     const valid =  await board.setHorseStartingPosition(horizontalLetter,parseInt(vertical));
    if(!valid){
      console.log("Finalizando Aplicação...");
      return;
    }

    board.walkTheHorse();
    reader.close();
});
