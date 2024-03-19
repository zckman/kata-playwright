// @ts-check
const { test, expect } = require('@playwright/test');

test('Übersprungener Test', async ({ page }) => {
});

// Test zum Überprüfen, ob ein Element nicht existiert
test('Element existiert nicht', async ({ page }) => {
  //TODO
});

// Fehlerhafter Test, der übersprungen wird
test('Fehlerhafter Test', async ({ page }) => {
  expect(page).toBeNull()
});

test('Test 02 für Viewport >= x', async ({ page }) => {
  //TODO
});

test('Test 03 für Viewport < x', async ({ page }) => {
  //TODO
});
