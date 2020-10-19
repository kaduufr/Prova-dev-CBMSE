# Prova  de desenvolvedor Junior CBMSE

Para concorrer a vaga o candidato terá que desenvolver uma aplicação web seguindo as recomendações abaixo.
## Sinta-se a vontade para utilizar a tecnologia que desejar. 

## Instruções da prova
 - O candidato deve fazer um **fork** desse repositório e criar sua estrutura de pastas contendo o projeto e o **schema** do banco de dados.
 - Após o projeto pronto o candidato deve fazer o *commit e push* para o seu repositório **não sendo necessário** solicitar um **pull-request**
 - O limite de entrega da prova é até as 9:30 do dia 19/10/2020.
 - Ao concluir o desafio, enviar um e-mail para francisco.azevedo@cbm.se.gov.br contendo o curriculo.
 - Prototipo como exemplo das telas: https://ninjamock.com/s/33517Gx (Não obrigatório).
 - Utilizar o SQL sugerido no projeto (Não obrigatório).

## Descrição do desafio
 O objetivo do projeto é criar uma especie de agenda, onde o usuário poderá cadastrar informações (e-mail e telefone) de outras pessoas seguindo os requisitos básicos abaixo.
 - RF01 - O usuário deve ser capaz de adicionar pessoas com seus contatos, por exemplo, email, telefone, celular.
 - RF02 - O usuário pode ser capaz de cadastrar mais de um tipo de contato (ex: e-mail, telefone, celular) para a mesma pessoa.
 - RF03 - O usuário pode cadastrar mais de um contato para o mesmo tipo.
 - RF04 - O sistema deve validar se o contato ja existe.
 - RF05 - Se o contato ja existir, exibi-lo.
 - RF06 - O usuário deve ser capaz de editar os contatos quando desejar.
 - RF07 - O usuario deve ser capaz de deletar o contato.
 - RF08 - O usuário pode visualizar todos os contatos cadastrados.
 
## Oque será avaliado?
O desafio será avaliado através dos seguintes critérios.
 - Habilidade em estilização de pagina HTML
 - Programação Orientada a Objetos
 - Código bem comentado
 - Código limpo
 - Cumprimento das funcionalidades

## Documentação
 - O código foi entregue com um arquivo de README claro de como se guiar?
 - O código possui comentários pertinentes?
 - Os commits são pequenos e consistentes?
 - As mensagens de commit são claras?

# Duvidas: jonas.nascimento@cbm.se.gov.br ou abrir uma issue


## Intruções de uso: 

## Como usar



- ### **Pré-requisitos**

  - É **necessário** possuir o **[Node.js](https://nodejs.org/en/)** instalado na máquina
  - Também, é **preciso** ter um gerenciador de pacotes seja o **[NPM](https://www.npmjs.com/)** ou **[Yarn](https://yarnpkg.com/)**.

1. Faça um clone :

```sh
  $ git clone https://github.com/kaduufr/Prova-dev-CBMSE
```

2. Executando a Aplicação:

```sh
  # Inicie a aplicação backend  
  # Acesse a pasta backend
  $ cd backend

  # Instale as dependências
  $ npm install

  ## Crie o banco de dados
  $ npm run knex:migrate
  $ npm run knex:seed

  # Inicie a aplicação web
  $ cd web
  $ npm start


  # Rodando
```