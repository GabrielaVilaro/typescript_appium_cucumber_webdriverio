import { Given, When, Then } from '@wdio/cucumber-framework';
import LoginScreen from '../screen-objects/login-screen';
import HomeScreen from '../screen-objects/home-screen';
import InvestmentsScreen from '../screen-objects/investments-screen';
import DepositScreen from '../screen-objects/deposit-screen';

Given("I am on the login view", async () => {
    await LoginScreen.login();
});

When("I tap investinments", async () => {
    await HomeScreen.tapInvestments(); 
});

When("I am tap init", async () => {
    await HomeScreen.tapInit(); 
});

When("I tap deposit", async () => {
    await HomeScreen.tapDeposit();
});

Then(/^I should see a message saying (.*)$/, async (message) => {
    expect(InvestmentsScreen.textPortfolio).toBeExisting()
    expect(DepositScreen.textDeposit).toHaveTextContaining(message);
});