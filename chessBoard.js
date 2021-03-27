
  const START_OF_LOWER_CASE_LETTER_IN_UTF16 = 96;
  const FINISH_OF_LOWER_CASE_LETTER_IN_UTF16 = 123;


export default function  createChessboard(){
   const verticalHouses = 8;
  const horizontalHouses = 8;
  const board = initBoard();
  const pieces = {

  }
 

  function initBoard(){
    const board = []
    for(let i = 0 ; i < horizontalHouses;i++){
        let aux = [];
        for(let j = 0 ; j < verticalHouses;j++){
            aux.push(0);
        }
        board.push(aux);
      }
    return board;
  }
  function showFullBoard(){
      for(let i = 0 ; i < horizontalHouses;i++){
let row = "|"
        for(let j = 0 ; j < verticalHouses;j++){
         /*  ${convertNumberInLetter(i + 1)}${j + 1}: */
          row += `${board[i][j]}| `
        }
         console.log(row);

      }
      console.log("\n");

  }
 
  function fullyTraveled(){

    const rowWithZero = board.find((row)=>{
      console.log(row.includes(0));
      return row.includes(0);
    })
    return rowWithZero?false: true;
  }
  
  function addHorse(horse,intialHorizontalLetter,initialVertical){
    const horizontal = convertLetterInNumber(intialHorizontalLetter) - 1;
    if(!validPosition(horizontal,initialVertical)){
      console.log("posição inválida");
      return false;
    }
    const vertical = initialVertical -1;
    horse.setStartingPosition(horizontal,vertical);
    board[horizontal][vertical] = 1;
    pieces.horse = horse;
    return true;
  } 
 function showPositionInChessBoard(horizontal, vertical){
 if(!validPosition(horizontal,vertical)){
     console.log("Estas coordenadas estão fora do tabuleiro");
     return;
   }
  console.log(`${convertNumberInLetter(horizontal + 1)}${vertical + 1}: ${board[horizontal][vertical]}`);

}
function validPosition(horizontal,vertical){
  return horizontal < horizontalHouses && vertical < verticalHouses && horizontal >= 0 && vertical >= 0;// base is 0 ,limit is 7
}

  async function walkTheHorse(){
    const moves = [];
    if(!pieces.horse){
      console.log("Nenhum cavalo para Passear");
    }
    function showHorsePosition(){
    const [h,v] = pieces.horse.position();
      showPositionInChessBoard(h,v);
    }
    function loopMoves(level){
      if(level > 1000)throw console.log("limite de tentativas");
      for(let i = 0;i < 8;i++){
        showFullBoard()
         /*  console.log(`level :${level} index : ${i}`); */
        // quando uma casa está cheia ou é fora do tabuleiro passa para o próximo movimento
        if(pieces.horse.move(i)){
           loopMoves(level + 1);
           if(!pieces.horse.undo(i)){
             console.log("UNDO FAIL - move: "+ i); 
             showHorsePosition();

           }
        }
        //caso todas as casas estiverem cheias ou serem inválida o loop termina
       
      
              
       
      }

      //verifico se o tabuleiro está cheio
      // se estiver finalizo o processo
      // se não volto um nivel
      if(fullyTraveled()){
        showFullBoard();
        throw console.log("totalmente percorrido no level" + level );
        
      }else{
        console.log(level);
      }
      
    }
   //para quando o board foi tolmente percorrido.

   loopMoves(0);
   

    // existem 8 movimentos 0 - 7



    //quando não tem mais nenhum movimento a ser feito verifica se o tabuleiro está cheio 
      //se sim finaliza o loop 

      // se não retorna uma jogada e tenta o próximo movimento;
      
     

    
    showHorsePosition();



  }
  return {
    value : board,
    showPosition : showPositionInChessBoard,
    addHorse : addHorse,
    validPosition : validPosition,
    walkTheHorse:walkTheHorse,
  };
}

function convertLetterInNumber(letter){
  const charCode = letter.toLowerCase().charCodeAt(0);
  const charIsInRange = charCode > START_OF_LOWER_CASE_LETTER_IN_UTF16 && charCode < FINISH_OF_LOWER_CASE_LETTER_IN_UTF16;
  if(charIsInRange){
    return charCode - START_OF_LOWER_CASE_LETTER_IN_UTF16;
  }
  console.log("Letra Fora do Range Permitido!")
  return undefined;
}
function convertNumberInLetter(number){
  let startOfLowerCaseLetterInUTF16 = 96; //next is a
  return String.fromCharCode(number + startOfLowerCaseLetterInUTF16);
}
