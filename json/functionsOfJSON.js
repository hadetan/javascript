const userData = {
	name: 'Aquib',
	age: 22,
	isAlive: true,
	address: {
		country: 'India',
		state: 'Delhi',
		previousAddress: {
			prevCountry: 'India',
			prevState: 'Bombay',
		},
	},
};

const jsonFormattedData = JSON.stringify(userData);

console.log(jsonFormattedData);

const parsedJson = JSON.parse(jsonFormattedData);

console.log("this is reversed data", parsedJson);