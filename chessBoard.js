export default function  createChessboard(){
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

function convertNumberInLetter(number){
  let startOfLowerCaseLetterInUTF16 = 96; //next is a
  return String.fromCharCode(number + startOfLowerCaseLetterInUTF16);
}

 function showPositionInChessBoard(horizontal, vertical){
   if(horizontal > horizontalHouses |  vertical > verticalHouses  ){
     console.log("Estas coordenadas estão fora do tabuleiro");
     return;
   }
  console.log(`${convertNumberInLetter(horizontal + 1)}${vertical + 1}: ${tabuleiro[horizontal][vertical]}`);

}
  return {
    value : tabuleiro,
    showPosition : showPositionInChessBoard

  };
}



