export default function createChessboard(){
  const tabuleiro = [];
  const verticalHouses = 8;
  const horizontalHouses = 8;
  for(let i = 0 ; i < horizontalHouses;i++){
    let aux = [];
    for(let j = 0 ; j < horizontalHouses;j++){
        aux.push(0);
    }
    tabuleiro.push(aux);
  }
  return tabuleiro;
}

export function showPositionInChessBoard(chessBoard,horizontal, vertical){
  console.log(`a1: ${}`)

}


