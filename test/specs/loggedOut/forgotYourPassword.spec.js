import WelcomeScript from '../../screens/scripts/loggedOut/WelcomeScript'
import SignInScript from '../../screens/scripts/loggedOut/SignInScript'
import ForgotYourPasswordScript from '../../screens/scripts/loggedOut/ForgotYourPasswordScript'

import users from '../../../config/dataMass/users'

const { userHMG: user } = users

describe('FLuxo de Esqueceu sua senha?', () => {
    before(async () => {
        await ForgotYourPasswordScript.access()
    })

    describe('Testando com usuário apto a responder os questionários', () => {
        it('Deve inserir o N˚ Smiles inválido e exibir o modal de "Usuário não cadastrado."', async () => {
            await ForgotYourPasswordScript.fillFormWithSmilesNumberOrCpf('123123123')
            await ForgotYourPasswordScript.submit()
            await ForgotYourPasswordScript.userNotRegisteredModal()
        })

        it('Deve inserir o N˚ CPF inválido e exibir o modal de "Usuário não cadastrado."', async () => {
            await ForgotYourPasswordScript.fillFormWithSmilesNumberOrCpf('12312312300')
            await ForgotYourPasswordScript.submit()
            await ForgotYourPasswordScript.userNotRegisteredModal()
        })

        it('Deve recuperar senha com o mesmo email utilizando o N˚ Smiles', async () => {
            await ForgotYourPasswordScript.fillFormWithSmilesNumberOrCpf('107661050')
            await ForgotYourPasswordScript.submit()

            await ForgotYourPasswordScript.validateElementsOnMainScreen('****953@gmail.com')
            await ForgotYourPasswordScript.receivePasswordInThisEmailBtn()

            await ForgotYourPasswordScript.requestRecoverPasswordWithTheSameEmailSuccessfully()
        })

        it('Deve recuperar senha com o mesmo email utilizando o CPF', async () => {
            await SignInScript.clickForgotPassword()

            await ForgotYourPasswordScript.fillFormWithSmilesNumberOrCpf('97719277953')
            await ForgotYourPasswordScript.submit()

            await ForgotYourPasswordScript.validateElementsOnMainScreen('****953@gmail.com')
            await ForgotYourPasswordScript.receivePasswordInThisEmailBtn()

            await ForgotYourPasswordScript.requestRecoverPasswordWithTheSameEmailSuccessfully()
        })

        it('Deve recuperar senha com outro email utilizando o N˚ Smiles', async () => {
            await SignInScript.clickForgotPassword()

            await ForgotYourPasswordScript.fillFormWithSmilesNumberOrCpf('107661050')
            await ForgotYourPasswordScript.submit()

            await ForgotYourPasswordScript.validateElementsOnMainScreen('****953@gmail.com')
            await ForgotYourPasswordScript.receiveInAnotherEmailBtn()

            await ForgotYourPasswordScript.validateElementsOnTheNewEmailScreen()
            await ForgotYourPasswordScript.fillInFormWithNewEmail()
            await ForgotYourPasswordScript.nextBtn()

            await ForgotYourPasswordScript.fillQuestionnaires()
            await ForgotYourPasswordScript.recoverPasswordWithAnotherEmail()
        })

        it('Deve recuperar senha com outro email utilizando o CPF', async () => {
            await WelcomeScript.clickSignInBtn()
            await SignInScript.clickForgotPassword()

            await ForgotYourPasswordScript.fillFormWithSmilesNumberOrCpf('97719277953')
            await ForgotYourPasswordScript.submit()

            await ForgotYourPasswordScript.validateElementsOnMainScreen('****953@gmail.com')
            await ForgotYourPasswordScript.receiveInAnotherEmailBtn()

            await ForgotYourPasswordScript.validateElementsOnTheNewEmailScreen()
            await ForgotYourPasswordScript.fillInFormWithNewEmail()
            await ForgotYourPasswordScript.nextBtn()

            await ForgotYourPasswordScript.fillQuestionnaires()
            await ForgotYourPasswordScript.recoverPasswordWithAnotherEmail()
        })

        it('Estourar o tempo durante o preenchimento do formulário', async () => {
            await WelcomeScript.clickSignInBtn()
            await SignInScript.clickForgotPassword()

            await ForgotYourPasswordScript.fillFormWithSmilesNumberOrCpf('107661050')
            await ForgotYourPasswordScript.submit()

            await ForgotYourPasswordScript.validateElementsOnTheNewEmailScreen()
            await ForgotYourPasswordScript.fillInFormWithNewEmail()
            await ForgotYourPasswordScript.nextBtn()

            await ForgotYourPasswordScript.validateElementsOnTheNewEmailScreen()
        })
    })

    describe('Testando com usuário que não está apto a responder os questionários', () => {
        it('Deve recuperar senha com outro email utilizando o N˚ Smiles', async () => {
            await WelcomeScript.clickSignInBtn()
            await SignInScript.clickForgotPassword()

            await ForgotYourPasswordScript.fillFormWithSmilesNumberOrCpf('107661470')
            await ForgotYourPasswordScript.submit()

            await ForgotYourPasswordScript.validateElementsOnMainScreen('****294@vpsrec.com')
            await ForgotYourPasswordScript.receiveInAnotherEmailBtn()

            await ForgotYourPasswordScript.fillInFormWithNewEmail()
            await ForgotYourPasswordScript.nextBtn()

            await ForgotYourPasswordScript.recoverPasswordWithAnotherEmail()
        })

        it('Deve recuperar senha com outro email utilizando o CPF', async () => {
            await WelcomeScript.clickSignInBtn()
            await SignInScript.clickForgotPassword()

            await ForgotYourPasswordScript.fillFormWithSmilesNumberOrCpf('71148553037')
            await ForgotYourPasswordScript.submit()

            await ForgotYourPasswordScript.validateElementsOnMainScreen('****294@vpsrec.com')
            await ForgotYourPasswordScript.receiveInAnotherEmailBtn()

            await ForgotYourPasswordScript.validateElementsOnTheNewEmailScreen()
            await ForgotYourPasswordScript.fillInFormWithNewEmail()
            await ForgotYourPasswordScript.nextBtn()

            await ForgotYourPasswordScript.recoverPasswordWithAnotherEmail()
        })
    })
})
