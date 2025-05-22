//your JS code here. If required.
document.getElementById('btn').addEventListener('click',function(){
    const inputValue=document.getElementById('ip').value.trim();
    const outputDiv = document.getElementById('output');

    outputDiv.textContent = "";

    const number = parseFloat(inputValue);
    if (isNaN(number)) {
        outputDiv.textContent = "Please enter a valid number.";
        return;
}


function initialPromise(number){
    return new Promise((resolve)=>{
        setTimeout(()=>{
            document.getElementById('output').textContent=`Result: ${number}`
            resolve(number)
        },2000)
    })
}

function secondPromise(result1){
    return new Promise((resolve)=>{
        const result2=result1*2
        setTimeout(() => {
            document.getElementById('output').textContent=`Result: ${result2}`
            resolve(result2)
        }, 2000);
    })
}

function thirdPromise(result2){
    return new Promise((resolve)=>{
        const result3=result2-3;
        setTimeout(() => {
             document.getElementById('output').textContent=`Result: ${result3}`
            resolve(result3)
        }, 1000);
    })
}

function fourthPromise(result3){
    return new Promise((resolve)=>{
        const result4=result3/2;
        setTimeout(() => {
             document.getElementById('output').textContent=`Result: ${result4}`
            resolve(result4)
        }, 1000);
    })
}

function fifthPromise(result4){
    return new Promise((resolve)=>{
        const result5=result4+10;
        setTimeout(() => {
             document.getElementById('output').textContent=`Result: ${result5}`
            resolve(result5)
        }, 1000);
    })
}

initialPromise(number)
       .then(result1 => secondPromise(result1))
       .then(result2 => thirdPromise(result2))
       .then(result3 => fourthPromise(result3))
       .then(result4 => fifthPromise(result4))

});