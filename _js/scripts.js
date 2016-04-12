start = function() {

	var siteHeader  = document.querySelector('.nav__wrapper');
	var position    = window.pageYOffset;
	var body		= document.body;

	if(siteHeader) {
	    window.onscroll = function() {
	    	var scroll = window.pageYOffset;
	    	var atEnd  = body.offsetHeight + body.scrollTop == body.scrollHeight

		    if(scroll < position || atEnd) {
		        siteHeader.classList.remove('js--site-header--hidden')
		    } else {
		        siteHeader.classList.add('js--site-header--hidden');
		    }
		    position = scroll;
	    }

	    // Show grid background
	    var gridButton = document.getElementById('js--gridButton');
	    gridButton.addEventListener('click', function() {
	    	body.classList.toggle('grid');
	    });
	}

	// If there's an orphan, pushes other word to last line in paragraph
	orphanCrippler=function(e){var n=[],r=[]
	n=e.length?e:n.concat(e),Array.prototype.map.call(n,function(e){var n=String(e.innerHTML)
	n=n.replace(/\s+/g," ").replace(/^\s|\s$/g,""),r.push(n?e.innerHTML=n.replace(new RegExp("((?:[^ ]* ){"+((n.match(/\s/g)||0).length-1)+"}[^ ]*) "),"$1&nbsp;"):void 0)})}

	objs = document.querySelectorAll('.post__content p');
	orphanCrippler(objs);


	// Cookies
	function setCookie(cname, cvalue, exdays) {
	    var d = new Date();
	    d.setTime(d.getTime() + (exdays*24*60*60*1000));
	    var expires = "expires="+d.toUTCString();
	    document.cookie = cname + "=" + cvalue + "; " + expires;
	}

	function getCookie(cname) {
	    var name = cname + "=";
	    var ca = document.cookie.split(';');
	    for(var i = 0; i < ca.length; i++) {
	        var c = ca[i];
	        while (c.charAt(0)==' ') c = c.substring(1);
	        if (c.indexOf(name) == 0) return c.substring(name.length, c.length);
	    }
	    return "";
	}

	function checkCookie() {
	    var visited = getCookie("visited");
	    if (visited == false) {
	        // setCookie("visited", true, 365);

	        var firstTime = document.createElement('section');
		        firstTime.classList.add('first-time-modal');

	        document.getElementById('main').insertBefore(firstTime, document.getElementById('main').firstChild);

            var firstTimeInner = document.createElement('div');
    	        firstTimeInner.classList.add('first-time__inner');
    	        firstTime.appendChild(firstTimeInner);

    	    var firstTimeTitle = document.createElement('h1');
    	        firstTimeTitle.innerHTML = "On Design"

    	    var firstTimeText = document.createElement('p');
    	        firstTimeText.innerHTML = "Brilliant articles, written by brilliant people, with the care and detail that they deserve. The articles found on this website were written by various other designers or studios; all credit for the content should go to them, and each page includes a link to the original article."
    	        firstTimeInner.appendChild(firstTimeTitle);
    	        firstTimeInner.appendChild(firstTimeText);


	        var firstTimeClose = document.createElement('button');
	        	firstTimeClose.classList.add('first-time__close');
	        	firstTimeClose.innerHTML = "close";
	        	firstTimeClose.addEventListener('click', function() {
	        		setCookie("visited", true, 365);
	        		firstTime.classList.add('first-time--closed');
	        	});

	        firstTimeInner.appendChild(firstTimeClose);
	    }
	}

	checkCookie();
}