import WelcomeScript from './WelcomeScript'
import SignInScript from './SignInScript'
import WelcomeScreen from '../../elements/android/loggedOut/WelcomeScreen'
import SignInScreen from '../../elements/android/loggedOut/SignInScreen'
import ForgotYourPasswordScreen from '../../elements/android/loggedOut/ForgotYourPasswordScreen'

class forgotYourPasswordScript {
    async acess() {
        await WelcomeScript.acess()
        await WelcomeScript.clickSignInBtn()
        await SignInScript.clickForgotPassword()
    }

    async fillFormWithSmilesNumberOrCpf(cpfOrSmilesNumber) {
        await expect(ForgotYourPasswordScreen.mainTitle)
            .toHaveText('RECUPERAR SENHA')

        await expect(ForgotYourPasswordScreen.infoTxt)
            .toHaveText('Por segurança, confirma pra gente sua identificação:')

        await ForgotYourPasswordScreen.inputMemberNumber
            .setValue(cpfOrSmilesNumber)
    }

    async submit() {
        await ForgotYourPasswordScreen.submitBtn.click()
    }

    async validateTheElementsDisplayedOnTheScreen(maskedEmail) {
        await expect(ForgotYourPasswordScreen.mainTitle)
            .toHaveText('ONDE QUER RECEBER A SENHA?')

        await expect(ForgotYourPasswordScreen.infoTxt)
            .toHaveText('Agora, escolha como quer recuperar:')

        await expect(ForgotYourPasswordScreen.registeredEmailText)
            .toHaveText('E-mail cadastrado:')

        await expect(ForgotYourPasswordScreen.maskedEmail).toHaveText(maskedEmail)
    }

    async receivePasswordInThisEmailBtn() {
        await ForgotYourPasswordScreen.receivePasswordInThisEmailBtn.click()
    }

    async receiveInAnotherEmailBtn() {
        await ForgotYourPasswordScreen.receiveInAnotherEmailBtn.click()
    }

    async recoverPasswordWithTheSameEmail() {
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

    async fillInFormWithNewEmail() {
        await expect(ForgotYourPasswordScreen.mainTitle)
            .toHaveText('RECUPERAR SENHA')

        await expect(ForgotYourPasswordScreen.otherInfoTxt)
            .toHaveText('Digite um e-mail que você tem como conferir agora:')

        const entries = await ForgotYourPasswordScreen.newEmailEntries

        for (const entry of entries) {
            await entry.setValue('teste@mail.com')
        }
    }

    async nextBtn() {
        await ForgotYourPasswordScreen.nextBtn.click()
    }

    async fillQuestionnaires() {
        const questionnaires = ['Pergunta 01', 'Pergunta 02', 'Pergunta 03', 'Pergunta 04']

        for (const quiz of questionnaires) {
            await expect(ForgotYourPasswordScreen.mainTitle)
                .toHaveText('PERGUNTA DE SEGURANÇA')

            await expect(ForgotYourPasswordScreen.quiz)
                .toHaveText(quiz)

            await ForgotYourPasswordScreen.selectTheAnswer.click()
            await ForgotYourPasswordScreen.answer.click()
            await this.nextBtn.click()
        }
    }

    async recoverPasswordWithAnotherEmail() {
        await expect(ForgotYourPasswordScreen.titleAwaitAnalysis)
            .toHaveText('PRONTO! AGORA É SÓ AGUARDAR NOSSA ANÁLISE')

        await this.nextBtn.click()

        const title = await WelcomeScreen.mainTitle.getText()
        expect(title).toEqual('Seja bem-vindo.')
    }
}

export default new forgotYourPasswordScript()
