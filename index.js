import express from "express";

const host = "0.0.0.0";
const porta = 1212;
var listaUsuarios = [];
const server = express();

server.use(express.urlencoded({ extended: true })); 

server.get("/", (req, res) => {
    res.send(`
        <!DOCTYPE html>
        <html>
            <head>
            <meta charset="UTF-8"/> 
            <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous"/>
            <title>PPI 2</title>
            </head>
            <body>
            <nav class="navbar navbar-expand-lg bg-body-tertiary">
    <div class="container-fluid">
        <a class="navbar-brand" href="#">CBF</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
        </button> 
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="/">Home</a>
            </li>
            <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Cadastros
            </a>
            <ul class="dropdown-menu">
                <li><a class="dropdown-item" href="/cadastroUsuario">Jogadores</a></li>
            </ul>
            </li>
            <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="/logout">Sair</a>
            </li>
        </ul>
        </div>
    </div>
    </nav>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" crossorigin="anonymous"></script>

            </body>
            </html>
        `)
});

server.get("/cadastroUsuario", (req, res) => {
    res.send(`
        <!DOCTYPE html>
        <html>
            <head>
                <meta charset="UTF-8"/>
                <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous"/>
                <title>Cadastro de Jogador</title>
            </head>
            <body>
                <div class="container">
                    <h1 class="text-center border m-3 p-3 bg-light">Cadastro de Jogador</h1>
                    <form method="POST" action="/adicionarUsuario" class="row g-3 needs-validation m-3 p-3 bg-light" novalidate>
              <div class="col-md-4">
                <label for="nome" class="form-label">Nome</label>
                <input type="text" placeholder="ex: Yuri" class="form-control" id="nome" name="nome">
              </div>

              <div class="col-md-4">
                <label for="sobrenome" class="form-label">Sobrenome</label>
                <input type="text" class="form-control" placeholder="ex: Alberto" id="sobrenome" name="sobrenome">
              </div>

              <div class="col-md-4">
                <label for="nomeJ" class="form-label" placeholder="ex: Gabigol, Ronaldinho" >Apelido</label>
                <div class="input-group has-validation">
                  <span class="input-group-text" id="inputGroupPrepend">@</span>
                  <input type="text" class="form-control" id="nomeJ" name="nomeJ" aria-describedby="inputGroupPrepend">
                </div>
              </div>

              <div class="col-md-6">
                <label for="time" class="form-label">Time</label>
                <input type="text" placeholder="ex: Corinthians" class="form-control" id="time" name="time">
              </div>
              <div class="col-md-3">
                <label for="nt" class="form-label">Naturalidade</label>
                <select class="form-select" id="nt" name="nt">
                  <option selected disabled value="">Escolha uma naturalidade</option>
                  <option value="AF">Africano</option>
                  <option value="AS">Asiático</option>
                  <option value="NAM">Norte Americano</option>
                  <option value="SA" selected>Sul Americano</option>
                  <option value="OC">Oceania</option>
                  <option value="AN">Antártico</option>
                  <option value="AM">Americano</option>
                  <option value="CA">Canadense</option>
                  <option value="LA">Latino</option>
                  <option value="ME">Médio Oriente</option>
                  <option value="EU">Europeu</option>
                  <option value="NA">Nativo</option>
                  <option value="OU">Outro</option>
                </select>
              </div>

              <div class="col-md-3">
                <label for="numb" class="form-label">Número na camisa</label>
                <input type="text" placeholder="ex: 7" class="form-control" id="numb" name="numb">
              </div>

              <div class="col-12">
                <button type="submit" class="btn btn-primary">Cadastrar</button>
                <a href="/" class="btn btn-secondary">Voltar</a>
              </div>
            </form>

                </div>
                
            
            <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" crossorigin="anonymous"></script>
            </body>
        </html>    
    `)
})


server.post('/adicionarUsuario', (req, res) => {
const nome = req.body.nome;
const sobrenome = req.body.sobrenome;
const nomeJ = req.body.nomeJ;
const time = req.body.time;
const nt = req.body.nt;
const numb = req.body.numb;

listaUsuarios.push({nome, sobrenome, nomeJ, time, nt, numb}); 
res.redirect('/listaUsuarios');
});

server.get('/listaUsuarios', (req, res) => {
    let conteudo = `
    <!DOCTYPE html>
    <html>
        <head>
            <meta charset="UTF-8"/>
            <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous"/>
            <title>Jogadores Cadastrados</title>
        </head>
        <body>
            <div class="container">
                <h1 class="text-center border m-3 p-3 bg-light">Lista de Jogadores</h1>
                <table class="table table-striped table-hover">
                    <thead>
                        <tr>
                            <th>Nome</th>
                            <th>Sobrenome</th>
                            <th>Nome de Jogador</th>
                            <th>Time</th>
                            <th>Naturalidade</th>
                            <th>Número na Camisa</th>
                        </tr>
                    </thead>
                    <tbody>`;
                   for(let i = 0; i < listaUsuarios.length; i++) { 
                    conteudo += `
                        <tr>
                            <td>${listaUsuarios[i].nome}</td>
                            <td>${listaUsuarios[i].sobrenome}</td>
                            <td>${listaUsuarios[i].nomeJ}</td>
                            <td>${listaUsuarios[i].time}</td>
                            <td>${listaUsuarios[i].nt}</td>
                            <td>${listaUsuarios[i].numb}</td>
                        </tr>`;
                   }
    conteudo += `</tbody>
                </table>
            </div>
            <a class="btn btn-secondary" href="/cadastroUsuario">Voltar</a>
            </body>
            <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" crossorigin="anonymous"></script>
            </html>
    `;
            res.send(conteudo);
                  });

server.listen(porta, host, () => {
    console.log(`Servidor rodando em http://${host}:${porta}`);
})