import WelcomeScript from '../../screens/scripts/loggedOut/WelcomeScript';

describe('Welcome', () => {
    it('Deve entrar no app e reenderizar a tela inicial', async () => {
        await WelcomeScript.acess()
        await WelcomeScript.validateTheElementsDisplayedOnTheScreen()
    })
})
