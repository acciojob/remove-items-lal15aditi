//your JS code here. If required.
let btn = document.querySelector('form > input');

btn.addEventListener('click', (event) => {
	for(let i = 0; i<event.target.parentNode.children[0].children.length; i++){
		let e = event.target.parentNode.children[0].children[i];
		if(e.selected) e.remove();
	}
})