const express = require('express');
const oracle = require('./connection');
const cors = require('cors');

const app = express();
const port = 3000;
let connection;

app.use(cors());

app.get('/arquivos', async (req, res) => {

  connection = await oracle.connectOracle();

  connection.execute(
    `SELECT * FROM Arquivos`,
    [],
    function (err, result) {
      if (err) {
        console.error(err.message);
        return;
      }
      const cleanedRows = result.rows.map(row => {
        return {
          ID: row.ID,
          NOMEARQUIVO: row.NOMEARQUIVO,
          TAMANHOARQUIVO: row.TAMANHOARQUIVO,
          TIPOARQUIVO: row.TIPOARQUIVO,
          DATACRIACAO: row.DATACRIACAO
        };
      });
      res.send(cleanedRows);
    }
  );

  // Fechar a conexão
  await connection.close();
});

// Endpoint para baixar arquivos
app.get('/download/:id', async (req, res) => {
  const fileId = req.params.id;

  connection = await oracle.connectOracle();

  try {

    // Query para obter o conteúdo do arquivo baseado no ID
    const result = await connection.execute(
      `SELECT NomeArquivo, TipoArquivo FROM Arquivos WHERE ID = :id`, {
        id: fileId
      }
    );

    if (result.rows.length > 0) {
      const row = result.rows[0];
      const fileName = row.NOMEARQUIVO; // Nome do arquivo
      const fileType = row.TIPOARQUIVO; // Tipo MIME do arquivo

      // Enviando o conteúdo do arquivo como resposta
      res.send(fileName);
    } else {
      res.status(404).send('Arquivo não encontrado');
    }

    // Fechar a conexão
    await connection.close();
  } catch (err) {
    console.error(err);
    res.status(500).send('Erro ao baixar o arquivo');
  }
});

app.listen(port, () => {
  console.log(`API 1 escutando na porta ${port}`);
});