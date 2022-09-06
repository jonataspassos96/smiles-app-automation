import WelcomeScreen from './welcome.screen'
import SignInScreen from './signIn.screen'

class ForgotYourPasswordScreen {
    get mainTitle() {
        return $('//*[@resource-id="com.pontomobi.smileshmg:id/activity_title"]')
    }

    get infoTxt() {
        return $('//*[@resource-id="com.pontomobi.smileshmg:id/activity_info"]')
    }

    get inputMemberNumber() {
        return $('//*[@resource-id="com.pontomobi.smileshmg:id/editText"]')
    }

    get submitBtn() {
        return $('//*[@resource-id="com.pontomobi.smileshmg:id/positive_confirmation_submit_btn"]')
    }

    get registeredEmailText() {
        return $('//*[@resource-id="com.pontomobi.smileshmg:id/emailHeader"]')
    }

    get maskedEmail() {
        return $('//*[@resource-id="com.pontomobi.smileshmg:id/fragment_forgot_password_registered_email"]')
    }

    get receivePasswordInThisEmailBtn() {
        return $('//*[@resource-id="com.pontomobi.smileshmg:id/reset_password_submit_btn"]')
    }

    get receiveInAnotherEmailBtn() {
        return $('//*[@resource-id="com.pontomobi.smileshmg:id/open_reset_email_btn"]')
    }

    get requestErrorTxt() {
        return $('//*[@resource-id="com.pontomobi.smileshmg:id/dialog_smiles_text"]')
    }

    get requestErrorBtn() {
        return $('//*[@resource-id="com.pontomobi.smileshmg:id/dialog_smiles_continue"]')
    }

    get passwordSentSuccessfullyTitle() {
        return $('//*[@resource-id="com.pontomobi.smileshmg:id/md_title"]')
    }

    get passwordSentSuccessfullyContent() {
        return $('//*[@resource-id="com.pontomobi.smileshmg:id/md_content"]')
    }

    get passwordSentSuccessfullyContentBtn() {
        return $('//*[@resource-id="com.pontomobi.smileshmg:id/md_buttonDefaultPositive"]')
    }

    async skipPageSignIn() {
        // await driver.startActivity('com.pontomobi.smileshmg', 'com.pontomobi.smileshmg.com.pontomobi.smiles.ui.login.LoginActivity')

        await WelcomeScreen.btnIntroJump.click()

        if (await WelcomeScreen.btnDefaultPositive.isExisting()) {
            await WelcomeScreen.btnDefaultPositive.click()
        }

        await WelcomeScreen.btnAcceptAgreed.click()

        await WelcomeScreen.btnSingIn.click()
    }

    async ForgotPasswordWithSmilesNumberOrCpf(cpfOrSmilesNumber, maskedEmail) {
        await SignInScreen.btnForgotPassword.click()

        await expect(this.mainTitle).toHaveText('RECUPERAR SENHA')

        await expect(this.infoTxt).toHaveText('Por segurança, confirma pra gente sua identificação:')

        await this.inputMemberNumber.setValue(cpfOrSmilesNumber)

        await this.submitBtn.click()

        await expect(this.mainTitle).toHaveText('ONDE QUER RECEBER A SENHA?')

        await expect(this.infoTxt).toHaveText('Agora, escolha como quer recuperar:')

        await expect(this.registeredEmailText).toHaveText('E-mail cadastrado:')

        await expect(this.maskedEmail).toHaveText(maskedEmail)

        await this.receivePasswordInThisEmailBtn.click()

        if (await this.requestErrorTxt.isExisting()) {
            await this.requestErrorBtn.click()

            await driver.back()
        } else {
            const title = await this.passwordSentSuccessfullyTitle.getText()
            expect(title).toEqual('Pronto! Enviamos a nova senha')

            const content = await this.passwordSentSuccessfullyContent.getText()
            expect(content).toEqual('Caso não receba em alguns minutos, confira sua pasta de lixeira/spam ou acesse. Fale com a gente.')

            await this.passwordSentSuccessfullyContentBtn.click()

            await expect(SignInScreen.mainTitle).toHaveText('Faça seu login na Smiles')
        }
    }
}

export default new ForgotYourPasswordScreen()
