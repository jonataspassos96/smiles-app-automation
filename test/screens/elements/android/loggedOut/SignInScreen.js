import BaseConfig from '../../../../../config/BaseConfig'

const { environment: env } = BaseConfig

class SignInScreen {
    get mainTitle() {
        return $('//*[@text="Faça seu login na Smiles"]')
    }

    get backToTheWelcomeScreen() {
        return $(`//*[@resource-id="com.pontomobi.smiles${env}:id/login_account_back"]`)
    }

    get inputMemberNumber() {
        return $('~txt_login_input')
    }

    get inputPassword() {
        return $('~txt_login_password_input')
    }

    get rememberSmilesNumberOrCpfTxt() {
        return $('//*[@text="Lembrar nº Smiles ou CPF"]')
    }

    get toggle() {
        return $(`//*[@resource-id="com.pontomobi.smiles${env}:id/login_remember"]`)
    }

    get submitBtn() {
        return $('~btn_login_btn_signIn')
    }

    get forgotSmilesNumberBtn() {
        return $('~btn_login_forgot_smiles_number')
    }

    get forgotPasswordBtn() {
        return $('~btn_login_forgot_password')
    }

    get didYouReceiveYourGolSmilesCreditCardTxt() {
        return $('//*[@text="Recebeu seu Cartão de Crédito GOL Smiles?"]')
    }

    get memberNumberOrPasswordIsInvalid() {
        return $(`//*[@resource-id="com.pontomobi.smiles${env}:id/dialog_smiles_text"]`)
    }

    get continueInSignInScreenBtn() {
        return $(`//*[@resource-id="com.pontomobi.smiles${env}:id/dialog_smiles_continue"]`)
    }
}

export default new SignInScreen()
