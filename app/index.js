const app = require('express')()
const appid = process.env.APPID

app.get('/', (req,res) => {
	res.send(`${appid}: Hello world!`);
});

app.get('/app1', (req,res) => {
	res.send(`${appid}`);
});

app.get('/app2', (req,res) => {
	res.send(`${appid}`);
});

app.get('/app3', (req,res) => {
	res.send(`${appid}`);
});

app.listen(appid, () => {
	console.log(`Listening on port ${appid}`)
})