import { ChainablePromiseElement } from 'webdriverio';

class InvestinmentsScreen {

    public get textPortfolio(): ChainablePromiseElement<WebdriverIO.Element> {
        return $("//*[@text='Distribución del portfolio']");
    }
}

export default new InvestinmentsScreen();