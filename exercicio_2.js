/*Escreva um programa que imprima usando console.log() todos os números de 1 a 100 com duas exceções. Para
números divisíveis por 3, imprima Fizz ao invés do número, e para números divisíveis por 5 (e não 3), imprima
Buzz .
Quando o programa estiver funcionando, modifique-o para imprimir FizzBuzz para números que são divisíveis
ambos por 3 e 5 (e continue imprimindo Fizz e Buzz para números divisíveis por apenas um deles).*/

for (let i = 1; i <=100; i++){
    if (i % 3 === 0 && i % 5 === 0) {
       console.log('FizzBuzz'); 
    }
    else if (i % 3 ===0){
        console.log('Fizz');
    }
     else if (i % 5 ===0){
        console.log('Buzz');
    }else {
        console.log(i);
    }
}
