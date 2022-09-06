import el from './elements'

class Welcome {
    async acess() {
        await el.btnIntroJump.click()

        if (await el.btnDefaultPositive.isExisting()) {
            await el.btnDefaultPositive.click()
        }

        await el.btnAcceptAgreed.click()
    }

    async validateTheElementsDisplayedOnTheScreen() {
        const title = await el.titleWelcome.getText()
        expect(title).toEqual('Seja bem-vindo.')

        await expect(el.singInBtn).toBeDisplayed()

        await expect(el.signUpBtn).toBeDisplayed()

        await expect(el.continueAsVisiting).toBeDisplayed()
    }

    async clickSignInBtn() {
        await el.signInBtn.click()
    }

    async clickSignUpBtn() {
        await el.signUpBtn.click()
    }

    async clickContinueAsVisiting() {
        await el.continueAsVisiting.click()
    }
}

export default new Welcome()
