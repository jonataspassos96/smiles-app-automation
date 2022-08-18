describe('Deve realizar o passo a passo de Login', () => {
    it('E aceitar os steps iniciais', async () => {
        await $('//android.widget.Button[@resource-id="com.android.permissioncontroller:id/permission_deny_button"]').click()

        await $('//android.widget.TextView[@resource-id="com.pontomobi.smileshmg:id/btn_intro_jump"]').click()

        await $('//android.widget.Button[@resource-id="com.android.permissioncontroller:id/permission_deny_and_dont_ask_again_button"]').click()

        await $('//android.widget.Button[@resource-id="com.pontomobi.smileshmg:id/lgpd_accept_agreed"]').click()

        const title = await $('//android.widget.TextView[@text="Seja bem-vindo."]')

        await expect(title).toHaveText('Seja bem-vindo.')
        // await expect(textAssertion).toHaveText('You selected: 1 , Command two')
    })
})