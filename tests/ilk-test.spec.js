const { test, expect } = require('@playwright/test');



test('Blog Sayfasına git', async({ page }) => {
    await page.goto('https://basicwebsite.rfnnet.com');
    await expect(page).toHaveTitle(/Edgecut/);


    //Blog sayfasını aç
    const element_blog = page.locator('//html/body/div/header/nav/div/div[1]/ul/li[4]/a');
    await element_blog.click();

    });

test('Link Sayfasına git', async({ page }) => {
    await page.goto('https://basicwebsite.rfnnet.com');
    await expect(page).toHaveTitle(/Edgecut/);    
    
    //Linkler sayfasını aç
    const element_link = page.locator('//*[@id="navbarSupportedContent"]/div[1]/ul/li[3]/a');
    await element_link.click();

    //Rapor link'ine tıkla
    const element_rapor_link = page.locator('//html/body/div[2]/div/p/a[3]');
    await element_rapor_link.click();
    });
    
test('Sertifikalar sayfasına git', async({ page })  => {
    await page.goto('https://basicwebsite.rfnnet.com');
    await expect(page).toHaveTitle(/Edgecut/);    
    
    //Hakkında sayfasını aç
    const element_hakkinda = page.locator('//*[@id="navbarSupportedContent"]/div[1]/ul/li[2]/a');
    await element_hakkinda.click();

    //Sertifikalar butonuna tıkla
    await page.getByRole('link', {name: 'Sertifikalar'}).click();

    //Sayfada Linux kelimesi varmı?
    await expect(page.locator('text=Linux')).toBeVisible();
});

test('Ana sayfa başlığını kontrol ediliyor', async({ page }) => {
    await page.goto('https://basicwebsite.rfnnet.com');
    await expect(page).toHaveTitle(/Edgecut/);

    const element = page.locator('//*[@id="navbarSupportedContent"]/div[1]/ul/li[5]/a');
    await element.click();
    
    // Form Bilgileri setle ve gönder
    await page.locator('input[name="yourname"]').fill('İrfan Yıldırım');
    await page.locator('input[name="phonenumber"]').fill('345323');
    await page.locator('input[name="email"]').fill('createand@gmail.com');
    await page.locator('input[name="message"]').fill('Deneme Mesaj');
    await page.getByRole('button', {name: 'GÖNDER'}).click();
    
    });