const obj = {
	name: 'aquib',
	age: 23,
	city: 'raipur',
};

//destructure
// const { name, age, city } = obj;
// const name = obj.name;
// const age = obj.age;
// const city = obj.city;

// console.log(age);
// console.log(obj.name);

//destructuring nested object
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

const {
	address: { country }, //extracting country
	address: {
		previousAddress: { prevCountry }, //extracting prev addresses state
	},

	address: {
		state,
		previousAddress: { prevState },
	},
} = userData;

// console.log(country);
// console.log('previous address country', prevCountry);

// console.log(state);
// console.log('previous address state', prevState);


//destructuring inside function
const data = ({
	name,
	age,
	address: { country, state },
	address: {
		previousAddress: { prevCountry, prevState },
	},
}) => {
    console.log(name, age, country, state, prevCountry, prevState);
};

data(userData);
