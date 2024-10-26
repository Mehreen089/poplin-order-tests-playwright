const { test, chromium} = require('@playwright/test');
const LoginPage = require('../pages/loginPage');
const HomePage = require('../pages/homePage');
const DeliveryOptionsPage = require('../pages/deliveryOptionsPage');
const BagCountPage = require('../pages/bagCountPage');
const OverSizedItemsPage = require('../pages/oversizedItemsPage');
const PreferredProPage = require('../pages/preferredProPage');
const CoveragePage = require('../pages/covergaePage');
const ReviewOrderPage = require('../pages/reviewOrderPage');
const { readFileSync } = require('fs');
const path = require('path');
const ProfilePage = require('../pages/profilePage');
const PaymentsPage = require('../pages/paymentsPage');

const userLoginDetails = JSON.parse(readFileSync(path.join(__dirname, '../fixtures/userData.json')));
const orderDetails = JSON.parse(readFileSync(path.join(__dirname, '../fixtures/orderData.json')));

let loginPage;
let homePage;
let deliveryOptionsPage;
let bagCountPage;
let oversizedItemsPage;
let preferredProPage;
let covergaePage;
let reviewOrderPage;
let profilePage;
let paymentsPage;

test.beforeEach(async ({ page }) => {
  const browser = await chromium.launch({ headless: false }); // Set to false to see the actions
  const context = await browser.newContext();
  await context.grantPermissions(['notifications']);
  page = await context.newPage();
  loginPage = new LoginPage(page);
  homePage = new HomePage(page);
  deliveryOptionsPage = new DeliveryOptionsPage(page);
  bagCountPage = new BagCountPage(page);
  oversizedItemsPage = new OverSizedItemsPage(page);
  preferredProPage = new PreferredProPage(page);
  covergaePage = new CoveragePage(page);
  reviewOrderPage = new ReviewOrderPage(page);
  profilePage = new ProfilePage(page);
  paymentsPage = new PaymentsPage(page);
  await loginPage.navigate();
  await loginPage.login(userLoginDetails.email, userLoginDetails.password);
  await homePage.verifyHomePage();
});

test('Successful Order Placement for New Order', async () => {
  let orderOldCount = await homePage.getOrdersCount();
  await homePage.createNewOrder();
  await profilePage.clickContinueBtn();
  await deliveryOptionsPage.selectDeliveryOption(orderDetails.deliveryOption);
  await deliveryOptionsPage.clickContinueBtn();
  await bagCountPage.selectDeliveryOption(orderDetails.bagSize, orderDetails.bagCount);
  await bagCountPage.clickContinueBtn();
  await oversizedItemsPage.setOverSizedItems(orderDetails.overSizedCount);
  await oversizedItemsPage.clickContinueBtn();
  await oversizedItemsPage.checkAllDrawerCheckboxes();
  await preferredProPage.clickContinueBtn();
  await covergaePage.selectCoverageption(orderDetails.coverage);
  await covergaePage.clickContinueBtn();
  await reviewOrderPage.clickDismissPriceUpdate();
  await reviewOrderPage.clickContinueBtn();
  await paymentsPage.addPaymentDetailsAndPlacePrder(orderDetails.cardNumber, orderDetails.cardExp, orderDetails.cardCVV);
  await homePage.verifyNewCard(orderOldCount);
});

test('Successful Order Placement for Repeat Last Order', async () => {
  let orderOldCount = await homePage.getOrdersCount();
  await homePage.repeatLastOrder();
  await preferredProPage.clickContinueBtn();
  await reviewOrderPage.clickDismissPriceUpdate();
  await reviewOrderPage.clickContinueBtn();
  await paymentsPage.addPaymentDetailsAndPlacePrder(orderDetails.cardNumber, orderDetails.cardExp, orderDetails.cardCVV);
  await homePage.verifyNewCard(orderOldCount);
});

test('Unsuccessful Order Placement for wrong card details', async () => {
  await homePage.repeatLastOrder();
  await preferredProPage.clickContinueBtn();
  await reviewOrderPage.clickDismissPriceUpdate();
  await reviewOrderPage.clickContinueBtn();
  await paymentsPage.addPaymentDetailsAndPlacePrder('0000000000000000', orderDetails.cardExp, orderDetails.cardCVV);
  await paymentsPage.verifyAlertMessage('Your card number is incorrect.');
});

test('Unsuccessful Order Placement for empty card details', async () => {
  await homePage.repeatLastOrder();
  await preferredProPage.clickContinueBtn();
  await reviewOrderPage.clickDismissPriceUpdate();
  await reviewOrderPage.clickContinueBtn();
  await paymentsPage.clickPaybtn();
  await paymentsPage.verifyAlertMessage('Your card number is incomplete.');
});