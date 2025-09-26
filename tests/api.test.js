// Importa o supertest para fazer requisições HTTP
const request = require('supertest');

// Define o endereço base da nossa API que está rodando
const apiAddress = 'http://localhost:3000';

// Descreve o conjunto de testes para a API de Usuários
describe('Testes da API de Usuários', () => {

    let userId; // Variável para guardar o ID do usuário que criarmos

    // Teste 1: Deve criar um novo usuário com sucesso (POST)
    test('POST /usuarios - Deve criar um novo usuário com sucesso', async () => {
        const response = await request(apiAddress) // <-- CORREÇÃO APLICADA
            .post('/usuarios')
            .send({
                nome: "Carlos Brunno",
                email: "carlos@teste.com",
                senha: "senha123"
            });
        
        expect(response.statusCode).toBe(201);
        expect(response.body).toHaveProperty('id');
        userId = response.body.id;
    });

    // Teste 2: Deve listar todos os usuários (GET)
    test('GET /usuarios - Deve retornar uma lista com todos os usuários', async () => {
        const response = await request(apiAddress).get('/usuarios'); // <-- CORREÇÃO APLICADA

        expect(response.statusCode).toBe(200);
        expect(Array.isArray(response.body)).toBe(true);
        expect(response.body.length).toBeGreaterThan(0);
    });

    // Teste 3: Deve buscar um usuário específico pelo ID (GET by ID)
    test('GET /usuarios/:id - Deve retornar um usuário específico', async () => {
        const response = await request(apiAddress).get(`/usuarios/${userId}`); // <-- CORREÇÃO APLICADA

        expect(response.statusCode).toBe(200);
        expect(response.body.nome).toBe('Carlos Brunno');
    });

    // Teste 4: Deve retornar erro 404 para um ID que não existe
    test('GET /usuarios/:id - Deve retornar erro 404 para um ID inexistente', async () => {
        const response = await request(apiAddress).get('/usuarios/9999'); // <-- CORREÇÃO APLICADA
        expect(response.statusCode).toBe(404);
    });

    // Teste 5: Deve deletar um usuário com sucesso (DELETE)
    test('DELETE /usuarios/:id - Deve deletar o usuário criado', async () => {
        const response = await request(apiAddress).delete(`/usuarios/${userId}`); // <-- CORREÇÃO APLICADA
        
        expect(response.statusCode).toBe(200);

        const getResponse = await request(apiAddress).get(`/usuarios/${userId}`); // <-- CORREÇÃO APLICADA
        expect(getResponse.statusCode).toBe(404);
    });
});