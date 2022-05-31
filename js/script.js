let gridItem = document.querySelectorAll('.grid__link');

gridItem.forEach(
	function addEvent(item) {
		item.addEventListener('transitionend', () => {
			item.style.transition = 'initial';
		});
		item.addEventListener('mouseenter', () => {
			item.style = '';
		});
	}
);  


