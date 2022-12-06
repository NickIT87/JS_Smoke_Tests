

const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class LoginPage extends Page {
    /**
     * define selectors using getter methods
     */
    // get inputUsername () {
    //     return $('#username');
    // }

    // get inputPassword () {
    //     return $('#password');
    // }

    get btnSubmit () {
        return $('//*[@id="el-id-2000-21"]/div/div/div/div[3]/div[1]/div[2]/div[1]/img');
    }

    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    async login () {
        // await this.inputUsername.setValue(username);
        // await this.inputPassword.setValue(password);
        await this.btnSubmit.click();
    }

    /**
     * overwrite specific options to adapt it to page object
     */
    open () {
        return super.open('new');
    }
}

module.exports = new LoginPage();
