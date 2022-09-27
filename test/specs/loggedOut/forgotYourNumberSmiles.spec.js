import ForgotYourNumberSmilesScript from '../../screens/scripts/loggedOut/ForgotYourNumberSmilesScript'

import users from '../../../config/dataMass/users'

const { userHMG: user } = users

describe('Fluxo de Esqueceu seu N˚ Smiles?', () => {
    beforeEach(async () => {
        await ForgotYourNumberSmilesScript.acess()
    })

    describe('Brasileiros', () => {
        it('Deve inserir um cpf inválido e exibir no modal a mensagem de "É necessário informar seu CPF"', async () => {
            await ForgotYourNumberSmilesScript.clickCpfBtn()
            await ForgotYourNumberSmilesScript.fillForm(['12312312355', user.birthDate])
            await ForgotYourNumberSmilesScript.submit()
            await ForgotYourNumberSmilesScript.validateCpfErrorRequest(false)
        })

        it('Deve inserir um cpf não cadastrado na base e exibir no modal a mensagem de "Usuário não cadastrado"', async () => {
            await ForgotYourNumberSmilesScript.clickCpfBtn()
            await ForgotYourNumberSmilesScript.fillForm(['38951183548', user.birthDate])
            await ForgotYourNumberSmilesScript.submit()
            await ForgotYourNumberSmilesScript.validateCpfErrorRequest(true)
        })

        it('Não deve inserir uma data de nascimento e exibir no modal a mensagem de "É necessário informar sua data de nascimento"', async () => {
            await ForgotYourNumberSmilesScript.clickCpfBtn()
            await ForgotYourNumberSmilesScript.fillForm([user.cpf, ''])
            await ForgotYourNumberSmilesScript.submit()
            await ForgotYourNumberSmilesScript.validateBirthDateErrorRequest(false)
        })

        it('Deve inserir uma data de nascimento inválida e exibir no modal a mensagem de "Data de nascimento inválida"', async () => {
            await ForgotYourNumberSmilesScript.clickCpfBtn()
            await ForgotYourNumberSmilesScript.fillForm([user.cpf, '13/13/2000'])
            await ForgotYourNumberSmilesScript.submit()
            await ForgotYourNumberSmilesScript.validateBirthDateErrorRequest(true)
        })

        it('Deve inserir dados válidos e exibir no modal a mensagem de "Veja aqui seu número Smiles!"', async () => {
            await ForgotYourNumberSmilesScript.clickCpfBtn()
            await ForgotYourNumberSmilesScript.fillForm([user.cpf, user.birthDate])
            await ForgotYourNumberSmilesScript.submit()
            await ForgotYourNumberSmilesScript.validateSucessRequest()
        })
    })

    describe('Estrangeiros', () => {
        it('Não deve inserir um email e exibir no modal a mensagem de "É necessário informar seu e-mail"', async () => {
            await ForgotYourNumberSmilesScript.clickForeignBtn()
            await ForgotYourNumberSmilesScript.fillForm(['', '06/01/1994'])
            await ForgotYourNumberSmilesScript.submit()
            await ForgotYourNumberSmilesScript.validateEmailErrorRequest(false)
        })

        it('Deve inserir um email inválido e exibir no modal a mensagem de "E-mail inválido"', async () => {
            await ForgotYourNumberSmilesScript.clickForeignBtn()
            await ForgotYourNumberSmilesScript.fillForm(['teste.com', '06/01/1994'])
            await ForgotYourNumberSmilesScript.submit()
            await ForgotYourNumberSmilesScript.validateEmailErrorRequest(true)
        })

        it('Não deve inserir uma data de nascimento e exibir no modal a mensagem de "É necessário informar sua data de nascimento"', async () => {
            await ForgotYourNumberSmilesScript.clickForeignBtn()
            await ForgotYourNumberSmilesScript.fillForm(['tiago@gmail.com', ''])
            await ForgotYourNumberSmilesScript.submit()
            await ForgotYourNumberSmilesScript.validateBirthDateErrorRequest(false)
        })

        it('Deve inserir uma data de nascimento inválida e exibir no modal a mensagem de "Data de nascimento inválida"', async () => {
            await ForgotYourNumberSmilesScript.clickForeignBtn()
            await ForgotYourNumberSmilesScript.fillForm(['tiago@gmail.com', '13/13/2000'])
            await ForgotYourNumberSmilesScript.submit()
            await ForgotYourNumberSmilesScript.validateBirthDateErrorRequest(true)
        })

        it('Deve inserir dados válidos e exibir no modal a mensagem de "Veja aqui seu número Smiles!"', async () => {
            await ForgotYourNumberSmilesScript.clickCpfBtn()
            await ForgotYourNumberSmilesScript.fillForm(['tiago@gmail.com', '06/01/1994'])
            await ForgotYourNumberSmilesScript.submit()
            await ForgotYourNumberSmilesScript.validateSucessRequest()
        })
    })
})
