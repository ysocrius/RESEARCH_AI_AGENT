import { test, expect } from '@playwright/test';

test.describe('Developer Tools Research Agent', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('http://localhost:3004');
  });

  test('should show search bar and perform search', async ({ page }) => {
    // Verify initial page elements
    await expect(page.getByPlaceholder('Search for developer tools...')).toBeVisible();
    
    // Perform a search
    await page.getByPlaceholder('Search for developer tools...').fill('database');
    await page.getByPlaceholder('Search for developer tools...').press('Enter');
    
    // Wait for search results
    await expect(page.getByText('Database Tools')).toBeVisible();
    
    // Verify category badge
    await expect(page.getByText('Database', { exact: true })).toBeVisible();
  });

  test('should maintain search history', async ({ page }) => {
    // Perform multiple searches
    const searches = ['database', 'mobile', 'cloud'];
    
    for (const query of searches) {
      await page.getByPlaceholder('Search for developer tools...').fill(query);
      await page.getByPlaceholder('Search for developer tools...').press('Enter');
      await expect(page.getByText(query, { exact: false })).toBeVisible();
    }
    
    // Clear search and verify history appears
    await page.getByPlaceholder('Search for developer tools...').click();
    
    // Verify recent searches are visible
    for (const query of searches) {
      await expect(page.getByText(query, { exact: false })).toBeVisible();
    }
  });

  test('should show popular suggestions', async ({ page }) => {
    // Click search bar to show suggestions
    await page.getByPlaceholder('Search for developer tools...').click();
    
    // Verify popular suggestions are visible
    const popularSearches = ['database', 'mobile', 'AI tools', 'code editor', 'cloud'];
    
    for (const suggestion of popularSearches) {
      await expect(page.getByText(suggestion, { exact: false })).toBeVisible();
    }
  });

  test('should show loading animation during search', async ({ page }) => {
    // Start observing network
    const searchPromise = page.waitForResponse(response => 
      response.url().includes('/api/search') && response.status() === 200
    );
    
    // Perform search
    await page.getByPlaceholder('Search for developer tools...').fill('database');
    await page.getByPlaceholder('Search for developer tools...').press('Enter');
    
    // Verify loading state appears
    await expect(page.getByTestId('loading-animation')).toBeVisible();
    
    // Wait for search to complete
    await searchPromise;
    
    // Verify loading state disappears
    await expect(page.getByTestId('loading-animation')).not.toBeVisible();
  });
}); 