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
})