$(document).ready(function() {
    console.log('highscore ready!');
    var table = $('.initials-table');
    
    if (!localStorage.getItem('userData')) {
        var localData = [];
    } else {
        var localData = JSON.parse(localStorage.getItem('userData'));
    };

    // console.log(localData);

    function sortByScore(a, b) {
        if (a.score < b.score) {
            return 1;
        };
        if (a.score > b.score) {
            return -1;
        };
        return 0;
    };

    function sortByTime(a, b) {
        if (a.timeLeft < b.timeLeft) {
            return 1;
        };
        if (a.timeLeft > b.timeLeft) {
            return -1;
        };
        return 0;
    };

    var sortedByTime = localData.sort(sortByTime);

    var sortedByScore = sortedByTime.sort(sortByScore);

    function render(arr) {
        for (var i = 0; i < arr.length; i++) {
            let tempRow = `
                <tr>
                    <th scope='row'>${i + 1}</th>
                    <td>${arr[i].initials}</td>
                    <td>${arr[i].score}</td>
                    <td>${arr[i].timeLeft}</td>
                    
                </tr>
            `
            table.append(tempRow);
        }
    };

    render(sortedByScore);


});