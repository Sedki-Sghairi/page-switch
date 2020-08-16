const modelOverlay = document.getElementById('model-overlay');
const openBtn = document.getElementById('modelBtn');
const closeBtn = document.getElementById('closeBtn');
const projects = document.getElementById('hero');

openBtn.addEventListener('click', function() {
	modelOverlay.classList.add('open-modal');
	hero.classList.add('hide');
});
closeBtn.addEventListener('click', function() {
	modelOverlay.classList.remove('open-modal');
	hero.classList.remove('hide');
});
