const express = require("express");
const { Pool } = require("pg");
const path = require("path");

const app = express();
const port = 3000;

app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));

const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  port: 5432,
});

const initDb = async () => {
  let conectou = false;
  while (!conectou) {
    try {
      await pool.query("SELECT NOW();");

      await pool.query(`
        CREATE TABLE IF NOT EXISTS produtos (
          id SERIAL PRIMARY KEY,
          nome VARCHAR(100) NOT NULL,
          preco NUMERIC(10, 2) NOT NULL,
          descricao TEXT,
          imagem_url TEXT
        );
      `);
      console.log('Conectado ao banco! Tabela "produtos" verificada/criada.');
      conectou = true;
    } catch (err) {
      console.error("Banco ainda não está pronto. Tentando novamente em 3 segundos...");
      await new Promise((resolve) => setTimeout(resolve, 3000));
    }
  }
};

initDb();

app.listen(port, () => console.log(`Servidor rodando na porta ${port}`));