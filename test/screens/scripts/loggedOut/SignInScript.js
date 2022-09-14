import WelcomeScript from './WelcomeScript'
import SignInScreen from '../../elements/android/loggedOut/SignInScreen'

class SignInScript {
    async acess() {
        await WelcomeScript.acess()
        await WelcomeScript.clickSignInBtn()
    }

    async validateTheElementsDisplayedOnTheScreen() {
        const title = await SignInScreen.mainTitle.getText()
        expect(title).toEqual('Faça seu login na Smiles')

        await expect(SignInScreen.backToTheWelcomeScreen).toBeDisplayed()
        await expect(SignInScreen.rememberSmilesNumberOrCpfTxt).toBeDisplayed()
        await expect(SignInScreen.toggle).toBeDisplayed()
        await expect(SignInScreen.didYouReceiveYourGolSmilesCreditCardTxt)
            .toHaveText('Recebeu seu Cartão de Crédito GOL Smiles?')
    }

    async clickToggle() {
        await SignInScreen.toggle.click()
    }

    async fillForm(number, password) {
        const inputMemberNumber = await SignInScreen.inputMemberNumber
        inputMemberNumber.setValue(number)

        const inputPassword = await SignInScreen.inputPassword
        inputPassword.setValue(password)
    }

    async submit() {
        await SignInScreen.submitBtn.click()
    }

    async validateErrorRequest() {
        const element = await SignInScreen.memberNumberOrPasswordIsInvalid.waitForDisplayed()
        expect(element).toHaveText('Usuário não encontrado ou Senha está inválida.')

        await SignInScreen.continueInSignInScreenBtn.click()
    }

    async sucessRequest() {
        await $('//*[@text="Fingerprint"]').waitForDisplayed()

        await $('android=new UiScrollable(new UiSelector().scrollable(true)).scrollToEnd(1,5)')

        await $('~btn_after').click()

        const userName = await $('//*[@resource-id="com.pontomobi.smileshmg:id/txt_name"]').getText()
        expect(userName).toEqual('Olá Dallas')
    }

    async clickForgotSmilesNumber() {
        await SignInScreen.forgotSmilesNumberBtn.click()
    }

    async clickForgotPassword() {
        await SignInScreen.forgotPasswordBtn.click()
    }
}

export default new SignInScript()
