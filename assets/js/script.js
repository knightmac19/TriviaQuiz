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
    var restart = $('#restart');

    var userData = JSON.parse(localStorage.getItem('userData'));
    
    let questionIndex = 0;
    let score = 0;
    let correct = false;
    let timer = 1;

    restart.click(function(e) {
        // e.preventDefault();
        $('.game-end').hide();
        initGame();
    });

    initialsSubmit.click(function(e) {
        let data = {
            initials: userInitials.val(),
            score: score
        };
        userData.push(data);
        e.preventDefault();
        localStorage.setItem('userData', JSON.stringify(userData))

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
            console.log('Correct!');
            feedback.text('Correct!')
                .removeClass('invisible btn-success btn-danger')
                .addClass('btn-success')
                .show()
                .hide(1000, function() {
                    questionIndex++;
                    nextQuestion();
                }); 
        } else {
            console.log('Incorrect!');
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
        console.log('showing questions')
        console.log(`questionIndex: ${questionIndex} score: ${score}`)

        mainContent.removeClass('invisible').addClass('visible');
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
        firstBtn.addClass('btn btn-primary game-btn text-white');
        firstBtn.attr('data-answer', arr[0].correct);
        
        secondBtn.text(arr[1].choice);
        secondBtn.addClass('btn btn-primary game-btn text-white');
        secondBtn.attr('data-answer', arr[1].correct);
        
        thirdBtn.text(arr[2].choice);
        thirdBtn.addClass('btn btn-primary game-btn text-white');
        thirdBtn.attr('data-answer', arr[2].correct);
        
        fourthBtn.text(arr[3].choice);
        fourthBtn.addClass('btn btn-primary game-btn text-white');
        fourthBtn.attr('data-answer', arr[3].correct);
        
    };

    function endGame() {
        $('.game-end').show();
        hideButtons();
        questionNum.text('');
        questionNum.text('Game Over!');
        questionText.addClass('text-center').text(`You scored ${score} / 6!`);
    }

    // to do: 
        // hide the buttons when the game is ended, show the buttons when the game is started

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
        console.log('init game')
        questionIndex = 0;
        score = 0;
        console.log(`questionIndex: ${questionIndex} score: ${score}`)

        hideStartBtn();
        showQuestions();
        counter.text('Time Left: 00:59');

    }
    
    startBtn.click( function() {
        initGame();
    });














});