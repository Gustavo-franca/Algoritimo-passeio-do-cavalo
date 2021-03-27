export default function  createHorse(b){
  const board = b;
  let horizontal = -1;
  let vertical = -1;
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
  function setHorseStartingPosition(h,v){
    if(board.validPosition(h,v)){
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

  return {
    setStartingPosition : setHorseStartingPosition,
    position,
    move,
    undo,
  }

}