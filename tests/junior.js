fixture `Junior Page`
    .page `https://scoreboard.siliconwat.com/junior/junior.html`;

test('Click Ninja Monk', async user => {
    await user.click("th:nth-of-type(1)").takeScreenshot();
});