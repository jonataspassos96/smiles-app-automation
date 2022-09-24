import BaseConfig from "../../../config/BaseConfig";
import androidSignInScreen from "./elements/android/signIn.screen"
import androidWelcomeScreen from "./android/loggedOut/WelcomeScreen";

export default {
    SignInScreen: BaseConfig.platform == 'android' ? androidSignInScreen : null,
    WelcomeScreen: BaseConfig.platform == 'android' ? androidWelcomeScreen : null
}
