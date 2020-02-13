const init = () =>{
	const heading = document.getElementById('heading');

	if (heading !== null) {
		heading.style.height = `${window.innerHeight}px`;
	}
}

$('document').ready(init);