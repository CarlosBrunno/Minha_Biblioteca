# Minha_Biblioteca
Repósitorio para o sistema web para disciplina de projeto integrado.
# 📚 Minha Biblioteca - Integração Contínua

Este repositório faz parte do Entregável Parcial 1 (EP1) da disciplina de Extensão em Computação, e tem como objetivo configurar um processo de **Integração Contínua (CI)** utilizando **GitHub Actions**, com verificação automatizada do código por meio de **testes com Playwright**.
---

## 📦 Estrutura do Projeto

O projeto foi desenvolvido com **HTML**, **CSS** e **JavaScript puro**, simulando uma aplicação de biblioteca digital com cadastro de usuários.

---

## ⚙️ Integração Contínua com GitHub Actions

Utilizamos o GitHub Actions para automatizar o seguinte fluxo:

1. Clona o repositório
2. Instala o Node.js e dependências (`playwright`, `http-server`)
3. Roda um servidor local na pasta `/pages`
4. Executa testes automatizados com Playwright
5. Arquivo de configuração para o fluxo de teste automatizado
### 🔁 Pipeline `.github/workflows/playwright.yml`

