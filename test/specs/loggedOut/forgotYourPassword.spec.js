import ForgotYourPasswordScript from '../../screens/scripts/loggedOut/ForgotYourPasswordScript'
import keys from '../../../config/featureToggle'
import users from '../../../config/dataMass/users'

const { userHMG } = users
const { passwordRecovery } = keys

describe('Esqueceu sua senha?', () => {
    before(async () => {
        await ForgotYourPasswordScript.acess()
    })

    if (passwordRecovery) {
        it('Recuperar senha com o mesmo email utilizando o N˚ Smiles (Usuário apto)', async () => {
            await ForgotYourPasswordScript
                .recoverPasswordWithTheSameEmail(userHMG.smilesNumber, userHMG.maskedEmail)
        })

        it('Recuperar senha com o mesmo email utilizando o CPF (Usuário apto)', async () => {
            await ForgotYourPasswordScript
                .recoverPasswordWithTheSameEmail(userHMG.cpf, userHMG.maskedEmail)
        })

        it.only('Recuperar senha com outro email utilizando o N˚ Smiles (Usuário apto)', async () => {
            await ForgotYourPasswordScript.
                recoverPasswordWithAnotherEmail('107661050')
        })
    } else {
        it('FALTA IMPLEMENTAR', async () => { })
    }
})
