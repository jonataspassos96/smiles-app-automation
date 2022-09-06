import ForgotYourPasswordScreen from '../screens/android/forgotYourPassword'
import keys from '../../config/keysConfig'
import users from '../../test/massas/users'

const { userHMG } = users

describe('Esqueceu sua senha?', () => {
    before(async () => {
        await ForgotYourPasswordScreen.skipPageSignIn()
    })

    if (keys.passwordRecovery) {
        it('Recuperar senha com o mesmo email utilizando o N˚ Smiles (Usuário apto)', async () => {
            await ForgotYourPasswordScreen
                .ForgotPasswordWithSmilesNumberOrCpf(userHMG.smilesNumber, userHMG.maskedEmail)
        })

        it('Recuperar senha com o mesmo email utilizando o CPF (Usuário apto)', async () => {
            await ForgotYourPasswordScreen
                .ForgotPasswordWithSmilesNumberOrCpf(userHMG.cpf, userHMG.maskedEmail)
        })
    } else {
        it('FALTA IMPLEMENTAR', async () => { })
    }
})
