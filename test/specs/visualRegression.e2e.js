describe('Example', () => {
    beforeEach(() => {
        browser.url('https://www.volvocars.com/intl/v/car-safety/a-million-more');
    });

    it('should save some screenshots', () => {
        // Save a screen
        browser.saveScreen('volvoAlertPage', { /* some options */ });

        // Save an element
        browser.saveElement($('#alert-box-message'), 'alertMessage', { /* some options */ });
    });

    it('should compare successful with a baseline', () => {
        // Check a screen
        expect(browser.checkScreen('volvoAlertPage', { /* some options */ })).toEqual(0);

        // Check an element
        expect(browser.checkElement($('#alert-box-message'), 'alertMessage', { /* some options */ })).toEqual(0);
    });
});
