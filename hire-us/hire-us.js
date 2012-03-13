
/*
	CREATE SELF-PROMOTIONAL BADGE
		- ALSO INSERT ASSOCIATED FOXYBOX AND CONTENT
*/

var HireUs = {};

(function() { "use strict";
	
	HireUs = {
		overlayBG: document.createElement('div'),
		promoText: 	"<h1>Hire Us</h1>" +
					"<p class=\"hire-intro\">Do you need a freelance HTML5-er?  I've joined Daniel Christopher (my long-time go-to designer, and ColRD.com owner) along with Wess Willis of LucentPDX.  We create elegant web-apps and websites with a keen artistic sense; bringing your ideas to life!</p>" +
					"<p>My work has been featured in the Tel Aviv Museum of Modern Arts, Google IO, used in schools, and at times enjoyed being the most popular link on PopURLs, Delicious, Digg, and others. Specialties include Animations, Audio, Graphics. Creating intuitive applications that help people do $x, create $y, or learn $z is my job, and I love it!</p>" +
					"<h2>Examples of our work include:</h2>" +
					"<ul>" +
						"<li><a href=\"http://colrd.com\">ColRD.com</a></li>" + 
						"<li><a href=\"http://portlandiafoods.com\">PortlandiaFoods.com</a></li>" +
						"<li><a href=\"\">Sketchpad</a></li>" +
						"<li><a href=\"http://mudcu.be/piano/\">Color Piano</a></li>" +
						"<li><a href=\"http://colrd.com/create/gradient/\">Gradient Creator</a></li>" +
						"<li><a href=\"http://www.voiceboxpdx.com/\">Voicebox Karaoke</a></li>" +
					"<br class=\"hire-clear\"></ul>" + 
					"<a href=\"http://lucentpdx.com/contact/\" class=\"hire-button\"><span class=\"hire-button-inner\">Contact LucentPDX With Project Inquires</span></a>",
		
		init: function(placement) {
			placement = (typeof placement !== 'undefined') ? placement : 'tl';
			// insert link into page
			var link = document.createElement('a');
			link.setAttribute('id', 'hire-us-link');
			link.setAttribute('class', placement);
			document.body.appendChild(link);
			// insert foxybox
			this.overlayBG.setAttribute('id', 'hire-us-bg');
			document.body.appendChild(this.overlayBG);
			// insert content
			var content = document.createElement('div');
			content.setAttribute('id', 'hire-us-content');
			content.innerHTML = this.promoText;
			this.overlayBG.appendChild(content);
			// initiate click events
			link.onclick = this.toggleOverlay;
			content.onclick = this.stopPropagation;
			this.overlayBG.onclick = this.toggleOverlay;
		},
		
		toggleOverlay: function() {
			var bg = document.getElementById('hire-us-bg'),
				current = bg.className;

			bg.className = current === 'visible' ? '' : 'visible';
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