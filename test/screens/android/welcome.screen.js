class WelcomeScreen {
    get btnIntroJump() {
        return $('//*[@resource-id="com.pontomobi.smileshmg:id/btn_intro_jump"]')
    }

    get btnDefaultPositive() {
        return $('//*[@resource-id="com.pontomobi.smileshmg:id/md_buttonDefaultPositive"]')
    }

    get btnAcceptAgreed() {
        return $('//*[@resource-id="com.pontomobi.smileshmg:id/lgpd_accept_agreed"]')
    }

    get titleWelcome() {
        return $('//*[@resource-id="com.pontomobi.smileshmg:id/login_welcome_user"]')
    }

    get btnSingIn() {
        return $('~btn_login_btn_signIn')
    }

    get btnSignUp() {
        return $('~btn_login_btn_signUp')
    }

    get continueAsVisiting() {
        return $('//*[@resource-id="com.pontomobi.smileshmg:id/continue_as_visitor"]')
    }
}

export default new WelcomeScreen()