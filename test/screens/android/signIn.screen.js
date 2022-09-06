import WelcomeScreen from './welcome.screen';

class SignInScreen {
    get mainTitle() {
        return $('//*[@text="Faça seu login na Smiles"]')
    }

    get backToTheWelcomeScreen() {
        return $('//*[@resource-id="com.pontomobi.smileshmg:id/login_account_back"]')
    }

    get inputMemberNumber() {
        return $('~txt_login_input')
    }

    get inputPassword() {
        return $('~txt_login_password_input')
    }

    get txtRememberSmilesNumberOrCPF() {
        return $('//*[@text="Lembrar nº Smiles ou CPF"]')
    }

    get toggleClickableRemember() {
        return $('//*[@resource-id="com.pontomobi.smileshmg:id/login_remember"]')
    }

    get submitBtn() {
        return $('~btn_login_btn_signIn')
    }

    get btnForgotSmilesNumber() {
        return $('~btn_login_forgot_smiles_number')
    }

    get btnForgotPassword() {
        return $('~btn_login_forgot_password')
    }

    get txtDidYouReceiveYourGolSmilesCreditCard() {
        return $('//*[@text="Recebeu seu Cartão de Crédito GOL Smiles?"]')
    }

    get memberNumberOrPasswordIsInvalid() {
        return $('//*[@resource-id="com.pontomobi.smileshmg:id/dialog_smiles_text"]')
    }

    get btnContinueInSignInScreen() {
        return $('//*[@resource-id="com.pontomobi.smileshmg:id/dialog_smiles_continue"]')
    }

    async skipPageWelcome() {
        // await driver.startActivity('com.pontomobi.smileshmg', 'com.pontomobi.smileshmg.com.pontomobi.smiles.ui.login.LoginActivity')

        await WelcomeScreen.btnIntroJump.click()

        if (await WelcomeScreen.btnDefaultPositive.isExisting()) {
            await WelcomeScreen.btnDefaultPositive.click()
        }

        await WelcomeScreen.btnAcceptAgreed.click()

        await WelcomeScreen.singInBtn.click()
    }
}

export default new SignInScreen()
