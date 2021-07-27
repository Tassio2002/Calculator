function print (text){
    console.log(text);
}

function insert(num){
    let number = document.getElementById('result').innerHTML;
    document.getElementById('result').innerHTML = number + num;
}

function clean(){
    document.getElementById('result').innerHTML = "";
}

function back(){
    let result = document.getElementById('result').innerHTML;
    document.getElementById('result').innerHTML = result.substring(0, result.length -1);
}

function calc(number, operator){
    let result = document.getElementById('result').innerHTML;
    if(result)
    document.getElementById('result').innerHTML = eval(result);
}

