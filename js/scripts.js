jQuery(document).ready(function($) {
	// for smooth scroll
    smoothScroll.init({
        selector: '[data-scroll]', // Selector for links (must be a class, ID, data attribute, or element tag)
        speed: 500, // Integer. How fast to complete the scroll in milliseconds
        easing: 'easeInQuad', // Easing pattern to use
        offset: 50 // Integer. How far to offset the scrolling anchor location in pixels
    });

    // for header scrolling class
    var header = $('#header');
    $(window).on('load scroll resize', function() {
        var st2 = $(this).scrollTop();

        if (st2 > 0)
            header.addClass('scrolling');
        else
            header.removeClass('scrolling');
    });

    // аor each of the eachword class
    if($('.eachword').length) {
        $(".eachword").each(function() {
            // Get the string (html) and split it by " " (like PHP's explode)
            var self         = $(this);
            var theText      = self.html();
            var theTextArray = theText.split(" ");

            // Cycle them
            for( var i=0; i<theTextArray.length; i++ ) {
                // Get this particular word and split it into individual letters
                var thisWord      = theTextArray[i];
                var thisWordArray = thisWord.split("");

                // Wrap the first letter
                if( thisWordArray[0] != "<" ) {
                    thisWordArray[0]  = "<span class='first-letter'>"+thisWordArray[0]+"</span>";
                }

                // Stitch the letters back up
                theTextArray[i] = thisWordArray.join("");
            }

            // Join the original string back up
            var result = theTextArray.join(" ");

            self.html( result );
        });
    }

    if ($('.popup-video').length) {
        $('.popup-video').magnificPopup({
            disableOn: 700,
            type: 'iframe',
            mainClass: 'mfp-fade',
            removalDelay: 350,
            preloader: false,
            fixedContentPos: true,
            fixedBgPos: true,
        });
    }
});