(function() {
    // Hide the full controls
    $('#earth').hide();

    /*
     * This isn't directly centered on Conner Prairie, but it displays most
     * of the US and the Gulf of Mexico, which is important for Katrina
     */
    var homeCoords = '-93.40,35.35,2048';

    /**
     * Screensaver
     */
    var s_saver;
    var s_saver_timeout = 180000; // Miliseconds

    // Load the screensaver if the time runs out
    $(window).bind("load", function() {
        s_saver = setTimeout(function(){
            $('#screensaver').fadeIn(1000);
        }, s_saver_timeout);
    });

    // Turn off the screensaver on a click, and start timing again
    $('body').mousedown(function() {
        $('#screensaver').hide();
        clearTimeout(s_saver);
        s_saver = setTimeout(function(){
            $('#screensaver').fadeIn(1000);
        }, s_saver_timeout);
    });

    /*
     * Add dates to the event buttons
     */
    var now = moment();
    var daysBack1 = moment().subtract('days', 1);
    var testOne = moment('September 29, 2092');
    var testTwo = moment('September 28, 2092');
    var hurricaneSandy = moment('October 29, 2012');
    var indianaTornados = moment('March 2, 2012');
    var hurricaneKatrina = moment('August 29, 2005');
    // Longest date strings for design testing
    // $('#show-today').html('Today<br /><span class="date-string">' + testOne.format('MMMM D') + '</span>');
    // $('#show-back-1').html('Yesterday<br /><span class="date-string">' + testTwo.format('MMMM D') + '</span>');
    var buttonSpan = '<span class="text-button">';
    $('#show-today').addClass('highlighted');
    $('#show-today').html(buttonSpan + 'Today<br /><span class="date-string">' + now.format('MMMM D') + '</span></span>');
    $('#show-back-1').html(buttonSpan + 'Yesterday<br /><span class="date-string">' + daysBack1.format('MMMM D') + '</span></span>');
    $('#show-sandy').html(buttonSpan + 'Hurricane Sandy<br /><span class="date-string">' + hurricaneSandy.format('MMMM D, YYYY') + '</span></span>');
    $('#show-indiana').html(buttonSpan + 'Indiana Tornados<br /><span class="date-string">' + indianaTornados.format('MMMM D, YYYY') + '</span></span>');
    $('#show-katrina').html(buttonSpan + 'Hurricane Katrina<br /><span class="date-string">' + hurricaneKatrina.format('MMMM D, YYYY') + '</span></span>');
    $('#show-today').click(function(){
        //window.location=$(this).find("a").attr("href");
        window.location="http://127.0.0.1:8090/#" +
            now.format('YYYY/MM/DD') +
            "/0000Z/wind/surface/level/equirectangular=" + homeCoords;
        $('.date-picker').removeClass('highlighted');
        $(this).addClass('highlighted');
        return false;
    });
    $('#show-back-1').click(function(){
        //window.location=$($(this)).find("a").attr("href");
        window.location="http://127.0.0.1:8090/#" +
            daysBack1.format('YYYY/MM/DD') +
            "/0000Z/wind/surface/level/equirectangular=" + homeCoords;
        $('.date-picker').removeClass('highlighted');
        $(this).addClass('highlighted');
        return false;
    });
    $('#show-sandy').click(function(){
        //window.location=$($(this)).find("a").attr("href");
        window.location="http://127.0.0.1:8090/#" +
            hurricaneSandy.format('YYYY/MM/DD') +
            "/0000Z/wind/surface/level/equirectangular=" + homeCoords;
        $('.date-picker').removeClass('highlighted');
        $(this).addClass('highlighted');
        return false;
    });
    $('#show-indiana').click(function(){
        //window.location=$($(this)).find("a").attr("href");
        window.location="http://127.0.0.1:8090/#" +
            indianaTornados.format('YYYY/MM/DD') +
            "/1800Z/wind/surface/level/equirectangular=" + homeCoords;
        $('.date-picker').removeClass('highlighted');
        $(this).addClass('highlighted');
        return false;
    });
    $('#show-katrina').click(function(){
        //window.location=$($(this)).find("a").attr("href");
        window.location="http://127.0.0.1:8090/#" +
            hurricaneKatrina.format('YYYY/MM/DD') +
            "/0000Z/wind/surface/level/equirectangular=" + homeCoords;
        $('.date-picker').removeClass('highlighted');
        $(this).addClass('highlighted');
        return false;
    });
})();
