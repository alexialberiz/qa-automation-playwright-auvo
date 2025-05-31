# 🚀 Automatização de Teste End-to-End com Playwright + JavaScript

Este projeto foi desenvolvido como parte de um desafio técnico para uma vaga na empresa Auvo Tecnologia. O objetivo é automatizar cenários utilizando a ferramenta **Playwright**, aplicando boas práticas com a arquitetura **Page Object Model (POM)**.

---

## 🛠️ Tecnologias Utilizadas
<p align="left"> <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" alt="JavaScript" width="50" height="50"/> <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" alt="Node.js" width="50" height="50"/> <img src="https://playwright.dev/img/playwright-logo.svg" alt="Playwright" width="50" height="50"/> <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" alt="GitHub" width="50" height="50"/> <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/visualstudio/visualstudio-plain.svg" alt="VS Code" width="50" height="50"/> </p>

---

## 📑 Estrutura do Projeto

O projeto está estruturado de acordo com o padrão **Page Object Model (POM)**, onde cada página do site possui uma classe responsável por encapsular suas interações.

A estrutura de pastas principal é:
- `tests/`: Contém os arquivos de teste (specs).
- `pages/`: Contém os arquivos de Page Object.
- `evidencias/`: Pasta onde ficam armazenados os relatórios, prints e vídeos dos testes.
- `playwright.config.js`: Arquivo de configuração do Playwright.
- `package.json`: Dependências e scripts do projeto.

---

## 🚀 Como Executar o Projeto

### 🔧 Pré-requisitos

Para executar este projeto de automação de testes é necessário ter instalado na sua máquina as seguintes ferramentas:

- Node.js (versão 18 ou superior)

- Git

- Visual Studio Code (ou qualquer outro editor de sua preferência)

- Playwright — será instalado automaticamente com os comandos abaixo

⚙️ Observação: É necessário ter o Node.js instalado para gerenciar os pacotes e executar os testes.

### 📝 Instalação

1. Clone este repositório:
2. No repositório que você quer do GitHub, clique no botão verde <> Code.
3. Copie o link que aparece (geralmente vem assim: https://github.com/seu-usuario/seu-repositorio.git).
4. Abra o terminal (pode ser o terminal do VS Code, CMD, Powershell ou outro).
5. Navegue até a pasta onde você quer salvar o projeto.
6. Digite o comando:

git clone https://github.com/seu-usuario/seu-repositorio.git

7. Aperte Enter.

8. Após clonar, acesse a pasta do projeto:

cd nome-do-repositorio

🔸 Pronto! Agora você pode instalar as dependências e rodar o projeto localmente.

### Instalando as dependências:

No prompt: npm install

### Instalando os browsers do Playwright:

No prompt: npx playwright install


### 🧪 Executando os testes

### Execução padrão (headless - sem abrir navegador):

No prompt: npm run test

### Execução com navegador visível (headed):

No prompt: npm run test:headed

### Execução com navegação mais lenta (útil para análise visual):

No prompt: npm run test:ui

### Limpeza de evidências e resultados antigos
   
   🔸 Limpar apenas os relatórios de evidências:

No prompt: npm run clean:report

   🔸 Limpar todos os resultados e evidências:

No prompt: npm run clean:all

### Acessando o relatório de testes

Após executar qualquer teste, você pode abrir o relatório com:

No prompt: npm run report

Ou diretamente acessando a pasta /evidencias/report e abrindo o arquivo index.html no navegador.

### 🧠 Decisões e Suposições

- Playwright por sua facilidade e suporte nativo a múltiplos navegadores.
- Padrão POM para melhor organização e manutenção do código.
- Testes rodando em modo não-headless para facilitar visualização durante desenvolvimento.

### 👩🏽‍💻 Autor e Licença
Projeto desenvolvido por Alexia Alberiz.
Licença: ISC














