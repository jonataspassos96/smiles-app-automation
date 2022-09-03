class HomeScreen {
    get fingerPrint() {
        return $('~btn_after')
    }

    get userName() {
        return $('//*[@resource-id="com.pontomobi.smileshmg:id/txt_name"]')
    }
}

export default new HomeScreen()
