//this code gets my page jQuery ready
$(document).ready(function () {
    var numCorrect = 0;
    var numIncorrect = 0;
    var numUnchecked = 0
    var numChecked = 0
    var clockRunning = false;

    window.onload = function () {
        $("#lap").on("click", stopwatch.recordLap);
        $("#stop").on("click", stopwatch.stop);
        $("#reset").on("click", stopwatch.reset);
        $("#start").on("click", stopwatch.start);
    };

    //question array with answer choices
    var questions = [
        {
            questionOne: "What was Elvis' home called?",//question1 text to display
            answersOne: ["Graceland", "Iceland", "Poland", "Promised Land"],//answer array within question array//A
        },

        {
            questionTwo: "What year was NSYNC's song 'bye bye bye' released?",
            answersTwo: ["1999", "2000", "2001", "2004"],//B
        },

        {
            questionThree: "What is the state bird of Illinois?",
            answersThree: ["Finch", "Sparrow", "Cardinal", "Bald Eagle"],//C
        },

        {
            questionFour: "What was the 1992 men's olympic basketball team nicknamed?",
            answersFour: ["The Incredibles", "The Great Ones", "The Supreme Team", "The Dream Team"]//D
        },

        {
            questionFive: "What year was The Beach Boys' first album released?",
            answersFive: ["1942", "1952", "1962", "1972"]//C
        }

    ]


    array.forEach(questionOne => {
        [0] === true, [1] === false, [2] === false, [3] === false

    });

    array.forEach(questionTwo => {
        [0] === false, [1] === true, [2] === false, [3] === false

    });
    array.forEach(questionThree => {
        [0] === false, [1] === false, [2] === true, [3] === false

    });
    array.forEach(questionFour => {
        [0] === false, [1] === false, [2] === false, [3] === true

    });
    array.forEach(questionFive => {
        [0] === false, [1] === false, [2] === true, [3] === false

    });

    //I chose to set up my questions differently and kept this code in case I wanted to revert to this method
    //$('#buttonID').text(answerText);
    // correct = 0;//to log & display correct answers, starting at zero
    //incorrect = 0; //to log & display incorrect answers, starting at zero
    // if questionOne ===


    //var qOne = [
    //    "Who sings.................",
    //    "What year was NSYNC's song 'bye bye bye' released",
    //    "What year was 'The Slim Shady LP' released?",
    //    "q5",
    //    "q"
    //  ]

    //var answers = [
    //    "graceland",
    //    "a2",
    //    "2000",
    //    "1999",
    //    "a5",
    //        "a"
    //    ]

    //answer arrays for each question
    //  var qOneAns = ["a1", "a2", "a3", "a4"]

    //   var qTwoAns = ["a5", "a6", "a7", "a8"]

    //    var qThreeAns = ["a9", "a10", "a11", "a12"]

    //   var qFourAns = ["a13", "a14", "a15", "a16"]

    //   var qFiveAns = ["a17", "a18", "a19", "a20"]




    //function for time remaining, 60000 milliseconds=1 min




    setInterval(function () { alert("Time Expired!!!"); }, 30000);





    // start  countdown until alert is displayed in 30 sec
    countdown(onclick);


    i = 60;

    function startTimer() {
        document.getElementById('timer').innerHTML = i;
        i--;
        if (i < 0) {
            alert('Time Expired!!');
        }
    }





})




