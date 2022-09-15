import BaseConfig from '../../../../../config/BaseConfig'

const { environment: env } = BaseConfig

class ForgotYourPasswordScreen {
    get mainTitle() {
        return $(`//*[@resource-id="com.pontomobi.smiles${env}:id/activity_title"]`)
    }

    get infoTxt() {
        return $(`//*[@resource-id="com.pontomobi.smiles${env}:id/activity_info"]`)
    }

    get otherInfoTxt() {
        return $(`//*[@resource-id="com.pontomobi.smiles${env}:id/activity_title_subtitle"]`)
    }

    get newEmailEntries() {
        return $$(`//*[@resource-id="com.pontomobi.smiles${env}:id/editText"]`)
    }

    get inputMemberNumber() {
        return $(`//*[@resource-id="com.pontomobi.smiles${env}:id/editText"]`)
    }

    get selectTheAnswer() {
        return $(`//*[@resource-id="com.pontomobi.smiles${env}:id/editText"]`)
    }

    get answer() {
        return $(`//*[@content-desc="btn_filter_item"]`)
    }

    get nextBtn() {
        return $(`//*[@resource-id="com.pontomobi.smiles${env}:id/next"]`)
    }

    get submitBtn() {
        return $(`//*[@resource-id="com.pontomobi.smiles${env}:id/positive_confirmation_submit_btn"]`)
    }

    get quiz() {
        return $(`//*[@resource-id="com.pontomobi.smiles${env}:id/questionCount"]`)
    }

    get registeredEmailText() {
        return $(`//*[@resource-id="com.pontomobi.smiles${env}:id/emailHeader"]`)
    }

    get maskedEmail() {
        return $(`//*[@resource-id="com.pontomobi.smiles${env}:id/fragment_forgot_password_registered_email"]`)
    }

    get receivePasswordInThisEmailBtn() {
        return $(`//*[@resource-id="com.pontomobi.smiles${env}:id/reset_password_submit_btn"]`)
    }

    get receiveInAnotherEmailBtn() {
        return $(`//*[@resource-id="com.pontomobi.smiles${env}:id/open_reset_email_btn"]`)
    }

    get requestErrorTxt() {
        return $(`//*[@resource-id="com.pontomobi.smiles${env}:id/dialog_smiles_text"]`)
    }

    get requestErrorBtn() {
        return $(`//*[@resource-id="com.pontomobi.smiles${env}:id/dialog_smiles_continue"]`)
    }

    get passwordSentSuccessfullyTitle() {
        return $(`//*[@resource-id="com.pontomobi.smiles${env}:id/md_title"]`)
    }

    get passwordSentSuccessfullyContent() {
        return $(`//*[@resource-id="com.pontomobi.smiles${env}:id/md_content"]`)
    }

    get passwordSentSuccessfullyContentBtn() {
        return $(`//*[@resource-id="com.pontomobi.smiles${env}:id/md_buttonDefaultPositive"]`)
    }

    get titleAwaitAnalysis() {
        return $(`//*[@resource-id="com.pontomobi.smiles${env}:id/title"]`)
    }

    get verificationTakesUpTo48Hours() {
        return $(`//*[@resource-id="com.pontomobi.smiles${env}:id/questio_hint"]`)
    }
}

export default new ForgotYourPasswordScreen()
