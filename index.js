import readline from 'readline';

const reader = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


reader.question("Qual a Posição Inicial do Cavalo?\n", function(answer) {
      

    reader.close();
});

