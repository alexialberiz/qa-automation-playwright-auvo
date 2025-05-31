export class CartPage {
  constructor(page) {
    this.page = page;

    // Elemento do botão "Adicionar ao Carrinho"
    this.addToCartButton = page.locator('[data-test="add-to-cart"]');

    // Elemento do botão "Carrinho"
    this.cartButton = page.locator('[data-test="shopping-cart-link"]');

    // Elemento do botão "Checkout"
    this.checkoutButton = page.locator('[data-test="checkout"]');
  }

  // Adicionar o produto ao carrinho
  async adicionarAoCarrinho() {
    await this.addToCartButton.click();
  }

  // Acessar o carrinho
  async acessarCarrinho() {
    await this.cartButton.click();
  }

  // Clicar no botão de checkout
  async clicarCheckout() {
    await this.checkoutButton.click();
  }
}