# Agenda - Back-End

## Sobre

Essa aplicação é uma agenda, onde o usuario poderá cadastrar informações ( e-mail, telefone ) em um contato.

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
  # Acesse a pasta backend
  $ cd backend

  # Instale as dependências
  $ npm install

  ## Crie o banco de dados
  $ npm run knex:migrate
  $ npm run knex:seed

  # Inicie a API
  $ npm start
```

## API - End-Points

 Esse back-end provê varios end-points para seus dados. Sendo eles :

### 1. Rotas do controller Pessoas

  - Listar todas pessoas
  ```sh
      $ http://localhost:3333/pessoas
  ```
  - Listar dados e contatos de uma pessoa a partir do id
  ```sh
      $ http://localhost:3333/:id
  ```
  - Cadastrar nova pessoa
  ```sh
      $ http://localhost:3333/pessoa/cadastro
  ```
  - Atualizar dados de uma pessoa a partir do id
  ```sh
      $ http://localhost:3333/:id/editar
  ```
  - Excluir uma pessoa e todos os seus contatos
  ```sh
      $ http://localhost:3333/pessoa/:id
  ```

### 2. Rotas do controller Pessoas

 - Cadastrar novo contato
  ```sh
      $ http://localhost:3333/:id/contatos/adicionar
  ```
 - Atualizar um contato, passando o ID da pessoa e do contato
  ```sh
      $ http://localhost:3333/:id/contato/editar/:contact_id
  ```
 - Remover um contato, passando o ID da pessoa e do contato
  ```sh
      $ http://localhost:3333/:id/contato/:contact_id
  ```

### **Informações**

- O banco de dados utilizado na aplicação é o SQLite3.