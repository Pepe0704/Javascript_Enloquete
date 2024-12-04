/*Escreva um programa que cria uma string que representa uma grade 8x8, usando novas linhas para separar os
caracteres. Acada posição da grade existe um espaço ou um caractere "#". Esses caracteres formam um
tabuleiro de xadrez.
Passando esta string para o console.log deve mostrar algo como isto:
# # # #
# # # #
# # # #
# # # #
# # # #
# # # #
# # # #
# # # #
Quando você tiver o programa que gere este padrão, defina a variável size = 8 e altere programa para que ele
funcione para qualquer size , a saída da grade de largura e altura.
*/




let size = 8;
let board = " ";

for(let y = 0; y < size; y++) {
for (let x = 0; x < size; x++){
    if ((x + y ) % 2 === 0 ){
        board += " "; 
    } else {
          board += "#"; 
    }
}
board += "\n";
}
console.log(board);