//get the values from the user//

function getValues(){
    let fizzValue = document.getElementById("fizzValue").value;
    let buzzValue = document.getElementById("buzzValue").value;
    let endValue = document.getElementById("endValue").value;

    //validate the input
    fizzValue = parseInt(fizzValue);
    buzzValue = parseInt(buzzValue);
    endValue = parseInt(endValue);


    if(Number.isInteger(fizzValue) && Number.isInteger(buzzValue) && Number.isInteger(endValue) ){
        //generate fizzbuzz
        let fbValues = generateFizzBuzzC(fizzValue, buzzValue, endValue);
        //display fizzbuzz
        displayValues(fbValues);
    }
}
//generate fb with a loop and if statement
function generateFizzBuzzA(fValue, bValue, eValue){
    let fbValues = [];

    for(let i = 1;  i<=eValue; i++){
        if (i % fValue == 0 && i % bValue == 0){
            fbValues.push("FizzBuzz");
        } else if (i % fValue == 0){
            fbValues.push("Fizz");
        } else if (i % bValue == 0){
            fbValues.push("Buzz");
        }else {
            fbValues.push(i);
        }
        }
          return fbValues;
    }


        //Option B!
        function generateFizzBuzzB(fValue, bValue, eValue){
            let fbValues= [];
            let Fizz = false;
            let Buzz = false;

            for(let i = 1; i <= eValue; i ++){
               Fizz = (i % fValue == 0);
               Buzz = (i % bValue == 0);
               switch(true) {
                case Fizz && Buzz: {
                    fbValues.push('FizzBuzz');
                    break;
                }
                case Fizz: {
                    fbValues.push('Fizz');
                    break;
                }
                case Buzz: {
                    fbValues.push('Buzz');
                    break;
                }
                default:{
                    fbValues.push(i);
                    break;
                }
             }
         }
                 return fbValues;
        }

 //Option C    
function generateFizzBuzzC(fValue, bValue, eValue){
    let fbValues = [];
    
    for( let i = 1; i<= eValue; i++){
        let value = (i % fValue == 0 ? "Fizz" : "") + (i % bValue == 0 ? "Buzz" : "") || i; 
        fbValues.push(value);
    }

    return fbValues; 
}



//display the values on the page
function displayValues(fbValues){
    let results = document.getElementById("resultsData");
    let content = "";

    //Loop over the fbValues array
    for(let i = 0; i< fbValues.length; i++){

        let dataValue = fbValues[i];
        let cssClass = "";

        if (Number.isInteger(dataValue)){
            cssClass="NoFB";
        }
        else{
            cssClass = dataValue;
        }

        let divElement = `<div class="col ${cssClass}">${dataValue}</div>`;
        content += divElement;
    }

    results.innerHTML = content;
}
