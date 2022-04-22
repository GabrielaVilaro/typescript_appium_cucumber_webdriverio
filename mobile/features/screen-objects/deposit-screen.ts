import { ChainablePromiseElement } from 'webdriverio';

class DepositScreen {

    public get textDeposit(): ChainablePromiseElement<WebdriverIO.Element> {
        return $("//*[@text='¿Qué vas a ingresar?']");
    }
}


export default new DepositScreen();