
/*
	CREATE SELF-PROMOTIONAL BADGE
		- ALSO INSERT ASSOCIATED FOXYBOX AND CONTENT
*/

var HireUs = {};

(function() { "use strict";
	
	HireUs = {
		promoText: 	"<h1>Hire Us</h1>" +
					"<p class=\"hire-intro\">Do you need a freelance HTML5 developer? We create elegant web-apps and websites with a keen artistic sense; bringing your ideas to life!</p>" +
					"<p>Our work has been featured in the Tel Aviv Museum of Modern Arts, Google IO, used in schools, and enjoyed being the most popular link on PopURLs, Delicious, Digg, and others. Creating intuitive applications is our job, and we love it!</p>" +
					"<h2>Examples of our work include:</h2>" +
					"<ul>" +
						"<li><a href=\"http://colrd.com\">ColRD.com</a></li>" + 
						"<li><a href=\"http://portlandiafoods.com\">PortlandiaFoods.com</a></li>" +
						"<li><a href=\"http://mudcu.be/sketchpad/\">Sketchpad</a></li>" +
						"<li><a href=\"http://mudcu.be/piano/\">Color Piano</a></li>" +
						"<li><a href=\"http://colrd.com/create/gradient/\">Gradient Creator</a></li>" +
						"<li><a href=\"http://www.voiceboxpdx.com/\">Voicebox Karaoke</a></li>" +
					"<br class=\"hire-clear\"></ul>" +
					"<a href=\"mailto:connect@whatislucent.com\" class=\"hire-contact\"><span class=\"hire-inner\"></span></a>",
		
		init: function(placement) {
			placement = (typeof placement !== 'undefined') ? placement : 'tl';
			// insert link into page
			var link = document.createElement('a');
			link.setAttribute('id', 'hire-us-link');
			link.setAttribute('class', placement);
			document.body.appendChild(link);
			// insert foxybox
			var overlayBG = document.createElement('div');
			overlayBG.setAttribute('id', 'hire-us-bg');
			document.body.appendChild(overlayBG);
			// insert content
			var content = document.createElement('div');
			content.setAttribute('id', 'hire-us-content');
			content.innerHTML = this.promoText;
			overlayBG.appendChild(content);
			// initiate click events
			link.onclick = this.toggleOverlay;
			content.onclick = this.stopPropagation;
			overlayBG.onclick = this.toggleOverlay;
		},
		
		toggleOverlay: function() {
			var bg = document.getElementById('hire-us-bg'),
				current = bg.className;
			bg.className = (current === 'visible') ? '' : 'visible';
		},

		stopPropagation: function(event) {
			if (event.stopPropagation) {
				event.stopPropagation();
			} else { // <= IE8
				event.cancelBubble = true;
			}
			return root;
		}
	}

})();