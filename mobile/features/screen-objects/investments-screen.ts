import { ChainablePromiseElement } from 'webdriverio';

class InvestmentsScreen {

    public get textPortfolio(): ChainablePromiseElement<WebdriverIO.Element> {
        return $("//*[@text='Distribución del portfolio']");
    }
}

export default new InvestmentsScreen();