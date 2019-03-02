///////////////////////////////////////VARIABLES////////////////////////////////////
var timerlength=30;
var counter=timerlength; 
var counter2;
var timerId;
var timerId2;
var questionArrayPointer=0;
var buttonId;
var lineId;
var correct=0;
var wrong=0;

///////////////////////////////////////ARRAYS///////////////////////////////////////
var triviaArray = [
    {
        question:"Which dictator worked once as an assistant librarian in a university library?",
        option1:{
            option: "Benito Mussolini",
            type: false,
        },
        option2:{
            option: "Kim Jong-Un",
            type: false,
        },
        option3:{
            option: "Mao Zedong",
            type: true,
        },
        option4:{
            option: "Nicolas Maduro",
            type: false,
        }
    },
    {
        question:"This librarian worked at the Library of Congress before becoming an influential people in the US in the 1950’s and 60’s.",
        option1:{
            option: "J. Edgar Hoover",
            type: true,
        },
        option2:{
            option: "Elvis Presley",
            type: false,
        },
        option3:{
            option: "Nelson Mandela",
            type: false,
        },
        option4:{
            option: "Martin Luther King Jr.",
            type: false,
        }
    },
    {
        question:"Which superhero works as a librarian during the day?",
        option1:{
            option: "Hit Girl",
            type: false,
        },
        option2:{
            option: "Vixen",
            type: false,
        },
        option3:{
            option: "Shuri",
            type: false,
        },
        option4:{
            option: "Batgirl",
            type: true,
        }
    },
    {
        question:"Who formed the first public lending library in America? ",
        option1:{
            option: "Thomas Jefferson",
            type: false,
        },
        option2:{
            option: "Benjamin Franklin",
            type: true,
        },
        option3:{
            option: "John Jay",
            type: false,
        },
        option4:{
            option: "James Madison",
            type: false,
        }
    },
    {
        question:"What is the world’s largest over due library book fine that got paid?",
        option1:{
            option: "$345.14",
            type: true,
        },
        option2:{
            option: "$153.45",
            type: false,
        },
        option3:{
            option: "$98.08",
            type: false,
        },
        option4:{
            option: "$100,000,000,000.10",
            type: false,
        }
    },
    {
        question:"Last checked in 2000, which has been the most stolen book from libraries? ",
        option1:{
            option: "The Bible",
            type: false,
        },
        option2:{
            option: "Guinness World Records",
            type: true,
        },
        option3:{
            option: "Webster Dictionary",
            type: false,
        },
        option4:{
            option: "Harry Potter and the Sorcerer's Stone",
            type: false,
        }
    },
    {
        question:"Where can you find a book bound in human skin?",
        option1:{
            option: "Florence National Central Library",
            type: false,
        },
        option2:{
            option: "Library of Congress",
            type: false,
        },
        option3:{
            option: "National Library of Russia",
            type: false,
        },
        option4:{
            option: "Harvard University Library",
            type: true,
        }
    }
]
///////////////////////////////////////FUNCTIONS////////////////////////////////////
//-----------------------------------------------------------------------------------  just some routine testings

