# Minha Biblioteca - Projeto Integrado

Repositório para o sistema web da disciplina de projeto integrado. Este projeto inclui uma interface de usuário e uma API simulada para gerenciamento de dados, com testes automatizados para ambas as partes.

## 🚀 Como Executar o Projeto e os Testes

Para rodar este projeto, você precisará ter o [Node.js](https://nodejs.org/) instalado.

1.  **Clone o repositório:**
    ```bash
    git clone [https://github.com/CarlosBrunno/Minha_Biblioteca.git](https://github.com/CarlosBrunno/Minha_Biblioteca.git)
    cd Minha_Biblioteca
    ```

2.  **Instale as dependências:**
    ```bash
    npm install
    ```
    *(Este comando lerá o `package.json` e instalará todas as ferramentas necessárias para o projeto, como `jest` e `json-server`, de uma só vez.)*

### Testes da API (Entregável 3)

Para rodar os testes da API, você precisará de **dois terminais**.

* **No Terminal 1,** inicie a API simulada:
    ```bash
    npm run start-api
    ```

* **No Terminal 2,** execute a suíte de testes da API com o Jest:
    ```bash
    npm run test:api
    ```