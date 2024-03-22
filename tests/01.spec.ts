// @ts-check
import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('/');
  await page.getByText('Wonach suchst Du?').click();
  await page.getByPlaceholder('Wonach suchst Du?').fill('Wanderschuhe');
  await page.getByPlaceholder('Wonach suchst Du?').press('Enter');
  await page.getByRole('link', { name: 'Stoic - SälkaSt. Hiking Shoes - Wanderschuhe 15% Stoic SälkaSt. Hiking Shoes Wanderschuhe € 119,95* €' }).click();
  await page.getByRole('link', { name: 'Carbon' }).click();
  await page.getByRole('link', { name: '41' }).click();
  await page.getByRole('button', { name: 'in den Warenkorb' }).click();
  await page.getByRole('button', { name: 'zurück zum Produkt' }).click();
  await expect(page.getByTestId('miniBasket')).toHaveText("1")
  await page.goto('/warenkorb/')
  await expect(page.getByTestId('cartItemAmount')).toHaveValue("1")
});
