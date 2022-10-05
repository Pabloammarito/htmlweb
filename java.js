console.log("hej");




const buttonAnswer2 = document.querySelector('#Answer2');
console.log(buttonAnswer2)
buttonAnswer2.addEventListener('click', function() {
    console.log('clicked button');

   //header.style.display = "none";

    //header.style.display = "block";
})






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
        answers:[
            {text: "Iniesta", correct: false},
            {text: "Messi", correct: true},
            {text: "Cristiano Ronaldo", correct: false},
            {text: "Ronaldo", correct: false},

        ]
    },

]




