import { test, expect } from '@playwright/test';

test('Cadastro de novo usuário', async ({ page }) => {
  await page.goto('file://' + __dirname + '/../pages/signin.html');

  await page.fill('#firstname', 'João');
  await page.fill('#lastname', 'Silva');
  await page.fill('#email', 'joao@example.com');
  await page.fill('#password', '123456');

  await page.waitForSelector('#country');
  await page.selectOption('#country', { index: 1 });

  await page.click('.button-signin');

  // Como não há backend, só testamos se ainda está na mesma página
  await expect(page).toHaveURL(/signin.html|tela-principal.html/);

});
