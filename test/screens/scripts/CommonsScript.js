import CommonsScreen from '../../screens/elements/android/CommonsScreen'

class CommonsScript {
    async waitFinishRequest(negativeCallback) {
        console.log('BRUNOOOOOOOOOOOOOOOOOOOOOOOO');

        const element = await CommonsScreen.unableRequestTxt.waitForDisplayed()

        console.log('TIIIIIIIIIIIIIIIIIIIII', element ? 'Encontrou' : 'Não encontrou');
        if (element) {
            // console.log('IFFFFFFFFFFFFFFFFFFFFFF');
            await CommonsScreen.unableRequestBtn.click()
            await negativeCallback()
        }
    }
}

export default new CommonsScript()
