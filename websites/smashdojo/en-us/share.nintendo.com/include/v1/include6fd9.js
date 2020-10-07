try{(function () {
	var scripts = document.getElementsByTagName('script'), src = scripts[scripts.length - 1].src;

	var query = function (name) {
		name = name.replace(/[\[]/,"\\\[").replace(/[\]]/,"\\\]");
		var regex = new RegExp("[\\?&]" + name + "=([^&#]*)");
		var results = regex.exec(src);
		if (results && results[1]) {
			if (results[1] === 'false' || results[1] === 'true')
				return results[1] !== 'false';
			else return results[1];
		} else return undefined;
	};

	// Bump this up whenever you need the browser cache busted
	var cacheVersion = 1;

	var cfg = window.shareConfig = {
		url: '//media.nintendo.com/share/include/v1/',
		omnitureLive: false,
		language: query('configLanguage') || 'en',
		responsive: false,
		ovp_script_embeded: false
	};

	var loadResource = function (resource, type, disableCacheBust) {
		var url = ~resource.indexOf('//') ? resource : cfg.url + resource;
		if (!disableCacheBust) url += ('?' + cacheVersion);
		if (/\.css($|\?)/.test(url) || type === 'css') {
			document.write('<link rel="stylesheet" href="' + url + '">');
		} else if (/\.js($|\?)/.test(url) || type === 'js') {
			document.write('<' + 'script src="' + url + '"></script' + '>');
		}
	};

	window.addthis_config = { data_track_clickback:true, services_exclude: 'email, mailto' };

	var include = {
		     basic: query('basic'),
		     flash: query('flashsite'),
		    jquery: query('jquery'),
		      base: query('base'),
		  omniture: query('omniture'),
		       nav: query('globalnav'),
		    footer: query('footer'),
		ncomFooter: query('ncomfooter'),
		     fonts: query('fonts'),
		  jAddress: query('jaddress'),
		swfAddress: query('swfaddress'),
		 swfObject: query('swfobject'),
		  lightbox: query('lightbox'),
		responsive: query('responsive'),
		    player: query('player'),
		    social: query('social'),
		  miiverse: query('miiverse'),
		 retailers: query('retailers')
	};

	if (include.jquery !== false && (include.jquery || include.basic || include.flash)) {
		loadResource('js/lib/jquery.js');
		include.jquery = true;
	}
	if (include.lightbox !== false && (include.lightbox || include.basic)) {
		loadResource('css/prettyPhoto.css');
		loadResource('js/lib/jquery.prettyPhoto.js');
	}
	if (include.base !== false && (include.base || include.basic)) {
		loadResource('css/base.css');
		loadResource('js/base.js');
	}
	if (include.omniture !== false && (include.omniture || include.basic || include.flash)) {
		if (include.omniture === 'live') {
			loadResource('js/tracking/s_code.js');
			cfg.omnitureLive = true;
		} else {
			loadResource('js/tracking/s_code_local.js');
		}
		loadResource('js/tracking/omniture-1.2.js');
		include.omniture = true;
	}
	if (include.nav !== false && (include.nav || include.basic || include.flash || include.ncomFooter)) {
		loadResource('js/elements/globalnav.js');
		include.nav = true;
	}
	if (include.footer !== false && (include.footer || include.basic || include.flash)) {
		loadResource('js/elements/footer.js');
		include.footer = true;
	}
	if (include.fonts) loadResource('//fonts.googleapis.com/css?family=Lato:300,400,700,900', 'css', true);
	if (include.retailers) {
		loadResource('css/retailers.css');
		loadResource('js/elements/retailers.js');
	}
	if (include.ncomFooter || include.footer) loadResource('js/elements/ncomfooter.js');
	if (include.swfObject || include.flash) loadResource('js/lib/swfobject.js');
	if (include.swfAddress || include.flash) loadResource('js/lib/swfaddress.js');
	if (include.jAddress) loadResource('js/lib/jquery.address-1.3.1.min.js');
	if (include.player) {
		if (document.createElement('video').canPlayType) {
			loadResource('//player.ooyala.com/v3/Zjc4MjBiOWEwY2NlNGRlODBkMWUzYmVl?platform=(html5-priority)', 'js', true);
		}
		loadResource('js/elements/player.js');
	}
	if (include.social) loadResource('js/elements/social.js');
	if (include.responsive) {
		cfg.responsive = true;
		if (include.nav) loadResource('css/responsive.css');
	}
	if (include.miiverse && !include.jquery) {
		loadResource('css/miiverse.css');
		loadResource('js/elements/miiverse.js');
	}
})();} catch (err) { console.error(err); }

