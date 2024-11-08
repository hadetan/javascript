const randomColor = () => {
	const val = '0123456789ABCDEF';
	let hash = '#';
	for (let i = 0; i <= 5; i++) {
		hash = hash + val[Math.floor(Math.random() * 16)];
	}
	return hash;
};

const body = document.querySelector('body');

body.addEventListener('click', (axis) => {
	const element = document.createElement('div');

	element.classList.add('dots');

	element.style.left = `${axis.x}px`;
	element.style.top = `${axis.y}px`;

	body.appendChild(element);

	element.style.backgroundColor = randomColor();
});
