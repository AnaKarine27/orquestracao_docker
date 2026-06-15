# Catálogo de Produtos - Docker Compose

## | Sobre o Projeto
Este é um sistema web de **Catálogo de Produtos** desenvolvido para o controle de estoque, criado como atividade prática da disciplina de Configuração de Servidores.

A aplicação permite cadastrar novos produtos (nome, preço, descrição e imagem) e listar os itens disponíveis, utilizando uma arquitetura de microserviços orquestrada com **Docker Compose**. O sistema integra uma API Node.js/Express com um banco de dados PostgreSQL, garantindo a persistência dos dados através de volumes Docker.

## | Tecnologias Utilizadas
* **Backend:** Node.js, Express
* **Banco de Dados:** PostgreSQL
* **Frontend:** HTML, CSS, JavaScript
* **Infraestrutura:** Docker, Docker Compose

## | Pré-requisitos
Antes de começar, você precisará ter as seguintes ferramentas instaladas em sua máquina:
* [Git](https://git-scm.com/)
* [Docker](https://www.docker.com/)
* [Docker Compose](https://docs.docker.com/compose/install/)

## | Como Executar a Aplicação

**1. Clone este repositório:**
```bash
git clone <URL_DO_REPOSITORIO>
```
**2. Acesse a pasta do projeto:**
```bash
cd catalogo-produtos
```
**3. Configure as Variáveis de Ambiente:**

Crie um arquivo ```.env```na raiz do projeto (mesmo local do ```docker-compose.yml```) e adicione as variáveis de conexão com o banco:
```bash
POSTGRES_USER=seu_usuario
POSTGRES_PASSWORD=sua_senha
POSTGRES_DB=nome_do_banco
```
**4. Suba os containers com o Docker Compose:**
```bash
docker-compose up -d --build
```
OBS: O parâmetro ```-d``` roda os containers em segundo plano. O ```--build``` garante que a imagem do Node.js seja construída a partir do ```Dockerfile```. Na primeira execução, o Docker fará o download das imagens do Node e do PostgreSQL, o que pode levar alguns minutos.

**5. Acesse a aplicação:**

Abra o seu navegador e acesse:
```bash
http://localhost:8000
```

## | Prova de Persistência
O projeto utiliza Volumes do Docker para garantir que os dados do banco de dados não sejam perdidos caso o servidor caia. Para testar:

**1. Acesse a aplicação e cadastre alguns produtos.**

**2. No terminal, derrube os containers executando:**
```bash
docker-compose down
```
**3. Suba a aplicação novamente:**
```bash
docker-compose up -d
```
**4. Recarregue a página no navegador. Você verá que todos os produtos cadastrados anteriormente continuam salvos.**

## | Desenvolvedores
Projeto desenvolvido por:

* [Ana Karine](https://github.com/AnaKarine27)
* [Caio Fellipe](https://github.com/CaioFLL5)
* [Thiago Eufrasio](https://github.com/thiagoxburgue)

## 
