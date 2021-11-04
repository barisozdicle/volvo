const Page = require('./page');

class CarSafety extends Page {

    get intro () { return $('#ModelIntro-1 h2') }
}

module.exports = new CarSafety();

