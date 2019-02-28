///////////////////////////////////////VARIABLES////////////////////////////////////
var timerlength=8;
var counter=timerlength; 
var timerId;
var questionArrayPointer=0;
var buttonId;
var lineId;
var correct=0;
var wrong=0;

///////////////////////////////////////ARRAYS///////////////////////////////////////
var question = [
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
//----------------------------------------------------------------------------------  just some routine testings

//-----------------------------------------------------------------------------------  getting timer to work
function startTimer(){
    $("#questionSpace").empty();
    $("#questionSpace").append(question[questionArrayPointer].question);

    $("#opt1").empty();
    $("#opt1").append(question[questionArrayPointer].option1.option);

    $("#opt2").empty();
    $("#opt2").append(question[questionArrayPointer].option2.option);

    $("#opt3").empty();
    $("#opt3").append(question[questionArrayPointer].option3.option);

    $("#opt4").empty();
    $("#opt4").append(question[questionArrayPointer].option4.option);

    timerId = setInterval("recordTimer()", 1000);
}
//-----------------------------------------------------------------------------------  getting text to change w/ time
function recordTimer(){
    console.log("questionArrayPointer in recordTimer", questionArrayPointer);
    document.getElementById("timeSpace").innerHTML=counter;
    counter--;
    if (counter==0){
        questionArrayPointer++;

        $("#questionSpace").empty();
        $("#questionSpace").append(question[questionArrayPointer].question);

        $("#opt1").empty();
        $("#opt1").append(question[questionArrayPointer].option1.option);

        $("#opt2").empty();
        $("#opt2").append(question[questionArrayPointer].option2.option);

        $("#opt3").empty();
        $("#opt3").append(question[questionArrayPointer].option3.option);

        $("#opt4").empty();
        $("#opt4").append(question[questionArrayPointer].option4.option);

        counter=timerlength;
    }
    if (questionArrayPointer==(question.length)){
        questionArrayPointer=0;
    } 
}
//-----------------------------------------------------------------------------------  now working with clicking   
$("button").click(recordAnswer);
function recordAnswer(){
    lineId=$(this).attr("id");
    console.log("questionArrayPointer", questionArrayPointer);
    switch(lineId){
        case 'line1':
            if (question[questionArrayPointer].option1.type==true){
                console.log("CORRECT", question[questionArrayPointer].option1.type);
            }
            else {
                console.log("INCORRECT");
            };
            break;
        case 'line2':
            if (question[questionArrayPointer].option2.type==true){
                console.log("CORRECT", question[questionArrayPointer].option2.type);
            }
            else {
                console.log("INCORRECT");
            }
            break;
        case 'line3':
            if (question[questionArrayPointer].option3.type==true){
                console.log("CORRECT", question[questionArrayPointer].option3.type);
            }
            else {
                console.log("INCORRECT");
            }
            break;
        case 'line4':
            if (question[questionArrayPointer].option4.type==true){
                console.log("CORRECT", question[questionArrayPointer].option4.type);
            }
            else {
                console.log("INCORRECT");
            }
            break;
    }
}
    
   

