class Elements {
    get mainTitle() {
        return $('//*[@resource-id="com.pontomobi.smileshmg:id/activity_title"]')
    }

    get infoTxt() {
        return $('//*[@resource-id="com.pontomobi.smileshmg:id/activity_info"]')
    }

    get inputMemberNumber() {
        return $('//*[@resource-id="com.pontomobi.smileshmg:id/editText"]')
    }

    get submitBtn() {
        return $('//*[@resource-id="com.pontomobi.smileshmg:id/positive_confirmation_submit_btn"]')
    }

    get registeredEmailText() {
        return $('//*[@resource-id="com.pontomobi.smileshmg:id/emailHeader"]')
    }

    get maskedEmail() {
        return $('//*[@resource-id="com.pontomobi.smileshmg:id/fragment_forgot_password_registered_email"]')
    }

    get receivePasswordInThisEmailBtn() {
        return $('//*[@resource-id="com.pontomobi.smileshmg:id/reset_password_submit_btn"]')
    }

    get receiveInAnotherEmailBtn() {
        return $('//*[@resource-id="com.pontomobi.smileshmg:id/open_reset_email_btn"]')
    }

    get requestErrorTxt() {
        return $('//*[@resource-id="com.pontomobi.smileshmg:id/dialog_smiles_text"]')
    }

    get requestErrorBtn() {
        return $('//*[@resource-id="com.pontomobi.smileshmg:id/dialog_smiles_continue"]')
    }

    get passwordSentSuccessfullyTitle() {
        return $('//*[@resource-id="com.pontomobi.smileshmg:id/md_title"]')
    }

    get passwordSentSuccessfullyContent() {
        return $('//*[@resource-id="com.pontomobi.smileshmg:id/md_content"]')
    }

    get passwordSentSuccessfullyContentBtn() {
        return $('//*[@resource-id="com.pontomobi.smileshmg:id/md_buttonDefaultPositive"]')
    }
}

export default new Elements()
