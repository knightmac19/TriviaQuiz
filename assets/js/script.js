$(document).ready(function() {
    
    console.log( "I'm ready!" );
    var questionNum = $('#question-num');
    var questionText = $('#question-text');
    var counter = $('#counter');
    var startBtn = $('#start-btn');
    var mainContent = $('#main-content');
    var scoreContent = $('#score');

    var firstBtn = $('#A');
    var secondBtn = $('#B');
    var thirdBtn = $('#C');
    var fourthBtn = $('#D');

    // var inputGroup = $('.input-group');
    var userInitials =$('#user-initials');
    var initialsSubmit = $('#highscore-submit');

    initialsSubmit.click(function(e) {
        e.preventDefault();
        console.log(userInitials.val());
    });
    
    let questionIndex = 0;
    let score = 0;

    firstBtn.click( function(){
        // $(this).addClass(`btn-${$(this).attr('data-answer')}`);
        if ($(this).attr('data-answer') === 'success') {
            score++;
        };
        questionIndex++;
        nextQuestion(); 
        // console.log($(this).attr('data-answer'));
    });

    secondBtn.click( function(){
        // $(this).addClass(`btn-${$(this).attr('data-answer')}`);
        if ($(this).attr('data-answer') === 'success') {
            score++;
        };
        questionIndex++;
        nextQuestion(); 
        // console.log($(this).attr('data-answer'));
    });

    thirdBtn.click( function(){
        // $(this).addClass(`btn-${$(this).attr('data-answer')}`);
        if ($(this).attr('data-answer') === 'success') {
            score++;
        };
        questionIndex++;
        nextQuestion(); 
        // console.log($(this).attr('data-answer'));
    });

    fourthBtn.click( function(){
        // $(this).addClass(`btn-${$(this).attr('data-answer')}`);
        if ($(this).attr('data-answer') === 'success') {
            score++;
        };
        questionIndex++;
        nextQuestion(); 
        // console.log($(this).attr('data-answer'));
    });
    
    // hideStartBtn();
    hideQuestions();

    function nextQuestion(index) {
        
    }


    function hideStartBtn() {
        startBtn.removeClass('visible').addClass('invisible');
    };

    function showStartBtn() {
        startBtn.removeClass('invisible').addClass('visible');
    };

    function showQuestions() {
        console.log('showQuestions index: ' + questionIndex);
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

        firstBtn.removeClass(arr[0].class);
        secondBtn.removeClass(arr[1].class);
        thirdBtn.removeClass(arr[2].class);
        fourthBtn.removeClass(arr[3].class);

        firstBtn.text(arr[0].choice);
        firstBtn.addClass(`${arr[0].class} btn btn-primary text-white`);
        firstBtn.attr('data-answer', arr[0].correct);
        
        secondBtn.text(arr[1].choice);
        secondBtn.addClass(`${arr[1].class} btn btn-primary text-white`);
        secondBtn.attr('data-answer', arr[1].correct);
        
        thirdBtn.text(arr[2].choice);
        thirdBtn.addClass(`${arr[2].class} btn btn-primary text-white`);
        thirdBtn.attr('data-answer', arr[2].correct);
        
        fourthBtn.text(arr[3].choice);
        fourthBtn.addClass(`${arr[3].class} btn btn-primary text-white`);
        fourthBtn.attr('data-answer', arr[3].correct);
        
        console.log('buttons set!');
    };

    function nextQuestion() {
        scoreContent.text(`Score: ${score}`);

        if (questionIndex > 5) {
            $('.input-group').removeClass('invisible').addClass('visible');
            hideButtons();
            questionNum.text('');
            questionNum.text('Game Over!');
            questionText.addClass('text-center').text(`You scored ${score} / 6!`);

        } else {
            console.log('nextQuestion index: ' + questionIndex);
            questionText.text(questions[questionIndex].text);
            questionNum.text(`${questionIndex + 1} / 6`);
            empowerBtns(questions[questionIndex].options);
        };
        
    };

    function initGame() {

        hideStartBtn();
        showQuestions();
        counter.text('Time Left: 00:59');


        // showQuestions();
        // for (var i = 0; i < questions.length; i++) {
        //     console.log(questions[i].text);
        // }
    }
    
    





    startBtn.click( function() {
        initGame();
        console.log('start clicked')
    });














});