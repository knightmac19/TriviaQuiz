# TriviaQuiz
Vanilla JavaScript & jQuery trivia quiz with countdown timer.

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

[TriviaQuiz](https://knightmac19.github.io/TriviaQuiz/)

## <a name="contents"></a>  Contents
- [Description](#description)
- [Usage](#usage)
- [Screenshots](#screenshots)
- [License](#license)
- [Contributors](#contributors)

## <a name="description"></a> Description 
[Contents](#contents)  
Trivia quiz comprised of six questions, decrementing timer, correct / incorrect feedback, & leaderboard tracking. If a user answers a question incorrectly, 10 seconds will be decremented from the remaining time. Scores are calculated first by the number of correct answers, then by the amount of time remaining at end of game.  

The game is powered by an array of objects found in [questions.js](https://github.com/knightmac19/TriviaQuiz/blob/main/assets/js/questions.js). Each index is an object containing question text, button text, and a key tracking the correct option. The [empowerBtns()](https://github.com/knightmac19/TriviaQuiz/blob/main/assets/js/script.js) function passes the necessary values to the four statically-coded buttons each time the application loops to the next question.

![empowerBtns() function](https://github.com/knightmac19/TriviaQuiz/blob/main/assets/img/empowerBtns_function.png)

## <a name="usage"></a> Usage
[Contents](#contents)  
Upon page load, the app displays a header, link to Highscores page, and 'Start Quiz' button. After starting the quiz a timer with a preset of 60 seconds begins decrementing one second on the second.  
Users are displayed a series of questions, each with four options. Depending on the user's choice a 1-second animation will run giving in-game feedback.  

The game ends when the timer reaches 0 or when the user answers the final question, whichever happens first.  
The content box hosting the questions will display an input box for user initials / name. On submit, the window will reload with the Highscores page. User initials, score, and remaining time are retrieved from local storage, sorted by score and time, and rendered as a leaderboard table. 

## <a name="screenshots"></a> Screenshots
[Contents](#contents)  

![trivia_1](https://github.com/knightmac19/TriviaQuiz/blob/main/assets/img/trivia_1.png)  

![trivia_2](https://github.com/knightmac19/TriviaQuiz/blob/main/assets/img/trivia_2.png)  

![trivia_3](https://github.com/knightmac19/TriviaQuiz/blob/main/assets/img/trivia_3.png)  

![trivia_4](https://github.com/knightmac19/TriviaQuiz/blob/main/assets/img/trivia_4.png)  

![trivia_5](https://github.com/knightmac19/TriviaQuiz/blob/main/assets/img/trivia_5.png)  

![trivia_6](https://github.com/knightmac19/TriviaQuiz/blob/main/assets/img/trivia_6.png)

## <a name="license"></a> License
[Contents](#contents)  

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

## <a name="contributors"></a> Contributors
[Contents](#contents)  

Patrick Dunn // [knightmac19](https://github.com/knightmac19)

Email me with questions &/or suggestions at [pmdunn78@gmail.com](mailto:pmdunn78@gmail.com)




