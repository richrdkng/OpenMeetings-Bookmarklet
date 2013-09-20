/*
IMPORTANT NOTES:
	- in bookmarklets:
		- the actual JavaScript code need to surrounded by:	
				javascript:( ... );
		 	the semicolon is mandatory at the end of the bookmarklet.
		- because of the eventually "minifying/squeezing" of the JavaScript
			code, multiline comments need to be used in EVERYWHERE (the whole script
			need to be in one line, without line break).
		- generally the last semicolon BETWEEN the javascript:( .... ); surroundings
			need to be left out ( more information is at the end of this file ).
		- some function to variable assignment practices don't work ( more on this below )
*/
javascript:(	
	(function(){
		var loc = window.location + "";
		/* restrict the bookmarklet working location */
		if( loc.indexOf( "technikum-wien.at" ) > -1 && loc.indexOf( "openmeetings" ) > -1 ) {
			var token = "yfeCKCVRNFVdtgJa"; /* use custom string to keep track on/off states */
			var surroundings = true; /* keep track the visibility of the surroundings */
			if( window[token] == true || window[token] == null ) {
				surroundings = window[token] = false; 
			} else {
				surroundings = window[token] = true;
			}			
			/* these approaches don't work for bookmarklets:
				var getById = document.getElementById;
				var getById = function(id) { return document.getElementById(id); }
			
			these approaches below work for bookmarklets
			*/
			function getById( id ) { return document.getElementById( id ); }
			function getByTag( tagName ) { return document.getElementsByTagName( tagName ); }
			var e;
			/* NOT AN ERROR, e == getById(...) OR e === getById(...), THIS IS AN ASSIGNMENT */
			if( e = getById("frametop") ) {
				if( surroundings ) {
					/* remove inline styles to properly set the original look of the page */
					e.removeAttribute("style"); 
				} else {
					e.style.margin = "0" ;
				}
			}
			if( e = getById("wrapper") ) {
				if( surroundings ) {
					e.removeAttribute("style");
				} else {
					e.style.padding = "0" ;
				}
			}
			if( e = getById("frametopright") ) {
			if( surroundings ) {
				e.removeAttribute("style");
			} else {
				e.style.display = "none" ;
			}
			}
			if( e = getById("page-header") ) {
			if( surroundings ) {
				e.removeAttribute("style");
			} else {
				e.style.display = "none" ;
			}
			}
			/* look for a specific div element, filter by class name */
			e = getByTag("div");
			for( var i = 0, length = e.length; i < length; ++i ) {
				if( e[i].className === "navbar clearfix" ) {
				if( surroundings ) {
					e[i].removeAttribute("style");
				} else {
					e[i].style.display = "none" ;
				}
					break;
				}
			}
			if( e = getById("region-main-box") ) {
				if( surroundings ) {
					e.removeAttribute("style");
				} else {
					e.style.left = "0px" ;
				}
			}
			if( e = getById("region-post-box") ) {
				if( surroundings ) {
					e.removeAttribute("style");
				} else {
					e.style.marginLeft = "0px" ;
				}
			}
			if( e = getById("region-main") ) {
				if( surroundings ) {
					e.removeAttribute("style");
				} else {
					e.style.marginLeft = "1px" ;
				}
			}
			e = getByTag("div");
			for( var i = 0, length = e.length; i < length; ++i ) {
				if( e[i].className === "region-content" ) {
				if( surroundings ) {
					e[i].removeAttribute("style");
				} else {
					e[i].style.padding = "0px";
				}
				break;
				}
			}
			var iframe = getByTag('iframe');
			if( iframe && iframe[0] ) {
				iframe = iframe[0];
				function listener() {
					var width = getById("page").offsetWidth;
					var height = ( window.innerHeight ) ? window.innerHeight : document.documentElement.clientHeight;
					var minWidth = 800;
					var minHeight = 640;
					
					iframe.width = ( width - 6 ) + "px";
					if( height > minHeight ) {
						iframe.height = ( height - 10 ) + "px";
					} else {
						iframe.height = minHeight;
					}
					return false;
				}
				/* add cross browser "resize"/"onresize" event listeners to properly resize
				   the flash interface
				*/
				if( !surroundings ) {
					if( window.addEventListener ) {
						window.addEventListener( "resize", listener, false );
					} else {
						window.attachEvent( "onresize", listener );
					}
					/* call the listener once to stretch out the interface */
					listener();
				} else {
					if( window.removeEventListener ) {
						window.removeEventListener( "resize", listener, false );
					} else {
						window.detachEvent( "onresize", listener );
					}					
					iframe.width = "100%";
					iframe.height = "640px";
				}
			}
		}
	/*
	in bookmarklets this doesn't work:
		})();
	it is mandatory to leave out the semicolon from trailing like this:
		})()
	*/
	})()
);