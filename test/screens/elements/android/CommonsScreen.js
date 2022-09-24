class CommonsScreen {
    get unableRequestTxt() {
        return $('//*[@text="Não foi possível completar sua requisição. Tente novamente."]')
    }

    get unableRequestBtn() {
        return $('//*[@text="OK"]')
    }
}

export default new CommonsScreen()
