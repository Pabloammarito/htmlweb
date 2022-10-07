console.log("hej");
function submit() {


}

//credit Arne prøvet at hjælpe mig lidt og give mig råd ihvertfald
const wrongAnswer = document.querySelector(".wrong")
const correctAnswer = document.querySelector(".correct")
//--

let userscore = 0;
const buttonsubmit = document.querySelector('#submit');
console.log(buttonsubmit)
buttonsubmit.addEventListener('click', function() {
    console.log("buttonclick")
    console.log(document.querySelector("#correct"))
    if (correctAnswer.checked) {
        userscore+=1;

        console.log("correct")
    } else {
        console.log(userscore)
        console.log("Wrong")
    }

    if (document.querySelector("#correct2").checked) {
        userscore++;

        console.log("correct")
    } else {
        console.log("Wrong")
    }

    if (document.querySelector("#correct3").checked) {
        userscore++;

        console.log("correct")
    } else {
        console.log("Wrong")
    }

    if (document.querySelector("#correct4").checked) {
        userscore++;

        console.log("correct")
    } else {
        console.log("Wrong")
    }

    if (document.querySelector("#correct5").checked) {
        userscore++;

        console.log("correct")
    } else {
        console.log("Wrong")
    }
    alert(userscore)




function clickedAnswer(correct){
    let whenClickedAnswer = Answer.textContent;
}

    let  scoreTag = ("Du har fået alle rigtig “+ userScore +” ud af 5 rigtig")
    result.innerHTML = scoreTag

function result() {
    var score = 0;

    if (document.getElementById("correct1").checked) {
        score++;
    }
    if (document.getElementById("correct2").checked) {
        score++;
    }
    if (document.getElementById("correct3").checked) {
        score++;
    }
    if (document.getElementById("correct4").checked) {
        score++;
    }
    if (document.getElementById("correct5").checked) {
        score++;
    }
        alert("You final result is:"+ score)
    document.write("Well Done" + score+"/5")
}



// credit Deniz

const questions = [
    {
      question: "1. Hvem har flest Champions league trofæer?",
      answers:[
          {text: "AC Milan", correct: false},
          {text: "Barcelona", correct: false},
       {text: "Real Madrid", correct: true},
         {text: "PSG", correct: false},

      ]
    },

]


const questions2 = [
    {
        question2: "2 Hvem har vundet flest ballon d'or?",
        answers2:[
            {text: "Iniesta", correct: false},
            {text: "Messi", correct: true},
            {text: "Cristiano Ronaldo", correct: false},
            {text: "Ronaldo", correct: false},

        ]
    },

]


const questions3 = [
    {
        question3: "3 Hvem har scoret flest Internationale mål?",
        answers3:[
            {text: "Xavi", correct3: false},
            {text: "Lionel Messi", correct3: false},
            {text: "Cristiano Ronaldo", correct3: true},
            {text: "Pele", correct3: false},

        ]
    },

]


const questions4 = [
    {
        question4: "4.Hvem vandt EM 1992?",
        answers4:[
            {text: "Portugal", correct4: false},
            {text: "Argentina", correct4: false},
            {text: "Tyskland", correct4: false},
            {text: "Danmark", correct4: true},

        ]
    },

]


const questions5 = [
    {
        question4: "5. Luis figo har spillet for både Barcelona og Real Madrid?",
        answers4:[
            {text: "Nej", correct4: false},
            {text: "Ja", correct4: true},

        ]
    },

]})
