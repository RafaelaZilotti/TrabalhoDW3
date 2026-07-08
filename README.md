# PlayShelf API

API REST para gerenciamento de uma biblioteca de jogos digitais utilizando Node.js, Fastify e PostgreSQL.

---

# Sobre o Projeto

A **PlayShelf API** é uma aplicação desenvolvida para gerenciar uma biblioteca de jogos, permitindo o cadastro de usuários, gêneros, jogos, detalhes dos jogos, biblioteca pessoal e empréstimos.

O domínio escolhido foi o de **gerenciamento de uma biblioteca de jogos**, onde usuários podem possuir jogos em sua coleção e realizar empréstimos desses jogos para outros usuários.

A API foi desenvolvida seguindo boas práticas de engenharia de software, utilizando:

* Arquitetura Vertical Slice;
* Programação Orientada a Objetos;
* Repository Pattern;
* Injeção de Dependência;
* Separação de responsabilidades;
* Tratamento centralizado de erros;
* Documentação com Swagger/OpenAPI.

---

# Funcionalidades

A API possui os seguintes módulos:

## Usuários (`users`)

Gerenciamento de usuários:

* Criar usuários;
* Listar usuários;
* Buscar usuário por ID;
* Buscar usuário por email;
* Atualizar usuário;
* Remover usuário.

---

## Gêneros (`genres`)

Gerenciamento dos gêneros dos jogos:

* Criar gêneros;
* Listar gêneros;
* Buscar gênero por ID;
* Atualizar gênero;
* Remover gênero.

---

## Jogos (`games`)

Gerenciamento dos jogos cadastrados:

* Criar jogos;
* Listar jogos;
* Buscar jogos por ID;
* Atualizar jogos;
* Remover jogos.

Os jogos possuem relacionamento com:

* Gêneros;
* Detalhes adicionais.

---

## Biblioteca (`library`)

Gerenciamento da coleção de jogos dos usuários:

* Adicionar jogos à biblioteca;
* Listar jogos da biblioteca;
* Buscar jogos por usuário;
* Atualizar informações da biblioteca;
* Remover jogos.

---

## Empréstimos (`loans`)

Gerenciamento dos empréstimos de jogos:

* Criar empréstimos;
* Listar empréstimos;
* Buscar empréstimos por ID;
* Buscar empréstimos por usuário;
* Atualizar devoluções;
* Remover empréstimos.

---

# Tecnologias Utilizadas

## Backend

* Node.js
* Fastify
* PostgreSQL
* Biblioteca `pg`
* SQL puro
* Swagger/OpenAPI

---

# Arquitetura do Projeto

A aplicação utiliza arquitetura Vertical Slice:

```
src
│
├── config
│   └── swagger.js
│
├── database
│   └── pool.js
│
├── errors
│   └── AppError.js
│
├── features
│
│   ├── users
│   ├── genres
│   ├── games
│   ├── library
│   └── loans
│
├── app.js
├── routes.js
└── server.js
```

Cada módulo possui suas próprias camadas:

```
feature
│
├── repository
├── service
├── controller
├── schemas
└── routes
```

---

# Executando o Projeto Localmente

## 1. Pré-requisitos

Antes de iniciar, certifique-se de possuir instalado:

* Node.js;
* npm;
* PostgreSQL ou uma instância PostgreSQL hospedada (ex: Neon).

---

# 2. Clonar o projeto

Clone o repositório:

```bash
git clone <https://github.com/RafaelaZilotti/TrabalhoDW3>
```

Entre na pasta do projeto:

```bash
cd PlayShelf
```

---

# 3. Instalar dependências

Execute:

```bash
npm install
```

Isso instalará todas as dependências necessárias para executar a API.

---

# 4. Configurar variáveis de ambiente

Crie um arquivo:

```
.env
```

na raiz do projeto.

Adicione as variáveis necessárias:

```env
DATABASE_URL=sua_url_do_postgresql

PORT=3333
```

## Descrição das variáveis:

### DATABASE_URL

URL de conexão do PostgreSQL.

Exemplo:

```env
DATABASE_URL=postgresql://usuario:senha@host:porta/database
```

---

### PORT

Porta onde o servidor será executado.

Exemplo:

```env
PORT=3333
```

Caso não seja informado, a aplicação utilizará a porta padrão configurada no projeto.

---

# 5. Configurar o banco de dados

O projeto possui o arquivo:

```
database.sql
```

Ele contém a estrutura necessária do banco:

* Tabela de usuários;
* Tabela de gêneros;
* Tabela de jogos;
* Tabela de detalhes dos jogos;
* Tabela da biblioteca;
* Tabela de empréstimos.

Execute esse arquivo no PostgreSQL para criar as tabelas:

```bash
psql -U usuario -d banco -f database.sql
```

ou execute o conteúdo utilizando uma ferramenta como:

* pgAdmin;
* DBeaver;
* Console do Neon. (ferramenta utilizada na criação do projeto)

---

# 6. Iniciar a aplicação

Para iniciar em modo desenvolvimento:

```bash
npm run dev
```

A API ficará disponível em:

```
http://localhost:3333
```

---

# 7. Acessar documentação Swagger

Após iniciar o servidor, acesse:

```
http://localhost:3333/docs
```

A documentação Swagger permite:

* Visualizar endpoints;
* Consultar schemas;
* Realizar testes diretamente pela interface.

---

# Endpoints Principais

## Users

```
GET    /users
GET    /users/:id
GET    /users/email/:email
POST   /users
PUT    /users/:id
DELETE /users/:id
```

---

## Genres

```
GET    /genres
GET    /genres/:id
POST   /genres
PUT    /genres/:id
DELETE /genres/:id
```

---

## Games

```
GET    /games
GET    /games/:id
POST   /games
PUT    /games/:id
DELETE /games/:id
```

---

## Library

```
GET    /library
GET    /library/:id
GET    /library/user/:userId
POST   /library
PUT    /library/:id
DELETE /library/:id
```

---

## Loans

```
GET    /loans
GET    /loans/:id
GET    /loans/user/:userId
POST   /loans
PUT    /loans/:id
DELETE /loans/:id
```

---

# Tratamento de Erros

A aplicação possui tratamento centralizado de erros utilizando:

```
src/errors/AppError.js
```

Os Services são responsáveis por lançar erros de negócio:

```javascript
throw new AppError(
    "Mensagem de erro",
    400
);
```

O tratamento das respostas HTTP é realizado globalmente pelo Fastify.

---

# Banco de Dados

O banco utilizado é:

```
PostgreSQL
```

Hospedado através de:

```
Neon
```

A aplicação utiliza:

* SQL puro;
* Biblioteca pg;
* Pool compartilhado;
* Injeção de dependência nos repositories.

---

# Alunas

Daniela Rodler Cordeiro

Rafaela Zilotti da Silva

---