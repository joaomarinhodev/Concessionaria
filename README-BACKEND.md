# Concessionaria - Frontend + Spring Boot

## Requisitos
- Java 21+ (você possui Java 24 instalado)
- Maven
- PostgreSQL
- Node.js/npm

## Banco
Crie no PostgreSQL:
CREATE DATABASE concessionaria;

Se a senha do PostgreSQL não for `postgres`, altere `backend/src/main/resources/application.properties`.

## Backend
Abra um terminal na pasta `backend` e execute:
`mvn spring-boot:run`

O backend ficará em http://localhost:8080

## Frontend
Na pasta principal execute:
`npm install`
`npm start`

Abra http://localhost:4200

O cadastro envia os dados para POST http://localhost:8080/api/clientes.
