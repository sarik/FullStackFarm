console.log('CHEcking export');


module.exports =
{ a: app => {
	app.get('/', (req, res) => {
		res.send({ name: 'idiotfrom test again' });
	});
},
b: app => {
	app.get('/', (req, res) => {
		res.send({ name: 'idiotfrom test again 33' });
	});
}
}
;
