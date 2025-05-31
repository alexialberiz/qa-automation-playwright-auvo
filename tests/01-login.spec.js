import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/01-LoginPage.js';

/*
1. Login: Fazer login na aplicação com credenciais padrão fornecidas.
2. Navegação: Navegar até a seção de produtos. */

test.describe('Teste de Login', () => {

  test('Login realizado com sucesso', async ({ page }) => {
    const loginPage = new LoginPage(page);

    // Acessa a página inicial
    await loginPage.goto();

    // Login com as credenciais válidas
    await loginPage.login('standard_user', 'secret_sauce');

    // Validação se foi redirecionado para a página de inventário
    await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');

    // Validação - checar se aparece o título "Products"
    const tituloPagina = page.locator('.title');
    await expect(tituloPagina).toHaveText('Products');
  });

});