// Copyright (c) 2012 Florian H., https://github.com/js-coder https://github.com/js-coder/cookie.js
!function(e,t){var n=function(){return n.get.apply(n,arguments)},r=n.utils={isArray:Array.isArray||function(e){return Object.prototype.toString.call(e)==="[object Array]"},isPlainObject:function(e){return!!e&&Object.prototype.toString.call(e)==="[object Object]"},toArray:function(e){return Array.prototype.slice.call(e)},getKeys:Object.keys||function(e){var t=[],n="";for(n in e)e.hasOwnProperty(n)&&t.push(n);return t},escape:function(e){return String(e).replace(/[,;"\\=\s%]/g,function(e){return encodeURIComponent(e)})},retrieve:function(e,t){return e==null?t:e}};n.defaults={},n.expiresMultiplier=86400,n.set=function(n,i,s){if(r.isPlainObject(n))for(var o in n)n.hasOwnProperty(o)&&this.set(o,n[o],i);else{s=r.isPlainObject(s)?s:{expires:s};var u=s.expires!==t?s.expires:this.defaults.expires||"",a=typeof u;a==="string"&&u!==""?u=new Date(u):a==="number"&&(u=new Date(+(new Date)+1e3*this.expiresMultiplier*u)),u!==""&&"toGMTString"in u&&(u=";expires="+u.toGMTString());var f=s.path||this.defaults.path;f=f?";path="+f:"";var l=s.domain||this.defaults.domain;l=l?";domain="+l:"";var c=s.secure||this.defaults.secure?";secure":"";e.cookie=r.escape(n)+"="+r.escape(i)+u+f+l+c}return this},n.remove=function(e){e=r.isArray(e)?e:r.toArray(arguments);for(var t=0,n=e.length;t<n;t++)this.set(e[t],"",-1);return this},n.empty=function(){return this.remove(r.getKeys(this.all()))},n.get=function(e,n){n=n||t;var i=this.all();if(r.isArray(e)){var s={};for(var o=0,u=e.length;o<u;o++){var a=e[o];s[a]=r.retrieve(i[a],n)}return s}return r.retrieve(i[e],n)},n.all=function(){if(e.cookie==="")return{};var t=e.cookie.split("; "),n={};for(var r=0,i=t.length;r<i;r++){var s=t[r].split("=");n[decodeURIComponent(s[0])]=decodeURIComponent(s[1])}return n},n.enabled=function(){if(navigator.cookieEnabled)return!0;var e=n.set("_","_").get("_")==="_";return n.remove("_"),e},typeof define=="function"&&define.amd?define(function(){return n}):typeof exports!="undefined"?exports.cookie=n:window.cookie=n}(document);

/* Outdated browser alert */
(function() {
	var markup =
	'<div id="outdated-alert-container">\
		<div class="outdated-message">\
			<div class="outdated-force-width">\
				<a id="btn-outdated-continue" href="#" onclick="browserAlerts.close()"></a>\
				<a id="btn-browser-chrome" href="https://www.google.com/intl/en/chrome/browser/" target="_blank"></a>\
				<a id="btn-browser-ie" href="http://windows.microsoft.com/en-us/internet-explorer/download-ie" target="_blank"></a>\
				<a id="btn-browser-firefox" href="http://www.mozilla.org/en-US/firefox/new/" target="_blank"></a>\
				<a id="btn-browser-safari" href="http://support.apple.com/downloads/#safari" target="_blank"></a>\
			</div>\
		</div>\
		<div class="outdated-overlay"></div>\
	</div>';

	var markupfr =
	'<div id="outdated-alert-container" class="fr-message">\
		<div class="outdated-message">\
			<div class="outdated-force-width">\
				<a id="btn-outdated-continue" href="#" onclick="browserAlerts.close()"></a>\
				<a id="btn-browser-chrome" href="http://www.google.ca/intl/fr/chrome/browser/" target="_blank"></a>\
				<a id="btn-browser-ie" href="http://windows.microsoft.com/fr-ca/internet-explorer/download-ie" target="_blank"></a>\
				<a id="btn-browser-firefox" href="http://www.mozilla.org/fr/firefox/new/" target="_blank"></a>\
				<a id="btn-browser-safari" href="http://support.apple.com/fr_FR/downloads/#safari" target="_blank"></a>\
			</div>\
		</div>\
		<div class="outdated-overlay"></div>\
	</div>';

	var outdatedCookie = cookie.get('outdatedBypass');
	if (!outdatedCookie) cookie.set('outdatedBypass', 'false');
	var outdatedBrowser = !~window.navigator.userAgent.indexOf('Nintendo') && typeof MutationObserver === 'undefined';

	if (outdatedBrowser && outdatedCookie !== 'true') {
		document.write('<link rel="stylesheet" href="' + window.shareConfig.url + 'css/outdatedbrowser.css" type="text/css"/>');
		var onDOMContentLoaded = function () {
			document.body.innerHTML += window.shareConfig.language === 'fr' ? markupfr : markup;
		};
		if (document.body) onDOMContentLoaded();
		else if (document.addEventListener) {
			document.addEventListener('DOMContentLoaded', onDOMContentLoaded);
		} else {
			document.onreadystatechange = function() {
				if (document.readyState == 'complete') onDOMContentLoaded();
			};
		}
	}

	window.browserAlerts = {
		close: function () {
			cookie.set('outdatedBypass', 'true', { expires: 7 });
			document.getElementById('outdated-alert-container').style.display = 'none';
		}
	};
})();
