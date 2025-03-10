// let randomNum;
// let min = 50;
// let max= 100;
// randomNum = (Math.random()*(max-min))+ min;
// console.log(randomNum);


mybtn.onclick= function(){
    let randomNum;
    const mybtn = document.getElementById('mybtn');
    let max = document.getElementById(`max`).value;
    max = Number(max);
    let min = document.getElementById('min').value;
    min = Number(min);
    randomNum = Math.floor(Math.random()*(max-min))+min;
    result.textContent=`the random number is: ${randomNum}`;
}

