import { ChainablePromiseElement } from 'webdriverio';
import BaseScreen from "./base-screen";

class LoginScreen {
    
    public get onePin(): ChainablePromiseElement<WebdriverIO.Element> {
        return $("//*[@text='1']");
    }

    public async login (): Promise<void> {
        for (let i = 0; i < 6; i++) {
            await BaseScreen.tapElement(this.onePin)
          }
    }
}

export default new LoginScreen();
