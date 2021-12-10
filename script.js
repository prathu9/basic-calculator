let txt=document.getElementById("display");
let num1;
let num2="";
let operator;
let count=0;
let dotCount=0;

//When number buttons are clicked numBtnClicked() function is called
//displayValue is the value of that button which are nothing but numbers 0-9
function numBtnClicked(displayValue){
    
    if((dotCount===0&&displayValue===".")||displayValue!="."){
        txt.value+=displayValue;//This adds value of button to the value of input type text
        if(count===1){
            num2+=displayValue;    
        }
        
    }
    if(displayValue==="."){
        dotCount++;
    }
      
       
}


//when operators(+, -, *, /) buttons are clicked optrBtnClicked() function is called
//displayValue is value of that button which are nothing but operators (+, -, *, /) 
function optrBtnClicked(displayValue){
    
    if(txt.value==="+"||txt.value==="-"||txt.value==="*"
        ||txt.value==="/"){
        txt.value="";
    }

    /*This if statement checks whether there is any input field has any value
    this is to make sure that operator is not added before you put a number*/
    /*Count which is used to make sure that operators are not added
    one after other like this 3++4 or 3-+5 etc.*/
    if(txt.value.length!=0 && count===0){
        num1=Number(txt.value);
        txt.value+=displayValue;
        operator=displayValue;
        dotCount=0;
        count++;
    }
}

function clearButton(){
    txt.value="";
    num1="";
    num2="";
    count=0;
    dotCount=0;
}

function execute(){
    if(operator!=""&&num2!=0){
        num2=Number(num2);
        switch(operator){
            case "+":
                txt.value=num1+num2;
                break;
            case "-":
                txt.value=num1-num2;
                break;
            case "*":
                txt.value=num1*num2;
                break;
            case "/":
                txt.value=num1/num2;
                break;
            default:
                console.log("error");
         }
         num2="";
        operator="";
        count=0;
        if(!(txt.value.includes("."))){
         dotCount=0;
        }
    }
}

function deleteButton(){    
    txt.value=txt.value.substring(0, txt.value.length-1);
    
    if(operator===""){
        num1=txt.value;
        if(!(num1.includes(".")))      {
            dotCount=0;
        }
    }

    if(txt.value.indexOf(operator)<=0 && operator!=""){
        operator="";
        count=0;
        dotCount=1;
    }

    if(count!=0){
        num2=num2.substring(0, num2.length-1);
        if(!(num2.includes("."))){
            dotCount=0;
        }
    }
}