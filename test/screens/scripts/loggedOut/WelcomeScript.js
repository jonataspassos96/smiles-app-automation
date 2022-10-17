import WelcomeScreen from '../../elements/android/loggedOut/WelcomeScreen'

class WelcomeScript {
    async access() {
        await WelcomeScreen.btnIntroJump.click()

        if (await WelcomeScreen.btnDefaultPositive.isExisting()) {
            await WelcomeScreen.btnDefaultPositive.click()
        }

        await WelcomeScreen.btnAcceptAgreed.waitForDisplayed()
        await WelcomeScreen.btnAcceptAgreed.click()
    }

    async validateTheElementsDisplayedOnTheScreen() {
        const title = await WelcomeScreen.mainTitle.getText()
        expect(title).toEqual('Seja bem-vindo.')

        await expect(WelcomeScreen.singInBtn).toBeDisplayed()

        await expect(WelcomeScreen.signUpBtn).toBeDisplayed()

        await expect(WelcomeScreen.continueAsVisiting).toBeDisplayed()
    }

    async clickSignInBtn() {
        await WelcomeScreen.singInBtn.click()
    }

    async clickSignUpBtn() {
        await WelcomeScreen.signUpBtn.click()
    }

    async clickContinueAsVisiting() {
        await WelcomeScreen.continueAsVisiting.click()
    }
}

export default new WelcomeScript()
