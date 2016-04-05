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

	    // Show grid background
	    var gridButton = document.getElementById('js--gridButton');
	    gridButton.addEventListener('click', function() {
	    	document.body.classList.toggle('grid');
	    });
	}

	// If there's an orphan, pushes other word to last line in paragraph
	orphanCrippler=function(e){var n=[],r=[]
	n=e.length?e:n.concat(e),Array.prototype.map.call(n,function(e){var n=String(e.innerHTML)
	n=n.replace(/\s+/g," ").replace(/^\s|\s$/g,""),r.push(n?e.innerHTML=n.replace(new RegExp("((?:[^ ]* ){"+((n.match(/\s/g)||0).length-1)+"}[^ ]*) "),"$1&nbsp;"):void 0)})}

	objs = document.querySelectorAll('.post__content p');
	orphanCrippler(objs);	
}