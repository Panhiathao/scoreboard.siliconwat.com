fixture `Index Page`
    .page `https://scoreboard.siliconwat.com`;

test('Click Ninja Monk', async user => {
    await user.click("header nav a").takeScreenshot();
});