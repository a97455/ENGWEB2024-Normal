# Ex1

O ex1 implementa uma interface com interação com o mongoDB (a correr na porta 16000), que permite ao utilizador adicionar, remover e atualizar informação na base de dados de Contratos.

Essa interface usa um model e um controller, onde o primeiro establece as regras do User (atributos) e o segundo as possíveis queries que podem ser realizadas de maneira a obter diversas informações, que serão após usadas no router contratos.

# Ex2

Este segundo exercício, implementa uma interface visual, que através de pedidos ao ex1 (usando axios) mostra as diversas informações mediantes as rotas establecidas no enunciado, através de tabelas, cards etc.

# Modo de Execução

Nos dois exercícios, é unicamente necessário a execução dos comandos nas respetivas pastas (ex1 e ex2), ficando cada uma a executar em um terminal diferente: 

~~~
npm i
npm start
~~~