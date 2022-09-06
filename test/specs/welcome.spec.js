import WelcomeScreen from '../screens/android/welcome';

describe('Welcome', () => {
    it('Deve entrar no app e reenderizar a tela inicial', async () => {
        await WelcomeScreen.acess()
        await WelcomeScreen.validateTheElementsDisplayedOnTheScreen()
    })
})
