import WelcomeScript from './WelcomeScript'
import SignInScript from './SignInScript'
import WelcomeScreen from '../../elements/android/loggedOut/WelcomeScreen'
import SignInScreen from '../../elements/android/loggedOut/SignInScreen'
import ForgotYourPasswordScreen from '../../elements/android/loggedOut/ForgotYourPasswordScreen'

class forgotYourPasswordScript {
    async acess() {
        await WelcomeScript.acess()
        await WelcomeScript.clickSignInBtn()
    }

    async recoverPasswordWithTheSameEmail(cpfOrSmilesNumber, maskedEmail) {
        await SignInScript.clickForgotPassword()

        await expect(ForgotYourPasswordScreen.mainTitle)
            .toHaveText('RECUPERAR SENHA')

        await expect(ForgotYourPasswordScreen.infoTxt)
            .toHaveText('Por segurança, confirma pra gente sua identificação:')

        await ForgotYourPasswordScreen.inputMemberNumber.setValue(cpfOrSmilesNumber)

        await ForgotYourPasswordScreen.submitBtn.click()

        await expect(ForgotYourPasswordScreen.mainTitle)
            .toHaveText('ONDE QUER RECEBER A SENHA?')

        await expect(ForgotYourPasswordScreen.infoTxt)
            .toHaveText('Agora, escolha como quer recuperar:')

        await expect(ForgotYourPasswordScreen.registeredEmailText)
            .toHaveText('E-mail cadastrado:')

        await expect(ForgotYourPasswordScreen.maskedEmail).toHaveText(maskedEmail)

        await ForgotYourPasswordScreen.receivePasswordInThisEmailBtn.click()

        if (await ForgotYourPasswordScreen.requestErrorTxt.isExisting()) {
            await ForgotYourPasswordScreen.requestErrorBtn.click()

            await driver.back()
        } else {
            const title = await ForgotYourPasswordScreen.passwordSentSuccessfullyTitle.getText()
            expect(title).toEqual('Pronto! Enviamos a nova senha')

            const content = await ForgotYourPasswordScreen.passwordSentSuccessfullyContent.getText()
            expect(content).toEqual('Caso não receba em alguns minutos, confira sua pasta de lixeira/spam ou acesse. Fale com a gente.')

            await ForgotYourPasswordScreen.passwordSentSuccessfullyContentBtn.click()

            await expect(SignInScreen.mainTitle).toHaveText('Faça seu login na Smiles')
        }
    }

    async recoverPasswordWithAnotherEmail(cpfOrSmilesNumber) {
        await SignInScript.clickForgotPassword()

        await ForgotYourPasswordScreen.inputMemberNumber.setValue(cpfOrSmilesNumber)

        await ForgotYourPasswordScreen.submitBtn.click()

        await ForgotYourPasswordScreen.receiveInAnotherEmailBtn.click()

        await expect(ForgotYourPasswordScreen.mainTitle)
            .toHaveText('RECUPERAR SENHA')

        await expect(ForgotYourPasswordScreen.otherInfoTxt)
            .toHaveText('Digite um e-mail que você tem como conferir agora:')

        await ForgotYourPasswordScreen.newEmail.setValue('teste@mail.com')
        await ForgotYourPasswordScreen.confirmNewEmail.setValue('teste@mail.com')

        await ForgotYourPasswordScreen.nextBtn.click()

        const questionnaires = ['Pergunta 01', 'Pergunta 02', 'Pergunta 03', 'Pergunta 04']

        questionnaires.forEach(async (quiz) => {
            await expect(ForgotYourPasswordScreen.mainTitle)
                .toHaveText('PERGUNTA DE SEGURANÇA')

            await expect(ForgotYourPasswordScreen.quiz)
                .toHaveText(quiz)

            await ForgotYourPasswordScreen.nextBtn.click()
        })

        await expect(ForgotYourPasswordScreen.titleAwaitAnalysis)
            .toHaveText('PRONTO! AGORA É SÓ AGUARDAR NOSSA ANÁLISE')

        await ForgotYourPasswordScreen.nextBtn.click()

        await WelcomeScreen.mainTitle.toHaveText('Seja bem-vindo.')
    }
}

export default new forgotYourPasswordScript()
