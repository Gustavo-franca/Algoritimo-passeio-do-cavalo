export default function  createHorse(b){
  const board = b;
  let horizontal = -1;
  let vertical = -1;
  let initialHorizontal = -1;
  let initialVertical = -1;
  const moves = [
      [1,2],
      [2,1],
      [2,-1],
      [1,-2],
      [-1,-2],
      [-2,-1],
      [-2,1],
      [-1,2],
    ];

  function resetPosition(){
    horizontal = initialHorizontal;
    vertical = initialVertical;
  }
  function setHorseStartingPosition(h,v){
    if(board.validPosition(h,v)){
      initialHorizontal = h;
      initialVertical = v;
      horizontal = h;
      vertical = v;
      return true;
    }
    return false;
  }
  function undo(lastMove){

    if(lastMove < 0 || lastMove >= moves.lenght)return false;
    let operator = 4;
    if(lastMove > 3) operator = -4;
    const [h,v] = moves[lastMove + operator];

  if(board.validPosition(horizontal + h, vertical + v)){
    horizontal += h;
    vertical += v;
    board.value[horizontal][vertical] = 0;
    return true;
  }
  return false;

  }

  function move(moveNumber = 0){
    if(horizontal < 0 || vertical < 0 )false;
   
    if(moveNumber < 0 || moveNumber >= moves.lenght ){
       return false
      };

  const [h,v] = moves[moveNumber];

  if(board.validPosition(horizontal + h, vertical + v)){
 
    if(board.value[horizontal + h][vertical + v] == 1){
      return false;
    }
    horizontal += h;
    vertical += v;
    board.value[horizontal][vertical] = 1;
    return true;
  }
  return false;

  
  }

  function position(){
    return [horizontal,vertical];
  }
  function movesOfRide(){
    const movesOfRide = [];
    let traveled = false;
     function loopMoves(level){
      if(level > 4000)throw console.log("limite de tentativas");
      for(let i = 0;i < 8;i++){
        // quando uma casa está cheia ou é fora do tabuleiro passa para o próximo movimento
        if(move(i)){
            movesOfRide.push(position());
           loopMoves(level + 1);
           if(traveled)return;
           if(!undo(i)){
             console.log("UNDO FAIL - move: "+ i); 
             showHorsePosition();

           }
            movesOfRide.pop();
        }   
      }
      //verifico se o tabuleiro está cheio
      // se estiver finalizo o processo
      // se não volta um nivel
      if(board.fullyTraveled()){
        traveled = true;
      }
      
    }
   //para quando o board foi tolmente percorrido.
   loopMoves(0);
   return movesOfRide;
  }

  return {
    setStartingPosition : setHorseStartingPosition,
    position,
    move,
    undo,
    movesOfRide,
    resetPosition
  }

}