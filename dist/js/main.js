//GÖR EN ARRAY ISTÄLLET!!!!!!!

function startSkills() {
	var html = document.querySelector('.html');
	var css = document.querySelector('.css');
	var javascript = document.querySelector('.javascript');
	var framework = document.querySelector('.front_framework');
	var csharp = document.querySelector('.csharp');
	var php = document.querySelector('.php');
	var node = document.querySelector('.node');
	var back_framework = document.querySelector('.back_framework');

	yPos = window.pageYOffset;

	if(yPos > 880) {
		html.className += ' launched';
		css.className += ' launched';
		javascript.className += ' launched';
		framework.className += ' launched';
		csharp.className += ' launched';
		php.className += ' launched';
		node.className += ' launched';
		back_framework.className += ' launched';
	}
}

window.addEventListener('scroll', startSkills);