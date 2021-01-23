$(document).ready(function() {
    console.log( "I'm ready!" );

    var counter = $('#counter');
    var startBtn = $('#start-btn');
    let score = 0;

    function hideStartBtn() {
        startBtn.removeClass('visible').addClass('invisible');
    };

    function showStartBtn() {
        startBtn.removeClass('invisible').addClass('visible');
    };

    function showQuestions() {
        // define visible / invisible css classes
        // call appropriate class
    };

    function hideQuestions() {
        // define visible / invisible css classes
        // call appropriate class
    };

    

    function initGame() {
        hideStartBtn();
        counter.text('Time Left: 00:59');

        showQuestions();
        for (var i = 0; i < questions.length; i++) {
            console.log(questions[i].text);
        }
    }
    
    





    startBtn.on('click', function() {
        initGame();
    });














});