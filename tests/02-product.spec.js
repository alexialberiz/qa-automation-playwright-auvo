import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/01-LoginPage.js';
import { ProductPage } from '../pages/02-ProductPage.js';

/*
1. Login: Fazer login na aplicação com credenciais padrão fornecidas.
2. Navegação: Navegar até a seção de produtos.
3. Validação do Produto: Selecionar um produto, verificar o título, preço e descrição. */

test('Teste dos detalhes do produto - Validação: nome, descrição e preço', async ({ page }) => {
  const loginPage = new LoginPage(page);
  const productPage = new ProductPage(page);

  // Acessar a página e fazer login
  await loginPage.goto();
  await loginPage.login('standard_user', 'secret_sauce');

  // Garante que está na página de inventário
  await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');

  // Clicar no produto
  await productPage.clicarNoProduto();

  // Validar nome
  const nome = await productPage.obterNomeProduto();
  expect(nome).toBe('Sauce Labs Backpack');

  // Validar descrição
  const descricao = await productPage.obterDescricaoProduto();
  expect(descricao).toBe('carry.allTheThings() with the sleek, streamlined Sly Pack that melds uncompromising style with unequaled laptop and tablet protection.');

  // Validar preço
  const preco = await productPage.obterPrecoProduto();
  expect(preco).toBe('$29.99');
});