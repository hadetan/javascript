// fetch(url, options)
//   .then(response => {
//     // handle the response
//   })
//   .catch(error => {
//     // handle errors
//   });

async function fetchData() {
	try {
		const data = await fetch('https://jsonplaceholder.typicode.com/users');
		const jsonFormatData = await data.json();
        //mongodb
        //expressJS
        //reactJS
        //nodejs
        //logic building.

		console.log(jsonFormatData);
	} catch (err) {
		console.log(err.message);
	}
}

fetchData();
