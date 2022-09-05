import ForgotYourPasswordScreen from '../screens/android/forgotYourPassword.screen'
import keys from '../../config/keysConfig'
import users from '../../test/massas/users'

const { userPRD } = users

describe('forgotYourPassword', () => {
    before(async () => {
        await ForgotYourPasswordScreen.skipPageSignIn()
    })

    if (keys.passwordRecovery) {
        it('Recuperar senha com o mesmo email utilizando o N˚ Smiles (Usuário apto)', async () => {
            await ForgotYourPasswordScreen
                .ForgotPasswordWithSmilesNumberOrCpf(userPRD.smilesNumber, userPRD.maskedEmail)
        })

        it('Recuperar senha com o mesmo email utilizando o CPF (Usuário apto)', async () => {
            await ForgotYourPasswordScreen
                .ForgotPasswordWithSmilesNumberOrCpf(userPRD.cpf, userPRD.maskedEmail)
        })
    } else {
        it('FALTA IMPLEMENTAR', async () => { })
    }
})
