(function() {
    var heading;

    function supportsRange() {
        var i = document.createElement('input');
        i.setAttribute('type', 'range');

        return i.type === 'range';
    }

    if (supportsRange) {
        heading = document.querySelector('h1');
        r = document.querySelector('#r');
        g = document.querySelector('#g');
        b = document.querySelector('#b');

        document.body.addEventListener('change', function() {
            heading.style.color = 'rgb( ' + [r.value, g.value, b.value].join(',') + ' )';
        }, false);
    }

    // progress bar
    var p = document.querySelector('progress');

    setInterval(function() {
        p.value += 1;
    }, 50);

    // feature /error detection /fall back
    if (!'placeholder' in document.createElement('input')) {
        // polyfill is a JS shiv
    }

    if (!testSupport('email')) {
        // provide fallback
    }

    if(!!document.createElement('cavas').getContext) {
    	// browser supports cavas
    }

    if(!!document.createElement('video').canPlayType) {

    }

    function supportsStorage() {
    	try {
    		return 'localStorage' in window && window.localStorage !== null;
    	} catch(e){
    		return false;
    	}
    }

    if (!!navigator.geolocation) alert('track me');    

})();

