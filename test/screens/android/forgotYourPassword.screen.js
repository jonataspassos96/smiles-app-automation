import WelcomeScreen from './welcome.screen'
import SignInScreen from './signIn.screen'

class ForgotYourPasswordScreen {
    get mainTitle() {
        return $('//*[@resource-id="com.pontomobi.smiles:id/activity_title"]')
        // ...smileshmg
    }

    get infoTxt() {
        return $('//*[@resource-id="com.pontomobi.smiles:id/activity_info"]')
        // ...smileshmg
    }

    get inputMemberNumber() {
        return $('//*[@resource-id="com.pontomobi.smiles:id/editText"]')
        // ...smileshmg
    }

    get submitBtn() {
        return $('//*[@resource-id="com.pontomobi.smiles:id/positive_confirmation_submit_btn"]')
        // ...smileshmg
    }

    get registeredEmailText() {
        return $('//*[@resource-id="com.pontomobi.smiles:id/emailHeader"]')
        // ...smileshmg
    }

    get maskedEmail() {
        return $('//*[@resource-id="com.pontomobi.smiles:id/fragment_forgot_password_registered_email"]')
        // ...smileshmg
    }

    get receivePasswordInThisEmailBtn() {
        return $('//*[@resource-id="com.pontomobi.smiles:id/reset_password_submit_btn"]')
        // ...smileshmg
    }

    get receiveInAnotherEmailBtn() {
        return $('//*[@resource-id="com.pontomobi.smiles:id/open_reset_email_btn"]')
        // ...smileshmg
    }

    get requestErrorTxt() {
        return $('//*[@resource-id="com.pontomobi.smiles:id/dialog_smiles_text"]')
        // ...smileshmg
    }

    get requestErrorBtn() {
        return $('//*[@resource-id="com.pontomobi.smiles:id/dialog_smiles_continue"]')
        // ...smileshmg
    }

    get passwordSentSuccessfullyTitle() {
        return $('//*[@resource-id="com.pontomobi.smiles:id/md_title"]')
        // ...smileshmg
    }

    get passwordSentSuccessfullyContent() {
        return $('//*[@resource-id="com.pontomobi.smiles:id/md_content"]')
    }

    get passwordSentSuccessfullyContentBtn() {
        return $('//*[@resource-id="com.pontomobi.smiles:id/md_buttonDefaultPositive"]')
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

        await expect(this.mainTitle).toBeDisplayed()

        await expect(this.infoTxt).toBeDisplayed()

        await this.inputMemberNumber.setValue(cpfOrSmilesNumber)

        await this.submitBtn.click()

        await expect(this.mainTitle).toBeDisplayed()

        await expect(this.infoTxt).toBeDisplayed()

        await expect(this.registeredEmailText).toBeDisplayed()

        const maskedEmailResponse = await this.maskedEmail.getText()
        expect(maskedEmailResponse).toEqual(maskedEmail)

        await this.receivePasswordInThisEmailBtn.click()

        if (await this.requestErrorTxt.isExisting()) {
            await this.requestErrorBtn.click()

            await driver.back()
        } else {
            const title = await this.passwordSentSuccessfullyTitle.getText()
            expect(title).toEqual('Senha enviada com sucesso')

            const content = await this.passwordSentSuccessfullyContent.getText()
            expect(content).toEqual('Uma nova senha será enviada em alguns minutos para o e-mail ****sos@rethink.dev')

            await this.passwordSentSuccessfullyContentBtn.click()

            await expect(SignInScreen.mainTitle).toHaveText('Faça seu login na Smiles')
        }
    }
}

export default new ForgotYourPasswordScreen()
