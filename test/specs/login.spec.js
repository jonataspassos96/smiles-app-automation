const { AppiumDriver } = require("appium/build/lib/appium")

describe('Login', () => {
    beforeEach(() => {
        driver.launchApp();
    })

    it('Deve realizar o login e entrar na página principal', async () => {
        await $('//android.widget.Button[@resource-id="com.android.permissioncontroller:id/permission_deny_button"]').click()

        await $('//android.widget.TextView[@resource-id="com.pontomobi.smileshmg:id/btn_intro_jump"]').click()

        await $('//android.widget.Button[@resource-id="com.android.permissioncontroller:id/permission_deny_and_dont_ask_again_button"]').click()

        await $('//android.widget.Button[@resource-id="com.pontomobi.smileshmg:id/lgpd_accept_agreed"]').click()

        const title = await $('//android.widget.TextView[@text="Seja bem-vindo."]')

        await expect(title).toHaveText('Seja bem-vindo.')

        await $('~btn_login_btn_signIn').click()

        const loginInput = await $('~txt_login_input')
        await loginInput.setValue('123 479 425')

        const passwordInput = await $('~txt_login_password_input')
        await passwordInput.setValue('1010')

        await $('~btn_login_btn_signIn').click()

        const userName = await $('//android.widget.TextView[@text="Olá Matias"]')
        expect(userName).toHaveText('Olá Matias')
    })

    it('Deve exibir mensagem de erro ao digitar dados inválidos', async () => {
        await $('//android.widget.Button[@resource-id="com.android.permissioncontroller:id/permission_deny_button"]').click()

        await $('//android.widget.TextView[@resource-id="com.pontomobi.smileshmg:id/btn_intro_jump"]').click()

        await $('//android.widget.Button[@resource-id="com.android.permissioncontroller:id/permission_deny_and_dont_ask_again_button"]').click()

        await $('//android.widget.Button[@resource-id="com.pontomobi.smileshmg:id/lgpd_accept_agreed"]').click()

        const title = await $('//android.widget.TextView[@text="Seja bem-vindo."]')

        await expect(title).toHaveText('Seja bem-vindo.')

        await $('~btn_login_btn_signIn').click()

        const loginInput = await $('~txt_login_input')
        await loginInput.setValue('123 479 425')

        const passwordInput = await $('~txt_login_password_input')
        await passwordInput.setValue('1234')

        const errorMessage = await $('//android.widget.TextView[@resource-id="com.pontomobi.smileshmg:id/dialog_smiles_text"]')
        expect(errorMessage).toHaveText('Usuário não encontrado ou Senha está inválida.')
    })

    it('Usuário esqueceu sua senha', async () => {
        await $('//android.widget.Button[@resource-id="com.android.permissioncontroller:id/permission_deny_button"]').click()

        await $('//android.widget.TextView[@resource-id="com.pontomobi.smileshmg:id/btn_intro_jump"]').click()

        await $('//android.widget.Button[@resource-id="com.android.permissioncontroller:id/permission_deny_and_dont_ask_again_button"]').click()

        await $('//android.widget.Button[@resource-id="com.pontomobi.smileshmg:id/lgpd_accept_agreed"]').click()

        const title = await $('//android.widget.TextView[@text="Seja bem-vindo."]')

        await expect(title).toHaveText('Seja bem-vindo.')

        await $('~btn_login_btn_signIn').click()

        await $('~btn_login_forgot_password').click()

        const loginInput = await $('//android.widget.EditText[@resource-id="com.pontomobi.smileshmg:id/editText"]')
        await loginInput.setValue('123 479 425')

        await $('//android.widget.Button[@resource-id="com.pontomobi.smileshmg:id/positive_confirmation_submit_btn"]').click()

        const email = await $('//android.widget.TextView[@resource-id="com.pontomobi.smileshmg:id/fragment_forgot_password_registered_email"]')
        expect(email).toHaveText('****mat@mat.com.br')

        // await $('//android.widget.Button[@resource-id="com.pontomobi.smileshmg:id/reset_password_submit_btn"]').click()
    })
})