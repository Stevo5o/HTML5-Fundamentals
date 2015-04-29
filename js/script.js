;
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

    setInterval(function(){
    	p.value += 1;
    }, 50);

})();
