$(document).ready(function() {
    
    console.log( "I'm ready!" );
    var questionNum = $('#question-num');
    var questionText = $('#question-text');
    questionNum.text('1');
    questionText.text(questions[0].text);
    var mainContent = $('#main-content');
    let questionIndex = 0;

    var counter = $('#counter');
    var startBtn = $('#start-btn');
    let score = 0;
    // hideStartBtn();
    hideQuestions();

    function nextQuestion(num) {
        return num++;
    }


    function hideStartBtn() {
        startBtn.removeClass('visible').addClass('invisible');
    };

    function showStartBtn() {
        startBtn.removeClass('invisible').addClass('visible');
    };

    function showQuestions() {
        mainContent.removeClass('invisible').addClass('visible');
    };

    function hideQuestions() {
        mainContent.removeClass('visible').addClass('invisible');
    };

    

    function initGame() {
        hideStartBtn();
        showQuestions();
        counter.text('Time Left: 00:59');

        // showQuestions();
        for (var i = 0; i < questions.length; i++) {
            console.log(questions[i].text);
        }
    }
    
    





    startBtn.on('click', function() {
        initGame();
    });














});