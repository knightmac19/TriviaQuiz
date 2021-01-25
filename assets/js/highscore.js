$(document).ready(function() {
    console.log('highscore ready!');

    if (!localStorage.getItem('userData')) {
        var localData = [];
    } else {
        var localData = JSON.parse(localStorage.getItem('userData'));
    };

    var table = $('.initials-table');

    function sortByScore(arr) {
        return arr;
    };

    function sortByTime(arr) {
        sortByScore(arr);
        // then sort by time
        return arr;
    };

    var sorted = sortByTime(localData);

    function render(arr) {
        for (var i = 0; i < arr.length; i++) {
            // create a row with user's info 
            // append that row to table
        }
    };

    // finally, render sorted to page
    render(sorted);



});