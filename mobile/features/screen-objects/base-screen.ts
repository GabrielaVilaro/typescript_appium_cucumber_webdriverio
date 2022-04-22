import { Browser, Element } from "webdriverio";

class BaseScreen {

	public get timeOut() {
        return 10000
    }
	public async tapElement(elementLocator): Promise<void> {
		const element: Element<"async"> = await elementLocator
		await element.waitForDisplayed({
		timeout: this.timeOut
	});
        
	return element.click();
 }
 
}

export default new BaseScreen();