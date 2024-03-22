[https://playwright.dev/docs/intro](https://playwright.dev/docs/intro)

### Setup

- `git clone [repo]`
- Wechsel in das Verzeichnis
- Playwright installieren
  - `npm install`
  - oder `npm init playwright@latest`

Erster Funktions-Test: `npx playwright test example`

Optional: [VS-Code Integration](https://playwright.dev/docs/getting-started-vscode)

### Kommandos

`npx playwright test`  
Runs the end-to-end tests.

`npx playwright test --ui`  
Starts the interactive UI mode.

`npx playwright test --project=chromium`  
Runs the tests only on Desktop Chrome.

`npx playwright test example`  
Runs the tests in a specific file.

`npx playwright test --debug`  
Runs the tests in debug mode.

`npx playwright codegen`  
Auto generate tests with Codegen.

`npx playwright show-report`  
Show last HTML report.

`npm install -D @playwright/test@latest`  
Update Playwright.
