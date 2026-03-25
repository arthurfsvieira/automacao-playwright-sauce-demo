import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage.ts'; // Importando o modelo

test('Login com sucesso usando padrão POM', async ({ page }) => {
  const loginPage = new LoginPage(page);

  await loginPage.goTo();
  await loginPage.login('standard_user', 'secret_sauce');

  // Validação
  
  await expect(page.locator('.title')).toContainText('Products', { ignoreCase: true });
});