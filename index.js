import express from "express";

const host = "0.0.0.0";
const porta = 3000;

const server = express();


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
        <a class="navbar-brand" href="#">MENU</a>
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
                <li><a class="dropdown-item" href="/cadastroUsuario">Usuários</a></li>
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
                <title>Cadastro de Usuário</title>
            </head>
            <body>
                <div class="container">
                    <h1 class="text-center border m-3 p-3 bg-light">Cadastro de Usuário</h1>
                    <form method="POST" action="/adicionarUsuario" class="row g-3 needs-validation m-3 p-3 bg-light" novalidate>
                    <div class="col-md-4">
                      <label for="nome" class="form-label">Nome</label>
                      <input type="text" class="form-control" id="nome" name="nome" value="Mark">
                      <div class="valid-feedback">
                        Looks good!
                      </div>
                    </div>
                    <div class="col-md-4">
                      <label for="sobrenome" class="form-label">Sobrenome</label>
                      <input type="text" class="form-control" id="sobrenome" name="sobrenome" value="Otto">
                      <div class="valid-feedback">
                        Looks good!
                      </div>
                    </div>
                    <div class="col-md-4">
                      <label for="username" class="form-label">Username</label>
                      <div class="input-group has-validation">
                        <span class="input-group-text" id="inputGroupPrepend">@</span>
                        <input type="text" class="form-control" id="username" name="username" aria-describedby="inputGroupPrepend">
                        <div class="invalid-feedback">
                          Please choose a username.
                        </div>
                      </div>
                    </div>
                    <div class="col-md-6">
                      <label for="cidade" class="form-label">Cidade</label>
                      <input type="text" class="form-control" id="cidade" name="cidade">
                      <div class="invalid-feedback">
                        Please provide a valid city.
                      </div>
                    </div>
                    <div class="col-md-3">
                      <label for="uf" class="form-label">Estado</label>
                      <select class="form-select" id="uf" name="uf">
                        <option selected disabled value="">Escolha um estado</option>
                        <option value="AC">Acre</option>
                        <option value="AL">Alagoas</option>
                        <option value="AP">Amapá</option>
                        <option value="AM">Amazonas</option>
                        <option value="BA">Bahia</option>
                        <option value="CE">Ceará</option>
                        <option value="DF">Distrito Federal</option>
                        <option value="ES">Espírito Santo</option>
                        <option value="GO">Goiás</option>
                        <option value="MA">Maranhão</option>
                        <option value="MT">Mato Grosso</option>
                        <option value="MS">Mato Grosso do Sul</option>
                        <option value="MG">Minas Gerais</option>
                        <option value="PA">Pará</option>
                        <option value="PB">Paraíba</option>
                        <option value="PR">Paraná</option>
                        </select>
                    <div class="col-md-3">
                      <label for="cep" class="form-label">CEP</label>
                      <input type="text" class="form-control" id="cep" name="cep">
                      <div class="invalid-feedback">
                        Please provide a valid zip.
                      </div>
                    </div>
                  
                    <div class="col-12">
                      <button type="submit" class="btn btn-primary">Cadastrar</button>
                      <a type="reset" class="btn btn-secondary">Voltar</a>
                    </div>
                  </form>
                </div>
                
            
            <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" crossorigin="anonymous"></script>
            </body>
        </html>    
    `)
})


server.post('/adicionarUsuario', (req, res) => {

});

server.listen(porta, host, () => {
    console.log(`Servidor rodando em http://${host}:${porta}`);
})