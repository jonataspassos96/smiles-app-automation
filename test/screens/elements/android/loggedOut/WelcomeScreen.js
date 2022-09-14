import BaseConfig from '../../../../../config/BaseConfig'

const { environment: env } = BaseConfig

class WelcomeScreen {
    get btnIntroJump() {
        return $(`//*[@resource-id="com.pontomobi.smiles${env}:id/btn_intro_jump"]`)
    }

    get btnDefaultPositive() {
        return $(`//*[@resource-id="com.pontomobi.smiles${env}:id/md_buttonDefaultPositive"]`)
    }

    get btnAcceptAgreed() {
        return $(`//*[@resource-id="com.pontomobi.smiles${env}:id/lgpd_accept_agreed"]`)
    }

    get mainTitle() {
        return $(`//*[@resource-id="com.pontomobi.smiles${env}:id/login_welcome_user"]`)
    }

    get singInBtn() {
        return $('~btn_login_btn_signIn')
    }

    get signUpBtn() {
        return $('~btn_login_btn_signUp')
    }

    get continueAsVisiting() {
        return $(`//*[@resource-id="com.pontomobi.smiles${env}:id/continue_as_visitor"]`)
    }
}

export default new WelcomeScreen()
