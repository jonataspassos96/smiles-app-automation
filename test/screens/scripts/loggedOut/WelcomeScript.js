import elements from '../../elements'

class WelcomeScript {

    constructor() {
        this.welcomeScreen = elements.WelcomeScreen
    }

    async access() {

        await this.welcomeScreen.btnIntroJump.click()

        if (await this.welcomeScreen.btnDefaultPositive.isExisting()) {
            await this.welcomeScreen.btnDefaultPositive.click()
        }

        await this.welcomeScreen.btnAcceptAgreed.waitForDisplayed()
        await this.welcomeScreen.btnAcceptAgreed.click()
    }

    async validateTheElementsDisplayedOnTheScreen() {
        const title = await this.welcomeScreen.mainTitle.getText()
        expect(title).toEqual('Seja bem-vindo.')

        await expect(this.welcomeScreen.singInBtn).toBeDisplayed()

        await expect(this.welcomeScreen.signUpBtn).toBeDisplayed()

        await expect(this.welcomeScreen.continueAsVisiting).toBeDisplayed()
    }

    async clickSignInBtn() {
        await this.welcomeScreen.singInBtn.click()
    }

    async clickSignUpBtn() {
        await this.welcomeScreen.signUpBtn.click()
    }

    async clickContinueAsVisiting() {
        await this.welcomeScreen.continueAsVisiting.click()
    }
}

export default new WelcomeScript()
