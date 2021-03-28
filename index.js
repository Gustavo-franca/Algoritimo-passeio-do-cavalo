import readline from 'readline';
import createChessBoad  from './chessBoard.js';
import createHorse from './Horse.js'

function main(horizontalLetter,verticalNumber){
  try{
      const board = createChessBoad();
      const horse = createHorse(board);
      board.addHorse(horse,parseInt(verticalNumber), horizontalLetter);
      board.walkTheHorse();
  }catch(err){
    console.log(err.message());
  }
   
}


const  args = process.argv.slice(2,
process.argv.length -1
);
const input = args[0];
if(input){
  const [horizontalLetter,vertical,rest] = input.slice('');
  main(horizontalLetter,vertical);
}else{
  const reader = readline.createInterface({
      input: process.stdin,
      output: process.stdout
  });

  reader.question("Qual a Posição Inicial do Cavalo?\n", function(answer) {
      const [horizontalLetter,vertical,rest] = answer.slice('');
      reader.pause();
      main(horizontalLetter,vertical);
  });

}

