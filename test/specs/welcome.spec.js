import WelcomeScreen from "../screens/android/welcome.screen";

describe('Welcome', () => {
    it('Deve entrar no app e reenderizar a tela inicial', async () => {
        await WelcomeScreen.btnIntroJump.click()

        if (await WelcomeScreen.btnDefaultPositive.isExisting()) {
            await WelcomeScreen.btnDefaultPositive.click()
        }

        await WelcomeScreen.btnAcceptAgreed.click()

        expect(await WelcomeScreen.titleWelcome).toHaveText('Seja bem-vindo.')

        expect(await WelcomeScreen.btnSignUp).toBeDisplayed()

        expect(await WelcomeScreen.btnSingIn).toBeDisplayed()

        expect(await WelcomeScreen.continueAsVisiting).toBeDisplayed()
    })
})