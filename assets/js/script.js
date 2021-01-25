// todo's:
    // set timer to start when game is initiated
    // call game end when timer stops OR user answers all questions
    // use .hide() & .show() instead of visible classes
    // render table of highscores from local storage on highscores page
    // sort highscores page by highest to lowest score

$(document).ready(function() {
    $('.game-end').hide();
    
    var questionNum = $('#question-num');
    var questionText = $('#question-text');
    var counter = $('#counter');
    var startBtn = $('#start-btn');
    var mainContent = $('#main-content');
    var scoreContent = $('#score');
    var feedback = $('#feedback');

    var firstBtn = $('#A');
    var secondBtn = $('#B');
    var thirdBtn = $('#C');
    var fourthBtn = $('#D');

    var userInitials =$('#user-initials');
    var initialsSubmit = $('#highscore-submit');
    

    if (!localStorage.getItem('userData')) {
        var userData = [];
    } else {
        var userData = JSON.parse(localStorage.getItem('userData'));
    };
    
    let questionIndex = 0;
    let score = 0;
    let correct = false;
    let timer = 1;

    initialsSubmit.click(function(e) {
        let data = {
            initials: userInitials.val(),
            score: score
        };
        userData.push(data);
        e.preventDefault();
        localStorage.setItem('userData', JSON.stringify(userData));
        window.location.replace('./highscore.html');

    });

    firstBtn.click( function(){
        if ($(this).attr('data-answer') === 'true') {
            score++;
            correct = true; 
        } else {
            correct = false;
        };
        giveFeedback();
    });

    secondBtn.click( function(){
        if ($(this).attr('data-answer') === 'true') {
            score++;
            correct = true; 
        } else {
            correct = false;
        };
        giveFeedback();
    });

    thirdBtn.click( function(){
        if ($(this).attr('data-answer') === 'true') {
            score++;
            correct = true;
        } else {
            correct = false;
        };
        giveFeedback();
    });

    fourthBtn.click( function(){
        if ($(this).attr('data-answer') === 'true') {
            score++;
            correct = true;
        } else {
            correct = false;
        };
        giveFeedback();
    });
    
    hideQuestions();

    function hideStartBtn() {
        startBtn.removeClass('invisible visible').addClass('invisible');
    };

    function showStartBtn() {
        startBtn.removeClass('invisible').addClass('visible');
    };

    function giveFeedback() {
        if (correct) {

            feedback.text('Correct!')
                .removeClass('invisible btn-success btn-danger')
                .addClass('btn-success')
                .show()
                .hide(1000, function() {
                    questionIndex++;
                    nextQuestion();
                }); 
        } else {

            feedback.text('Incorrect!')
                .removeClass('invisible btn-success btn-danger')
                .addClass('btn-danger')
                .show()
                .hide(1000, function() {
                    questionIndex++;
                    nextQuestion();
                });
        };
    }

    function showQuestions() {

        mainContent.removeClass('invisible').addClass('visible');
        $('.quiz-btn').removeClass('invisible').addClass('visible');
        questionText.text(questions[questionIndex].text);
        questionNum.text(`Question ${questionIndex + 1} / 6`);
        empowerBtns(questions[questionIndex].options);
    };

    function hideQuestions() {
        mainContent.removeClass('visible').addClass('invisible');
    };

    function hideButtons() {
        $('.quiz-btn').addClass('invisible');
        scoreContent.addClass('invisible');
    }


    function empowerBtns(arr) {

        firstBtn.text(arr[0].choice);
        firstBtn.addClass('btn btn-primary game-btn text-white mb-1');
        firstBtn.attr('data-answer', arr[0].correct);
        
        secondBtn.text(arr[1].choice);
        secondBtn.addClass('btn btn-primary game-btn text-white mb-1');
        secondBtn.attr('data-answer', arr[1].correct);
        
        thirdBtn.text(arr[2].choice);
        thirdBtn.addClass('btn btn-primary game-btn text-white mb-1');
        thirdBtn.attr('data-answer', arr[2].correct);
        
        fourthBtn.text(arr[3].choice);
        fourthBtn.addClass('btn btn-primary game-btn text-white mb-1');
        fourthBtn.attr('data-answer', arr[3].correct);
        
    };

    function endGame() {
        $('.game-end').show();
        hideButtons();
        questionNum.text('');
        questionNum.text('Game Over!');
        questionText.addClass('text-center').text(`You scored ${score} / 6!`);
    }

    function nextQuestion() {
        scoreContent.text(`Score: ${score}`);

        if (questionIndex > 5 || timer === 0) {
            endGame();
        } else {
            questionText.text(questions[questionIndex].text);
            questionNum.text(`Question ${questionIndex + 1} / 6`);
            empowerBtns(questions[questionIndex].options);
        };
        
    };

    function initGame() {
        
        questionIndex = 0;
        score = 0;

        hideStartBtn();
        showQuestions();
        counter.text('Time Left: 00:59');

    }
    
    startBtn.click( function() {
        initGame();
    });














});