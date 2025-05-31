# 🚀 Automatização de Teste End-to-End com Playwright + JavaScript

Este projeto foi desenvolvido como parte de um desafio técnico para um aprendizado acelerado. O objetivo é automatizar cenários utilizando a ferramenta **Playwright**, aplicando boas práticas com a arquitetura **Page Object Model (POM)**.


## 🛠️ Tecnologias Utilizadas

| [<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" width="40"/>](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript) | [<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" width="40"/>](https://nodejs.org/) | [<img src="https://playwright.dev/img/playwright-logo.svg" width="40"/>](https://playwright.dev/) | [<img src="https://upload.wikimedia.org/wikipedia/commons/9/9a/Visual_Studio_Code_1.35_icon.svg" width="40"/>](https://code.visualstudio.com/) | [<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" width="40"/>](https://github.com/) |
| :----------------------------------------------------------------------------------------------------------------------------------------------------------------------: | :--------------------------------------------------------------------------------------------------------------------------: | :-----------------------------------------------------------------------------------------------: | :--------------------------------------------------------------------------------------------------------------------------------------------: | :--------------------------------------------------------------------------------------------------------------------------: |
|                                                 [**JavaScript**](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript)                                                |                                              [**Node.js**](https://nodejs.org/)                                              |                             [**Playwright**](https://playwright.dev/)                             |                                            [**Visual Studio Code**](https://code.visualstudio.com/)                                            |                                               [**GitHub**](https://github.com/)                                              |

## 📑 Estrutura do Projeto

O projeto está estruturado de acordo com o padrão **Page Object Model (POM)**, onde cada página do site possui uma classe responsável por encapsular suas interações.

A estrutura de pastas principal é:
- `tests/`: Contém os arquivos de teste (specs).
- `pages/`: Contém os arquivos de Page Object.
- `evidencias/`: Pasta onde ficam armazenados os relatórios, prints e vídeos dos testes.
- `playwright.config.js`: Arquivo de configuração do Playwright.
- `package.json`: Dependências e scripts do projeto.


## 🚀 Como Executar o Projeto

🔧 Pré-requisitos
Antes de rodar o projeto, tenha instalado na sua máquina:

Node.js (versão 18 ou superior) — gerencia os pacotes e executa os testes

Git — para clonar e versionar o código

Visual Studio Code (ou outro editor que preferir)

⚙️ O Playwright será instalado automaticamente nas dependências do projeto.

#

### 📝 Instalação

1. No GitHub, vá no seu repositório e clique no botão verde Code.

3. Copie o link HTTPS do repositório. Exemplo:

- `https://github.com/seu-usuario/seu-repositorio.git`

3. Abra seu terminal (Terminal do VS Code, CMD, PowerShell, etc).

5. Navegue até a pasta onde quer salvar o projeto, por exemplo:

- `cd ~/Documentos/Projetos`

5. Clone o repositório:

- `git clone https://github.com/seu-usuario/seu-repositorio.git`

6. Entre na pasta do projeto:

- `cd nome-do-repositorio`
  
🔸 Pronto! Agora você pode instalar as dependências e rodar o projeto localmente.

#

### ⚙️ Instalando as dependências:

No terminal, rode:

- `npm install`

#

### 🌐 Instalando os browsers do Playwright:

No terminal, rode:

- `npx playwright install`

#

### 🧪 Executando os testes

1. Execução padrão (headless, sem abrir navegador):

- `npm run test`

2. Com navegador visível (headed):

- `npm run test:headed`

3. Execução mais lenta, para acompanhar visualmente:

- `npm run test:ui`

#

### 🧹 Limpando resultados e evidências antigas

1. Só os relatórios de evidências:

- `npm run clean:report`

2. Tudo (evidências e resultados):

- `npm run clean:all`

#

### 📊 Acessando o relatório

Após rodar os testes, abra o relatório com:

- `npm run report`

Ou vá direto na pasta evidencias/report e abra o arquivo index.html no navegador.

#

### 🧠 Decisões e Suposições

- Playwright por sua facilidade e suporte nativo a múltiplos navegadores.
- Padrão POM para melhor organização e manutenção do código.
- Testes rodando em modo não-headless para facilitar visualização durante desenvolvimento.

#

### 👩🏽‍💻 Autor e Licença

Projeto desenvolvido por Alexia Alberiz

Licença: ISC














