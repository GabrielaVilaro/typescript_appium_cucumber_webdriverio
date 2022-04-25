import BaseScreen from "./base-screen";
import { ChainablePromiseElement } from 'webdriverio';

class HomeScreen {

    public get investments(): ChainablePromiseElement<WebdriverIO.Element> {
        return $("//*[@text='Inversiones']");
    }

    public get init(): ChainablePromiseElement<WebdriverIO.Element> {
        return $("//*[@text='Inicio']");
    }

    public get deposit(): ChainablePromiseElement<WebdriverIO.Element> {
        return $("//*[@text='Ingresar']");
    }

    public async tapInvestments (): Promise<void> {
        await BaseScreen.tapElement(this.investments);
    }

    public async tapDeposit (): Promise<void> {
        await BaseScreen.tapElement(this.deposit);
    }

    public async tapInit (): Promise<void> {
        await BaseScreen.tapElement(this.init);
    }
}

export default new HomeScreen();
