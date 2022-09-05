class WelcomeScreen {
    get btnIntroJump() {
        return $('//*[@resource-id="com.pontomobi.smiles:id/btn_intro_jump"]')
        // ...smileshmg
    }

    get btnDefaultPositive() {
        return $('//*[@resource-id="com.pontomobi.smiles:id/md_buttonDefaultPositive"]')
        // ...smileshmg
    }

    get btnAcceptAgreed() {
        return $('//*[@resource-id="com.pontomobi.smiles:id/lgpd_accept_agreed"]')
        // ...smileshmg
    }

    get titleWelcome() {
        return $('//*[@resource-id="com.pontomobi.smiles:id/login_welcome_user"]')
        // ...smileshmg
    }

    get btnSingIn() {
        return $('~btn_login_btn_signIn')
    }

    get btnSignUp() {
        return $('~btn_login_btn_signUp')
    }

    get continueAsVisiting() {
        return $('//*[@resource-id="com.pontomobi.smiles:id/continue_as_visitor"]')
        // ...smileshmg
    }
}

export default new WelcomeScreen()
