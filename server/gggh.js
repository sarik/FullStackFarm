console.log('in gg');

module.exports = app => {
	app.get('/', (req, res) => {
		res.send({ name: 'idiotfrom test again' });
	});
};