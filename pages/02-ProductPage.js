export class ProductPage {
  constructor(page) {
    this.page = page;

    // Elemento 'Sauce Labs Backpack' na página de inventário
    // que é o quarto produto listado
    this.productLink = page.locator('[data-test="item-4-title-link"]');

    // Elementos da página de detalhes do produto, que são acessados após clicar no nome do produto
    this.productName = page.locator('[data-test="inventory-item-name"]');
    this.productDescription = page.locator('[data-test="inventory-item-desc"]');
    this.productPrice = page.locator('[data-test="inventory-item-price"]');
  }

  //Acessar a página de detalhes do produto, com clique no nome Sauce Labs Backpack.
  async clicarNoProduto() {
    await this.productLink.click();
  }

  //Validar nome
  async obterNomeProduto() {
    return await this.productName.textContent();
  }

  //Validar descrição
  async obterDescricaoProduto() {
    return await this.productDescription.textContent();
  }

  //Validar preço
  async obterPrecoProduto() {
    return await this.productPrice.textContent();
  }
}
