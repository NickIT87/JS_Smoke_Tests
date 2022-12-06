const LoginPage = require('../pageobjects/login.page')
const SecurePage = require('../pageobjects/secure.page')


// describe('My Login application', () => {
//     it('should login with valid credentials', async () => {
//         await LoginPage.open()

//         await LoginPage.login('tomsmith', 'SuperSecretPassword!')
//         await expect(SecurePage.flashAlert).toBeExisting()
//         await expect(SecurePage.flashAlert).toHaveTextContaining(
//             'You logged into a secure area!')
//     })
// })


describe('login into playcode', () => {
    it('should login with valid credentials', async () => {
        await LoginPage.open()
        await LoginPage.login()
        // need to add sleep ... 
        // selector review
    })
})
