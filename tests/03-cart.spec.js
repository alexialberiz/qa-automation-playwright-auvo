import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/01-LoginPage.js';
import { ProductPage } from '../pages/02-ProductPage.js';
import { CartPage } from '../pages/03-CartPage.js';

/*
1. Login: Fazer login na aplicação com credenciais padrão fornecidas.
2. Navegação e Pesquisa: Navegar até a seção de produtos e realizar uma pesquisa.
3. Validação do Produto: Selecionar um produto, verificar o título, preço e descrição.
4. Adicionar ao Carrinho e Checkout: Adicionar o produto ao carrinho, acessar o carrinho e
seguir até a tela de checkout. */

test('Teste do carrinho - Adicionar produto, acessar carrinho e checkout', async ({ page }) => {
  const loginPage = new LoginPage(page);
  const productPage = new ProductPage(page);
  const cartPage = new CartPage(page);

  // Acessar a página e fazer login
  await loginPage.goto();
  await loginPage.login('standard_user', 'secret_sauce');

  // Garante que está na página de inventário
  await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');

  // Clicar no produto
  await productPage.clicarNoProduto();

  // Adicionar o produto ao carrinho
  await cartPage.adicionarAoCarrinho();

  // Acessar o carrinho
  await cartPage.acessarCarrinho();

  // Validar que o produto foi adicionado ao carrinho
  const tituloPagina = page.locator('.title');
  await expect(tituloPagina).toHaveText('Your Cart');;

  // Clicar no botão de checkout
  await cartPage.clicarCheckout();

  // Validar que está na página de checkout
  await expect(page).toHaveURL('https://www.saucedemo.com/checkout-step-one.html');
});