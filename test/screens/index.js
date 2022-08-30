import testConfig from "../../test-config.json"
import fs from 'fs';
import androidSignInScreen from "./android/signIn.screen"
import androidWelcomeScreen from "./android/welcome.screen";

const config = JSON.parse(fs.readFileSync(__dirname + "../../test-config.js", "utf-8"));

export default {
    SignInScreen: config.platform == 'android' ? androidSignInScreen : null,
    WelcomeScreen: config.platform == 'android' ? androidWelcomeScreen : null
}