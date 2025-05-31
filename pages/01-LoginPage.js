export class LoginPage {
  constructor(page) {
    this.page = page;
    this.usernameInput = page.locator('[data-test="username"]');
    this.passwordInput = page.locator('[data-test="password"]');
    this.loginButton = page.locator('[data-test="login-button"]');
  }

  async goto() {
    await this.page.goto('https://www.saucedemo.com/');
  }

  async preencherUsuario(usuario) {
    await this.usernameInput.fill(usuario);
  }

  async preencherSenha(senha) {
    await this.passwordInput.fill(senha);
  }

  async clicarLogin() {
    await this.loginButton.click();
  }

  async login(usuario, senha) {
    await this.preencherUsuario(usuario);
    await this.preencherSenha(senha);
    await this.clicarLogin();
  }
}
