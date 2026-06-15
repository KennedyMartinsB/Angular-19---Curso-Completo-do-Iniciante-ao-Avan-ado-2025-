# CRUD Angular Material

Aplicação de cadastro e consulta de clientes desenvolvida com **Angular 16** e **Angular Material**. Os dados são armazenados no `localStorage` do navegador — não é necessário backend.

## Pré-requisitos

- [Node.js](https://nodejs.org/) (versão 16 ou superior recomendada)
- npm (instalado junto com o Node.js)

## Como rodar o projeto

### 1. Clonar ou baixar o repositório

```bash
cd crud-angular-material
```

### 2. Instalar as dependências

```bash
npm install
```

### 3. Iniciar o servidor de desenvolvimento

```bash
npm start
```

Ou, se preferir usar o Angular CLI diretamente:

```bash
ng serve
```

### 4. Acessar no navegador

Abra [http://localhost:4200](http://localhost:4200). A aplicação recarrega automaticamente ao alterar os arquivos do projeto.

## Rotas da aplicação

| Rota        | Descrição                          |
|-------------|------------------------------------|
| `/cadastro` | Formulário para cadastrar/editar clientes |
| `/consulta` | Listagem e busca de clientes       |

## Outros comandos úteis

| Comando        | Descrição                                      |
|----------------|------------------------------------------------|
| `npm run build` | Gera o build de produção na pasta `dist/`     |
| `npm test`      | Executa os testes unitários (Karma + Jasmine) |

## Observações

- Os clientes ficam salvos no `localStorage` do navegador. Limpar o cache ou usar outro navegador remove os dados.
- Projeto gerado com [Angular CLI](https://github.com/angular/angular-cli) versão 16.0.6.
