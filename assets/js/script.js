$(document).ready(function() {
    
    console.log( "I'm ready!" );
    var questionNum = $('#question-num');
    var questionText = $('#question-text');
    var counter = $('#counter');
    var startBtn = $('#start-btn');
    var mainContent = $('#main-content');

    let questionIndex = 0;
    let score = 0;

    
    questionText.text(questions[0].text);
    
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
        mainContent.removeClass('invisible').addClass('visible');
        empowerBtns(questions[questionIndex].options);
    };

    function hideQuestions() {
        mainContent.removeClass('visible').addClass('invisible');
    };

    // function answerQuestion() {
    //     console.log($(this).attr('data-answer'));
    // };

    function empowerBtns(arr) {
        $('#A').text(arr[0].choice);
        $('#A').removeClass(arr[0].class).addClass(`${arr[0].class} btn btn-primary text-white`);
        $('#A').attr('data-answer', arr[0].correct);
        $('#A').on('click', function(){
            $(this).addClass(`btn-${$(this).attr('data-answer')}`);
            if ($(this).attr('data-answer') === 'success') {
                score++;
            };
            nextQuestion(); 
            // console.log($(this).attr('data-answer'));
        });
        
        $('#B').text(arr[1].choice);
        $('#B').removeClass(arr[1].class).addClass(`${arr[1].class} btn btn-primary text-white`);
        $('#B').attr('data-answer', arr[1].correct);
        $('#B').on('click', function(){
            $(this).addClass(`btn-${$(this).attr('data-answer')}`);
            if ($(this).attr('data-answer') === 'success') {
                score++;
            };
            nextQuestion(); 
            // console.log($(this).attr('data-answer'));
        });
        
        $('#C').text(arr[2].choice);
        $('#C').removeClass(arr[2].class).addClass(`${arr[2].class} btn btn-primary text-white`);
        $('#C').attr('data-answer', arr[2].correct);
        $('#C').on('click', function(){
            $(this).addClass(`btn-${$(this).attr('data-answer')}`);
            if ($(this).attr('data-answer') === 'success') {
                score++;
            };
            nextQuestion(); 
            // console.log($(this).attr('data-answer'));
        });
        
        $('#D').text(arr[3].choice);
        $('#D').removeClass(arr[3].class).addClass(`${arr[3].class} btn btn-primary text-white`);
        $('#D').attr('data-answer', arr[3].correct);
        $('#D').on('click', function(){
            $(this).addClass(`btn-${$(this).attr('data-answer')}`);
            if ($(this).attr('data-answer') === 'success') {
                score++;
            };
            nextQuestion(); 
            // console.log($(this).attr('data-answer'));
        });
    };

    function nextQuestion() {
        console.log('next question');
        console.log(`score: ${score}`);
    };

    

    function initGame() {
        // questionIndex++;
        questionNum.text(`${questionIndex + 1} / 6`);
        hideStartBtn();
        showQuestions();
        counter.text('Time Left: 00:59');


        // showQuestions();
        // for (var i = 0; i < questions.length; i++) {
        //     console.log(questions[i].text);
        // }
    }
    
    





    startBtn.on('click', function() {
        initGame();
    });














});