import { defineConfig, devices } from '@playwright/test';
import * as dotenv from 'dotenv';

dotenv.config({ path: '.env' });

const env = process.env.TEST_ENV ?? 'staging';


/**
 * Read environment variables from file.
 * https://github.com/motdotla/dotenv
 */
// import dotenv from 'dotenv';
// import path from 'path';
// dotenv.config({ path: path.resolve(__dirname, '.env') });

/*export const pgURL =
  env === 'production'
    ? 'https://play.leo-lang.org'
    : 'https://stage-pg.leo-lang.org';
*/

/**
 * See https://playwright.dev/docs/test-configuration.
 */
export default defineConfig({
  testDir: './tests',
  /* Run tests in files in parallel */
  fullyParallel: true,
  /* Fail the build on CI if you accidentally left test.only in the source code. */
  forbidOnly: !!process.env.CI,
  /* Retry on CI only */
  retries: process.env.CI ? 2 : 0,
  /* Opt out of parallel tests on CI. */
  workers: process.env.CI ? 1 : undefined,  
  /* Reporter to use. See https://playwright.dev/docs/test-reporters */
  reporter: 'html',
  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
  use: {
    
    /* Base URL to use in actions like `await page.goto('')`. */
    baseURL:
      env === 'production'
        ? 'https://play.leo-lang.org'
        : 'https://stage-pg.leo-lang.org',

    /* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */
    trace: 'on-first-retry',
  },

  /* Configure projects for major browsers */
  projects: [
      /* Test against branded browsers. */
    {
      name: 'chromium',
      use: { 
          ...devices['Desktop Chrome'],
          viewport: { width: 1920, height: 1080 },
          //deviceScaleFactor: undefined,
          //viewport: null, // Disable Playwright's default viewport
          //launchOptions: {
          //      args: ['--start-maximized'], // Maximize the window
          //},      
        }
    },

    {
        name: 'Google Chrome',
        use: { 
          ...devices['Desktop Chrome'], 
          channel: 'chrome', 
          viewport: { width: 1920, height: 1080 },
        },
    },
        
    /*
    {
        name: 'Microsoft Edge',
        use: { 
           ...devices['Desktop Edge'], 
           channel: 'msedge', 
          viewport: { width: 1920, height: 1080 },
        },
    },

    {
       name: 'firefox',
       use: { 
          ...devices['Desktop Firefox'],
          viewport: { width: 1920, height: 1080 },
       },
    },

     {
        name: 'webkit',
        use: { 
          ...devices['Desktop Safari'], 
          viewport: { width: 1920, height: 1080 },
        },
     },
*/

    /* Test against mobile viewports. */
    // {
    //   name: 'Mobile Chrome',
    //   use: { ...devices['Pixel 5'] },
    // },
    // {
    //   name: 'Mobile Safari',
    //   use: { ...devices['iPhone 12'] },
    // },

  ],

  /* Run your local dev server before starting the tests */
  // webServer: {
  //   command: 'npm run start',
  //   url: 'http://localhost:3000',
  //   reuseExistingServer: !process.env.CI,
  // },
});

//export const baseURL = defineConfig.use.baseURL;
