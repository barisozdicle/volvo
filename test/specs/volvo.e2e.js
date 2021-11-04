const TestPage = require('../pageobjects/test.page');
const CarSafety = require('../pageobjects/carSafety.page');

describe('Volvo Test Case', () => {
    it('Learn more about car safety Link Test', async () => {
        await TestPage.open();
        await TestPage.cookieClick();
        await TestPage.learnMoreAboutCarSafety.click();
        await expect(CarSafety.intro).toBeExisting();
    });
});


