import express from 'express';

const app = express();

const host = '0.0.0.0'; // ip representa todas a interfaces da placa de rede do seu computador.
const porta = 3000; // identifica uma aplicação dentre inumeras que podem estar sendo exercutado no seu computador.


//requisição e resposta são parametro que o express automaticamente 
function paginaInicial(requisicao, resposta){
    resposta.send(`<!DOCTYPE html>
    <html lang="pt-br">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>PPI aula 1</title>
    </head>
    <body>
        <p>PPI aula 1 ADS.</p>
    </body>
    </html>`) ;
    resposta.end();
}

app.get('/', paginaInicial);

//() => {} é uma função anoõnima (arrow function ou função de seta)
app.listen(porta, host, function ()  {
    //string literals permite concatenar variáveis com string com maneiras mais amigaveis
    //string litera = ``
    console.log(`Servidor executando em http://${host}:${porta}.`)
});