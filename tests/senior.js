fixture `Senior Page`
    .page `https://scoreboard.siliconwat.com/senior/senior.html`;

test('Click Ninja Monk', async user => {
    await user.click("th:nth-of-type(1)").takeScreenshot();
});