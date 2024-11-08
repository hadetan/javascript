const btn = document.getElementById('btn');

//generating random color
const randomColor = () => {
	let value = '0123456789ABCDEF';
	let hash = '#';

	for (let i = 0; i <= 5; i++) {
		hash = hash + value[Math.floor(Math.random() * 16)];
	}
	return hash;
};

const changeColor = () => {
    document.body.style.backgroundColor = randomColor();
}

btn.addEventListener('click', changeColor);