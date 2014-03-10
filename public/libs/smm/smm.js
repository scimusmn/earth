(function() {
    // Hide the full controls
    $('#earth').hide();

    // Add today's date to the 'today' button
    var now = moment();
    var daysBack1 = moment().subtract('days', 1);
    var daysBack2 = moment().subtract('days', 2);

    //$('#show-back-2').html('Two days ago<br />' + daysBack2.format('MMMM D'));
    $('#show-back-1').html('Yesterday<br />' + daysBack1.format('MMMM D'));
    $('#show-today').html('Today<br />' + now.format('MMMM D'));

    $('#show-back-1').click(function(){
        //window.location=$(this).find("a").attr("href");
        window.location="http://127.0.0.1:8090/#" +
            daysBack1.format('YYYY/MM/DD') +
            "/0000Z/wind/surface/level/equirectangular=-86.02,39.98,2048";
        return false;
    });
    $('#show-today').click(function(){
        //window.location=$(this).find("a").attr("href");
        window.location="http://127.0.0.1:8090/#" +
            now.format('YYYY/MM/DD') +
            "/0000Z/wind/surface/level/equirectangular=-86.02,39.98,2048";
        return false;
    });
})();
