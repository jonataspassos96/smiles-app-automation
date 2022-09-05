import WelcomeScreen from '../screens/android/welcome.screen';

describe('Welcome', () => {
    it('Deve entrar no app e reenderizar a tela inicial', async () => {
        await WelcomeScreen.btnIntroJump.click()

        if (await WelcomeScreen.btnDefaultPositive.isExisting()) {
            await WelcomeScreen.btnDefaultPositive.click()
        }

        await WelcomeScreen.btnAcceptAgreed.click()

        const title = await WelcomeScreen.titleWelcome.getText()
        expect(title).toEqual('Seja bem-vindo.')

        await expect(WelcomeScreen.btnSignUp).toBeDisplayed()

        await expect(WelcomeScreen.btnSingIn).toBeDisplayed()

        await expect(WelcomeScreen.continueAsVisiting).toBeDisplayed()
    })
})
