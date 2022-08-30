import SignInScreen from "../screens/android/signIn.screen";

describe('SignIn', () => {
    before(async () => {
        await SignInScreen.skipPageWelcome()
    })

    it('Deve entrar na tela de login e reenderizar todos os elementos', async () => {
        await expect(SignInScreen.mainTitle).toBeDisplayed()

        await expect(SignInScreen.backToTheWelcomeScreen).toBeDisplayed()

        await expect(SignInScreen.inputMemberNumber).toBeDisplayed()

        await expect(SignInScreen.inputPassword).toBeDisplayed()

        await expect(SignInScreen.txtRememberSmilesNumberOrCPF).toBeDisplayed()

        await expect(SignInScreen.toggleClickableRemember).toBeDisplayed()

        await expect(SignInScreen.btnSignIn).toBeDisplayed()

        await expect(SignInScreen.btnForgotSmilesNumber).toBeDisplayed()

        await expect(SignInScreen.btnForgotPassword).toBeDisplayed()

        await expect(SignInScreen.txtDidYouReceiveYourGolSmilesCreditCard).toBeDisplayed()
    })

    it('Deve exibir uma mensagem de erro ao inserir dados inválidos', async () => {
        const loginInput = await SignInScreen.inputMemberNumber
        await loginInput.setValue('107649706')

        const passwordInput = await SignInScreen.inputPassword
        await passwordInput.setValue('1234')

        await SignInScreen.btnSignIn.click()

        await driver.setTimeout({ 'script': 600000 })
        await driver.executeAsync(async (done) => {
            const text = await SignInScreen.memberNumberOrPasswordIsInvalid

            expect(text)
                .toHaveText('Usuário não encontrado ou Senha está inválida.')

            await SignInScreen.btnContinueInSignInScreen.click()

            setTimeout(done, 590000)
        })
    })

    it('Deve realizar o login e entrar na página principal', async () => {
        const loginInput = await SignInScreen.inputMemberNumber
        await loginInput.setValue('107649706')

        const passwordInput = await SignInScreen.inputPassword
        await passwordInput.setValue('1010')

        await SignInScreen.btnSignIn.click()

        const userName = await $('//*[@resource-id="com.pontomobi.smileshmg:id/txt_name"]')
        expect(userName).toHaveText('Olá Ale')
    })
})

describe.skip('Esqueceu sua senha', () => {
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

describe.skip('Esqueceu seu número Smiles', async () => {
    beforeEach(async () => {
        await driver.launchApp();

        await $('//android.widget.Button[@resource-id="com.android.permissioncontroller:id/permission_deny_button"]').click()

        await $('//android.widget.TextView[@resource-id="com.pontomobi.smileshmg:id/btn_intro_jump"]').click()

        await $('//android.widget.Button[@resource-id="com.android.permissioncontroller:id/permission_deny_and_dont_ask_again_button"]').click()

        await $('//android.widget.Button[@resource-id="com.pontomobi.smileshmg:id/lgpd_accept_agreed"]').click()

        const title = await $('//android.widget.TextView[@text="Seja bem-vindo."]')

        await expect(title).toHaveText('Seja bem-vindo.')

        await $('~btn_login_btn_signIn').click()

        await $('//android.widget.TextView[@resource-id="com.pontomobi.smileshmg:id/login_forgot_smiles_number"]').click()
    })

    it('Deve inserir dados inválidos', async () => {
        const inputCpf = await $('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.RelativeLayout/android.widget.LinearLayout/android.widget.LinearLayout/android.widget.LinearLayout/android.widget.LinearLayout[1]/android.widget.LinearLayout/android.widget.RelativeLayout/android.widget.RelativeLayout/android.widget.RelativeLayout/android.widget.EditText')
        inputCpf.setValue('431 549 334 17')

        const inputBirthDate = await $('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.RelativeLayout/android.widget.LinearLayout/android.widget.LinearLayout/android.widget.LinearLayout/android.widget.LinearLayout[2]/android.widget.LinearLayout/android.widget.RelativeLayout/android.widget.RelativeLayout/android.widget.RelativeLayout/android.widget.EditText')
        inputBirthDate.setValue('08/04/1996')

        // ERROR
        const text = await $('//android.widget.TextView[@resource-id="com.pontomobi.smileshmg:id/md_content"]')
        expect(text).toHaveText('xablau')
    })
})
