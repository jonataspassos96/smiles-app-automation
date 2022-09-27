import BaseConfig from '../../../../../config/BaseConfig'

const { environment: env } = BaseConfig

class ForgotYourNumberSmilesScreen {
    get mainTitle() {
        return $('android.widget.TextView')
    }

    get cpfBtn() {
        return $(`//*[@resource-id="com.pontomobi.smiles${env}:id/btnCPF"]`)
    }

    get foreignerBtn() {
        return $(`//*[@resource-id="com.pontomobi.smiles${env}:id/btnForeigner"]`)
    }

    get inputFields() {
        return $$(`//*[@resource-id="com.pontomobi.smiles${env}:id/editText"]`)
    }

    get submitBtn() {
        return $(`//*[@resource-id="com.pontomobi.smiles${env}:id/btnSend"]`)
    }

    get modalTitle() {
        return $(`//*[@resource-id="com.pontomobi.smiles${env}:id/md_title"]`)
    }

    get modalInfoTxt() {
        return $(`//*[@resource-id="com.pontomobi.smiles${env}:id/md_content"]`)
    }

    get modalAfterBtn() {
        return $(`//*[@resource-id="com.pontomobi.smiles${env}:id/md_buttonDefaultNegative"]`)
    }

    get modalOkBtn() {
        return $(`//*[@resource-id="com.pontomobi.smiles${env}:id/md_buttonDefaultPositive"]`)
    }
}

export default new ForgotYourNumberSmilesScreen()
