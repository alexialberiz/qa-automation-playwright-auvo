export class CheckoutPage {
  constructor(page) {
    this.page = page;

    // Elemento do campo de nome
    this.firstNameInput = page.locator('[data-test="firstName"]');

    // Elemento do campo de sobrenome
    this.lastNameInput = page.locator('[data-test="lastName"]');

    // Elemento do campo de CEP
    this.postalCodeInput = page.locator('[data-test="postalCode"]');

    // Elemento do botão "Continue"
    this.continueButton = page.locator('[data-test="continue"]');

    // Elemento de agradecimento da compra
    this.thankYouMessage = page.locator('[data-test="complete-header"]');

    // Elemento do botão "Finish"
    this.finishButton = page.locator('[data-test="finish"]');

    // Elemento do botão "Back to Products"
    this.backToProductsButton = page.locator('[data-test="back-to-products"]');

    // URL da página de inventário
    this.inventoryUrl = 'https://www.saucedemo.com/inventory.html';

    //Clicar em Logout
    this.logoutButton = page.locator('[data-test="logout-sidebar-link"]');

    //Clique menu de hambúrguer
    this.hamburgerMenuButton = page.locator('#react-burger-menu-btn');
  }

  // Preencher os dados do checkout
  async preencherDadosCheckout(firstName, lastName, postalCode) {
    await this.firstNameInput.fill(firstName);
    await this.lastNameInput.fill(lastName);
    await this.postalCodeInput.fill(postalCode);
  }

  // Clicar no botão "Continue"
  async clicarContinue() {
    await this.continueButton.click();
  }

  // Clicar no botão "Finish"
  async clicarFinish() {
    await this.finishButton.click();
  }

  // Validar a mensagem de agradecimento
  async validarAgradecimento() {
    await expect(this.thankYouMessage).toHaveText('Thank you for your order!');
  }

  // Clicar no botão "Back to Products"
  async clicarBackToProducts() {
    await this.backToProductsButton.click();
  }

  // Validar que retornou na página de Inventário
  async validarRetornoInventario() {
    await expect(this.page).toHaveURL('https://www.saucedemo.com/inventory.html');
  }
// Clicar no botão de menu de hambúrguer
  async clicarHamburgerMenu() {
    await this.hamburgerMenuButton.click();
  }
  // Clicar no botão de Logout
  async clicarLogout() {
    await this.logoutButton.click();
  }
}