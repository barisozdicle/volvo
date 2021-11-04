const TestPage = require('../pageobjects/test.page');

describe('Videos', () => {
    it('Iframe must appear', async () => {
        await TestPage.open();
        await TestPage.cookieClick();
        await TestPage.watchButton.click();

        const isVideoStart =$("iframe[src='https://www.youtube.com/embed/fj_WFwVOYn8?color=white&cc_load_policy=1&rel=0&autoplay=1&cc_lang_pref=en&hl=en']")

        await expect(isVideoStart).toBeExisting()
    });

});

