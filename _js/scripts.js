start = function() {

	var siteHeader = document.querySelector('.nav__wrapper');
	var position   = window.pageYOffset;

	if(siteHeader) {
	    window.onscroll = function() {
	    	var scroll = window.pageYOffset;
		    if(scroll > position) {
		         siteHeader.classList.add('js--site-header--hidden')
		    } else {
		         siteHeader.classList.remove('js--site-header--hidden');
		    }
		    position = scroll;
	    }
	}
	
}