//-----------------------------------------------------------------------------------  getting timer to work
function startTimer(){
    $("#questionSpace").empty();
    $("#questionSpace").append(triviaArray[questionArrayPointer].question);

    $("#opt1").empty();
    $("#opt1").append(triviaArray[questionArrayPointer].option1.option);

    $("#opt2").empty();
    $("#opt2").append(triviaArray[questionArrayPointer].option2.option);

    $("#opt3").empty();
    $("#opt3").append(triviaArray[questionArrayPointer].option3.option);

    $("#opt4").empty();
    $("#opt4").append(triviaArray[questionArrayPointer].option4.option);

    timerId = setInterval("recordTimer()", 1000);
}
//-----------------------------------------------------------------------------------  getting text to change w/ time
function recordTimer(){
    document.getElementById("timeSpace").innerHTML=counter;
    counter--;
    if (counter==0){
        questionArrayPointer++;
            if (questionArrayPointer==(triviaArray.length)){
                screeChangeEndGame();
            }
        $("#questionSpace").empty();
        $("#questionSpace").append(triviaArray[questionArrayPointer].question);

        $("#opt1").empty();
        $("#opt1").append(triviaArray[questionArrayPointer].option1.option);

        $("#opt2").empty();
        $("#opt2").append(triviaArray[questionArrayPointer].option2.option);

        $("#opt3").empty();
        $("#opt3").append(triviaArray[questionArrayPointer].option3.option);

        $("#opt4").empty();
        $("#opt4").append(triviaArray[questionArrayPointer].option4.option);
    
        counter=timerlength;
    };
    if(questionArrayPointer==(triviaArray.length)){
        screeChangeEndGame();
    };
}
//-----------------------------------------------------------------------------------  now working with clicking   
$("button").click(recordAnswer);
function recordAnswer(){
    lineId=$(this).attr("id");
    switch(lineId){
        case 'line1':
            if (triviaArray[questionArrayPointer].option1.type==true){
                correct++;
                screenChangeCorrect();
            }
            else {
                wrong++;
                screenChangeIncorrect();
            };
            break;
        case 'line2':
            if (triviaArray[questionArrayPointer].option2.type==true){
                correct++;
                screenChangeCorrect();
            }
            else {
                wrong++;
                screenChangeIncorrect();
            }
            break;
        case 'line3':
            if (triviaArray[questionArrayPointer].option3.type==true){
                correct++;
                screenChangeCorrect();
            }
            else {
                wrong++;
                screenChangeIncorrect();;
            }
            break;
        case 'line4':
            if (triviaArray[questionArrayPointer].option4.type==true){
                correct++;
                screenChangeCorrect();
            }
            else {
                wrong++;
                screenChangeIncorrect();
            }
            break;
    }
}
//-----------------------------------------------------------------------------------  dealing with changing screens 
function screenChangeCorrect(){
    //dealing with timer:
    clearInterval(timerId);
    counter2=3;
    timerId2 = setInterval(
        function(){
            counter2--;
            if (counter2==0){
                counter=timerlength;
                questionArrayPointer++;
                document.getElementById("timeSpace").innerHTML=counter;
                $("#options").show();
                $(".panel-heading").show();
                clearInterval(timerId2);
                $("#responsetoResponse").remove();
                if(questionArrayPointer==(triviaArray.length)){
                    screeChangeEndGame();
                }
                else{startTimer();}
            }
        },1000);
    //dealing with text:
    $("#options").hide();
    $(".panel-heading").hide();
    var divOne=document.createElement("div");
        divOne.id="responsetoResponse";
        divOne.innerHTML="<h1><b>You got it right! Look at you smarty-pants!</b></h1>";
    var questionDisplay=document.getElementById("questionDisplay");
        questionDisplay.appendChild(divOne);
}
function screenChangeIncorrect(){
     //dealing with timer:
     clearInterval(timerId);
     counter2=3;
     timerId2 = setInterval(
         function(){
             counter2--;
             if (counter2==0){
                 counter=timerlength;
                 questionArrayPointer++;
                 document.getElementById("timeSpace").innerHTML=counter;
                 $("#options").show();
                 $(".panel-heading").show();
                 clearInterval(timerId2);
                 $("#responsetoResponse").remove();
                 if(questionArrayPointer==(triviaArray.length)){
                    screeChangeEndGame();
                 }
                 else{startTimer();};
             }
         },1000);
     //dealing with text:
     $("#options").hide();
     $(".panel-heading").hide();
     var divOne=document.createElement("div");
         divOne.id="responsetoResponse";
         divOne.innerHTML="<h1><b>You got this question wrong, but no worries. Who would know this anyways?</b></h1>";
     var questionDisplay=document.getElementById("questionDisplay");
         questionDisplay.appendChild(divOne);
}
function screeChangeEndGame(){
    //dealing with timer:
    clearInterval(timerId);
    clearInterval(timerId2);
    //dealing with text:
    $("#options").hide();
    $(".panel-heading").hide();
    var divOne=document.createElement("div");
        divOne.id="responsetoResponse";
        divOne.innerHTML="<h1><b>YOU FINISHED THE TRIVIA GAME!!</b></h1>";
    var questionDisplay=document.getElementById("questionDisplay");
        questionDisplay.appendChild(divOne);

    var divTwo=document.createElement("div");
        divTwo.id="scorecard";
        divTwo.innerHTML='<b>Correct Responses: <span id=CorrectScoreHere></span></b>';
    var questionDisplay=document.getElementById("questionDisplay");
        questionDisplay.appendChild(divTwo);
    document.getElementById("CorrectScoreHere").innerHTML=correct;

    var divThree=document.createElement("div");
        divThree.id="scorecard";
        divThree.innerHTML='<b>Incorrect Responses: <span id=IncorrectScoreHere></span></b>';
    var questionDisplay=document.getElementById("questionDisplay");
        questionDisplay.appendChild(divThree);
    document.getElementById("IncorrectScoreHere").innerHTML=wrong;    
}