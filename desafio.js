// 1) Observe o trecho de código abaixo:

// int INDICE = 13, SOMA = 0, K = 0;

// enquanto K < INDICE faça

// {

//     K = K + 1;

//     SOMA = SOMA + K;

// }

// imprimir(SOMA);

function calcularSoma(INDICE) {
    if (INDICE === 1) {
        return 1;
    } else {
        return INDICE + calcularSoma(INDICE - 1);
    }
}

const INDICE = 13;
const soma = calcularSoma(INDICE);

console.log(soma); //resultado(91)

// Ao final do processamento, qual será o valor da variável SOMA ? //resultado(91)

//     2) Dado a sequência de Fibonacci, onde se inicia por 0 e 1 e o próximo valor sempre será a soma dos 2 valores anteriores(exemplo: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34...), escreva um programa na linguagem que desejar onde, informado um número, ele calcule a sequência de Fibonacci e retorne uma mensagem avisando se o número informado pertence ou não a sequência.

function pertenceSequenciaFibonacci(numero) {
    let a = 0;
    let b = 1;

    while (a <= numero) {
        if (a === numero) {
            return true;
        }
        let temp = a + b;
        a = b;
        b = temp;
    }
    return false;
}

function main(numero) {
    if (pertenceSequenciaFibonacci(numero)) {
        console.log(`${numero} pertence à sequência de Fibonacci.`);
    } else {
        console.log(`${numero} não pertence à sequência de Fibonacci.`);
    }
}

const numeroInformado = 89;
main(numeroInformado);

//         IMPORTANTE:

// Esse número pode ser informado através de qualquer entrada de sua preferência ou pode ser previamente definido no código;



// 3) Descubra a lógica e complete o próximo elemento:



// a) 1, 3, 5, 7,                      _9_

// b) 2, 4, 8, 16, 32, 64,             _128_

// c) 0, 1, 4, 9, 16, 25, 36,          _49_

// d) 4, 16, 36, 64,                   _100_

// e) 1, 1, 2, 3, 5, 8,                _13_

// f) 2, 10, 12, 16, 17, 18, 19,       _20_



// 4) Você está em uma sala com três interruptores, cada um conectado a uma lâmpada em uma sala diferente.Você não pode ver as lâmpadas da sala em que está, mas pode ligar e desligar os interruptores quantas vezes quiser.Seu objetivo é descobrir qual interruptor controla qual lâmpada.
//primeiro ligar um dos interruptores e esperar alguns minutos.
//Depois, desligar esse interruptor e ligar outro que estava desligado.

// Como você faria para descobrir, usando apenas duas idas até uma das salas das lâmpadas, qual interruptor controla cada lâmpada ?


//Entrar na sala onde estão as lâmpadas e verificar tipo:
//Se a lâmpada está acesa, o interruptor que liguei controla essa lâmpada.
//Se a lâmpada está apagada, mas quente, o interruptor que desliguei controla essa lâmpada.
//Se a lâmpada estiver apagada e fria, o interruptor que ficou controla a lâmpada.




//     5) Escreva um programa que inverta os caracteres de um string.


//         IMPORTANTE:

// a) Essa string pode ser informada através de qualquer entrada de sua preferência ou pode ser previamente definida no código;

// b) Evite usar funções prontas, como, por exemplo, reverse;

function inverterString(str) {
    let invertida = '';
    for (let i = 0; i < str.length; i++) {
        invertida = str[i] + invertida;
    }
    return invertida;
}

const stringOriginal = "Gv do grau!";
const stringInvertida = inverterString(stringOriginal);
console.log("String original: " + stringOriginal);
console.log("String invertida: " + stringInvertida);