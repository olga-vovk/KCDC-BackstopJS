module.exports = async (page, scenario, vp) => {
  console.log('SCENARIO > ' + scenario.label);
  await require('./clickAndHoverHelper')(page, scenario);

  // add more ready handlers here...
  const user = "elizabeth.m.wait@gmail.com";
  const pass = "Test!123";

  page
    .waitForSelector(".nama-nav__main")
    .then(() => console.log("Login page loaded"));
    await page.focus("#PatronAccountLogin_Username");
    await page.keyboard.type(user);
    await page.waitFor(1000);    
    await page.focus("#PatronAccountLogin_Password");
    await page.keyboard.type(pass);
    await page.waitFor(1000);
    await page.click("#tn-login-button");
    await page.waitFor(3000);
};
