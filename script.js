javascript:(	
	(function(){
		var loc = window.location + "";
	    if( loc.indexOf( "technikum-wien.at" ) > -1 && loc.indexOf( "openmeetings" ) > -1 ) {
	    	var token = "yfeCKCVRNFVdtgJa";
	    	var surroundings = true;
			if( window[token] == true || window[token] == null ) {
				surroundings = window[token] = false; 
			} else {
				surroundings = window[token] = true;
			}
			function getById( id ) { return document.getElementById( id ); }
			function getByTag( tagName ) { return document.getElementsByTagName( tagName ); }
            var e;
            if( e = getById("frametop") ) {
	        	if( surroundings ) {
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
				if( !surroundings ) {
					if( window.addEventListener ) {
						window.addEventListener( "resize", listener, false );
					} else {
						window.attachEvent( "onresize", listener );
					}
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
	})()
);