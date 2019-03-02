///////////////////////////////////////VARIABLES////////////////////////////////////
var timerlength=6;
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
            option: "Lyndon B. Johnson",
            type: true,
        },
        option2:{
            option: "Harry Potter",
            type: false,
        },
        option3:{
            option: "Some dictator",
            type: true,
        },
        option4:{
            option: "I dunno",
            type: false,
        }
    },
    {
        question:"Something something question 2",
        option1:{
            option: "We changing shit",
            type: false,
        },
        option2:{
            option: "Mike Shubert",
            type: true,
        },
        option3:{
            option: "Potterless",
            type: false,
        },
        option4:{
            option: "phsssss",
            type: false,
        }
    },
    {
        question:"We on question 3",
        option1:{
            option: "what's cooking good lookin'",
            type: false,
        },
        option2:{
            option: "hello sunshine",
            type: false,
        },
        option3:{
            option: "lemons and lillies and donuts and kittens",
            type: false,
        },
        option4:{
            option: ":P",
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
    console.log("Correct", correct);
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
        divOne.innerHTML="<h1><b>YOU GOT IT CORRECT</b></h1>";
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
         divOne.innerHTML="<h1><b>YOUR RESPONSE IS WRONG</b></h1>";
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
        divOne.innerHTML="<h1><b>YOU FINISHED THE TRIVIA GAME</b></h1>";
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