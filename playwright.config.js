// playwright.config.js
import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './tests', 
  retries: 0, 
  timeout: 60000, 
  use: {
    headless: false, 
    screenshot: 'on', // Printa tela sempre
    video: 'on',      // Grava vídeo sempre
    trace: 'on',      // Gera relatório de rastreamento
    slowMo: 10000, // Atraso de 500ms entre ações para visuzalização dos testes
  },
  reporter: [['html', { outputFolder: 'evidencias/report', open: 'always' }]],
});