// async function name(params) {
//body
// }

async function greet() {
	return 'hello world!';
}

// greet().then((message) => {
//     console.log(message);
// })

//Asynchronous operation ->
function delayedMessage(ms) {
	return new Promise((res, rej) => {
		setTimeout(() => {
			res('I am inside promise');
			// console.log("I am inside promise");
		}, ms);
	});
}

async function sayHello() {
	console.log('start');
	const mess = await delayedMessage(3000);
	console.log(mess);
	console.log('end');
}

// sayHello();

//creating order pizza with async await ->

const getCheese = () => {
	return new Promise((res, rej) => {
		setTimeout(() => {
			res('🧀');
		}, 1000);
	});
};

const getDough = (cheese) => {
	return new Promise((res, rej) => {
		setTimeout(() => {
			res(`${cheese} + 🫓`);
		}, 1000);
	});
};

const getTomato = (dough) => {
	return new Promise((res, rej) => {
		setTimeout(() => {
			res(`${dough} + 🍅`);
		}, 1000);
	});
};

const getPizza = (tomato) => {
	return new Promise((res, rej) => {
		setTimeout(() => {
			res(`${tomato} = 🍕`);
		}, 1000);
	});
};

const orderPizza = async () => {
	const cheese = await getCheese(); //cheese
	const dough = await getDough(cheese); //cheese and dough
	const tomato = await getTomato(dough); //cheese, dough and tomato
	const pizza = await getPizza(tomato); //cheese, dough, tomato and then finally pizza

	console.log(`here is your pizza ${pizza}`);
};

// orderPizza()

// console.log(document.getElementById("div"));
// console.log(globalThis);

// XMLHttpRequest

// console.log(XMLHttpRequest);
