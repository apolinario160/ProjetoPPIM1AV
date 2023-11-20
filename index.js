import express from 'express';

const app = express();

//Faz ai um projeto que fornece uma pagina exibindo o calculo de potencia de um numero
//expoente de 1 a 100

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

function gerarPaginaPotencia(requisicao,resposta){
    try{
    const numero = Number(requisicao.query.numero)
    let conteudoResposta = `
    <!DOCTYPE html>
    <html lang="pt-br">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Potência de 1 a 100 da base${numero} </title>
    </head>
    <body>
        <p>A potencia de 1 a 100 da base${numero}</p>
        <ul>
    `;
    for (let i=0; i<=100; i++){
        const linha = `<li>${numero} elevado a ${i} = ${numero**i}</li>`
        conteudoResposta += linha;
    }
    conteudoResposta += `
                </ul>
            </body>
        </html>
        
    `;
    resposta.end(conteudoResposta);
    } catch(erro){
        resposta.end(`<!DOCTYPE html>
        <html lang="pt-br">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>PPI aula 1</title>
        </head>
        <body>
            <p>Nao foi possivel processar a sua pagina</p>
            <h4>Erro ao tentar gerar resultado</h2>
            <h4> Na barra de endereço digite por exemplo http://localhost:3000/potencia?numero=2</h4>
            <h3>${erro.message}</h3>
        </body>
        </html>`);
    }
}
app.get('/', paginaInicial);
app.get('/potencia', gerarPaginaPotencia);

//() => {} é uma função anoõnima (arrow function ou função de seta)
app.listen(porta, host, function ()  {
    //string literals permite concatenar variáveis com string com maneiras mais amigaveis
    //string litera = ``
    console.log(`Servidor executando em http://${host}:${porta}.`)
});