
console.log('bank');

let depositBtn = document.getElementById('btn-deposit');

// console.log(depositBtn);
depositBtn.addEventListener('click',function () {

     console.log(" Deposit Btn Click");
let depositfield = document.getElementById('deposit-field');
let depositfieldstring = depositfield.value;
console.log(depositfieldstring);

depositfield.value =""


let depositTotal = document.getElementById('deposit-total');
let previousDepositTotalstring = depositTotal.innerText;
console.log(previousDepositTotalstring);

let newDepositTotal = parseInt(previousDepositTotalstring) + parseInt
(depositfieldstring);
console.log(newDepositTotal);

depositTotal.innerText = newDepositTotal;



});

