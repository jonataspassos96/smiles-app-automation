import BaseConfig from "../../config/BaseConfig";
import androidSignInScreen from "./android/signIn.screen"
import androidWelcomeScreen from "./android/welcome.screen";

export default {
    SignInScreen: BaseConfig.platform == 'android' ? androidSignInScreen : null,
    WelcomeScreen: BaseConfig.platform == 'android' ? androidWelcomeScreen : null
}