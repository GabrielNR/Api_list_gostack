
# Aula 00 - Back-end com NodeJS

Nessa aula foi desenvolvido um back-end simples que recebe requisiçes HTTP através do http://localhost:3333/ e salva os dados em um array do próprio código.

*para rodar esse projeto, instale as libs com o comando **yarn** e rode o projeto com o comando **yarn dev***

As requisições aceitas são:

+ **GET** (/projects) para **listar** todos os projetos salvos.

  + A resposta é dada em uma lista de projetos. Como abaixo:
```JSON
[
  {
    "id": "cc50e992-37bd-417c-8c70-15dc6c670308",
    "title": "Projeto 1",
    "owner": "Gabriel Nascimento 1"
  },
  {
    "id": "67a55f53-ac3d-4eb4-acf7-4dba29c24b07",
    "title": "Projeto 2",
    "owner": "Gabriel Nascimento 2"
  },
  {
    "id": "ed040e28-b4b7-42b2-889e-3f69afee8902",
    "title": "Projeto 3",
    "owner": "Gabriel Nascimento 3"
  }
]
```


+ **POST** (/projects) para **criar** um novo projeto.

  + Deve-se enviar os dados no corpo da requisição. Como abaixo:

```JSON
{
	"title": "Projeto 1",
	"owner": "Gabriel Nascimento"
}
```

+ **PUT** (/projects/valor_do_id) para **editar** um projeto existente.

  + Deve-se enviar os dados a serem editador no corpo da requisição. Como abaixo:

```JSON
{
	"title": "Projeto 1",
	"owner": "Gabriel Nascimento"
}
```


+ **DELETE** (/projects/valor_do_id) para **deletar** um projeto existente.

  + Nessa requisição não há nada no corpo, apenas o ID como parametro na URL.


* Nesse projeto também foi desenvolvido uma Middleware para validar o ID do projeto como UUID quando é feito alguma solicitação com parametro de ID.


# Aula 01 - Front-end com React.JS

Nessa aula foi desenvolvido uma página simples que trabalha junto com o back-end desenvolvido na página anterior.

**Para rodar esse projeto, você vai precisar que o projeto da primeira aula esteja rodando. Instale as libs com o comando **yarn** e rode o projeto com o comando **yarn dev***

Com o projeto rodando, acesse do seu browser http://localhost:8080/

Esse projeto cria um novo item em nossa lista do back-end através do botão "Adicionar Projeto".

# Aula 02 - Mobile com React Native

Nessa aula foi desenvolvido uma aplicativo simples que trabalha junto com o back-end desenvolvido na primeira aula.

**Para rodar esse projeto, você vai precisar que o projeto da primeira aula esteja rodando. Instale as libs com o comando **yarn** e rode o projeto em seu celular ou um emulador.

Ao abrir o aplicativo, ele irá carregar os projetos existentes e ao clicar no botão um novo projeto será criado.
