const Page = require('./page');

class TestPage extends Page {

    get cookie() {
        return $("button[title='Accept']")
    }

    get learnMoreAboutCarSafety() {
        return $("a[href='/intl/v/car-safety\']")
    }

    get watchButton() {
        return $("div[class='a cn']")
    }


    async cookieClick() {
        await this.cookie.click();
    }


    open() {
        return super.open('intl/v/car-safety/a-million-more/');
    }
}

module.exports = new TestPage();
