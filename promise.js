// create new instance of the promise

// const myPromise = new Promise((resolve, reject) => {
// 	const success = false;

// 	if (success) {
// 		resolve('Promise resolved');
// 	} else {
// 		reject('Promise rejected');
// 	}
// });

// myPromise
// 	.then((value) => {
// 		console.log(value);
// 	})
// 	.catch((error) => {
// 		console.log(error);
// 	})
//     .finally(() => {
//         console.log("i will run no matter what!");
//     })

// const fetchData = new Promise((resolve, reject) => {
// 	setTimeout(() => {
// 		resolve('data fetched');
// 	}, 3000);
// });

fetchData
	.then((message) => {
		console.log(message);
		return 'Processing data';
	})
	.then((message) => {
		console.log(message);
		return 'data processed';
	})
	.then((message) => {
		console.log(message);
		return 'displaying data';
	})
	.then((finalMessage) => {
		console.log(finalMessage);
	})
	.catch((err) => {
		console.log(err);
	})
	.finally(() => {
		console.log('end of callbacks.');
	});

const orderPizza = new Promise((res, rej) => {
	setTimeout(() => {
        const pizza = "🍕"
		res(pizza);
	}, 3000);
    rej('An error occurred while ordering pizza');
});

orderPizza.then((pizza) => {
    console.log(`My ${pizza} has been ordered`);
}).catch((err) => {
    console.log(err);
})