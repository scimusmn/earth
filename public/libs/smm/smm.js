(function() {
    // Hide the full controls
    $('#earth').hide();

    // Add today's date to the 'today' button
    var now = moment();
    $('#show-back-1').html('Yesterday<br />' + moment().subtract('days', 1).format('MMMM D'));
    $('#show-today').html('Today<br />' + moment().format('MMMM D'));
})();
