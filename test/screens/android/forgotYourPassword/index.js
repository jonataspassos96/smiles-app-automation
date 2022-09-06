import WelcomeScreen from '../welcome.screen'
import SignInScreen from '../signIn.screen'
import el from './elements'

console.log('WELCOMEEEEEEEEEEEEE', WelcomeScreen);
console.log('ELEMENTSSSSSSSSSSSS', el);

class forgotYourPasswordScreen {
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

        await expect(el.mainTitle).toHaveText('RECUPERAR SENHA')

        await expect(el.infoTxt).toHaveText('Por segurança, confirma pra gente sua identificação:')

        await el.inputMemberNumber.setValue(cpfOrSmilesNumber)

        await el.submitBtn.click()

        await expect(el.mainTitle).toHaveText('ONDE QUER RECEBER A SENHA?')

        await expect(el.infoTxt).toHaveText('Agora, escolha como quer recuperar:')

        await expect(el.registeredEmailText).toHaveText('E-mail cadastrado:')

        await expect(el.maskedEmail).toHaveText(maskedEmail)

        await el.receivePasswordInThisEmailBtn.click()

        if (await el.requestErrorTxt.isExisting()) {
            await el.requestErrorBtn.click()

            await driver.back()
        } else {
            const title = await el.passwordSentSuccessfullyTitle.getText()
            expect(title).toEqual('Pronto! Enviamos a nova senha')

            const content = await el.passwordSentSuccessfullyContent.getText()
            expect(content).toEqual('Caso não receba em alguns minutos, confira sua pasta de lixeira/spam ou acesse. Fale com a gente.')

            await el.passwordSentSuccessfullyContentBtn.click()

            await expect(SignInScreen.mainTitle).toHaveText('Faça seu login na Smiles')
        }
    }
}

export default new forgotYourPasswordScreen()
