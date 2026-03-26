# 🚀 Automação de Testes E2E - Sauce Demo Project

Este projeto foi desenvolvido como parte de um estudo focado em QA Automation, simulando o fluxo crítico de login e navegação em uma plataforma web. O objetivo é demonstrar boas práticas de engenharia de software aplicadas ao teste de software, utilizando ferramentas de última geração.

## 🎯 Objetivo do Projeto

Validar o fluxo de autenticação e integridade da interface de usuário utilizando o padrão Page Object Model (POM), garantindo que a aplicação seja resiliente a mudanças e o código seja de fácil manutenção e escala.

## 🛠️ Tecnologias Utilizadas

Linguagem: TypeScript (Tipagem estática para maior segurança do código).

Framework de Teste: Playwright (Ferramenta moderna de automação de UI).

Padrão de Projeto: Page Object Model (POM).

CI/CD: GitHub Actions (Execução automatizada em cada Push).

Relatórios: Playwright HTML Reporter integrado.

## 🏗️ Estrutura do Projeto
```
├── .github/workflows/  # Configuração do CI/CD (GitHub Actions)
├── pages/              # Mapeamento de elementos e ações (Padrão POM)
│   └── LoginPage.ts
├── tests/              # Scripts de teste automatizados
│   └── login-vendas.spec.ts
├── playwright.config.ts # Configurações globais (Browsers, Viewports, Timeouts)
└── package.json        # Gerenciamento de dependências e scripts
```
## 🚀 Como Executar Localmente

Siga o passo a passo abaixo para rodar os testes na sua máquina:

1. Pré-requisitos
Certifique-se de ter o Node.js instalado (Versão 16 ou superior recomendada).

2. Clonar o Repositório
```
git clone https://github.com/arthurfsvieira/automacao-playwright-sauce-demo.git
cd automacao-playwright-sauce-demo
```
3. Instalar Dependências
```
npm install
```
4. Instalar Browsers do Playwright
```
npx playwright install
```
5. Executar os Testes
Você pode visualizar a execução de duas formas:

Modo Headless (Via Terminal):

```
npx playwright test
```
Modo UI (Interface Visual para Debug):

```
npx playwright test --ui
```

## 📈 Diferenciais Implementados
Evidências Automáticas: Configuração para captura de screenshots e gravação de vídeos em caso de falha nos testes.

Integração Contínua (CI): Pipeline configurado no GitHub Actions que valida o código automaticamente em ambiente Linux a cada novo commit.

Manutenibilidade: Código desacoplado utilizando classes de página, facilitando a atualização caso a interface do site mude.

## 📩 Contato
Desenvolvido por Arthur Vieira
www.linkedin.com/in/arthurfsvieira | arthur.devbr@gmail.com
