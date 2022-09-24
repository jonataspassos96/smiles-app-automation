import SignInScript from '../../screens/scripts/loggedOut/SignInScript'
import users from '../../../config/dataMass/users'

const { userHMG: user } = users

describe('SignIn', () => {
    it('Deve entrar na tela de login e reenderizar todos os elementos', async () => {
        await SignInScript.acess()
        await SignInScript.validateTheElementsDisplayedOnTheScreen()
    })

    it('Deve exibir uma mensagem de erro ao inserir uma senha inválida', async () => {
        await SignInScript.fillForm(user.smilesNumber, '1234')
        await SignInScript.submit()
        await SignInScript.validateErrorRequest()
    })

    it('Deve exibir uma mensagem de erro ao inserir um N˚ Smiles/CPF inválido', async () => {
        await SignInScript.fillForm('123123123', user.password)
        await SignInScript.submit()
        await SignInScript.validateErrorRequest()
    })

    it('Deve realizar o login e entrar na página principal', async () => {
        await SignInScript.fillForm(user.smilesNumber, user.password)
        await SignInScript.submit()
        await SignInScript.sucessRequest()
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
