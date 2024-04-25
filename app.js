//question no:1
var userInput = document.getElementById('userInput')
var result = document.getElementById('result')

function getting(){
    var final = Math.round(userInput.value)
    result.innerText = final

}

//Question no:2
var resultt = document.getElementById('resultTwo')

function valueTwo(){
    var final2 = Math.random()
    var randomTo1 = Math.ceil(final2 * 9)
    resultt.innerText = randomTo1

}

//Question no:3
var userInputThree = document.getElementById('userInputThree')
var resultThree = document.getElementById('resultThree')

function valueThree(){
    var inputValue = userInputThree.value
    var number = parseInt(inputValue) + parseFloat(inputValue)
    resultThree.innerText = number
}


//Question no:4
var userInputFour = document.getElementById('userInputFour') 
var resultFour = document.getElementById('resultFour')

function truncateDecimal() {
    var factor =  10  ** 10 ;
    var truncatedValue =  Math.trunc(userInputFour.value * factor) / factor;
    resultFour.innerText = truncatedValue

  }
  

  //Question no:5
  var userInputFive = document.getElementById('userInputFive')
  var resultFive = document.getElementById('resultFive')
  

function fixedto() {
    try {
        num = parseFloat(userInputFive.value);
        if (isNaN(num)) {
            resultFive.innerText = 'Invalid input';
        }
        resultFive.innerText= num.toFixed(userInputFive.value);
    } catch (error) {
        resultFive.innerText= 'Error: ' + error.message;
    }
}


 