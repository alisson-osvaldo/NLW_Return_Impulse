import { routes } from './routes';
import express from 'express';
import cors from 'cors';

const app = express();

// GET  = Buscar informações
// POST = Cadastrar informações
// PUT  = Atualizar a informações de uma entidade
// PATCH = Atualizar uma informação única de uma entidade

app.use(cors());
app.use(express.json()); //Antes de vc processar vá na requisição e veja se tem algum corpo em formato json
app.use(routes);

app.listen(3333, () => {
    console.log('HTTP server running!');
});

