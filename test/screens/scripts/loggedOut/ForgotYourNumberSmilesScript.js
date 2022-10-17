import ForgotYourNumberSmilesScreen from '../../elements/android/loggedOut/ForgotYourNumberSmilesScreen'
import WelcomeScreen from '../../elements/android/loggedOut/WelcomeScreen'
import WelcomeScript from './WelcomeScript'
import SignInScript from './SignInScript'

class ForgotYourNumberSmilesScript {
    async access() {
        await WelcomeScript.access()
        await WelcomeScript.clickSignInBtn()
        await SignInScript.clickForgotSmilesNumber()
    }

    async clickCpfBtn() {
        const text = await ForgotYourNumberSmilesScreen.mainTitle.getText()
        const newText = text.replace(/(\r\n|\n|\r)/gm, ' ')

        await expect(newText).toEqual('Esqueci meu número Smiles')

        await ForgotYourNumberSmilesScreen.cpfBtn.click()
    }

    async clickForeignBtn() {
        const text = await ForgotYourNumberSmilesScreen.mainTitle.getText()
        const newText = text.replace(/(\r\n|\n|\r)/gm, ' ')

        await expect(newText).toEqual('Esqueci meu número Smiles')

        await ForgotYourNumberSmilesScreen.foreignerBtn.click()
    }

    async fillForm(payload) {
        const inputFields = await ForgotYourNumberSmilesScreen.inputFields

        const resolve = inputFields.map((field, i) => field.setValue(payload[i]))

        await Promise.all(resolve)
    }

    async submit() {
        await ForgotYourNumberSmilesScreen.submitBtn.click()
    }

    async validateSucessRequest() {
        await expect(ForgotYourNumberSmilesScreen.modalTitle)
            .toHaveText('Número Smiles.')

        await expect(ForgotYourNumberSmilesScreen.modalInfoTxt)
            .toHaveText('Veja aqui seu número Smiles! 107669004')

        await ForgotYourNumberSmilesScreen.modalAfterBtn.click()

        const text = await ForgotYourNumberSmilesScreen.mainTitle.getText()
        const newText = text.replace(/(\r\n|\n|\r)/gm, ' ')

        await expect(newText).toEqual('Esqueci meu número Smiles')

        this.submit()

        await ForgotYourNumberSmilesScreen.modalOkBtn.click()

        const welcomeTxt = await WelcomeScreen.mainTitle.getText()
        await expect(welcomeTxt).toEqual('Seja bem-vindo.')
    }

    // async validateCpfErrorRequest(cpfIsFilled) {
    //     await expect(ForgotYourNumberSmilesScreen.modalTitle)
    //         .toHaveText('Smiles')

    //     cpfIsFilled
    //         ? await expect(ForgotYourNumberSmilesScreen.modalInfoTxt)
    //             .toHaveText('Usuário não cadastrado')
    //         : await expect(ForgotYourNumberSmilesScreen.modalInfoTxt)
    //             .toHaveText('É necessário informar seu CPF')

    //     await ForgotYourNumberSmilesScreen.modalOkBtn.click()
    // }

    // async validateBirthDateErrorRequest(birthDateIsFilled) {
    //     await expect(ForgotYourNumberSmilesScreen.modalTitle)
    //         .toHaveText('Smiles')

    //     birthDateIsFilled
    //         ? await expect(ForgotYourNumberSmilesScreen.modalInfoTxt)
    //             .toHaveText('Data de nascimento inválida')
    //         : await expect(ForgotYourNumberSmilesScreen.modalInfoTxt)
    //             .toHaveText('É necessário informar sua data de nascimento')

    //     await ForgotYourNumberSmilesScreen.modalOkBtn.click()
    // }

    // async validateEmailErrorRequest(emailIsFilled) {
    //     await expect(ForgotYourNumberSmilesScreen.modalTitle)
    //         .toHaveText('Smiles')

    //     emailIsFilled
    //         ? await expect(ForgotYourNumberSmilesScreen.modalInfoTxt)
    //             .toHaveText('E-mail inválido')
    //         : await expect(ForgotYourNumberSmilesScreen.modalInfoTxt)
    //             .toHaveText('É necessário informar seu e-mail')

    //     await ForgotYourNumberSmilesScreen.modalOkBtn.click()
    // }

    async validateCpfErrorRequest(cpfIsFilled) {
        this.validateErrorRequest(cpfIsFilled, 'Usuário não cadastrado', 'É necessário informar seu CPF')
    }

    async validateBirthDateErrorRequest(birthDateIsFilled) {
        this.validateErrorRequest(birthDateIsFilled, 'Data de nascimento inválida', 'É necessário informar sua data de nascimento')
    }

    async validateEmailErrorRequest(emailIsFilled) {
        this.validateErrorRequest(emailIsFilled, 'E-mail inválido', 'É necessário informar seu e-mail')
    }

    async validateErrorRequest(fieldIsFilled, textExpectedToFilled, textExpectedToNotFilled) {
        await expect(ForgotYourNumberSmilesScreen.modalTitle)
            .toHaveText('Smiles')

        await expect(ForgotYourNumberSmilesScreen.modalInfoTxt)
            .toHaveText(
                fieldIsFilled
                    ? textExpectedToFilled
                    : textExpectedToNotFilled
            )
    }
}

export default new ForgotYourNumberSmilesScript()
