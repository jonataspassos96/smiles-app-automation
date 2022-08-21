const { AppiumDriver } = require("appium/build/lib/appium")

describe('Login', () => {
    beforeEach(async () => {
        await driver.launchApp();

        await $('//android.widget.Button[@resource-id="com.android.permissioncontroller:id/permission_deny_button"]').click()

        await $('//android.widget.TextView[@resource-id="com.pontomobi.smileshmg:id/btn_intro_jump"]').click()

        await $('//android.widget.Button[@resource-id="com.android.permissioncontroller:id/permission_deny_and_dont_ask_again_button"]').click()

        await $('//android.widget.Button[@resource-id="com.pontomobi.smileshmg:id/lgpd_accept_agreed"]').click()

        const title = await $('//android.widget.TextView[@text="Seja bem-vindo."]')

        await expect(title).toHaveText('Seja bem-vindo.')

        await $('~btn_login_btn_signIn').click()
    })

    it('Deve realizar o login e entrar na página principal', async () => {
        const loginInput = await $('~txt_login_input')
        await loginInput.setValue('123 479 425')

        const passwordInput = await $('~txt_login_password_input')
        await passwordInput.setValue('1010')

        await $('~btn_login_btn_signIn').click()

        const userName = await $('//android.widget.TextView[@text="Olá Matias"]')
        expect(userName).toHaveText('Olá Matias')
    })

    it('Deve exibir mensagem de erro ao digitar dados inválidos', async () => {
        const loginInput = await $('~txt_login_input')
        await loginInput.setValue('123 479 425')

        const passwordInput = await $('~txt_login_password_input')
        await passwordInput.setValue('1234')

        const errorMessage = await $('//android.widget.TextView[@resource-id="com.pontomobi.smileshmg:id/dialog_smiles_text"]')
        expect(errorMessage).toHaveText('Usuário não encontrado ou Senha está inválida.')
    })
})

describe('Esqueceu sua senha', () => {
    beforeEach(async () => {
        await driver.launchApp();

        await $('//android.widget.Button[@resource-id="com.android.permissioncontroller:id/permission_deny_button"]').click()

        await $('//android.widget.TextView[@resource-id="com.pontomobi.smileshmg:id/btn_intro_jump"]').click()

        await $('//android.widget.Button[@resource-id="com.android.permissioncontroller:id/permission_deny_and_dont_ask_again_button"]').click()

        await $('//android.widget.Button[@resource-id="com.pontomobi.smileshmg:id/lgpd_accept_agreed"]').click()

        const title = await $('//android.widget.TextView[@text="Seja bem-vindo."]')

        await expect(title).toHaveText('Seja bem-vindo.')

        await $('~btn_login_btn_signIn').click()

        await $('~btn_login_forgot_password').click()
    })

    it('Deve inserir dados válidos e enviar recuperação de senha para o email principal', async () => {
        const loginInput = await $('//android.widget.EditText[@resource-id="com.pontomobi.smileshmg:id/editText"]')
        await loginInput.setValue('123 479 425')

        await $('//android.widget.Button[@resource-id="com.pontomobi.smileshmg:id/positive_confirmation_submit_btn"]').click()

        const email = await $('//android.widget.TextView[@resource-id="com.pontomobi.smileshmg:id/fragment_forgot_password_registered_email"]')
        expect(email).toHaveText('****mat@mat.com.br')

        // await $('//android.widget.Button[@resource-id="com.pontomobi.smileshmg:id/reset_password_submit_btn"]').click()
    })

    it('Deve inserir dados válidos e enviar recuperação de senha para outro email', async () => {
        const loginInput = await $('//android.widget.EditText[@resource-id="com.pontomobi.smileshmg:id/editText"]')
        await loginInput.setValue('123 479 425')

        await $('//android.widget.Button[@resource-id="com.pontomobi.smileshmg:id/positive_confirmation_submit_btn"]').click()

        const email = await $('//android.widget.TextView[@resource-id="com.pontomobi.smileshmg:id/fragment_forgot_password_registered_email"]')
        expect(email).toHaveText('****mat@mat.com.br')

        await $('//android.widget.TextView[@resource-id="com.pontomobi.smileshmg:id/open_reset_email_btn"]').click()

        const newEmail = await $('//android.widget.EditText[@resource-id="/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.view.ViewGroup/android.widget.LinearLayout[1]/android.widget.LinearLayout/android.widget.RelativeLayout/android.widget.RelativeLayout/android.widget.RelativeLayout/android.widget.LinearLayout/android.widget.EditText"]')
        newEmail.setValue('jonataspassos691@yahoo.com')

        const confirmNewEmail = await $('//android.widget.EditText[@resource-id="/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.view.ViewGroup/android.widget.LinearLayout[2]/android.widget.LinearLayout/android.widget.RelativeLayout/android.widget.RelativeLayout/android.widget.RelativeLayout/android.widget.LinearLayout/android.widget.EditText"]')
        confirmNewEmail.setValue('jonataspassos691@yahoo.com')

        await $('//android.widget.Button[@resource-id="com.pontomobi.smileshmg:id/next"]').click()

        const title = await $('//android.widget.TextView[@resource-id="com.pontomobi.smileshmg:id/header"]')
        expect(title).toHaveText('Para receber sua senha, preencha os dados abaixo:')
    })

    it('Deve inserir dados inválidos', async () => {
        const loginInputNumberSmiles = await $('//android.widget.EditText[@resource-id="com.pontomobi.smileshmg:id/editText"]')
        await loginInputNumberSmiles.setValue('123 479 426')

        await $('//android.widget.Button[@resource-id="com.pontomobi.smileshmg:id/positive_confirmation_submit_btn"]').click()

        const textNumberSmiles = await $('//android.widget.TextView[@resource-id="com.pontomobi.smileshmg:id/md_content"]')
        expect(textNumberSmiles).toHaveText('Usuário não cadastrado.')

        await $('//android.widget.TextView[@resource-id="com.pontomobi.smileshmg:id/md_buttonDefaultPositive"]').click()

        const loginInputCpf = await $('//android.widget.EditText[@resource-id="com.pontomobi.smileshmg:id/editText"]')
        await loginInputCpf.setValue('044 745 731 46')

        await $('//android.widget.Button[@resource-id="com.pontomobi.smileshmg:id/positive_confirmation_submit_btn"]').click()

        const textCpf = await $('//android.widget.TextView[@resource-id="com.pontomobi.smileshmg:id/md_content"]')
        expect(textCpf).toHaveText('CPF inválido')
    })
})
