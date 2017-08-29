$(document).ready(function(){
    $("a").on('click', function(event) {
        if (this.hash !== "") {
            event.preventDefault();
            var hash = this.hash;
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function(){
                window.location.hash = hash;
            });
        }
    });
});

var abilities = document.getElementsByClassName('ability');

function startSkills() {
	yPos = window.pageYOffset;

	if(yPos > 850) {

        for (var i = 0; i < abilities.length; i++) {
            abilities[i].className += ' launched';
        }
    }
}
window.addEventListener('scroll', startSkills);