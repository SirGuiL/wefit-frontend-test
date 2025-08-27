# 🖥️ Desafio Front-end

Este projeto é parte de um desafio front-end que simula um e-commerce, com listagem de produtos e carrinho de compras.

---

## 📦 Pré-requisitos

Antes de rodar o projeto, certifique-se de ter instalado:

- [Node.js](https://nodejs.org/)
- [Yarn](https://yarnpkg.com/)

---

## ⚙️ Configuração do ambiente

1. Crie um arquivo `.env` na raiz do projeto com as seguintes variáveis:

```env
VITE_API_URL=https://wefit-movies.vercel.app/api/movies
VITE_REQUEST_DELAY=2000
# VITE_FORCE_ERROR=1
```

### 🔑 Sobre as variáveis:

- VITE_API_URL (obrigatória): URL base da API utilizada no projeto (ex: http://localhost:3000).

- VITE_REQUEST_DELAY (opcional): tempo em milissegundos para simular delay na exibição dos produtos.

  - Exemplo: 2000 (2 segundos)
  - Para desabilitar, use 0 ou remova a variável.

- VITE_FORCE_ERROR (opcional): qualquer valor ativa o modo de erro forçado no request (para testar um cenário de falha).

### ▶️ Rodando o projeto

1. Instale as dependências

```
yarn install
```

2. (Opcional) Inicie a API mockada com json-server

```
yarn server
```

3. Inicie o projeto em modo desenvolvimento

```
yarn dev
```

O projeto estará disponível em: http://localhost:5173

### 📜 Scripts disponíveis

- yarn dev → roda o projeto em modo desenvolvimento
- yarn build → cria a build de produção
- yarn preview → visualiza a build localmente
- yarn server → sobe a API fake com json-server

### 🛠️ Tecnologias utilizadas

- React + Vite
- TypeScript
- styled-components
- React Router
- json-server
