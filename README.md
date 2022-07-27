<table align="center"><tr><td align="center" width="9999">
<a href="http://nestjs.com/" target="blank"><img src="https://github.com/AfonsoMachado/next-crud/blob/main/public/nextjs-logotype-light.png" width="150" alt="Nest Logo" /></a>

<h2>CRUD com Next.js</h2>

<p align="center">
  <a href="#descrição-do-projeto">Descrição do Projeto</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#computer-tecnologias">Tecnologias</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#bookmark-variáveis-de-ambiente">Variáveis de Ambiente</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#fire-executando-o-projeto">Executando o Projeto</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
</p>

</td></tr>
</table>

## Descrição do Projeto

Este projeto é a implementação de um CRUD de clientes. Foi completamente construído usando o framework [Next.js](https://nextjs.org/) e seus módulos para auxílio no desenvolvimento, além de um back-end simples usando [Firebase](https://firebase.google.com/).

## :computer: Tecnologias

Tecnologias utilizadas para o desenvolvimento:
- [Tailwind CSS](https://tailwindcss.com/)
- [Firebase](https://firebase.google.com/)
- [TypeScript](https://www.typescriptlang.org/)

## :bookmark: Variáveis de ambiente 

As variáveis de ambiente utilizadas no projeto estão especificadas no arquivo *.env.example*, para usá-las é nescessário realizar uma cópia desse arquivo, preencher cada variável e renomear o mesmo para *.env.local*. Quaisquer alterações devem ser feitas nesse arquivo antes de executar o código:

**Variáveis de ambiente presentes no .env do projeto**

```bash
# CONFIGURAÇÕES DO FIREBASE
NEXT_PUBLIC_FIREBASE_API_KEY=
NEXT_PUBLIC_FIREBASE_AUTH-DOMAIN=
NEXT_PUBLIC_FIREBASE_PROJECT_ID=
```

## :fire: Executando o projeto

### Requisitos Necessários

- [Node.js](https://nodejs.org/en/) (Foi utilizada a versão 16.16.0 durante o desenvolvimento)
- [npm](https://www.npmjs.com/) ou [Yarn](https://classic.yarnpkg.com/)

**Instalação e execução**

```bash
# Instale todas as dependências necessárias:
$ npm install

# Para iniciar em modo desenvolvimento:
$ npm run dev
```

#### Iniciando em modo desenvolvimento

```bash
# Para iniciar em modo desenvolvimento:
$ npm run dev
```

#### Iniciando em modo produção

```bash
# Para realizar o build da aplicação:
$ npm run build

# Para iniciar em modo produção:
$ npm start
```

#### Executando em http://localhost:3000/
---

<p align="center">Feito com 💜 por <strong><a href="https://www.linkedin.com/in/AfonsoMachado/">Afonso Machado</a> 🥰 </strong> </p>
