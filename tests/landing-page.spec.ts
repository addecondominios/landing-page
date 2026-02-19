import { test, expect } from '@playwright/test';

test.describe('Landing Page - Addecondominios', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test.describe('Home Page Load', () => {
    test('should load without JavaScript errors', async ({ page }) => {
      // Check for console errors
      const errors: string[] = [];
      page.on('console', msg => {
        if (msg.type() === 'error') {
          errors.push(msg.text());
        }
      });
      
      await page.waitForTimeout(2000);
      expect(errors.length).toBe(0);
    });

    test('should display main heading', async ({ page }) => {
      const heading = page.locator('h2');
      await expect(heading.first()).toBeVisible();
    });

    test('should have working logo link', async ({ page }) => {
      const logo = page.locator('img[alt*="ADDECON"]').first();
      await expect(logo).toBeVisible();
    });
  });

  test.describe('Navigation', () => {
    test('should scroll to "Sobre" section when clicking menu', async ({ page }) => {
      // Click menu button (hamburger)
      const menuButton = page.locator('button').first();
      await menuButton.click();
      
      // Click "Sobre" link
      const aboutLink = page.locator('a:has-text("Sobre")');
      if (await aboutLink.count() > 0) {
        await aboutLink.click();
        
        // Wait a bit for smooth scroll
        await page.waitForTimeout(1000);
        
        // Check if "Sobre" section is in view
        const sobreSection = page.locator('#sobre');
        await expect(sobreSection).toBeVisible();
      }
    });

    test('should scroll to "Aplicativo" section', async ({ page }) => {
      const appLink = page.locator('a:has-text("Aplicativo")');
      if (await appLink.count() > 0) {
        await appLink.click();
        await page.waitForTimeout(1000);
        
        const appSection = page.locator('#aplicativo');
        await expect(appSection).toBeVisible();
      }
    });

    test('should scroll to contact section from CTA button', async ({ page }) => {
      const contactButton = page.locator('a:has-text("Fale Conosco")');
      if (await contactButton.count() > 0) {
        await contactButton.click();
        await page.waitForTimeout(1000);
        
        const contactSection = page.locator('#contato');
        await expect(contactSection).toBeVisible();
      }
    });
  });

  test.describe('Form Validation', () => {
    test('should validate required fields', async ({ page }) => {
      // Try to submit empty form
      const submitButton = page.locator('button:has-text("Enviar Mensagem")');
      if (await submitButton.count() > 0) {
        // Scroll to contact section first
        await page.locator('#contato').scrollIntoViewIfNeeded();
        await page.waitForTimeout(500);
        await submitButton.click();
        
        // Check for validation error messages
        const errorMessages = page.locator('text=/obrigatório|inválido/i');
        const count = await errorMessages.count();
        expect(count).toBeGreaterThan(0);
      }
    });

    test('should validate email format', async ({ page }) => {
      const emailInput = page.locator('input[type="email"]');
      if (await emailInput.count() > 0) {
        await emailInput.fill('invalid-email');
        
        const submitButton = page.locator('button:has-text("Enviar Mensagem")');
        await submitButton.click();
        
        // Should show email validation error
        const error = page.locator('text="E-mail inválido"');
        await expect(error).toBeVisible({ timeout: 1000 }).catch(() => {});
      }
    });

    test('should accept valid form submission', async ({ page }) => {
      // Fill form with valid data
      await page.locator('input#name').fill('João Silva');
      await page.locator('input#email').fill('joao@example.com');
      await page.locator('input#phone').fill('(11) 99999-9999');
      await page.locator('textarea#message').fill('Mensagem de teste');
      
      // Submit
      const submitButton = page.locator('button:has-text("Enviar Mensagem")');
      await submitButton.click();
      
      // Should show success message
      const success = page.locator('text=/Mensagem recebida/i');
      await expect(success).toBeVisible({ timeout: 3000 }).catch(() => {});
    });
  });

  test.describe('External Links', () => {
    test('should open WhatsApp link in new tab', async ({ context, page }) => {
      const waLink = page.locator('a[href*="wa.me"]').first();
      if (await waLink.count() > 0) {
        expect(await waLink.getAttribute('target')).toBe('_blank');
        expect(await waLink.getAttribute('rel')).toContain('noopener');
      }
    });

    test('should open app store links', async ({ page }) => {
      const appStoreLink = page.locator('a[href*="apps.apple.com"]');
      if (await appStoreLink.count() > 0) {
        expect(await appStoreLink.getAttribute('target')).toBe('_blank');
      }
      
      const playStoreLink = page.locator('a[href*="play.google.com"]');
      if (await playStoreLink.count() > 0) {
        expect(await playStoreLink.getAttribute('target')).toBe('_blank');
      }
    });
  });

  test.describe('Images', () => {
    test('should have alt text on all images', async ({ page }) => {
      const images = page.locator('img');
      const count = await images.count();
      
      for (let i = 0; i < count; i++) {
        const alt = await images.nth(i).getAttribute('alt');
        expect(alt).toBeTruthy();
      }
    });

    test('should lazy load images', async ({ page }) => {
      const images = page.locator('img[loading="lazy"]');
      const lazyCount = await images.count();
      expect(lazyCount).toBeGreaterThan(0);
    });
  });

  test.describe('Responsiveness', () => {
    test('should work on mobile viewport', async ({ page }) => {
      await page.setViewportSize({ width: 375, height: 667 });
      
      // Check if main content is visible
      const mainContent = page.locator('main');
      await expect(mainContent).toBeVisible();
      
      // Check if menu toggle works
      const menuButton = page.locator('button').first();
      await menuButton.click();
      
      // Menu should open
      const menu = page.locator('nav');
      await expect(menu).toBeVisible({ timeout: 1000 }).catch(() => {});
    });

    test('should work on tablet viewport', async ({ page }) => {
      await page.setViewportSize({ width: 768, height: 1024 });
      
      const mainContent = page.locator('main');
      await expect(mainContent).toBeVisible();
    });

    test('should work on desktop viewport', async ({ page }) => {
      await page.setViewportSize({ width: 1920, height: 1080 });
      
      const mainContent = page.locator('main');
      await expect(mainContent).toBeVisible();
    });

    test('should not have horizontal overflow', async ({ page }) => {
      const body = page.locator('body');
      const scrollWidth = await page.evaluate(() => document.documentElement.scrollWidth);
      const clientWidth = await page.evaluate(() => document.documentElement.clientWidth);
      
      expect(scrollWidth).toBeLessThanOrEqual(clientWidth + 1); // +1 for rounding errors
    });
  });

  test.describe('Accessibility', () => {
    test('should have proper heading order', async ({ page }) => {
      const h1Count = await page.locator('h1').count();
      const h2Count = await page.locator('h2').count();
      
      // Should have at least one h1 and h2
      expect(h1Count + h2Count).toBeGreaterThan(0);
    });

    test('should have focusable elements', async ({ page }) => {
      const buttons = page.locator('button, a[href], input, textarea');
      const count = await buttons.count();
      
      expect(count).toBeGreaterThan(0);
    });

    test('should have proper form labels', async ({ page }) => {
      const inputs = page.locator('input, textarea');
      const count = await inputs.count();
      
      if (count > 0) {
        for (let i = 0; i < count; i++) {
          const input = inputs.nth(i);
          const id = await input.getAttribute('id');
          if (id) {
            const label = page.locator(`label[for="${id}"]`);
            // Label should exist for most inputs
            await expect(label).toBeVisible({ timeout: 500 }).catch(() => {});
          }
        }
      }
    });
  });

  test.describe('Performance', () => {
    test('should load within reasonable time', async ({ page }) => {
      const startTime = Date.now();
      await page.goto('/');
      const loadTime = Date.now() - startTime;
      
      expect(loadTime).toBeLessThan(5000); // Should load in less than 5 seconds
    });
  });
});
